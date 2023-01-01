from node:18-slim
workdir /var/app
copy yarn.lock package.json .
run yarn install --production
copy . .
expose 3000
cmd ["yarn", "start"]
