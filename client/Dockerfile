FROM node:alpine
WORKDIR /app 
COPY package-lock.json ./
COPY package.json ./
COPY README.md ./
RUN npm install -f

CMD ["npm", "run","start"]
EXPOSE 3000