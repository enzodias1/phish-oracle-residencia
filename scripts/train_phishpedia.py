import os
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader, Dataset
from torchvision import models, transforms
from PIL import Image
from tqdm import tqdm
import random
import numpy as np

# --- 1. Definição do Dataset Customizado ---
# (Voltamos para a versão simples, que só carrega UMA imagem)
class Logo2KDataset(Dataset):
    def __init__(self, root_dir, txt_file, transform=None):
        self.root_dir = root_dir
        self.transform = transform
        self.image_paths = []
        self.labels = []
        
        self.class_to_idx = {}
        current_idx = 0

        print(f"Lendo o arquivo de lista: {txt_file}")
        with open(txt_file, 'r') as f:
            for line in f:
                image_path_relative = line.strip().replace('\\', '/')
                if not image_path_relative or not image_path_relative.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
                    continue
                try:
                    label_name = image_path_relative.split('/')[1] 
                except IndexError:
                    continue
                if label_name not in self.class_to_idx:
                    self.class_to_idx[label_name] = current_idx
                    current_idx += 1
                label_idx = self.class_to_idx[label_name]
                self.image_paths.append(os.path.join(self.root_dir, image_path_relative))
                self.labels.append(label_idx)
        
        print(f"Total de classes (marcas) encontradas: {len(self.class_to_idx)}")
        print(f"Total de imagens de treino (filtradas): {len(self.image_paths)}")

    def __len__(self):
        return len(self.image_paths)

    def __getitem__(self, idx):
        img_path = self.image_paths[idx]
        label = self.labels[idx]
        try:
            image = Image.open(img_path).convert('RGB')
        except Exception:
            image = Image.new('RGB', (224, 224), (0, 0, 0)) 
        
        if self.transform:
            image = self.transform(image)
        return image, label

# --- 2. Definição do Modelo (O Extrator de Vetores) ---
# (Idêntico à Versão 6)
class PhishpediaExtractor(nn.Module):
    def __init__(self, vector_size=512):
        super(PhishpediaExtractor, self).__init__()
        resnet = models.resnet50(weights=models.ResNet50_Weights.IMAGENET1K_V2)
        modules = list(resnet.children())[:-1] 
        self.feature_extractor = nn.Sequential(*modules)
        self.pool = nn.AdaptiveAvgPool2d((1, 1))
        self.neck = nn.Sequential(
            nn.Linear(resnet.fc.in_features, vector_size),
            nn.BatchNorm1d(vector_size),
        )
        print(f"Modelo Extrator (ResNet50 + Neck) criado. Saída do vetor: {vector_size} dimensões.")

    def forward(self, x):
        x = self.feature_extractor(x) 
        x = self.pool(x)
        x = x.view(x.size(0), -1) 
        vector = self.neck(x)
        return vector

# --- 3. Batch Hard Triplet Mining Loss (O CÉREBRO) ---
def batch_hard_triplet_loss(labels, embeddings, margin, device):
    pairwise_dist = torch.cdist(embeddings, embeddings, p=2) # Distância Euclidiana

    mask_positive = (labels.unsqueeze(1) == labels.unsqueeze(0)).to(device)
    mask_negative = ~mask_positive

    # Adiciona um valor grande à diagonal para ignorar a distância de um elemento a si mesmo
    mask_positive.fill_diagonal_(False)

    # Encontra o POSITIVO MAIS DIFÍCIL (o mais distante)
    dist_pos = pairwise_dist * mask_positive.float()
    hardest_positive_dist, _ = torch.max(dist_pos, dim=1)

    # Encontra o NEGATIVO MAIS DIFÍCIL (o mais próximo)
    # Damos um valor grande aos positivos para que eles não sejam escolhidos como o mínimo
    dist_neg = pairwise_dist + torch.max(pairwise_dist) * (~mask_negative).float()
    hardest_negative_dist, _ = torch.min(dist_neg, dim=1)

    triplet_loss = torch.clamp(hardest_positive_dist - hardest_negative_dist + margin, min=0.0)
    
    return triplet_loss.mean()

# --- 4. Preparação do Dataset e DataLoader ---
DATASET_ROOT = "C:/Users/Enzo/Downloads/Logo-2K+/Logo-2K+" 
LIST_DIR = "C:/Users/Enzo/Downloads/Logo-2K+/List"
TRAIN_TXT = os.path.join(LIST_DIR, 'train_images_root.txt')

data_transforms = transforms.Compose([
    transforms.Resize((224, 224)), 
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

train_dataset = Logo2KDataset(root_dir=DATASET_ROOT, txt_file=TRAIN_TXT, transform=data_transforms)

# Usamos um batch size maior, pois o "mining" funciona melhor com mais exemplos
train_loader = DataLoader(
    train_dataset, 
    batch_size=64, 
    shuffle=True, 
    num_workers=0, # num_workers > 0 ainda é problemático no Windows
    pin_memory=False
)

# --- 5. Configuração do Treinamento ---
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Usando dispositivo: {device}")

model = PhishpediaExtractor().to(device)

NUM_EPOCHS = 30
optimizer = optim.Adam(model.parameters(), lr=0.0001)
MARGIN = 1.0 # Margem da Triplet Loss

# --- 6. Lógica de Treinamento (Batch Hard Mining) ---
def train_epoch(model, loader, optimizer, device, margin):
    model.train() 
    total_loss = 0
    
    progress_bar = tqdm(loader, desc="Treinando (Batch Hard)", unit="batch")
    
    for images, labels in progress_bar:
        images = images.to(device)
        labels = labels.to(device)
        
        optimizer.zero_grad()
        
        # 1. Passa o lote de imagens pelo modelo para obter os vetores
        vectors = model(images)
        
        # 2. Calcula a Batch Hard Triplet Loss
        loss = batch_hard_triplet_loss(labels, vectors, margin, device)
        
        # 3. Backpropagation
        loss.backward()
        optimizer.step()
        
        total_loss += loss.item()
        progress_bar.set_postfix(loss=loss.item())
        
    avg_loss = total_loss / len(loader)
    print(f"Fim da Época. Perda Média (Batch Hard Triplet): {avg_loss:.4f}")
    return avg_loss

# --- 7. Execução Principal ---
def main():
    print(f"Iniciando treinamento (Batch Hard Triplet) por {NUM_EPOCHS} épocas...")
    
    for epoch in range(1, NUM_EPOCHS + 1):
        print(f"\n--- Época {epoch}/{NUM_EPOCHS} ---")
        train_epoch(model, train_loader, optimizer, device, MARGIN)
        
    print("\nTreinamento (Batch Hard Triplet) concluído!")
    
    output_path = "phishpedia_extractor.pth"
    torch.save(model.state_dict(), output_path)
    print(f"Modelo (Batch Hard Triplet) salvo em: {output_path}")

if __name__ == '__main__':
    main()