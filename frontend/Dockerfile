FROM node:18.12.1

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npm i -g serve

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]