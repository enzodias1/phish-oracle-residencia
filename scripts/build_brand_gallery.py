import json, re
from pathlib import Path
from PIL import Image
import imagehash

ROOT = Path(__file__).resolve().parents[1]
C2_HTML = ROOT/"datasets/evasion2/CleanSet2/html"
DWS     = ROOT/"downloaded_webpages_simple"
OUT     = ROOT/"datasets/EvasionSet2/brand_gallery.json"

def guess_domain(stem:str)->str:
    # ikea.com_clean -> ikea.com
    s = stem.lower().replace("_clean","").replace("_legit","")
    return s

def find_local_resources(dom:str)->Path|None:
    # tenta exato, com/sem www, e fallback por "parecido"
    candidates = [
        DWS/dom,
        DWS/("www."+dom) if not dom.startswith("www.") else DWS/dom[4:],
    ]
    for c in candidates:
        lr = c/"local_resources"
        if lr.exists(): return lr
    # fallback: procura alguma pasta que contenha o domínio
    for p in DWS.iterdir():
        if not p.is_dir(): continue
        if dom in p.name.lower() or p.name.lower().lstrip("www.")==dom.lstrip("www."):
            lr = p/"local_resources"
            if lr.exists(): return lr
    return None

def pick_candidates(lr:Path):
    exts = {".png",".jpg",".jpeg",".webp",".bmp",".gif"}
    imgs = [p for p in lr.iterdir() if p.is_file() and p.suffix.lower() in exts]
    def score(p:Path):
        name = p.name.lower()
        hit  = 1 if re.search(r"(logo|icon|brand|favicon)", name) else 0
        try:
            with Image.open(p) as im: w,h = im.size
            area = w*h
        except Exception:
            area = 0
        return (hit, area)
    imgs.sort(key=score, reverse=True)
    return imgs[:3]

def phash_str(p:Path)->str|None:
    try:
        with Image.open(p) as im:
            return str(imagehash.phash(im.convert("RGB")))
    except Exception:
        return None

def main():
    assert C2_HTML.exists(), f"faltou {C2_HTML}"
    brands = []
    for html in sorted(C2_HTML.glob("*.html")):
        dom = guess_domain(html.stem)
        lr  = find_local_resources(dom)
        if not lr: 
            continue
        picks = pick_candidates(lr)
        logos = []
        for img in picks:
            h = phash_str(img)
            if h: logos.append({"path": str(img), "phash": h})
        if logos:
            brands.append({"domain": dom, "logos": logos})
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT,"w",encoding="utf-8") as f:
        json.dump(brands,f,ensure_ascii=False,indent=2)
    print(f"[OK] brand_gallery.json: {len(brands)} marcas, {sum(len(b['logos']) for b in brands)} logos → {OUT}")

if __name__ == "__main__":
    main()

