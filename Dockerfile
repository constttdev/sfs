FROM node:20-alpine

WORKDIR /src

COPY ["./package.json", "./pnpm-lock.yaml*", "./"]

ARG POCKETBASE_URL

ENV POCKETBASE_URL=https://example.com

RUN npm install

EXPOSE 3000

RUN npm run build

CMD ["node", "build"]