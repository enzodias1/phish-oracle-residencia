from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import requests, os, re, sys, hashlib, mimetypes

TIMEOUT = 15
OUTDIR = "downloaded_webpages_simple"
MAX_NAME = 120  # comprimento máximo para nome de arquivo

def safe_mkdir(p):
    os.makedirs(p, exist_ok=True)

def sanitize_filename(s: str) -> str:
    s = re.sub(r'[<>:"/\\|?*]', "_", s)
    s = re.sub(r"\s+", "_", s)
    return s.strip("_")

def short_name_from_url(u: str, fallback: str = "file") -> str:
    """
    Gera um nome curto e estável para recursos longos:
    basename + _hash + extensao (quando possível)
    """
    p = urlparse(u)
    # tenta pegar uma extensão do caminho
    base = os.path.basename(p.path) or fallback
    base = sanitize_filename(base)
    # extensão (se existir)
    _, ext = os.path.splitext(base)
    if not ext:
        # tenta inferir a partir do mimetype do caminho
        ext = mimetypes.guess_extension(mimetypes.guess_type(p.path)[0] or "") or ""
    # base "sem extensión" para truncar
    base_noext = base[:-len(ext)] if ext and base.endswith(ext) else base
    h = hashlib.md5(u.encode("utf-8")).hexdigest()[:16]
    candidate = f"{base_noext}_{h}{ext}" if base_noext else f"{h}{ext}"
    # limita tamanho final
    if len(candidate) > MAX_NAME:
        # corta ainda mais a parte textual
        keep = max(8, MAX_NAME - len(h) - len(ext) - 1)
        candidate = f"{base_noext[:keep]}_{h}{ext}"
    return candidate

def normalize_url(u: str) -> str:
    u = u.strip()
    if u.startswith(("https://https://", "http://https://")):
        u = u.replace("https://https://", "https://").replace("http://https://", "https://")
    if u.startswith(("https://http://", "http://http://")):
        u = u.replace("https://http://", "http://").replace("http://http://", "http://")
    if not u.lower().startswith(("http://","https://")):
        u = "https://" + u
    return u

def download_text(url):
    try:
        r = requests.get(url, timeout=TIMEOUT, headers={"User-Agent":"Mozilla/5.0"})
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"[WARN] falha ao baixar {url}: {e}")
        return None

def download_bin(url):
    try:
        r = requests.get(url, timeout=TIMEOUT, headers={"User-Agent":"Mozilla/5.0"}, stream=True)
        r.raise_for_status()
        return r.content
    except Exception as e:
        print(f"[WARN] falha bin {url}: {e}")
        return None

def process_one(raw_url):
    url = normalize_url(raw_url)
    print(f"[INFO] baixando {url}")
    html = download_text(url)
    if not html:
        return
    parsed = urlparse(url)
    domain = parsed.netloc or sanitize_filename(url)
    outdir = os.path.join(OUTDIR, domain)
    safe_mkdir(outdir)
    soup = BeautifulSoup(html, "lxml")

    assets_dir = os.path.join(outdir, "local_resources")
    safe_mkdir(assets_dir)

    resources = []
    for tag, attr in (("img","src"),("link","href"),("script","src")):
        for t in soup.find_all(tag):
            src = t.get(attr)
            if not src: 
                continue
            full = urljoin(url, src)
            resources.append((t, attr, full))

    for (t, attr, full) in resources:
        p = urlparse(full)
        if p.scheme not in ("http","https"):
            continue
        fname = short_name_from_url(full, fallback="res")
        dest = os.path.join(assets_dir, fname)
        if not os.path.exists(dest):
            b = download_bin(full)
            if b:
                try:
                    with open(dest, "wb") as f:
                        f.write(b)
                except OSError:
                    # último recurso: nome ainda problemático → só usa hash
                    alt = hashlib.md5(full.encode("utf-8")).hexdigest()
                    dest = os.path.join(assets_dir, f"{alt}")
                    with open(dest, "wb") as f:
                        f.write(b)
        t[attr] = os.path.join("local_resources", os.path.basename(dest))

    with open(os.path.join(outdir, "index.html"), "w", encoding="utf-8") as f:
        f.write(str(soup))
    with open(os.path.join(outdir, "source_url.txt"), "w", encoding="utf-8") as f:
        f.write(url + "\n")
    print(f"[OK] salvo em {outdir}")

def main():
    infile = "remaining_urls.txt"
    if not os.path.exists(infile):
        print("Coloque as URLs em remaining_urls.txt (uma por linha).")
        sys.exit(1)
    with open(infile, "r", encoding="utf-8") as f:
        urls = [l.strip() for l in f if l.strip()]
    safe_mkdir(OUTDIR)
    for u in urls:
        process_one(u)

if __name__ == "__main__":
    main()
