# Estágio 1: Build da Aplicação
# Usa uma imagem Node.js para instalar dependências e buildar o projeto
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servidor de Produção
# Usa uma imagem Nginx super leve para servir os arquivos estáticos
FROM nginx:stable-alpine
# Copia os arquivos da pasta 'dist' gerada no estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html
# Expõe a porta 80 para o tráfego web
EXPOSE 80
# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]