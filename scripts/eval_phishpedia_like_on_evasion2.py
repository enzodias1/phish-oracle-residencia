import os, re, json
from pathlib import Path
import pandas as pd
from PIL import Image, UnidentifiedImageError
import imagehash
from sklearn.metrics import classification_report, confusion_matrix

ROOT = Path(__file__).resolve().parents[1]
CSV_CLEAN2  = ROOT/"datasets/CleanSet2.csv"
CSV_EVAS2   = ROOT/"datasets/EvasionSet2.csv"
GALLERY_JSON = ROOT/"datasets/EvasionSet2/brand_gallery.json"

def domain_from_path(p: str) -> str:
    m = re.search(r"downloaded_webpages_simple[\\/](.*?)[\\/]", p, re.I)
    return m.group(1).lower() if m else "unknown"

def candidate_images(local_res_dir: Path):
    if not local_res_dir.exists(): return []
    exts = {".png",".jpg",".jpeg",".webp",".gif",".bmp"}
    imgs = []
    for f in local_res_dir.iterdir():
        if f.is_file() and f.suffix.lower() in exts:
            imgs.append(f)
    def score(fp: Path):
        s = fp.name.lower()
        sc = 0
        for kw in ("logo","icon","brand","favicon","sprite"):
            if kw in s: sc += 2
        return sc
    return sorted(imgs, key=score, reverse=True)

def phash_of(fp: Path):
    try:
        im = Image.open(fp).convert("RGB")
        return imagehash.phash(im)
    except UnidentifiedImageError:
        return None
    except Exception:
        return None

def hamming(a, b):
    return (a - b)

def load_gallery():
    with open(GALLERY_JSON,"r",encoding="utf-8") as f:
        g = json.load(f)
    out = []
    for row in g:
        out.append({
            "domain": row["domain"],
            "phash": imagehash.hex_to_hash(row["phash"])
        })
    return out

def predict_brand(html_path: Path, gallery):
    lr = html_path.parent/"local_resources"
    cands = candidate_images(lr)
    if not cands: return None, None
    best_brand, best_d = None, 999
    for c in cands[:5]:  # testa top-5
        h = phash_of(c)
        if h is None: continue
        for g in gallery:
            d = hamming(h, g["phash"])
            if d < best_d:
                best_d, best_brand = g["domain"], d
    return best_brand, best_d

def run():
    gallery = load_gallery()
    def prepare(csv, label):
        df = pd.read_csv(csv)
        key = [c for c in df.columns if "html" in c.lower() or "file" in c.lower() or "path" in c.lower()][0]
        X, y = [], []
        for _, r in df.iterrows():
            html = Path(r[key])
            dom  = domain_from_path(str(html))
            pred_brand, dist = predict_brand(html, gallery)
            if pred_brand is None:
                # Sem logo detectado → neutro: prediz "legítimo" no Clean e "legítimo" no Evasion (pior caso p/ phishing)
                X.append({"pred": "legit", "dom": dom, "brand": None})
                y.append(label)
                continue
            # Regra Phishpedia-like
            pred = "phish" if pred_brand and pred_brand != dom else "legit"
            X.append({"pred": pred, "dom": dom, "brand": pred_brand})
            y.append(label)
        return pd.DataFrame(X), y

    Xc, yc = prepare(CSV_CLEAN2, 0)   # 0=legítimo
    Xe, ye = prepare(CSV_EVAS2, 1)    # 1=phishing
    X = pd.concat([Xc, Xe], ignore_index=True)
    y = yc + ye

    yhat = [1 if p=="phish" else 0 for p in X["pred"]]
    print("\n=== Phishpedia-like • Clean2 + Evasion2 ===")
    print(classification_report(y, yhat, digits=3))
    print("Matriz de confusão:\n", confusion_matrix(y, yhat))

if __name__=="__main__":
    run()
