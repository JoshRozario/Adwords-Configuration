FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node server.js --host 0.0.0.0 --disable-host-check & npm start
EXPOSE 3005
EXPOSE 3000