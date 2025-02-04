# Étape de base
FROM node:16-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port de l'application
EXPOSE 8080

# Commande pour démarrer le serveur
CMD ["node", "app/server.js"]
