import os, re
import numpy as np
import pandas as pd
from sklearn.model_selection import GroupShuffleSplit, train_test_split
from sklearn.metrics import classification_report, roc_auc_score, confusion_matrix, RocCurveDisplay
from sklearn.ensemble import GradientBoostingClassifier
import matplotlib.pyplot as plt
import joblib

BASE = os.path.join(os.path.dirname(__file__), "..", "datasets", "evasion1")
BASE = os.path.abspath(BASE)

def read_csv(name: str) -> pd.DataFrame:
    p = os.path.join(BASE, name)
    if not os.path.exists(p):
        raise FileNotFoundError(f"Arquivo não encontrado: {p}")
    return pd.read_csv(p)

def choose_key(a: pd.DataFrame, b: pd.DataFrame) -> str:
    for k in ["filepath", "path", "file", "url", "page", "key"]:
        if k in a.columns and k in b.columns:
            return k
    raise RuntimeError("Não achei coluna-chave comum (ex.: filepath/path/url).")

def merge_pair(visual_csv: str, content_csv: str):
    v = read_csv(visual_csv)
    c = read_csv(content_csv)
    key = choose_key(v, c)
    df = pd.merge(v, c, on=key, suffixes=("_v", "_c"))
    return df, key

_dom_pat = re.compile(r"(?:(?:https?://)?)(?P<dom>(?:[a-z0-9-]+\.)+[a-z]{2,6})", re.I)

def infer_domain(s: str) -> str:
    """Extrai domínio de URL, caminho ou nome do arquivo (stem)."""
    if pd.isna(s):
        return "unknown"
    s = str(s)

    # a) URL direto
    m = re.search(r"https?://([^/]+)", s, flags=re.I)
    if m:
        return m.group(1).lower()

    # b) domínio visível na string
    m = _dom_pat.search(s)
    if m:
        return m.group("dom").lower()

    # c) olhar o nome do arquivo sem extensões empilhadas
    fname = os.path.basename(s)
    stem = os.path.splitext(fname)[0]
    while True:
        new = os.path.splitext(stem)[0]
        if new == stem:
            break
        stem = new
    m = _dom_pat.search(stem)
    if m:
        return m.group("dom").lower()

    # d) token de pasta que pareça domínio
    parts = re.split(r"[\\/]", s)
    for tok in reversed(parts):
        low = tok.lower()
        if "." in low and not re.search(r"\.(html?|png|jpe?g|svg|css|js|json|ico|gif|webp|csv|txt)$", low):
            return low
    return "unknown"

# ================== Carrega & rotula ==================
clean_df, key = merge_pair("clean_visual.csv", "clean_content.csv")
evasion_df, _  = merge_pair("evasion_visual.csv", "evasion_content.csv")

clean_df["label"] = 0
evasion_df["label"] = 1
data = pd.concat([clean_df, evasion_df], ignore_index=True)

# grupo por domínio para evitar vazamento por marca
data["domain"] = data[key].apply(infer_domain)

# só colunas numéricas
num_cols = data.select_dtypes(include=[np.number]).columns.tolist()
X_all = data[num_cols].copy().drop(columns=["label"], errors="ignore").fillna(0)
y_all = data["label"].astype(int).values
groups = data["domain"].astype(str).values

print("Distribuição de classes:", dict(pd.Series(y_all).value_counts()))
print("Domínios únicos:", len(np.unique(groups)))

# ======= split =======
use_group_split = len(np.unique(groups)) >= 2
if use_group_split:
    gss = GroupShuffleSplit(n_splits=1, test_size=0.30, random_state=42)
    tr_idx, te_idx = next(gss.split(X_all, y_all, groups=groups))
    Xtr, Xte = X_all.iloc[tr_idx], X_all.iloc[te_idx]
    ytr, yte = y_all[tr_idx],     y_all[te_idx]
    gtr, gte = groups[tr_idx],    groups[te_idx]
    print(f"Tamanho treino: {len(Xtr)} ({len(np.unique(gtr))} domínios) | "
          f"teste: {len(Xte)} ({len(np.unique(gte))} domínios)")
else:
    print("Aviso: só 1 domínio — usando split estratificado sem grupos.")
    Xtr, Xte, ytr, yte = train_test_split(
        X_all, y_all, test_size=0.30, random_state=42, stratify=y_all
    )
    gte = np.array(["unknown"] * len(yte))

# ======= Classificador (baseline tipo 'Stack') =======
clf = GradientBoostingClassifier(
    n_estimators=300, learning_rate=0.05, max_depth=3,
    subsample=0.9, random_state=42
)
clf.fit(Xtr, ytr)

pred  = clf.predict(Xte)
proba = clf.predict_proba(Xte)[:, 1]

print("\n=== Relatório de classificação (GERAL - teste) ===")
print(classification_report(yte, pred, digits=3))
print("AUC:", roc_auc_score(yte, proba))
print("Matriz de confusão:\n", confusion_matrix(yte, pred))

# ======= Importâncias =======
imp = getattr(clf, "feature_importances_", None)
if imp is not None:
    order = np.argsort(imp)[::-1][:15]
    print("\nTop 15 features por importância:")
    for i in order:
        print(f"{Xtr.columns[i]:40s} {imp[i]:.3f}")

# ======= Relatórios por fatia (CLEAN vs EVASION no TESTE) =======
mask_clean_te   = (yte == 0)
mask_evasion_te = (yte == 1)

def report_slice(mask, name):
    if mask.sum() == 0:
        print(f"\n=== Slice TESTE: {name} (vazio) ===")
        return
    print(f"\n=== Slice TESTE: {name} (n={mask.sum()}) ===")
    print(classification_report(yte[mask], pred[mask], digits=3))
    try:
        print("AUC:", roc_auc_score(yte[mask], proba[mask]))
    except Exception:
        pass

report_slice(mask_clean_te,   "CLEAN")
report_slice(mask_evasion_te, "EVASION")

# ======= Salvar modelo e relatórios =======
root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
models_dir  = os.path.join(root, "models")
reports_dir = os.path.join(root, "reports")
os.makedirs(models_dir,  exist_ok=True)
os.makedirs(reports_dir, exist_ok=True)

# modelo
model_path = os.path.join(models_dir, "stack_baseline.joblib")
joblib.dump({"model": clf, "features": Xtr.columns.tolist()}, model_path)
print(f"\nModelo salvo em: {os.path.abspath(model_path)}")

# CSV de predições (teste)
pred_df = pd.DataFrame({
    "domain": gte,
    "y_true": yte,
    "y_pred": pred,
    "proba": proba,
    "is_evasion": yte  # 0=clean, 1=evasion
})
pred_csv = os.path.join(reports_dir, "predictions_evasion1_test.csv")
pred_df.to_csv(pred_csv, index=False, encoding="utf-8")
print(f"Predições salvas em: {pred_csv}")

# ROC do teste
fig, ax = plt.subplots()
RocCurveDisplay.from_predictions(yte, proba, ax=ax)
ax.set_title("ROC - Evasion1 (teste)")
fig.tight_layout()
roc_path = os.path.join(reports_dir, "roc_evasion1_test.png")
fig.savefig(roc_path, dpi=150)
plt.close(fig)
print(f"ROC salva em: {roc_path}")
