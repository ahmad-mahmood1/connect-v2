# Use the official Node.js image from Docker Hub
FROM node:21-alpine3.18

# Set the working directory inside the container
WORKDIR /usr/src/app/next-connect-poc

# Copy only the package.json and yarn.lock files first
COPY package.json yarn.lock ./

# Install dependencies (benefits from Docker cache if package files don't change)
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port if your application runs on a specific port
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "dev"]
