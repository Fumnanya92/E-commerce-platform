# Use the official Node.js image as the base image
FROM node:20 as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Production image
FROM nginx:alpine

# Copy the build folder from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port NGINX is listening on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
