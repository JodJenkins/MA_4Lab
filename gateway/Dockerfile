FROM node:12

WORKDIR /app

COPY gateway/package*.json ./
COPY gateway/wait-for-it.sh /usr/bin/wait-for-it.sh

RUN npm install
RUN npm install request --save

COPY gateway/. .

EXPOSE 3000

CMD ["npm", "run", "dev"]