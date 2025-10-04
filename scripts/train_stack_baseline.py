# scripts/train_stack_baseline.py
import os, re
import numpy as np
import pandas as pd
from sklearn.model_selection import GroupShuffleSplit, train_test_split
from sklearn.metrics import classification_report, roc_auc_score, confusion_matrix
from sklearn.ensemble import GradientBoostingClassifier
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
    """Extrai domínio de URL, caminho ou NOME DO ARQUIVO (stem)."""
    if pd.isna(s):
        return "unknown"
    s = str(s)

    # a) URL direto
    m = re.search(r"https?://([^/]+)", s, flags=re.I)
    if m:
        return m.group(1).lower()

    # b) qualquer domínio “visível” na string inteira
    m = _dom_pat.search(s)
    if m:
        return m.group("dom").lower()

    # c) olhar somente o nome do arquivo (sem extensão)
    fname = os.path.basename(s)
    stem = os.path.splitext(fname)[0]  # remove 1 extensão
    # se for .png.png etc., tira todas
    while True:
        new = os.path.splitext(stem)[0]
        if new == stem:
            break
        stem = new
    m = _dom_pat.search(stem)
    if m:
        return m.group("dom").lower()

    # d) tentar um token de pasta com ponto
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
y_all = data["label"].astype(int)
groups = data["domain"].astype(str)

print("Distribuição de classes:", y_all.value_counts().to_dict())
print("Domínios únicos:", groups.nunique())

# ======= split =======
use_group_split = groups.nunique() >= 2
if use_group_split:
    gss = GroupShuffleSplit(n_splits=1, test_size=0.30, random_state=42)
    tr_idx, te_idx = next(gss.split(X_all, y_all, groups=groups))
    Xtr, Xte = X_all.iloc[tr_idx], X_all.iloc[te_idx]
    ytr, yte = y_all.iloc[tr_idx], y_all.iloc[te_idx]
    gtr, gte = groups.iloc[tr_idx], groups.iloc[te_idx]
    print(f"Tamanho treino: {len(Xtr)} ({gtr.nunique()} domínios) | teste: {len(Xte)} ({gte.nunique()} domínios)")
else:
    print("Aviso: só 1 domínio detectado — usando split estratificado tradicional (sem grupos).")
    Xtr, Xte, ytr, yte = train_test_split(
        X_all, y_all, test_size=0.30, random_state=42, stratify=y_all
    )

# ======= Classificador (baseline tipo 'Stack') =======
clf = GradientBoostingClassifier(
    n_estimators=300, learning_rate=0.05, max_depth=3,
    subsample=0.9, random_state=42
)
clf.fit(Xtr, ytr)

pred = clf.predict(Xte)
proba = clf.predict_proba(Xte)[:, 1]

print("\n=== Relatório de classificação ===")
print(classification_report(yte, pred, digits=3))
print("AUC:", roc_auc_score(yte, proba))
print("Matriz de confusão:\n", confusion_matrix(yte, pred))

# ======= Top importâncias =======
imp = getattr(clf, "feature_importances_", None)
if imp is not None:
    order = np.argsort(imp)[::-1][:15]
    print("\nTop 15 features por importância:")
    for i in order:
        print(f"{Xtr.columns[i]:40s} {imp[i]:.3f}")

# ======= Salvar modelo =======
models_dir = os.path.join(os.path.dirname(__file__), "..", "models")
os.makedirs(models_dir, exist_ok=True)
model_path = os.path.join(models_dir, "stack_baseline.joblib")
joblib.dump({"model": clf, "features": Xtr.columns.tolist()}, model_path)
print(f"\nModelo salvo em: {os.path.abspath(model_path)}")
