import os
import shutil
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageFilter, UnidentifiedImageError
from bs4 import BeautifulSoup
from pathlib import Path
import cairosvg
import random
import numpy as np
import io
from adding_15_features import add_features_now
# from download_webpage import starting_here
import time


def _text_size(draw, text, font):
    # Pillow 8/9 tem textsize; 10+ recomenda textbbox
    if hasattr(draw, "textbbox"):
        left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
        return (right - left, bottom - top)
    else:
        return draw.textsize(text, font)  # fallback p/ versões antigas

# Function to add watermark to an image
def add_watermark_at_bottom_right(input_image_path, output_image_path, watermark_text):
    try:
        img = Image.open(input_image_path).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {input_image_path}")
        return

    # Enhance brightness of alpha channel
    alpha = img.split()[3]
    alpha = ImageEnhance.Brightness(alpha).enhance(0.8)
    img.putalpha(alpha)

    # Add text watermark at bottom right corner
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default()
    textwidth, textheight = _text_size(draw, watermark_text, font)
    width, height = img.size
    x = width - textwidth - 10
    y = height - textheight - 10

    # Apply the watermark text
    draw.text((x, y), watermark_text, font=font, fill=(220, 220, 220, 128))

    img = img.convert("RGB")
    img.save(output_image_path, "PNG")


# Function to add watermark diagonally
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

        # compat Pillow 10+
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

        # Resampling compat
        RES = getattr(getattr(Image, "Resampling", Image), "LANCZOS", Image.BICUBIC)
        text_img = text_img.resize(img.size, resample=RES)

        img = Image.alpha_composite(img, text_img)
        img = img.convert("RGB")
        img.save(output_image_path, "PNG")
    except Exception as e:
        print(f"[WARN] falha ao processar {input_image_path}: {e}")


# Function to add rotation, brightness, and Gaussian blur
def add_rotation_brightness_gaussian_blur(input_image_path, output_image_path, watermark_text=None):
    try:
        img = Image.open(input_image_path).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {input_image_path}")
        return

    # Apply random rotation
    angle = random.randint(-15, 15)
    img = img.rotate(angle, expand=True)

    # Apply random brightness
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(random.uniform(0.25, 0.5))

    # # Apply Gaussian blur
    # img = img.filter(ImageFilter.GaussianBlur(radius=random.randint(0, 4)))

    img = img.convert("RGB")
    img.save(output_image_path, "PNG")


# Function to add rotation and grey-colored mesh
def add_rotation_grey_colored_mesh(input_image_path, output_image_path, watermark_text=None):
    try:
        img = Image.open(input_image_path).convert("RGBA")
    except UnidentifiedImageError:
        print(f"Cannot identify image file: {input_image_path}")
        return

    width, height = img.size

    # Apply random rotation
    angle = random.randint(-15, 15)
    img = img.rotate(angle, expand=True)

    # Create a blank image with the same size and mode
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))

    # Create a drawing context
    draw = ImageDraw.Draw(overlay)

    # Set grid size and line color
    grid_size = 2  # Adjust as needed
    line_color = (128, 128, 128, 80)  # Grey color with transparency

    # Draw horizontal grid lines
    for y in range(0, height, grid_size):
        draw.line([(0, y), (width, y)], fill=line_color, width=1)

    # Draw vertical grid lines
    for x in range(0, width, grid_size):
        draw.line([(x, 0), (x, height)], fill=line_color, width=1)

    # Composite the overlay onto the original image
    result = Image.alpha_composite(img, overlay)

    result = result.convert("RGB")
    result.save(output_image_path, "PNG")


# Function to add Gaussian noise and JPEG compression
def add_gaussian_noise_jpeg_compression(input_image_path, output_image_path, watermark_text=None):
    """Aplica ruído gaussiano e compressão JPEG com tratamento de alfa. SEM usar np_img antes de definir."""
    try:
        img = Image.open(input_image_path)
    except UnidentifiedImageError:
        # Arquivo não suportado pelo Pillow (ex.: SVG) — deixe para quem chama decidir pular
        raise

    # Trabalhe em RGBA para preservar alfa, se existir
    img = img.convert("RGBA")
    arr = np.array(img)  # (H,W,4) ou (H,W,3) após RGBA
    rgb = arr[..., :3]
    alpha = arr[..., 3] if arr.shape[2] == 4 else None

    # Ruído
    sigma = random.uniform(2, 12)
    noise = np.random.normal(0, sigma, rgb.shape).astype(np.float32)
    noisy = np.clip(rgb.astype(np.float32) + noise, 0, 255).astype(np.uint8)
    noisy_img = Image.fromarray(noisy, mode="RGB")

    # Compressão JPEG em memória
    buf = io.BytesIO()
    quality = random.randint(40, 85)
    noisy_img.save(buf, format="JPEG", quality=quality, optimize=True)
    buf.seek(0)
    comp = Image.open(buf).convert("RGB")

    # Reanexa alfa se havia
    if alpha is not None:
        comp = comp.convert("RGBA")
        comp.putalpha(Image.fromarray(alpha))

    # Marca d’água simples (opcional)
    if watermark_text:
        draw = ImageDraw.Draw(comp)
        W, H = comp.size
        try:
            font = ImageFont.load_default()
        except Exception:
            font = None
        w, h = draw.textlength(watermark_text, font=font), 12
        x = max(4, int(W - w - 8))
        y = max(4, H - h - 6)
        draw.text((x, y), watermark_text, font=font)

    comp.save(output_image_path)


# Function to handle SVG files
def handle_svg(input_svg_path, output_image_path, watermark_text):
    try:
        # Convert SVG to PNG
        png_temp_path = input_svg_path.replace(".svg", ".png")
        cairosvg.svg2png(
            url=input_svg_path, 
            write_to=png_temp_path,
            output_width=512,
            output_height=512
            )

        function_to_call = random.choice([add_watermark_at_bottom_right, add_watermark_diagonally,
                                         add_rotation_brightness_gaussian_blur, add_rotation_grey_colored_mesh, add_gaussian_noise_jpeg_compression])

        # Add watermark to the converted PNG image
        function_to_call(png_temp_path, output_image_path, watermark_text)

        # Clean up the temporary PNG file
        os.remove(png_temp_path)
    except Exception as e:
        print(f"An error occurred while handling SVG: {e}")


# Main script logic

def update_html_image_sources(html_file_path, local_resources_folder):
    with open(html_file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    for img_tag in soup.find_all('img'):
        src = img_tag.get('src')
        if not src:
            continue
        if not src.lower().endswith(('.png', '.svg', '.jpg', '.jpeg', '.webp')):
            continue

        base_name = os.path.basename(src)
        if base_name.lower().endswith('_modified.png'):  # <-- já apontando para o gerado
            continue

        base, _ = os.path.splitext(base_name)
        modified_name = f"{base}_modified.png"
        img_tag['src'] = src.replace(base_name, modified_name)

    with open(html_file_path, 'w', encoding='utf-8') as f:
        f.write(str(soup))


def process_images(local_resources_path):
    """
    Varre imagens raster e aplica uma transformação aleatória.
    **Pula SVGs** e quaisquer formatos não suportados pelo Pillow.
    Nunca interrompe o processamento por causa de 1 arquivo.
    """
    local_resources_path = Path(local_resources_path)
    if not local_resources_path.exists():
        print(f"[skip] pasta não existe: {local_resources_path}")
        return

    # Extensões suportadas pelo Pillow (raster). SVG será ignorado.
    raster_exts = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif"}

    transforms = [
        add_gaussian_noise_jpeg_compression,
        # se tiver outras funções suas (blur, sharpen etc), adicione aqui:
        # add_blur, add_watermark_only, ...
    ]

    for p in local_resources_path.iterdir():
        if not p.is_file():
            continue
        ext = p.suffix.lower()

        if ext == ".svg":
            print(f"[skip] SVG (sem rasterizar no Windows): {p.name}")
            continue

        if ext not in raster_exts:
            # Arquivos de script, css, fontes etc.
            continue

        # Define saída temporária ao lado do arquivo
        out = p.with_name(f"phish_{p.name}")
        try:
            random.choice(transforms)(str(p), str(out), watermark_text="PhishOracle")
            # Se seu código depois faz o replace no HTML para apontar pra 'phish_*',
            # mantenha. Se prefere sobrescrever o original, use: p.write_bytes(out.read_bytes()); out.unlink()
        except UnidentifiedImageError:
            print(f"[warn] formato não suportado por Pillow: {p.name}")
        except Exception as e:
            print(f"[warn] falha ao processar {p.name}: {e}")

# Function to find the parent folder of 'local_resources' and the corresponding HTML file
def find_target_html_and_local_resources(folder_path):
    for root, dirs, files in os.walk(folder_path):
        if "local_resources" in [d.lower() for d in dirs]:
            parent_dir = root  # Directory that contains 'local_resources'
            local_resources_path = os.path.join(parent_dir, "local_resources")

            for html_file in ['index.html', 'main.html']:
                html_path = os.path.join(parent_dir, html_file)
                if os.path.isfile(html_path):
                    return html_path, local_resources_path
    return None, None


def add_logo_based_features():
    # pasta base com sites baixados
    main_folder = r"C:\Users\Enzo\Documents\PhishOracle\PhishOracle-Project\PhishOracle_Tool\downloaded_webpages_simple"

    processing_time = []
    modified_files = []

    for folder_name in os.listdir(main_folder):
        folder_path = os.path.join(main_folder, folder_name)
        if not os.path.isdir(folder_path):
            continue

        start_time = time.time()
        html_path, local_resources_path = find_target_html_and_local_resources(
            folder_path)

        if html_path and local_resources_path:
            modified_html_path = os.path.join(
                os.path.dirname(html_path), "phishing_webpage.html")

            shutil.copy(html_path, modified_html_path)
            print(f"Copied {html_path} to {modified_html_path}")

            process_images(local_resources_path)
            update_html_image_sources(modified_html_path, local_resources_path)
            print("Images processed and HTML updated.")

            # ⭐ aplique as 15 features de conteúdo AQUI, por site
            try:
                add_features_now(modified_html_path)
                print("[OK] content features aplicadas:", modified_html_path)
                modified_files.append(modified_html_path)
            except Exception as e:
                print(
                    f"[WARN] falha ao aplicar content features em {modified_html_path}: {e}")
        else:
            print(
                f"No suitable HTML or 'local_resources' folder found in: {folder_path}")

        elapsed_time = time.time() - start_time
        processing_time.append(elapsed_time)

    if processing_time:
        import matplotlib.pyplot as plt
        avg_time = sum(processing_time) / len(processing_time)
        print(f"Average processing time is = {avg_time:.4f} seconds")
        processing_time = np.sort(processing_time)
        cdf = np.arange(1, len(processing_time) + 1) / len(processing_time)

        plt.figure(figsize=(8, 5))
        plt.plot(processing_time, cdf, marker='o', linestyle='-',
                 color='b', label="PhishOracle Generation Time")
        plt.xlabel("Generation Time (seconds)")
        plt.ylabel("Cumulative Probability")
        plt.title("CDF of Generation Time for PhishOracle")
        plt.grid(True)
        plt.legend(loc='lower right')
        plt.show()
    else:
        print("No subfolders were processed")

    return modified_files


if __name__ == '__main__':
    # starting_here()
    modified_files = add_logo_based_features()
    # nada a fazer aqui; já aplicamos add_features_now() dentro do loop
