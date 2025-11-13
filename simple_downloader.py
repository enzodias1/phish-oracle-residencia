# simple_downloader.py (versão robusta p/ 403 e retomada)
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import requests
import os
import re
import sys
import hashlib
import mimetypes
import time

TIMEOUT = 15
OUTDIR = "downloaded_webpages_simple"
MAX_NAME = 120
MAX_RETRIES = 2  # por variante de URL (mantém leve)
TRY_VARIANTS = True

INFILE = "remaining_urls.txt"
DONELOG = "done_urls.txt"
FAILLOG = "failed_urls.txt"

HEADERS = {
    "User-Agent": ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                   "AppleWebKit/537.36 (KHTML, like Gecko) "
                   "Chrome/122.0.0.0 Safari/537.36"),
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cache-Control": "no-cache",
}


def safe_mkdir(p): os.makedirs(p, exist_ok=True)


def sanitize_filename(s: str) -> str:
    s = re.sub(r'[<>:"/\\|?*]', "_", s)
    s = re.sub(r"\s+", "_", s)
    return s.strip("_")

def try_get_html_with_variants(raw_url):
    # tenta https://dom, https://www.dom, http://dom, http://www.dom
    from urllib.parse import urlparse
    u = normalize_url(raw_url)
    host = urlparse(u).netloc
    roots = [f"https://{host}", f"https://www.{host}", f"http://{host}", f"http://www.{host}"]
    tried = []
    for root in roots:
        tried.append(root)
        html = download_text(root)
        if html:
            return root, html
    print(f"[WARN] falha ao baixar {raw_url}: Falha em todas as variações para " + ", ".join(tried))
    return None, None   

def short_name_from_url(u: str, fallback: str = "file") -> str:
    p = urlparse(u)
    base = os.path.basename(p.path) or fallback
    base = sanitize_filename(base)
    _, ext = os.path.splitext(base)
    if not ext:
        ext = mimetypes.guess_extension(
            mimetypes.guess_type(p.path)[0] or "") or ""
    base_noext = base[:-len(ext)] if ext and base.endswith(ext) else base
    h = hashlib.md5(u.encode("utf-8")).hexdigest()[:16]
    candidate = f"{base_noext}_{h}{ext}" if base_noext else f"{h}{ext}"
    if len(candidate) > MAX_NAME:
        keep = max(8, MAX_NAME - len(h) - len(ext) - 1)
        candidate = f"{base_noext[:keep]}_{h}{ext}"
    return candidate


def normalize_url(u: str) -> str:
    u = u.strip()
    u = u.replace("https://https://",
                  "https://").replace("http://https://", "https://")
    u = u.replace("https://http://",
                  "http://").replace("http://http://", "http://")
    if not u.lower().startswith(("http://", "https://")):
        u = "https://" + u
    return u


def url_candidates(url: str):
    """gera variações: com/sem www, troca http/https; remove duplicados preservando ordem"""
    u = normalize_url(url)
    p = urlparse(u)
    host = p.netloc.split(":")[0]
    base_https = f"https://{host}/"
    base_http = f"http://{host}/"
    variants = [u]
    # com/sem www
    if host.startswith("www."):
        variants.append(f"https://{host[4:]}/")
    else:
        variants.append(f"https://www.{host}/")
    # trocar scheme
    variants.append(base_http)
    if host.startswith("www."):
        variants.append(f"http://{host[4:]}/")
    else:
        variants.append(f"http://www.{host}/")
    # dedup
    seen, out = set(), []
    for v in variants:
        if v not in seen:
            seen.add(v)
            out.append(v)
    return out


def robust_get(url: str, stream=False):
    s = requests.Session()
    s.headers.update(HEADERS)
    last_err = None
    for cand in url_candidates(url):
        for _ in range(MAX_RETRIES):
            try:
                r = s.get(cand, timeout=TIMEOUT,
                          allow_redirects=True, stream=stream)
                if r.status_code == 200:
                    return r
                # tenta próxima variação se 403/404/etc.
            except Exception as e:
                last_err = e
            time.sleep(0.3)
    if last_err:
        raise last_err
    raise requests.HTTPError(f"Falha em todas as variações para {url}")


def download_text(url):
    try:
        r = robust_get(url, stream=False)
        return r.text
    except Exception as e:
        print(f"[WARN] falha ao baixar {url}: {e}")
        return None


def download_bin(url):
    try:
        r = robust_get(url, stream=True)
        return r.content
    except Exception as e:
        print(f"[WARN] falha bin {url}: {e}")
        return None


def process_one(raw_url):
    url = normalize_url(raw_url)
    print(f"[INFO] baixando {url}")
    html = download_text(url)
    if TRY_VARIANTS:
        chosen, html = try_get_html_with_variants(url)
        if not html: 
            return
        url = chosen
    else:
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
    for tag, attr in (("img", "src"), ("link", "href"), ("script", "src")):
        for t in soup.find_all(tag):
            src = t.get(attr)
            if not src:
                continue
            full = urljoin(url, src)
            resources.append((t, attr, full))

    for (t, attr, full) in resources:
        p = urlparse(full)
        if p.scheme not in ("http", "https"):
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
    return True


def load_list(path):
    if not os.path.exists(path):
        return set()
    with open(path, "r", encoding="utf-8") as f:
        return set(l.strip() for l in f if l.strip())


def main():
    if not os.path.exists(INFILE):
        print("Coloque as URLs em remaining_urls.txt (uma por linha).")
        sys.exit(1)

    urls = [l.strip()
            for l in open(INFILE, "r", encoding="utf-8") if l.strip()]
    done = load_list(DONELOG)
    fail = load_list(FAILLOG)


    safe_mkdir(OUTDIR)

    # pula as já feitas
    to_run = [u for u in urls if u not in done]

    for u in to_run:
        ok = process_one(u)
        if ok:
            with open(DONELOG, "a", encoding="utf-8") as f:
                f.write(u + "\n")
        else:
            with open(FAILLOG, "a", encoding="utf-8") as f:
                f.write(u + "\n")
        time.sleep(0.2)  # civilidade com os servidores


if __name__ == "__main__":
    main()
