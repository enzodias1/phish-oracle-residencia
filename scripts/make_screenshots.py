# scripts/make_screenshots.py
import time, argparse, sys
from pathlib import Path
import pandas as pd

from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.edge.service   import Service as EdgeService
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.microsoft import EdgeChromiumDriverManager

ROOT = Path(__file__).resolve().parents[1]

PATH_CANDIDATES = ["html_path", "filepath", "path", "file", "page"]

def pick_path_col(df: pd.DataFrame) -> str:
    for k in PATH_CANDIDATES:
        if k in df.columns:
            return k
    return df.columns[0]

def ensure_id_col(df: pd.DataFrame, path_col: str) -> pd.DataFrame:
    if "id" in df.columns:
        return df
    out = df.copy()
    def mkid(p):
        p = Path(str(p))
        name = p.stem
        return (name
                .replace(".html","")
                .replace(".htm","")
                .replace("_clean","")
                .replace("_phish",""))
    out["id"] = out[path_col].astype(str).apply(mkid)
    return out

def resolve_html_path(raw: str) -> Path:
    """Resolve caminho absoluto para o HTML a partir do repo."""
    p = Path(str(raw).strip().strip('"').strip("'"))
    if p.is_absolute() and p.exists():
        return p
    # relativo ao repo
    p1 = (ROOT / p).resolve()
    if p1.exists():
        return p1
    # às vezes o CSV vem com caminho como 'downloaded_webpages_simple/domain/phishing_webpage.html'
    # tente normalizar separadores
    try:
        p2 = ROOT.joinpath(*Path(p.as_posix()).parts).resolve()
        if p2.exists():
            return p2
    except Exception:
        pass
    return p  # retornamos como está para erro mais claro depois

def get_driver(which: str = "auto"):
    if which.lower() in ("chrome", "auto"):
        try:
            opts = webdriver.ChromeOptions()
            opts.add_argument("--headless=new")
            opts.add_argument("--disable-gpu")
            opts.add_argument("--disable-dev-shm-usage")
            opts.add_argument("--no-sandbox")
            opts.add_argument("--window-size=1440,900")
            opts.add_argument("--blink-settings=imagesEnabled=true")
            opts.add_argument("--disable-features=IsolateOrigins,site-per-process")
            d = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=opts)
            d.set_page_load_timeout(120)
            d.set_script_timeout(60)
            return d
        except Exception:
            pass
    # fallback Edge
    opts = webdriver.EdgeOptions()
    opts.add_argument("--headless=new")
    opts.add_argument("--disable-gpu")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--window-size=1440,900")
    d = webdriver.Edge(service=EdgeService(EdgeChromiumDriverManager().install()), options=opts)
    d.set_page_load_timeout(120)
    d.set_script_timeout(60)
    return d

def snap(html_path: Path, out_png: Path, driver) -> bool:
    try:
        url = html_path.resolve().as_uri()
        driver.get(url)
        time.sleep(1.2)
        try:
            total_height = driver.execute_script(
                "return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)"
            )
            total_height = int(total_height) if total_height else 900
        except Exception:
            total_height = 900
        driver.set_window_size(1440, max(900, min(total_height, 10000)))
        time.sleep(0.2)
        out_png.parent.mkdir(parents=True, exist_ok=True)
        driver.save_screenshot(str(out_png))
        return True
    except Exception as e:
        print(f"[WARN] screenshot falhou: {html_path} -> {e}")
        return False

def run(df: pd.DataFrame, out_dir: Path, driver, skip_existing: bool, path_col: str) -> tuple[int,int]:
    out_dir.mkdir(parents=True, exist_ok=True)
    ok = fail = 0
    for _, row in df.iterrows():
        html = resolve_html_path(row[path_col])
        if not html.exists():
            print(f"[WARN] html ausente: {html}")
            fail += 1
            continue

        out_png = out_dir / f'{row["id"]}.png'
        if skip_existing and out_png.exists():
            ok += 1
            continue

        # até 2 tentativas; reinicia driver se travar
        for attempt in range(2):
            if snap(html, out_png, driver):
                ok += 1
                break
            else:
                if attempt == 0:
                    try:
                        driver.quit()
                    except Exception:
                        pass
                    driver = get_driver("auto")
        else:
            fail += 1
    return ok, fail

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--dataset", choices=["set1","set2"], default="set1",
                    help="Qual conjunto usar: set1 (CleanSet1/EvasionSet1) ou set2 (CleanSet2/EvasionSet2)")
    ap.add_argument("--subset",  choices=["clean","evasion","both"], default="both",
                    help="Qual subconjunto gerar screenshots")
    ap.add_argument("--skip-existing", action="store_true", help="Pula PNGs já existentes")
    ap.add_argument("--driver", choices=["auto","chrome","edge"], default="auto")
    args = ap.parse_args()

    if args.dataset == "set1":
        df_c_path = ROOT/"datasets/CleanSet1.csv"
        df_e_path = ROOT/"datasets/EvasionSet1.csv"
        out_c = ROOT/"datasets/CleanSet1/screenshots"
        out_e = ROOT/"datasets/EvasionSet1/screenshots"
    else:
        df_c_path = ROOT/"datasets/CleanSet2.csv"
        df_e_path = ROOT/"datasets/EvasionSet2.csv"
        out_c = ROOT/"datasets/CleanSet2/screenshots"
        out_e = ROOT/"datasets/EvasionSet2/screenshots"

    DF_C = pd.read_csv(df_c_path)
    DF_E = pd.read_csv(df_e_path)

    colC = pick_path_col(DF_C); DF_C = ensure_id_col(DF_C, colC)
    colE = pick_path_col(DF_E); DF_E = ensure_id_col(DF_E, colE)

    d = get_driver(args.driver)
    try:
        if args.subset in ("clean","both"):
            ok, fail = run(DF_C, out_c, d, skip_existing=args.skip_existing, path_col=colC)
            print(f"[DONE] screenshots CLEAN: OK={ok} | FAIL={fail} | OUT={out_c}")
        if args.subset in ("evasion","both"):
            ok, fail = run(DF_E, out_e, d, skip_existing=args.skip_existing, path_col=colE)
            print(f"[DONE] screenshots EVASION: OK={ok} | FAIL={fail} | OUT={out_e}")
    finally:
        try:
            d.quit()
        except Exception:
            pass
    print("Screenshots OK.")
