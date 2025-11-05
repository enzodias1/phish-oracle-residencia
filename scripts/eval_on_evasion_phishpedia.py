import os
import json
import torch
import re
import glob
import torch.nn.functional as F
from PIL import Image
from torchvision import transforms
from tqdm import tqdm
from sklearn.metrics import classification_report, confusion_matrix

# Importa a classe do nosso modelo do script de treino
try:
    from train_phishpedia import PhishpediaExtractor
except ImportError:
    print("ERRO: Não foi possível importar 'PhishpediaExtractor' de 'train_phishpedia.py'")
    exit()

# --- 1. Configuração de Caminhos ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)

# Caminho para os arquivos de logo originais (usados no ataque)
WEB_ROOT = os.path.join(PROJECT_ROOT, "downloaded_webpages_simple")
# O JSON com os vetores "puros" (que já criamos)
REF_VECTORS_JSON = os.path.join(PROJECT_ROOT, 'reference_vectors.json')
# O modelo que treinamos
MODEL_PATH = os.path.join(PROJECT_ROOT, 'phishpedia_extractor.pth')

# --- 2. Parâmetro de Avaliação (O PONTO CHAVE) ---
# Este é o nosso "botão" para calibrar o recall.
# Se a similaridade (0.0-1.0) estiver ACIMA disso, o modelo foi enganado.
# Um valor alto (ex: 0.9) significa que o modelo é rigoroso.
# Um valor baixo (ex: 0.7) significa que o modelo é leniente.
SIMILARITY_THRESHOLD = 0.85 

# --- 3. Carregar Modelos e Dados de Referência ---
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Usando dispositivo: {device}")

print(f"Carregando extrator Phishpedia de: {MODEL_PATH}")
extractor_model = PhishpediaExtractor().to(device)
extractor_model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
extractor_model.eval() 
print("Extrator Phishpedia carregado.")

print(f"Carregando vetores de referência de: {REF_VECTORS_JSON}")
try:
    with open(REF_VECTORS_JSON, 'r') as f:
        ref_vectors_dict = json.load(f)
except FileNotFoundError:
    print(f"ERRO: Arquivo '{REF_VECTORS_JSON}' não encontrado.")
    print("Por favor, execute 'python scripts/build_reference_vectors.py' (Versão 10) primeiro.")
    exit()

# Converte vetores de referência para tensores PyTorch na GPU
ref_domains_list = list(ref_vectors_dict.keys())
ref_vectors_tensor = torch.tensor(list(ref_vectors_dict.values()), device=device)
print(f"{len(ref_domains_list)} vetores de referência carregados na GPU.")

# --- 4. Transformações de Imagem ---
data_transforms = transforms.Compose([
    transforms.Resize((224, 224)), 
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# --- 5. Função Auxiliar de Extração de Vetor ---
def get_vector_from_image(img_path, extractor, device):
    """Carrega uma imagem e retorna seu vetor."""
    try:
        img = Image.open(img_path).convert('RGB')
        tensor = data_transforms(img).unsqueeze(0).to(device)
        with torch.no_grad():
            vector = extractor(tensor)
        return vector
    except Exception as e:
        print(f"AVISO: Falha ao processar a imagem {img_path}. Erro: {e}")
        return None

# --- 6. Processo Principal de Avaliação ---
def evaluate_phishpedia():
    print(f"\n--- Iniciando Avaliação Phishpedia (Método de Vetor Direto) ---")
    print(f"Limiar de Similaridade: {SIMILARITY_THRESHOLD}")
    
    predictions = []
    ground_truth = []
    
    # --- Avaliação do CleanSet (Legítimo) ---
    # Para o CleanSet, comparamos os vetores de referência com eles mesmos
    # Isso é um "teste de sanidade". O recall deve ser 100%.
    print("\nProcessando CleanSet (Teste de Sanidade)...")
    for domain in tqdm(ref_domains_list, desc="Processando CleanSet2"):
        ground_truth.append(0) # 0 = Legítimo
        
        # Pega o vetor de referência
        ref_vector = torch.tensor(ref_vectors_dict[domain], device=device).unsqueeze(0)
        
        # Compara com a lista inteira
        similarities = F.cosine_similarity(ref_vector, ref_vectors_tensor)
        best_match_idx = similarities.argmax()
        predicted_domain = ref_domains_list[best_match_idx]
        
        if predicted_domain == domain and similarities.max() > SIMILARITY_THRESHOLD:
            predictions.append(0) # Acertou (True Negative)
        else:
            predictions.append(1) # Errou (Falso Positivo)

    # --- Avaliação do EvasionSet (Phishing) ---
    print("\nProcessando EvasionSet (Phishing)...")
    
    # Encontra TODOS os logos atacados que o 'AttackGen' criou
    # (Ex: .../local_resources/phish_logo.png)
    attacked_logo_files = glob.glob(os.path.join(WEB_ROOT, "*", "local_resources", "phish_*"))
    
    if not attacked_logo_files:
         print(f"ERRO: Nenhum logo atacado (ex: 'phish_logo.png') foi encontrado em '{WEB_ROOT}'.")
         print("Por favor, execute 'python scripts/add_visual_features_main_ev2.py --profile ev2-soft' primeiro.")

    for img_path in tqdm(attacked_logo_files, desc="Processando EvasionSet2"):
        
        # Extrai o domínio verdadeiro do caminho da pasta
        # Ex: '.../downloaded_webpages_simple/google.com/local_resources/phish_logo.png' -> 'google.com'
        try:
            true_domain = os.path.basename(os.path.dirname(os.path.dirname(img_path)))
        except Exception:
            continue
            
        # Pula se o domínio não estiver na nossa lista de 74
        if true_domain not in ref_vectors_dict:
            print(f"AVISO: Domínio {true_domain} (de {img_path}) não está na lista de referência. Pulando.")
            continue
            
        ground_truth.append(1) # 1 = Phishing
        
        # 1. Extrai o vetor do logo ATACADO
        attacked_vector = get_vector_from_image(img_path, extractor_model, device)
        if attacked_vector is None:
            predictions.append(1) # Falha ao carregar = detectado como "quebrado" (True Positive)
            continue
        
        # 2. Pega o vetor PURO (de referência) para este domínio
        pure_vector = torch.tensor(ref_vectors_dict[true_domain], device=device).unsqueeze(0)
        
        # 3. Calcula a similaridade
        similarity = F.cosine_similarity(attacked_vector, pure_vector)
        
        # 4. Toma a decisão
        if similarity.item() > SIMILARITY_THRESHOLD:
            # O vetor atacado ainda é MUITO similar ao puro.
            # O modelo foi enganado.
            predictions.append(0) # Falso Negativo (marcado como legítimo)
        else:
            # O vetor atacado foi distorcido o suficiente.
            # O modelo detectou a anomalia.
            predictions.append(1) # Acertou (True Positive, marcou como phishing)

    # --- 7. Exibir Resultados ---
    print("\n--- Resultados Finais (Phishpedia - Vetor Direto) ---")
    
    if len(ground_truth) != len(predictions) or not predictions:
        print("ERRO: Nenhuma amostra foi processada. Verifique os caminhos.")
        return

    print(f"Usando Limiar (Threshold): {SIMILARITY_THRESHOLD}")
    print("Matriz de Confusão (0=Legítimo, 1=Phishing):")
    cm = confusion_matrix(ground_truth, predictions, labels=[0, 1])
    print(cm)
    
    print("\nRelatório de Classificação (GERAL):")
    print(classification_report(ground_truth, predictions, target_names=["Legítimo (0)", "Phishing (1)"], zero_division=0))
    
    print("\n--- Análise do EvasionSet (Phishing) ---")
    evasion_gt = [gt for gt, pred in zip(ground_truth, predictions) if gt == 1]
    evasion_preds = [pred for gt, pred in zip(ground_truth, predictions) if gt == 1]
    
    if not evasion_gt:
        print("Nenhuma amostra do EvasionSet foi processada.")
        return
        
    total_phish = len(evasion_gt)
    fooled = sum(1 for p in evasion_preds if p == 0)
    detected = sum(1 for p in evasion_preds if p == 1)
    
    recall = detected / total_phish if total_phish > 0 else 0
    fooling_rate = fooled / total_phish if total_phish > 0 else 0

    print(f"Total de amostras de Phishing (EvasionSet) avaliadas: {total_phish}")
    print(f"Detectadas corretamente (True Positives): {detected}")
    print(f"Ignoradas como 'Legítimo' (Falsos Negativos): {fooled}")
    
    print("\n-----------------------------------------------------")
    print(f"🎯 Recall de Phishing (Taxa de Detecção): {recall * 100:.2f}%")
    print(f"🔥 Taxa de Engano (Fooling Rate): {fooling_rate * 100:.2f}%")
    print("-----------------------------------------------------")
    print(f"(Objetivo do artigo para Recall: ~40%)")


if __name__ == "__main__":
    evaluate_phishpedia()