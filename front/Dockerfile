FROM node:18.16.1-alpine3.17

WORKDIR /usr/app/front

CMD [ -d "node_modules" ] && npm run web || npm ci && npm run web
