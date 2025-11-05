# scripts/make_evasion2_features.py
import os, pathlib, pandas as pd
from bs4 import BeautifulSoup

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DATASETS = os.path.join(REPO, "datasets")
EV2 = os.path.join(DATASETS, "evasion2")
DIR_CLEAN = os.path.join(REPO, "datasets", "CleanSet2", "html")
DIR_EVAS  = os.path.join(REPO, "datasets", "EvasionSet2", "html")
CSV_CLEAN_LIST = os.path.join(REPO, "datasets", "CleanSet2.csv")
CSV_EVAS_LIST  = os.path.join(REPO, "datasets", "EvasionSet2.csv")

KEYWORDS = [
    "login","log in","entrar","acessar","senha","password","pix","boleto","cpf","cartão",
    "atualizar","update","confirm","confirmar","verify","verificar","segurança","security",
    "urgente","urgency","click","clique","conta","account","bank","banco"
]

def find_htmls_from_dir(d):
    if not os.path.isdir(d): return []
    return [str(p) for p in pathlib.Path(d).rglob("*.htm*")]

def read_csv_paths(csv_path):
    if not os.path.isfile(csv_path): return []
    df = pd.read_csv(csv_path)
    if df.empty: return []
    # aceita 'filepath' / 'html_path' / 'path' / 'file' / 1a coluna
    for k in ["html_path","filepath","path","file","page"]:
        if k in df.columns:
            s = df[k].astype(str); break
    else:
        s = df.iloc[:,0].astype(str)
    out = []
    for raw in s:
        x = raw.strip().strip('"').strip("'")
        if not x: continue
        p = x if os.path.isabs(x) else os.path.join(REPO, x)
        if os.path.isfile(p): out.append(p)
    return out

def read_html(path):
    for enc in ("utf-8","latin-1","cp1252"):
        try:
            with open(path,"r",encoding=enc,errors="ignore") as f:
                return f.read()
        except: pass
    with open(path,"rb") as f:
        return f.read().decode("latin-1",errors="ignore")

def extract_features(html_path):
    raw = read_html(html_path)
    soup = BeautifulSoup(raw, "lxml")

    links = soup.find_all("a")
    inputs = soup.find_all("input")
    forms = soup.find_all("form")
    scripts = soup.find_all("script")
    iframes = soup.find_all("iframe")
    buttons = soup.find_all("button")

    types = [(i.get("type") or "").lower() for i in inputs]
    text = soup.get_text(separator=" ", strip=True).lower()
    kw_counts = {f"kw_{k.replace(' ','_')}": text.count(k) for k in KEYWORDS}

    content = {
        "filepath": os.path.relpath(html_path, REPO).replace("\\","/"),
        "n_forms": len(forms),
        "n_inputs": len(inputs),
        "n_buttons": len(buttons),
        "n_links": len(links),
        "n_http_links": sum((a.get("href") or "").lower().startswith(("http://","https://")) for a in links),
        "n_mailto_links": sum((a.get("href") or "").lower().startswith("mailto:") for a in links),
        "n_scripts": len(scripts),
        "n_iframes": len(iframes),
        "n_input_password": sum(t=="password" for t in types),
        "n_input_email": sum(t=="email" for t in types),
        "n_input_tel": sum(t in ("tel","telephone") for t in types),
        "text_len": len(text),
        "kw_total": sum(kw_counts.values()),
        **kw_counts
    }

    imgs = soup.find_all("img")
    svgs = soup.find_all("svg")
    video = soup.find_all("video")
    audio = soup.find_all("audio")
    canv  = soup.find_all("canvas")
    css_links = [l for l in soup.find_all("link") if "stylesheet" in "".join(l.get("rel") or []).lower()]
    icons     = [l for l in soup.find_all("link") if "icon" in "".join(l.get("rel") or []).lower()]
    styled    = [t for t in soup.find_all(True) if t.has_attr("style")]
    classes = []
    for t in soup.find_all(True):
        c = t.get("class")
        if c: classes += c

    visual = {
        "filepath": os.path.relpath(html_path, REPO).replace("\\","/"),
        "n_img": len(imgs),
        "n_svg": len(svgs),
        "n_video": len(video),
        "n_audio": len(audio),
        "n_canvas": len(canv),
        "n_css_links": len(css_links),
        "n_icon_links": len(icons),
        "n_inline_styles": len(styled),
        "unique_classes": len(set(classes)),
    }
    return content, visual

def run_set(paths, tag):
    from tqdm import tqdm
    cont, vis = [], []
    for p in tqdm(paths, desc=f"Extraindo ({tag})"):
        try:
            c, v = extract_features(p)
            cont.append(c); vis.append(v)
        except Exception as e:
            print(f"[{tag}] erro em {p}: {e}")
    import pandas as pd
    return pd.DataFrame(cont).fillna(0), pd.DataFrame(vis).fillna(0)

def main():
    os.makedirs(EV2, exist_ok=True)

    clean = find_htmls_from_dir(DIR_CLEAN) or read_csv_paths(CSV_CLEAN_LIST)
    evasi = find_htmls_from_dir(DIR_EVAS)  or read_csv_paths(CSV_EVAS_LIST)
    print(f"Usando Set2: Clean={len(clean)} | Evasion={len(evasi)}")

    clean_c, clean_v = run_set(clean, "CLEAN2")
    ev_c, ev_v       = run_set(evasi, "EVASION2")

    clean_c.to_csv(os.path.join(EV2,"clean2_content.csv"), index=False, encoding="utf-8")
    clean_v.to_csv(os.path.join(EV2,"clean2_visual.csv"),  index=False, encoding="utf-8")
    ev_c.to_csv(os.path.join(EV2,"evasion2_content.csv"), index=False, encoding="utf-8")
    ev_v.to_csv(os.path.join(EV2,"evasion2_visual.csv"),  index=False, encoding="utf-8")

    print("\nArquivos gerados em datasets/evasion2:")
    print(" - clean2_content.csv")
    print(" - clean2_visual.csv")
    print(" - evasion2_content.csv")
    print(" - evasion2_visual.csv")

if __name__ == "__main__":
    main()
