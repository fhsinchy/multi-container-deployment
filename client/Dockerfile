FROM node:lts

EXPOSE 8080

WORKDIR /usr/app

COPY ./package.json .
RUN npm install

COPY . .

CMD [ "npm", "run", "build" ]