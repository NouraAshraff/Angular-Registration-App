# Build Stage
FROM node:18.13-alpine AS build
WORKDIR /app

# Increase the npm fetch timeout to avoid network issues
ENV NPM_CONFIG_FETCH_TIMEOUT=120000

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Production Stage
FROM nginx:alpine
# Copy built Angular application to Nginx directory
COPY --from=build /app/dist/regestration-app/browser /usr/share/nginx/html

# Copy a default nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
