FROM node:lts-alpine

WORKDIR /washmen/api

COPY package.*.json .
COPY . .

RUN npm install 

RUN npm run build

ENV NODE_ENV production

EXPOSE 3001

CMD ["node", "dist/server.js"]
