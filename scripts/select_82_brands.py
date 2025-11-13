import os, re, json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DWS  = ROOT / "downloaded_webpages_simple"

candidatos = []
for dom_dir in sorted(DWS.iterdir()):
    if not dom_dir.is_dir(): 
        continue
    lr = dom_dir / "local_resources"
    if not lr.exists(): 
        continue
    has_logo = any(re.search(r"logo", p.name, re.I) for p in lr.iterdir() if p.is_file())
    has_clean = (dom_dir/"index.html").exists()
    has_evasion = (dom_dir/"phishing_webpage.html").exists()
    if has_logo and has_clean and has_evasion:
        candidatos.append(dom_dir.name)

# pegue 82 (ou o que tiver disponível, limitado a 82)
brands = candidatos[:82]
OUT = ROOT / "datasets" / "evasion2" / "brands_82.json"
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(brands, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Selecionadas {len(brands)} marcas. Arquivo: {OUT}")
