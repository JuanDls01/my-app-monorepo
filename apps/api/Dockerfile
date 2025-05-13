FROM node:lts

WORKDIR /app

# Copy configuration files only
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

EXPOSE 80

# When the container is running initialize the application
CMD ["npm", "run", "prod"]