# scripts/make_evasion1_features.py
import os, pathlib, pandas as pd
from bs4 import BeautifulSoup

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DATASETS = os.path.join(REPO, "datasets")
EV1 = os.path.join(DATASETS, "evasion1")
DIR_CLEAN = os.path.join(EV1, "CleanSet1")
DIR_EVAS  = os.path.join(EV1, "EvasionSet1")
CSV_CLEAN_LIST = os.path.join(DATASETS, "CleanSet1.csv")
CSV_EVAS_LIST  = os.path.join(DATASETS, "EvasionSet1.csv")

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
    # tenta coluna com nome “filepath/path/file/html/page”; senão usa a primeira
    cols = [c for c in df.columns if str(c).lower() in ("filepath","path","file","html","page")]
    s = df[cols[0]] if cols else df.iloc[:,0]
    out = []
    for raw in s.astype(str):
        x = raw.strip().strip('"').strip("'")
        if not x: continue
        if os.path.isabs(x) and os.path.isfile(x):
            out.append(x); continue
        p1 = os.path.join(REPO, x)
        if os.path.isfile(p1):
            out.append(p1); continue
        # domínio -> downloaded_webpages_simple/<dom>/phishing_webpage.html
        if "/" not in x and "\\" not in x and "." in x:
            p2 = os.path.join(REPO, "downloaded_webpages_simple", x, "phishing_webpage.html")
            if os.path.isfile(p2): out.append(p2); continue
        # busca por nome
        dws = os.path.join(REPO, "downloaded_webpages_simple")
        matches = list(pathlib.Path(dws).rglob(x))
        out += [str(m) for m in matches if m.suffix.lower() in (".html",".htm")]
    # dedup
    seen, dedup = set(), []
    for p in out:
        if p not in seen:
            dedup.append(p); seen.add(p)
    return dedup

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
    missing = 0
    for p in tqdm(paths, desc=f"Extraindo ({tag})"):
        if not os.path.isfile(p):
            missing += 1; continue
        try:
            c, v = extract_features(p)
            cont.append(c); vis.append(v)
        except Exception as e:
            print(f"[{tag}] erro em {p}: {e}")
    if missing:
        print(f"[{tag}] {missing} entradas não eram arquivos HTML válidos.")
    return pd.DataFrame(cont), pd.DataFrame(vis)

def main():
    os.makedirs(EV1, exist_ok=True)

    # 1) tenta pelas PASTAS esperadas
    clean = find_htmls_from_dir(DIR_CLEAN)
    evasi = find_htmls_from_dir(DIR_EVAS)

    # 2) se não existir, cai para as LISTAS CSV
    if not clean or not evasi:
        if not (os.path.isfile(CSV_CLEAN_LIST) and os.path.isfile(CSV_EVAS_LIST)):
            print("Pastas e listas não encontradas. Verifique.")
            print(f"Pastas: {DIR_CLEAN} | {DIR_EVAS}")
            print(f"Listas: {CSV_CLEAN_LIST} | {CSV_EVAS_LIST}")
            return
        clean = read_csv_paths(CSV_CLEAN_LIST)
        evasi = read_csv_paths(CSV_EVAS_LIST)
        print(f"Usando LISTAS: Clean={len(clean)} | Evasion={len(evasi)}")
    else:
        print(f"Usando PASTAS: Clean={len(clean)} | Evasion={len(evasi)}")

    # 3) extrai e salva
    clean_c, clean_v = run_set(clean, "CLEAN")
    ev_c, ev_v       = run_set(evasi, "EVASION")

    for df in (clean_c, clean_v, ev_c, ev_v):
        df.fillna(0, inplace=True)

    clean_c.to_csv(os.path.join(EV1,"clean_content.csv"), index=False, encoding="utf-8")
    clean_v.to_csv(os.path.join(EV1,"clean_visual.csv"),  index=False, encoding="utf-8")
    ev_c.to_csv(os.path.join(EV1,"evasion_content.csv"), index=False, encoding="utf-8")
    ev_v.to_csv(os.path.join(EV1,"evasion_visual.csv"),  index=False, encoding="utf-8")

    print("\nArquivos gerados em datasets/evasion1:")
    for n in ["clean_content.csv","clean_visual.csv","evasion_content.csv","evasion_visual.csv"]:
        p = os.path.join(EV1, n)
        if os.path.isfile(p):
            print(" -", n)

if __name__ == "__main__":
    main()
