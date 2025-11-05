# add_visual_features_main.py
import shutil
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageFilter, UnidentifiedImageError
from bs4 import BeautifulSoup
from pathlib import Path

# Opção 2: sem exigir Cairo. Se existir, podemos usar; senão, pulamos SVG.
try:
    import cairosvg  # não utilizado por padrão; mantido só para compat
except Exception:
    cairosvg = None

import random
import numpy as np
import io
from adding_15_features import add_features_now
import time
import os, csv
import matplotlib
matplotlib.use("Agg")  # precisa vir ANTES do pyplot
import matplotlib.pyplot as plt

# === Caminhos relativos ao repositório atual ===
ROOT = Path(__file__).resolve().parent
WEB_ROOT = ROOT / "downloaded_webpages_simple"  # onde estão os sites baixados

# ---------------------------------------------------------------------
# Utilidades de imagem
# ---------------------------------------------------------------------
def _text_size(draw, text, font):
    # Pillow 8/9 tem textsize; 10+ recomenda textbbox
    if hasattr(draw, "textbbox"):
        left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
        return (right - left, bottom - top)
    else:
        return draw.textsize(text, font)  # fallback

def add_watermark_at_bottom_right(input_image_path, output_image_path, watermark_text):
    try:
        img = Image.open(input_image_path).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {input_image_path}")
        return

    alpha = img.split()[3]
    alpha = ImageEnhance.Brightness(alpha).enhance(0.8)
    img.putalpha(alpha)

    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    textwidth, textheight = _text_size(draw, watermark_text, font)
    width, height = img.size
    x = width - textwidth - 10
    y = height - textheight - 10
    draw.text((x, y), watermark_text, font=font, fill=(220, 220, 220, 128))

    img = img.convert("RGB")
    img.save(output_image_path, "PNG")

def add_watermark_diagonally(input_image_path, output_image_path, watermark_text):
    if not watermark_text:
        watermark_text = "PhishOracle"
    try:
        img = Image.open(input_image_path).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {input_image_path}")
        return

    try:
        draw = ImageDraw.Draw(img)
        font = ImageFont.load_default()

        if hasattr(draw, "textbbox"):
            l, t, r, b = draw.textbbox((0, 0), watermark_text, font=font)
            textwidth, textheight = (r - l, b - t)
        else:
            textwidth, textheight = draw.textsize(watermark_text, font)

        text_img = Image.new("RGBA", img.size, (255, 255, 255, 0))
        draw_text = ImageDraw.Draw(text_img)

        width, height = img.size
        x = -width // 4
        y = height - textheight

        while y > -height:
            draw_text.text((x, y), watermark_text, font=font, fill=(220, 220, 220, 128))
            x += textwidth
            y -= textheight

        text_img = text_img.rotate(35, expand=1)

        RES = getattr(getattr(Image, "Resampling", Image), "LANCZOS", Image.BICUBIC)
        text_img = text_img.resize(img.size, resample=RES)

        img = Image.alpha_composite(img, text_img)
        img = img.convert("RGB")
        img.save(output_image_path, "PNG")
    except Exception as e:
        print(f"[WARN] falha ao processar {input_image_path}: {e}")

def add_rotation_brightness_gaussian_blur(input_image_path, output_image_path, watermark_text=None):
    try:
        img = Image.open(input_image_path).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {input_image_path}")
        return

    angle = random.randint(-15, 15)
    img = img.rotate(angle, expand=True)

    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(random.uniform(0.25, 0.5))

    img = img.convert("RGB")
    img.save(output_image_path, "PNG")

def add_rotation_grey_colored_mesh(input_image_path, output_image_path, watermark_text=None):
    try:
        img = Image.open(input_image_path).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {input_image_path}")
        return

    width, height = img.size
    angle = random.randint(-15, 15)
    img = img.rotate(angle, expand=True)

    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    grid_size = 2
    line_color = (128, 128, 128, 80)

    for y in range(0, height, grid_size):
        draw.line([(0, y), (width, y)], fill=line_color, width=1)
    for x in range(0, width, grid_size):
        draw.line([(x, 0), (x, height)], fill=line_color, width=1)

    result = Image.alpha_composite(img, overlay)
    result = result.convert("RGB")
    result.save(output_image_path, "PNG")

def add_gaussian_noise_jpeg_compression(input_image_path, output_image_path, watermark_text=None):
    """Ruído gaussiano + compressão JPEG; preserva alfa se existir."""
    try:
        img = Image.open(input_image_path)
    except UnidentifiedImageError:
        raise

    img = img.convert("RGBA")
    arr = np.array(img)
    rgb = arr[..., :3]
    alpha = arr[..., 3] if arr.shape[2] == 4 else None

    sigma = random.uniform(2, 12)
    noise = np.random.normal(0, sigma, rgb.shape).astype(np.float32)
    noisy = np.clip(rgb.astype(np.float32) + noise, 0, 255).astype(np.uint8)
    noisy_img = Image.fromarray(noisy, mode="RGB")

    buf = io.BytesIO()
    quality = random.randint(40, 85)
    noisy_img.save(buf, format="JPEG", quality=quality, optimize=True)
    buf.seek(0)
    comp = Image.open(buf).convert("RGB")

    if alpha is not None:
        comp = comp.convert("RGBA")
        comp.putalpha(Image.fromarray(alpha))

    if watermark_text:
        draw = ImageDraw.Draw(comp)
        W, H = comp.size
        try:
            font = ImageFont.load_default()
        except Exception:
            font = None
        w = draw.textlength(watermark_text, font=font)
        h = 12
        x = max(4, int(W - w - 8))
        y = max(4, H - h - 6)
        draw.text((x, y), watermark_text, font=font)

    comp.save(output_image_path)

# ---------------------------------------------------------------------
# Atualização de HTML para apontar para phish_*.*
# ---------------------------------------------------------------------
def update_html_image_sources(html_file_path, local_resources_folder):
    with open(html_file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    for img_tag in soup.find_all('img'):
        src = img_tag.get('src')
        if not src:
            continue
        if not src.lower().endswith(('.png', '.svg', '.jpg', '.jpeg', '.webp', '.gif', '.bmp')):
            continue

        base_name = os.path.basename(src)

        # se já aponta para phish_*, pula
        if base_name.lower().startswith('phish_'):
            continue

        phish_name = f"phish_{base_name}"
        img_tag['src'] = src.replace(base_name, phish_name)

    with open(html_file_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))

# ---------------------------------------------------------------------
# Varredura e aplicação das transformações em imagens raster
# ---------------------------------------------------------------------
def process_images(local_resources_path):
    """
    Varre imagens raster e aplica uma transformação aleatória.
    Pula SVGs (Opção 2) e formatos não suportados pelo Pillow.
    Nunca para o processamento por causa de 1 arquivo.
    """
    local_resources_path = Path(local_resources_path)
    if not local_resources_path.exists():
        print(f"[skip] pasta não existe: {local_resources_path}")
        return

    raster_exts = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif"}
    transforms = [
        add_gaussian_noise_jpeg_compression,
        add_watermark_at_bottom_right,
        add_watermark_diagonally,
        add_rotation_brightness_gaussian_blur,
        add_rotation_grey_colored_mesh,
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
# Descobrir index/main + local_resources dentro de cada domínio
# ---------------------------------------------------------------------
def find_target_html_and_local_resources(folder_path):
    for root, dirs, files in os.walk(folder_path):
        # padroniza nome
        norm_dirs = [d.lower() for d in dirs]
        if "local_resources" in norm_dirs:
            # acha o nome real (case)
            real_lr = [d for d in dirs if d.lower() == "local_resources"][0]
            parent_dir = root
            local_resources_path = os.path.join(parent_dir, real_lr)

            for html_file in ['index.html', 'main.html']:
                html_path = os.path.join(parent_dir, html_file)
                if os.path.isfile(html_path):
                    return html_path, local_resources_path
    return None, None

# ---------------------------------------------------------------------
# Pipeline principal: copia HTML, aplica visuais e features de conteúdo
# ---------------------------------------------------------------------
def add_logo_based_features():
    main_folder = str(WEB_ROOT)

    processing_time = []
    modified_files = []

    if not os.path.isdir(main_folder):
        print(f"[ERRO] pasta não encontrada: {main_folder}")
        return modified_files

    for folder_name in os.listdir(main_folder):
        folder_path = os.path.join(main_folder, folder_name)
        if not os.path.isdir(folder_path):
            continue

        start_time = time.time()
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
            print("Images processed and HTML updated.")

            # Aplica as 15 features de conteúdo
            try:
                add_features_now(modified_html_path)
                print("[OK] content features aplicadas:", modified_html_path)
                modified_files.append(modified_html_path)
            except Exception as e:
                print(f"[WARN] falha ao aplicar content features em {modified_html_path}: {e}")
        else:
            print(f"No suitable HTML or 'local_resources' folder found in: {folder_path}")

        elapsed_time = time.time() - start_time
        processing_time.append(elapsed_time)

    # Relatórios (CDF)
    if processing_time:
        reports_dir = ROOT / "reports"
        reports_dir.mkdir(parents=True, exist_ok=True)

        avg_time = sum(processing_time) / len(processing_time)
        print(f"Average processing time is = {avg_time:.4f} seconds")

        # CSV com tempos
        with open(reports_dir / "cdf_times.csv", "w", newline="", encoding="utf-8") as f:
            w = csv.writer(f)
            w.writerow(["time_seconds"])
            for t in processing_time:
                w.writerow([t])

        # CDF plot
        times_sorted = np.sort(np.array(processing_time, dtype=float))
        cdf = np.arange(1, len(times_sorted) + 1) / len(times_sorted)

        plt.figure(figsize=(8, 5))
        plt.plot(times_sorted, cdf, marker="o", linestyle="-", label="PhishOracle Generation Time")
        plt.xlabel("Generation Time (seconds)")
        plt.ylabel("Cumulative Probability")
        plt.title("CDF of Generation Time for PhishOracle")
        plt.grid(True)
        plt.legend(loc="lower right")
        plt.tight_layout()
        plt.savefig(reports_dir / "cdf_generation_time.png", dpi=150)
        plt.close()

    return modified_files

# ---------------------------------------------------------------------
if __name__ == '__main__':
    modified_files = add_logo_based_features()
