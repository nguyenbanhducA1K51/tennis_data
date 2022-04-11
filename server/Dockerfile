FROM node:alpine
WORKDIR /app 
COPY package-lock.json ./
COPY package.json ./

COPY ./ ./

RUN npm i

CMD ["npm", "run","start"]