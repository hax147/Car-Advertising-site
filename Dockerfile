# Use the full NGINX base image (not Alpine)
FROM nginx

# Copy all website files into the default NGINX html folder
COPY . /usr/share/nginx/html
