FROM node:latest

LABEL author = "gustavo._henrique@hotmail.com"
LABEL version = 1

# Create app directory
WORKDIR /app/kapi

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]