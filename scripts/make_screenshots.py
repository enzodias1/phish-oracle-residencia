import time, math
from pathlib import Path
import pandas as pd

from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.edge.service   import Service as EdgeService
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.microsoft import EdgeChromiumDriverManager

ROOT = Path(__file__).resolve().parents[1]
DF_C = pd.read_csv(ROOT/"datasets/CleanSet1.csv")
DF_E = pd.read_csv(ROOT/"datasets/EvasionSet1.csv")

def get_driver():
    # tenta Chrome; se falhar, tenta Edge
    try:
        opts = webdriver.ChromeOptions()
        opts.add_argument("--headless=new")
        opts.add_argument("--disable-gpu")
        opts.add_argument("--window-size=1440,900")
        return webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=opts)
    except Exception:
        opts = webdriver.EdgeOptions()
        opts.add_argument("--headless=new")
        opts.add_argument("--disable-gpu")
        opts.add_argument("--window-size=1440,900")
        return webdriver.Edge(service=EdgeService(EdgeChromiumDriverManager().install()), options=opts)

def snap(row, out_dir: Path, driver):
    html = Path(row["html_path"]).resolve()
    url  = "file:///" + html.as_posix()
    driver.get(url)
    time.sleep(1.5)

    # altura total da página
    total_height = driver.execute_script("return document.body.scrollHeight")
    driver.set_window_size(1440, max(900, total_height))
    time.sleep(0.2)
    out_path = out_dir / f'{row["id"]}.png'
    driver.save_screenshot(str(out_path))

def run(df, out_dir):
    out_dir.mkdir(parents=True, exist_ok=True)
    d = get_driver()
    try:
        for _, row in df.iterrows():
            snap(row, out_dir, d)
    finally:
        d.quit()

run(DF_C, ROOT/"datasets/CleanSet1/screenshots")
run(DF_E, ROOT/"datasets/EvasionSet1/screenshots")
print("Screenshots OK.")
