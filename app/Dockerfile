FROM node:22

WORKDIR /workspace/app

RUN npm install -g @angular/cli@latest

COPY package*.json .
RUN npm ci

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
