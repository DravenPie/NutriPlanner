FROM node:18.16.1-alpine3.17

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 19000

CMD ["npm", "start"]
