FROM node:21-alpine3.18

# install OpenSSL 1.1.x, needed for Linux Alpine 3.17+
RUN apk add --no-cache --update openssl1.1-compat
WORKDIR /usr/mayoor

COPY . .
RUN npm install


EXPOSE 3000

CMD ["npm", "run", "dev"]
