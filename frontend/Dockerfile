# Use the official Node.js image to build the application
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Build the application
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port that Nginx will use
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]