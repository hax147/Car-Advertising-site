# Use official Nginx image (non-Alpine)
FROM nginx:latest

# Remove default index page
RUN rm -rf /usr/share/nginx/html/*

# Copy your site files
COPY . /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80
