FROM node:12

WORKDIR /app

COPY server_2/package*.json ./
COPY server_2/wait-for-it.sh /usr/bin/wait-for-it.sh

RUN npm install
RUN npm install request --save

COPY server_2/. .

EXPOSE 27017

CMD ["npm", "run", "dev"]