FROM node:20.5.1-alpine3.18

ENV SERVICE_NAME 'N/A'
ENV PORT '8080'

WORKDIR /app
COPY app .

CMD [ "node", "server.js" ]