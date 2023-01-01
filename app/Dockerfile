FROM node:18-slim
WORKDIR /var/app
COPY yarn.lock package.json ./
RUN yarn install --production
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
