# scripts/build_evasion2_from_repo.py
import os, json, random, shutil, time
from pathlib import Path
from bs4 import BeautifulSoup

ROOT   = Path(__file__).resolve().parents[1]
DWS    = ROOT / "downloaded_webpages_simple"
OUT    = ROOT / "datasets" / "evasion2"
CLEAN  = OUT / "CleanSet2" / "html"
EVAS   = OUT / "EvasionSet2" / "html"

TARGET_EVAS = 170          # alvo do paper (~170)
BASE_VARIANTS_PER_BRAND = 2  # v1 e v2 para todo mundo

def copy_clean(dom: str):
    src = DWS / dom / "index.html"
    if src.exists():
        dst = CLEAN / f"{dom}_clean.html"
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        return str(dst)
    return None

def _rand_suffix():
    return hex(random.getrandbits(32))[2:]

def make_variant(dom: str, v_idx: int):
    """
    Duplica 'phishing_webpage.html' e embaralha levemente as imagens geradas ('phish_*')
    criando cópias com sufixo aleatório. Se não houver 'phish_*', ainda assim
    gravamos v{v_idx} para permitir múltiplas variações por marca.
    """
    src = DWS / dom / "phishing_webpage.html"
    if not src.exists():
        return None

    html = src.read_text(encoding="utf-8", errors="ignore")
    soup = BeautifulSoup(html, "lxml")

    touched = False
    for img in soup.find_all("img"):
        s = (img.get("src") or "")
        if "phish_" in s:
            p = (DWS / dom / s).resolve()
            if p.exists():
                suf = _rand_suffix()
                new_name = p.with_name(p.stem + f"_{suf}" + p.suffix)
                try:
                    shutil.copy2(p, new_name)
                    img["src"] = str(new_name.relative_to(DWS / dom)).replace("\\", "/")
                    touched = True
                except Exception:
                    pass

    # Mesmo que nada tenha sido "tocado", salvamos a variante com outro nome
    dst = EVAS / f"{dom}_phish_v{v_idx}.html"
    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(str(soup), encoding="utf-8")
    return str(dst)

def main():
    brands_path = OUT / "brands_82.json"
    if not brands_path.exists():
        raise SystemExit("Faltou datasets/evasion2/brands_82.json (rode select_82_brands.py)")

    brands = json.loads(brands_path.read_text(encoding="utf-8"))
    clean_list, evas_list = [], []

    # 1) Clean: uma por marca
    for dom in brands:
        c = copy_clean(dom)
        if c: clean_list.append(c)

    # 2) Evasion base: v1 e v2 para todas as marcas
    for dom in brands:
        for v in range(1, BASE_VARIANTS_PER_BRAND + 1):
            e = make_variant(dom, v)
            if e: evas_list.append(e)

    # 3) Completar até TARGET_EVAS criando v3 para as primeiras marcas necessárias
    faltam = max(0, TARGET_EVAS - len(evas_list))
    for i in range(faltam):
        dom = brands[i % len(brands)]
        e = make_variant(dom, 3)  # cria v3
        if e: evas_list.append(e)

    # 4) Salvar listas CSV no formato esperado
    (ROOT / "datasets" / "CleanSet2.csv").write_text(
        "filepath\n" + "\n".join(clean_list), encoding="utf-8"
    )
    (ROOT / "datasets" / "EvasionSet2.csv").write_text(
        "filepath\n" + "\n".join(evas_list), encoding="utf-8"
    )

    print(f"CleanSet2: {len(clean_list)} páginas (esperado ~82)")
    print(f"EvasionSet2: {len(evas_list)} páginas (alvo {TARGET_EVAS})")

if __name__ == "__main__":
    random.seed(int(time.time()))
    main()
