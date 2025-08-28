#!/bin/bash

set -e

echo "🚀 Iniciando deploy do FinanceTrack Pro..."

# Verificar dependências
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não encontrado. Instale o Docker primeiro."
    exit 1
fi

# Navegar para o diretório do projeto
cd "$(dirname "$0")/.."

# Criar arquivo .env se não existir
if [ ! -f .env ]; then
    echo "⚠️  Arquivo .env não encontrado. Criando a partir do exemplo..."
    cp .env.example .env
    echo "📝 Configure as variáveis de ambiente no arquivo .env"
    exit 1
fi

# Construir imagens Docker
echo "🏗️  Construindo imagens Docker..."
docker-compose -f docker/docker-compose.prod.yml build

# Parar containers antigos
echo "⏹️  Parando containers antigos..."
docker-compose -f docker/docker-compose.prod.yml down

# Iniciar novos containers
echo "▶️  Iniciando novos containers..."
docker-compose -f docker/docker-compose.prod.yml up -d

# Aguardar inicialização
echo "⏳ Aguardando inicialização dos serviços..."
sleep 30

# Verificar status
echo "🔍 Verificando status dos containers..."
docker-compose -f docker/docker-compose.prod.yml ps

echo "✅ Deploy concluído com sucesso!"
echo "🌐 Acesse: https://financetrack.yourdomain.com"