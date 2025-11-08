# Usa uma imagem base oficial do Node
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /usr/src/app

# Copia package.json e package-lock.json (para aproveitar o cache)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Expõe a porta que o app Express está escutando
EXPOSE 3000

# Comando para rodar a aplicação
CMD [ "node", "server.js" ]