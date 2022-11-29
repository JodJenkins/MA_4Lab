FROM node:12

WORKDIR /app

COPY server/package*.json ./
COPY server/wait-for-it.sh /usr/bin/wait-for-it.sh

RUN npm install
RUN npm install request --save

COPY server/. .

EXPOSE 5000

CMD ["npm", "run", "dev"]