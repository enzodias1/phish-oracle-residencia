import os
import json
import torch
from PIL import Image
from torchvision import transforms
from tqdm import tqdm

# Importa a classe do nosso modelo do script de treino
try:
    from train_phishpedia import PhishpediaExtractor
except ImportError:
    print("ERRO: Não foi possível importar 'PhishpediaExtractor' de 'train_phishpedia.py'")
    exit()

# --- 1. Configuração de Caminhos ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)

GALLERY_JSON = os.path.join(PROJECT_ROOT, 'datasets', 'EvasionSet2', 'brand_gallery.json')
MODEL_PATH = os.path.join(PROJECT_ROOT, 'phishpedia_extractor.pth')
OUTPUT_JSON = os.path.join(PROJECT_ROOT, 'reference_vectors.json')

# --- 2. Carregar Modelos ---
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Usando dispositivo: {device}")

print(f"Carregando extrator Phishpedia de: {MODEL_PATH}")
# CORREÇÃO: Removemos o 'num_classes'
extractor_model = PhishpediaExtractor().to(device) 
extractor_model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
extractor_model.eval() 
print("Extrator Phishpedia carregado.")

# --- 3. Transformações de Imagem ---
data_transforms = transforms.Compose([
    transforms.Resize((224, 224)), 
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# --- 4. Processo Principal (Baseado na Galeria) ---
def build_reference_list():
    print(f"Lendo galeria de referência: {GALLERY_JSON}")
    try:
        with open(GALLERY_JSON, 'r') as f:
            brand_gallery = json.load(f)
    except FileNotFoundError:
        print(f"ERRO: Arquivo '{GALLERY_JSON}' não encontrado.")
        print("Por favor, execute 'python scripts/build_brand_gallery.py' primeiro.")
        return

    reference_vectors = {}
    
    with torch.no_grad():
        for brand_info in tqdm(brand_gallery, desc="Processando Galeria de Marcas"):
            domain = brand_info.get('domain')
            logos = brand_info.get('logos')
            
            if not domain or not logos:
                continue
                
            logo_path = logos[0].get('path')
            if not logo_path or not os.path.exists(logo_path):
                print(f"AVISO: Imagem de logo não encontrada para {domain}, pulando: {logo_path}")
                continue

            try:
                logo_img = Image.open(logo_path).convert('RGB')
            except Exception as e:
                print(f"AVISO: Falha ao abrir a imagem {logo_path}. Erro: {e}")
                continue

            logo_tensor = data_transforms(logo_img).unsqueeze(0).to(device)

            # CORREÇÃO: O modelo agora retorna apenas 1 valor
            vector = extractor_model(logo_tensor) 
            
            reference_vectors[domain] = vector.cpu().squeeze().tolist()
            
    # --- 5. Salvar Resultados ---
    print(f"\nProcessamento concluído. {len(reference_vectors)} vetores de referência extraídos.")
    print(f"Salvando vetores em: {OUTPUT_JSON}")
    
    with open(OUTPUT_JSON, 'w') as f:
        json.dump(reference_vectors, f, indent=4)
        
    print("Concluído!")

if __name__ == "__main__":
    build_reference_list()