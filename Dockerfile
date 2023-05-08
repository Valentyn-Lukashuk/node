FROM node:12.22.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install 
EXPOSE 3000
CMD [ "node", "dist/src/main" ]
