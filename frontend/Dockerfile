# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Set the working directory to the Nginx default HTML directory
WORKDIR /usr/share/nginx/html

# Copy all frontend files (HTML, CSS, JS) to the Nginx HTML directory
COPY . .

# Expose port 80 to the Docker host
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]