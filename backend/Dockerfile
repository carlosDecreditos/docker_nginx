FROM node:alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

EXPOSE 8000

COPY . /app/

CMD [ "npm", "run", "dev" ]