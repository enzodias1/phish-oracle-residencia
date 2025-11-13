import os
import glob
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WEB_ROOT = ROOT / "downloaded_webpages_simple"

def clean_logos():
    print(f"Iniciando limpeza em: {WEB_ROOT}")
    
    # Encontra todos os arquivos que começam com "phish_"
    attacked_files = glob.glob(os.path.join(WEB_ROOT, "*", "local_resources", "phish_*"))
    
    if not attacked_files:
        print("Nenhum arquivo 'phish_' encontrado. A pasta está limpa.")
        return

    print(f"Encontrados {len(attacked_files)} arquivos de logo atacados para deletar...")
    
    deleted_count = 0
    for f_path in attacked_files:
        try:
            os.remove(f_path)
            deleted_count += 1
        except Exception as e:
            print(f"AVISO: Falha ao deletar {f_path}. Erro: {e}")
            
    print(f"\nLimpeza concluída. {deleted_count} arquivos deletados.")

if __name__ == "__main__":
    clean_logos()