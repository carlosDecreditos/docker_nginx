FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN npm install

EXPOSE 8000

COPY . /app

CMD [ "npm", "run", "dev" ]