from pathlib import Path
import shutil

BASE = Path(__file__).resolve().parents[1]
SRC  = BASE / "downloaded_webpages_simple"
DST  = BASE / "datasets" / "CleanSet1" / "html"
DST.mkdir(parents=True, exist_ok=True)

count = 0
for dom in sorted([d for d in SRC.iterdir() if d.is_dir()]):
    html = dom / "phishing_webpage.html"   # é a página “legítima” baixada
    if html.exists():
        out = DST / f"{dom.name}.html"
        shutil.copy2(html, out)
        count += 1

print(f"Copiados {count} arquivos para {DST}")
