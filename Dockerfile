FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm build
CMD ["npm", "run", "sart"]

EXPOSE 80