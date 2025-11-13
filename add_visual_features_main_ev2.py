# --- ADD: flags de perfil no topo ---
import os, time, io, json, random, csv, argparse
import shutil  
from pathlib import Path
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageFont, ImageDraw, UnidentifiedImageError
from bs4 import BeautifulSoup


PROFILE = "default"  # default = seu fluxo atual (Evasion1 / mistura)
ROOT = Path(__file__).resolve().parent
WEB_ROOT = ROOT / "downloaded_webpages_simple"

# Arquivo opcional com logos por domínio (feito por build_brand_gallery.py)
BRAND_GALLERY = ROOT / "datasets" / "EvasionSet2" / "brand_gallery.json"

def find_target_html_and_local_resources(folder_path):
    for root, dirs, files in os.walk(folder_path):
        lower_map = {d.lower(): d for d in dirs}
        if "local_resources" in lower_map:
            lr_real = lower_map["local_resources"]
            parent_dir = root
            local_resources_path = os.path.join(parent_dir, lr_real)
            for html_file in ("index.html", "main.html"):
                html_path = os.path.join(parent_dir, html_file)
                if os.path.isfile(html_path):
                    return html_path, local_resources_path
    return None, None

# --- ADD: helpers “soft” para Evasion2 ---
def soft_logo_transform(input_path: str, output_path: str):
    """Transformação MUITO leve (EV2): preserva identidade do logo."""
    img = Image.open(input_path).convert("RGBA")

    # rotação bem pequena
    angle = random.uniform(-1.5, 1.5)   # antes ±3
    img = img.rotate(angle, expand=True)

    # leve ajuste de brilho/contraste (quase neutro)
    img = ImageEnhance.Brightness(img).enhance(random.uniform(0.98, 1.02))
    img = ImageEnhance.Contrast(img).enhance(random.uniform(0.98, 1.02))

    # ruído gaussiano extremamente baixo no RGB
    arr = np.array(img)
    has_alpha = (arr.shape[2] == 4)
    rgb = arr[..., :3].astype(np.float32)
    sigma = random.uniform(0.4, 0.8)     # antes 1.0–2.0
    noise = np.random.normal(0, sigma, rgb.shape).astype(np.float32)
    rgb = np.clip(rgb + noise, 0, 255).astype(np.uint8)
    out = Image.fromarray(rgb, mode="RGB")

    # ⚠️ NÃO use compactação JPEG aqui (perde detalhe de logo)
    # Salve como PNG “limpo” para manter nitidez
    if has_alpha:
        out = out.convert("RGBA")
        out.putalpha(Image.fromarray(arr[..., 3]))

    out.save(output_path, format="PNG")

def looks_like_logo(path: Path) -> bool:
    """Heurística simples caso não haja brand_gallery.json."""
    name = path.name.lower()
    if path.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp", ".gif"}:
        return False
    # nomes que sugerem logo
    hits = ("logo", "brand", "mark", "icon")
    if any(h in name for h in hits):
        return True
    # tamanho mínimo para não pegar favicon etc.
    try:
        w, h = Image.open(path).size
        return (w * h) >= 12_000  # ~110x110
    except Exception:
        return False

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

# --- ADAPTAR process_images para EV2-SOFT ---
def process_images_ev2_soft(domain_dir: Path):
    """
    EvasionSet2 fiel ao paper:
    - só mexe em logos;
    - transformações suaves;
    - não toca em âncoras/forms/etc.
    """
    local_resources = domain_dir / "local_resources"
    if not local_resources.exists():
        return set()

    # 1) se existir brand_gallery.json, usar a lista do domínio
    logos_target = set()
    if BRAND_GALLERY.exists():
        try:
            gallery = json.loads(BRAND_GALLERY.read_text(encoding="utf-8"))
            # normaliza domínio (pasta = domínio)
            dom = domain_dir.name.lower()
            if dom in gallery:
                # o JSON deve guardar nomes relativos/arquivos detectados como logo
                for rel in gallery[dom].get("logos", []):
                    logos_target.add(Path(rel).name.lower())
        except Exception:
            pass

    changed = set()
    for p in local_resources.iterdir():
        if not p.is_file():
            continue
        if p.name.lower().startswith("phish_"):
            continue
        if p.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp", ".gif"}:
            continue

        target = (p.name.lower() in logos_target) if logos_target else looks_like_logo(p)
        if not target:
            continue

        out = p.with_name(f"phish_{p.name}")
        try:
            soft_logo_transform(str(p), str(out))
            changed.add(p.name) 
        except Exception as e:
            print(f"[warn] ev2-soft falhou em {p.name}: {e}")
    return changed

# NOVA: reescreve só as <img src="..."> que foram alteradas
def update_html_for_changed_images(html_file_path, changed_names: set):
    if not changed_names:
        return
    with open(html_file_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    for img in soup.find_all("img"):
        src = img.get("src")
        if not src:
            continue
        base = os.path.basename(src)
        if base in changed_names and not base.lower().startswith("phish_"):
            img["src"] = src.replace(base, f"phish_{base}")

    with open(html_file_path, "w", encoding="utf-8") as f:
        f.write(str(soup))

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

def process_images(local_resources_path):
    """
    Varre imagens raster e aplica uma transformação aleatória (AGRESSIVA).
    """
    local_resources_path = Path(local_resources_path)
    if not local_resources_path.exists():
        print(f"[skip] pasta não existe: {local_resources_path}")
        return

    raster_exts = {".png", ".jpg", ".jpeg", ".webp", ".bmp", ".gif"}
    # NOTA: Estas são as transformações AGRESSIVAS do EvasionSet1
    transforms_list = [
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
        
        # Ignora arquivos já atacados (bug do phish_phish_)
        if p.name.lower().startswith("phish_"):
            continue

        out = p.with_name(f"phish_{p.name}")
        try:
            random.choice(transforms_list)(str(p), str(out), watermark_text="PhishOracle")
        except UnidentifiedImageError:
            print(f"[warn] formato não suportado por Pillow: {p.name}")
        except Exception as e:
            print(f"[warn] falha ao processar {p.name}: {e}")

# --- alterar add_logo_based_features para respeitar perfil ---
def add_logo_based_features():
    main_folder = str(WEB_ROOT)
    processing_time, modified_files = [], []

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

            # === PERFIS ===
            if PROFILE == "ev2-soft":
                # só mexe em logos, leve
                changed = process_images_ev2_soft(Path(folder_path))
                shutil.copy(html_path, modified_html_path)
                update_html_for_changed_images(modified_html_path, changed)
                print(f"[EV2] logos transformados (suave): {len(changed)}")
                # *** NÃO aplicar add_features_now aqui ***
            else:
                # seu fluxo anterior (mistura: visual + conteúdo)
                shutil.copy(html_path, modified_html_path)
                process_images(local_resources_path)
                update_html_image_sources(modified_html_path, local_resources_path)
                try:
                    from adding_15_features import add_features_now
                    print(f"-> Tentando aplicar 'add_features_now' em: {modified_html_path}")
                    add_features_now(modified_html_path)
                    print("[OK] content features aplicadas:", modified_html_path)
                except Exception as e:
                    print(f"\n[ERRO GRAVE] 'add_features_now' FALHOU para {modified_html_path}.")
                    print("O erro real é:")
                    print(traceback.format_exc())
                    print("--------------------------------------------------\n")

            modified_files.append(modified_html_path)
        else:
            print(f"No suitable HTML or 'local_resources' folder found in: {folder_path}")

        processing_time.append(time.time() - start_time)

    # (mantém seu bloco de relatório CDF, se quiser)
    return modified_files

# --- main com argparse ---
if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument("--profile", choices=["default", "ev2-soft"], default="default")
    PROFILE = ap.parse_args().profile
    add_logo_based_features()
