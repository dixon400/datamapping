FROM node:18-alpine

RUN mkdir -p /var/log/applications/datamapping

RUN mkdir /src
WORKDIR /src
COPY package.json /src

RUN npm install

COPY . .

VOLUME ["/src", "/var/log/applications/datamapping"]

EXPOSE 3000

CMD [ "npm", "start" ]
