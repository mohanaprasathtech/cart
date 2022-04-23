FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]
# FROM node:12.18.1

# RUN npm install -g serve
# CMD serve -s build
# EXPOSE 5000

# COPY package.json package.json
# RUN npm install

# COPY . .docker
# RUN npm run build --production
