FROM node:14

# Create destination directory
WORKDIR E:/Docker

COPY package.json ./
RUN yarn

COPY . .
EXPOSE 3000

RUN node_modules/.bin/nuxt build

CMD ["yarn", "start"]