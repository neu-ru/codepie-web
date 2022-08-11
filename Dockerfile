FROM node:16

WORKDIR /codepie-web

COPY .npmrc .
COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "start"]