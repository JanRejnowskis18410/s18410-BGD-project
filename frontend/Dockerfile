FROM node:22.3-alpine3.19

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --force

COPY . .

ENV PORT=5173

EXPOSE 5173

CMD ["npm", "start"]