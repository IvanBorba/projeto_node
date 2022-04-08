FROM node:16

USER root

RUN apt-get update

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

COPY [ "package.json", "yarn.lock" ] .

RUN yarn

COPY . .

CMD ["yarn", "run", "dev"]