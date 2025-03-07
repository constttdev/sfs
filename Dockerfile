FROM node:20-alpine

WORKDIR /src

RUN npm i -g pnpm

COPY ["./app/package.json", "./app/pnpm-lock.yaml*", "./"]

RUN pnpm install

EXPOSE 3000 5173

CMD ["pnpm", "run", "dev"]