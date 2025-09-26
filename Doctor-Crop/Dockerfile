# Build Ionic Angular frontend
FROM node:18 as build

# Create working directory inside container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Build the Ionic app
RUN npm run build --prod

# Serve with Nginx
FROM nginx:alpine

# Copy compiled Ionic build from "www" to nginx root
COPY --from=build /usr/src/app/www /usr/share/nginx/html

EXPOSE 80
