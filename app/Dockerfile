FROM node:18.16.1-alpine3.17

WORKDIR /usr/app/app

CMD [ -d "node_modules" ] && npm start || npm ci && npm start
