# node js dockerfile
# Version 0.0.1
FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install
# Bundle app source
COPY . .

CMD [ "npm","start"]
