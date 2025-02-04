FROM nginx:alpine

# Copier les fichiers HTML et JS dans le répertoire utilisé par NGINX
COPY . /usr/share/nginx/html

# Exposer le port 3000
EXPOSE 3000

# Lancer NGINX
CMD ["nginx", "-g", "daemon off;"]