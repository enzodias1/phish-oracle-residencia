# add_visual_features_visual_only.py
import shutil, os, csv, io, time, random
from pathlib import Path

import numpy as np
from PIL import (
    Image, ImageDraw, ImageFont,
    ImageEnhance, ImageFilter,
    UnidentifiedImageError
)
from bs4 import BeautifulSoup

# SVG: usamos apenas se a lib existir; não é obrigatório
try:
    import cairosvg  # não usado por padrão; mantido para compat
except Exception:
    cairosvg = None

# Matplotlib em modo headless (salva PNG do CDF)
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

# === Caminhos relativos ao repo ===
ROOT = Path(__file__).resolve().parent
WEB_ROOT = ROOT / "downloaded_webpages_simple"   # onde estão os sites baixados

# ---------------------------------------------------------------------
# utilidades de texto/imagem
# ---------------------------------------------------------------------
def _text_size(draw, text, font):
    if hasattr(draw, "textbbox"):
        l, t, r, b = draw.textbbox((0, 0), text, font=font)
        return (r - l, b - t)
    return draw.textsize(text, font)

def add_watermark_at_bottom_right(inp, outp, watermark_text):
    try:
        img = Image.open(inp).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {inp}")
        return
    alpha = img.split()[3]
    alpha = ImageEnhance.Brightness(alpha).enhance(0.8)
    img.putalpha(alpha)
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    tw, th = _text_size(draw, watermark_text, font)
    W, H = img.size
    x, y = W - tw - 10, H - th - 10
    draw.text((x, y), watermark_text, font=font, fill=(220,220,220,128))
    img.convert("RGB").save(outp, "PNG")

def add_watermark_diagonally(inp, outp, watermark_text="PhishOracle"):
    try:
        img = Image.open(inp).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {inp}")
        return
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    if hasattr(draw, "textbbox"):
        l, t, r, b = draw.textbbox((0, 0), watermark_text, font=font)
        tw, th = (r - l, b - t)
    else:
        tw, th = draw.textsize(watermark_text, font)

    txt = Image.new("RGBA", img.size, (255,255,255,0))
    d2  = ImageDraw.Draw(txt)
    W, H = img.size
    x, y = -W // 4, H - th
    while y > -H:
        d2.text((x, y), watermark_text, font=font, fill=(220,220,220,128))
        x += tw
        y -= th
    RES = getattr(getattr(Image, "Resampling", Image), "LANCZOS", Image.BICUBIC)
    txt = txt.rotate(35, expand=1).resize(img.size, resample=RES)
    out = Image.alpha_composite(img, txt).convert("RGB")
    out.save(outp, "PNG")

def add_rotation_brightness(inp, outp, watermark_text=None):
    try:
        img = Image.open(inp).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {inp}")
        return
    img = img.rotate(random.randint(-15, 15), expand=True)
    img = ImageEnhance.Brightness(img).enhance(random.uniform(0.25, 0.5))
    img.convert("RGB").save(outp, "PNG")

def add_rotation_mesh(inp, outp, watermark_text=None):
    try:
        img = Image.open(inp).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {inp}")
        return
    W, H = img.size
    img = img.rotate(random.randint(-15, 15), expand=True)
    overlay = Image.new("RGBA", img.size, (0,0,0,0))
    draw = ImageDraw.Draw(overlay)
    for y in range(0, H, 2):
        draw.line([(0,y),(W,y)], fill=(128,128,128,80), width=1)
    for x in range(0, W, 2):
        draw.line([(x,0),(x,H)], fill=(128,128,128,80), width=1)
    Image.alpha_composite(img, overlay).convert("RGB").save(outp, "PNG")

def add_noise_jpeg(inp, outp, watermark_text=None):
    """Ruído Gaussiano + compressão JPEG; preserva alfa se houver."""
    try:
        img = Image.open(inp)
    except UnidentifiedImageError:
        raise
    img = img.convert("RGBA")
    arr = np.array(img)
    rgb = arr[..., :3]
    alpha = arr[..., 3] if arr.shape[2] == 4 else None

    sigma = random.uniform(2, 12)
    noisy = np.clip(rgb.astype(np.float32) +
                    np.random.normal(0, sigma, rgb.shape).astype(np.float32),
                    0, 255).astype(np.uint8)
    noisy_img = Image.fromarray(noisy, "RGB")
    buf = io.BytesIO()
    noisy_img.save(buf, format="JPEG", quality=random.randint(40,85), optimize=True)
    buf.seek(0)
    comp = Image.open(buf).convert("RGB")
    if alpha is not None:
        comp = comp.convert("RGBA")
        comp.putalpha(Image.fromarray(alpha))
    if watermark_text:
        d = ImageDraw.Draw(comp)
        W, H = comp.size
        font = ImageFont.load_default()
        w = d.textlength(watermark_text, font=font)
        h = 12
        d.text((max(4,int(W-w-8)), max(4,H-h-6)), watermark_text, font=font)
    comp.save(outp)

# ---------------------------------------------------------------------
# Atualiza HTML para apontar para phish_*.* das imagens alteradas
# ---------------------------------------------------------------------
def update_html_image_sources(html_file_path, local_resources_folder):
    with open(html_file_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")
    for img_tag in soup.find_all("img"):
        src = img_tag.get("src")
        if not src:
            continue
        if not src.lower().endswith((".png",".svg",".jpg",".jpeg",".webp",".gif",".bmp")):
            continue
        base_name = os.path.basename(src)
        if base_name.lower().startswith("phish_"):
            continue
        img_tag["src"] = src.replace(base_name, f"phish_{base_name}")
    with open(html_file_path, "w", encoding="utf-8") as f:
        f.write(str(soup))

# ---------------------------------------------------------------------
# Aplica transformações visuais a imagens raster
# ---------------------------------------------------------------------
def process_images(local_resources_path: Path):
    local_resources_path = Path(local_resources_path)
    if not local_resources_path.exists():
        print(f"[skip] pasta não existe: {local_resources_path}")
        return
    raster_exts = {".png",".jpg",".jpeg",".webp",".bmp",".gif"}
    transforms = [
        add_noise_jpeg,
        add_watermark_at_bottom_right,
        add_watermark_diagonally,
        add_rotation_brightness,
        add_rotation_mesh,
    ]
    for p in local_resources_path.iterdir():
        if not p.is_file():
            continue
        ext = p.suffix.lower()
        if ext == ".svg":
            print(f"[skip] SVG (sem rasterizar): {p.name}")
            continue
        if ext not in raster_exts:
            continue
        out = p.with_name(f"phish_{p.name}")
        try:
            random.choice(transforms)(str(p), str(out), watermark_text="PhishOracle")
        except UnidentifiedImageError:
            print(f"[warn] formato não suportado por Pillow: {p.name}")
        except Exception as e:
            print(f"[warn] falha ao processar {p.name}: {e}")

# ---------------------------------------------------------------------
# Descobre index/main + local_resources dentro do domínio
# ---------------------------------------------------------------------
def find_target_html_and_local_resources(folder_path):
    for root, dirs, files in os.walk(folder_path):
        norm_dirs = [d.lower() for d in dirs]
        if "local_resources" in norm_dirs:
            real_lr = [d for d in dirs if d.lower() == "local_resources"][0]
            parent_dir = root
            local_resources_path = os.path.join(parent_dir, real_lr)
            for html_file in ("index.html","main.html"):
                html_path = os.path.join(parent_dir, html_file)
                if os.path.isfile(html_path):
                    return html_path, local_resources_path
    return None, None

# ---------------------------------------------------------------------
# PIPELINE (VISUAL ONLY): copia HTML e altera só imagens
# ---------------------------------------------------------------------
def add_logo_based_features_visual_only():
    main_folder = str(WEB_ROOT)
    processing_time, modified_files = [], []

    if not os.path.isdir(main_folder):
        print(f"[ERRO] pasta não encontrada: {main_folder}")
        return modified_files

    for folder_name in os.listdir(main_folder):
        folder_path = os.path.join(main_folder, folder_name)
        if not os.path.isdir(folder_path):
            continue

        start = time.time()
        html_path, local_resources_path = find_target_html_and_local_resources(folder_path)

        if html_path and local_resources_path:
            modified_html_path = os.path.join(os.path.dirname(html_path), "phishing_webpage.html")
            try:
                shutil.copy(html_path, modified_html_path)
                print(f"Copied {html_path} to {modified_html_path}")
            except Exception as e:
                print(f"[WARN] falha ao copiar HTML base: {e}")
                continue

            process_images(local_resources_path)
            update_html_image_sources(modified_html_path, local_resources_path)
            print("Images processed and HTML updated. (VISUAL-ONLY)")

            # >>> NÃO aplicamos add_features_now(modified_html_path)
            modified_files.append(modified_html_path)
        else:
            print(f"No suitable HTML or 'local_resources' folder found in: {folder_path}")

        processing_time.append(time.time() - start)

    # Relatório/CDF
    if processing_time:
        reports = ROOT / "reports"
        reports.mkdir(parents=True, exist_ok=True)
        avg = sum(processing_time)/len(processing_time)
        print(f"Average processing time is = {avg:.4f} seconds")

        with open(reports / "cdf_times_visual_only.csv", "w", newline="", encoding="utf-8") as f:
            w = csv.writer(f)
            w.writerow(["time_seconds"])
            for t in processing_time:
                w.writerow([t])

        t_sorted = np.sort(np.array(processing_time, dtype=float))
        cdf = np.arange(1, len(t_sorted)+1) / len(t_sorted)
        plt.figure(figsize=(8,5))
        plt.plot(t_sorted, cdf, marker="o", linestyle="-", label="PhishOracle Generation Time (visual-only)")
        plt.xlabel("Generation Time (seconds)")
        plt.ylabel("Cumulative Probability")
        plt.title("CDF of Generation Time for PhishOracle (Visual-Only)")
        plt.grid(True); plt.legend(loc="lower right"); plt.tight_layout()
        plt.savefig(reports / "cdf_generation_time_visual_only.png", dpi=150)
        plt.close()

    return modified_files

if __name__ == "__main__":
    add_logo_based_features_visual_only()
