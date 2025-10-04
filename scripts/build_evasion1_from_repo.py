import csv, random, shutil, re
from pathlib import Path

random.seed(42)

ROOT = Path(__file__).resolve().parent.parent  # .../PhishOracle-Project
SRC  = ROOT / "downloaded_webpages_simple"
OUTC = ROOT / "datasets" / "CleanSet1"  / "html"
OUTE = ROOT / "datasets" / "EvasionSet1"/ "html"
OUTC.parent.mkdir(parents=True, exist_ok=True)
OUTE.parent.mkdir(parents=True, exist_ok=True)

rows_clean, rows_evasion = [], []

def pick_clean_html(domain_dir: Path):
    """
    Tenta achar a página 'limpa' original do domínio.
    Estratégia:
      1) arquivos comuns: downloaded_webpage.html | index.html | home.html
      2) senão, escolhe o MAIOR .html que NÃO contenha 'phish' no nome
    """
    candidates = [
        domain_dir / "downloaded_webpage.html",
        domain_dir / "index.html",
        domain_dir / "home.html",
    ]
    for c in candidates:
        if c.exists():
            return c
    htmls = [p for p in domain_dir.glob("*.html") if "phish" not in p.name.lower()]
    if not htmls:
        return None
    return max(htmls, key=lambda p: p.stat().st_size)

def pick_adv_html(domain_dir: Path):
    """
    Procura páginas adversariais geradas (PhishOracle).
    Ex.: phishing_webpage.html ou qualquer *.html com 'phish' no nome.
    """
    p1 = domain_dir / "phishing_webpage.html"
    if p1.exists():
        return p1
    htmls = [p for p in domain_dir.glob("*.html") if "phish" in p.name.lower()]
    return htmls[0] if htmls else None

def norm_brand(dname: str) -> str:
    # ex.: www.nubank.com.br -> nubank
    d = dname.lower()
    d = d.replace("www.", "")
    parts = d.split(".")
    # pega o penúltimo pedaço se houver TLD composto (com.br, com.ar etc.)
    if len(parts) >= 3 and parts[-2] in {"com","gov","org","co","net"}:
        return parts[-3]
    return parts[-2] if len(parts) >= 2 else parts[0]

def copy_to(dst_dir: Path, src: Path, newname: str) -> Path:
    dst = dst_dir / newname
    shutil.copy2(src, dst)
    return dst

domains = [d for d in SRC.iterdir() if d.is_dir()]
random.shuffle(domains)

max_clean   = 1000   # ajuste se quiser menor/maior
max_evasion = 1000

for d in domains:
    brand = norm_brand(d.name)

    clean = pick_clean_html(d)
    adv   = pick_adv_html(d)

    if clean and len(rows_clean) < max_clean:
        newname = f"{d.name}_clean.html"
        out = copy_to(OUTC, clean, newname)
        rows_clean.append({
            "id": out.stem,
            "set": "CleanSet1",
            "label": "legit",
            "brand": brand,
            "domain": d.name,
            "url": f"https://{d.name}/",
            "html_path": str(out)
        })

    if adv and len(rows_evasion) < max_evasion:
        newname = f"{d.name}_adv.html"
        out = copy_to(OUTE, adv, newname)
        rows_evasion.append({
            "id": out.stem,
            "set": "EvasionSet1",
            "label": "phish",
            "brand": brand,
            "domain": d.name,
            "url": f"https://{d.name}/",  # domínio real (para features de URL/brand)
            "html_path": str(out)
        })

# grava CSVs
with open(ROOT / "datasets" / "CleanSet1.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows_clean[0].keys()))
    w.writeheader(); w.writerows(rows_clean)

with open(ROOT / "datasets" / "EvasionSet1.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows_evasion[0].keys()))
    w.writeheader(); w.writerows(rows_evasion)

print(f"CleanSet1: {len(rows_clean)} páginas")
print(f"EvasionSet1: {len(rows_evasion)} páginas")
