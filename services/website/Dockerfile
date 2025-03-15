FROM node:22-alpine

WORKDIR /src 

COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

EXPOSE 3000
ARG START_URL
ARG POCKETBASE_URL
ENV ORIGIN=$START_URL
ENV POCKETBASE_URL=$POCKETBASE_URL
ENV NODE_ENV=production

CMD [ "node", "build" ]