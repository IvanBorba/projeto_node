FROM node:16

RUN apt-get update

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

COPY [ "package.json", "yarn.lock" ] .

RUN yarn

COPY . .

USER node

CMD ["yarn", "run", "dev"]