FROM node:20.5.1-alpine3.18

ENV SERVICE_NAME 'N/A'
ENV PORT '8080'

EXPOSE ${PORT}
WORKDIR /app
COPY app .
COPY package.json .
COPY package-lock.json .

RUN npm install --omit=dev

ENTRYPOINT [ "node", "server.js" ]