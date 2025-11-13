import os
import json

# O diretório raiz do seu projeto
project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
search_dir = os.path.join(project_root, 'datasets')

print(f"Iniciando busca por arquivos de anotação em: {search_dir}\n")

found_files = {
    "json_with_bbox": [],
    "xml_with_bndbox": []
}

# Percorre todos os arquivos e subdiretórios
for root, _, files in os.walk(search_dir):
    for file in files:
        file_path = os.path.join(root, file)
        
        # Verifica arquivos JSON que contenham a chave "bbox"
        if file.endswith('.json'):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '"bbox"' in content:
                        found_files["json_with_bbox"].append(file_path)
            except Exception:
                continue # Ignora arquivos json mal formatados

        # Verifica arquivos XML que contenham a tag "bndbox"
        if file.endswith('.xml'):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    if '<bndbox>' in content or '<bndbox ' in content:
                        found_files["xml_with_bndbox"].append(file_path)
            except Exception:
                continue

print("--- RESULTADO DA BUSCA ---")

if found_files["json_with_bbox"] or found_files["xml_with_bndbox"]:
    print("✅ SUCESSO! Arquivos de anotação provavelmente encontrados.\n")
    if found_files["json_with_bbox"]:
        print(f"Encontrados {len(found_files['json_with_bbox'])} arquivos .json com a chave 'bbox'.")
        print(f"Exemplo: {found_files['json_with_bbox'][0]}\n")
    if found_files["xml_with_bndbox"]:
        print(f"Encontrados {len(found_files['xml_with_bndbox'])} arquivos .xml com a tag 'bndbox'.")
        print(f"Exemplo: {found_files['xml_with_bndbox'][0]}\n")
else:
    print("❌ NENHUM arquivo de anotação (.json com 'bbox' ou .xml com 'bndbox') foi encontrado.")
    print("Isso indica que provavelmente não temos os dados de treino para o detector de objetos.")

print("--- FIM ---")