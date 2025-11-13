# scripts/eval_on_evasion2.py
import os, re
import numpy as np, pandas as pd
from sklearn.metrics import classification_report, confusion_matrix
import joblib

BASE = os.path.join(os.path.dirname(__file__), "..", "datasets", "evasion2")
BASE = os.path.abspath(BASE)

def read_csv(name):
    p = os.path.join(BASE, name)
    if not os.path.exists(p):
        raise FileNotFoundError(p)
    return pd.read_csv(p)

def pick_key(a,b):
    for k in ["filepath","path","file","url","page","key"]:
        if k in a.columns and k in b.columns:
            return k
    return a.columns[0]

def infer_domain(s):
    s = str(s)
    m = re.search(r"https?://([^/]+)", s, flags=re.I)
    if m: return m.group(1).lower()
    m = re.search(r"([a-z0-9-]+(?:\.[a-z0-9-]+)+)", s, flags=re.I)
    return m.group(1).lower() if m else "unknown"

def merge_pair(visual_csv, content_csv):
    v = read_csv(visual_csv); c = read_csv(content_csv)
    k = pick_key(v,c)
    return pd.merge(v,c,on=k,suffixes=("_v","_c")), k

def main():
    clean, key = merge_pair("clean2_visual.csv","clean2_content.csv")
    evas,  _   = merge_pair("evasion2_visual.csv","evasion2_content.csv")
    clean["label"] = 0; evas["label"]=1
    data = pd.concat([clean,evas], ignore_index=True)

    # somente numérico
    num = data.select_dtypes(include=[np.number]).columns.tolist()
    X   = data[num].copy().drop(columns=["label"], errors="ignore").fillna(0)
    y   = data["label"].astype(int)

    # carregar modelo treinado (o seu stack_baseline.joblib)
    model_path = os.path.join(os.path.dirname(__file__),"..","models","stack_baseline.joblib")
    pack = joblib.load(model_path)
    clf = pack["model"]
    feat_names = pack.get("features")

    # alinhar colunas
    if feat_names is not None:
        for f in feat_names:
            if f not in X.columns: X[f]=0.0
        X = X[feat_names]

    pred = clf.predict(X)

    # relatório geral
    print("=== GERAL (Clean2 + Evasion2) ===")
    print(classification_report(y, pred, digits=3))
    print("Matriz de confusão (geral):\n", confusion_matrix(y,pred))

    # “fooling rate” no Evasion2 (proporção de adversariais classificados como 0/legítimos)
    idx_ev = (y==1)
    ev_true = y[idx_ev]; ev_pred = pred[idx_ev]
    fn = np.sum(ev_pred==0)
    fr = fn / len(ev_true) if len(ev_true)>0 else float('nan')
    print(f"\nEvasion2: total={len(ev_true)}, classificados como LEGÍTIMO (FN)={fn} → fooling_rate={fr:.3f}")

    # também mostre a acurácia no Clean2 (deve ser alta)
    idx_cl = (y==0)
    cl_true = y[idx_cl]; cl_pred = pred[idx_cl]
    acc_clean2 = np.mean(cl_pred==cl_true) if len(cl_true)>0 else float('nan')
    print(f"Clean2: total={len(cl_true)}, acurácia={acc_clean2:.3f}")

if __name__ == "__main__":
    main()
