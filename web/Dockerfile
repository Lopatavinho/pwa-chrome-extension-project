# Estágio de build (opcional, mas bom para projetos maiores)
FROM node:18-alpine as builder
WORKDIR /app
# Se você tivesse um build como 'npm run build', ele iria aqui.
# Como o PWA será simples (HTML/CSS/JS puros), podemos pular,
# mas mantemos a estrutura para escalabilidade.

# Estágio final: Servir com Nginx
FROM nginx:alpine
# Remove a página default do Nginx
RUN rm -rf /usr/share/nginx/html/*
# Copia o código do PWA que faremos na etapa 5 para o diretório de serviço do Nginx
COPY ./ /usr/share/nginx/html
# A porta 80 é a porta padrão que o Nginx expõe
EXPOSE 80
# O comando padrão do Nginx irá rodar
CMD ["nginx", "-g", "daemon off;"]