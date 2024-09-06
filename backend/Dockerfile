# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for caching dependencies
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose the port that your application will run on
EXPOSE 5001

# Command to run the application
CMD ["npm", "start"]