# Setup and build the client

FROM mhart/alpine-node:latest as client
WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install -qy
COPY client/ ./
RUN npm run build
