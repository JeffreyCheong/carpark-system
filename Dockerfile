FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run dev

CMD [ "npm", "dev" ]
EXPOSE 7001