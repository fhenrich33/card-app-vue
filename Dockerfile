FROM node:12.16.1-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn install
RUN yarn global add @vue/cli@4.2.3

CMD ["yarn", "serve"]
