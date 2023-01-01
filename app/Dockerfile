FROM node:18-slim
WORKDIR /var/app
COPY yarn.lock package.json ./
RUN yarn install --production
COPY . .
CMD ["yarn", "start"]
