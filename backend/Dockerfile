FROM node:18
WORKDIR /app

# Copier les fichiers package*.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Installer Nodemon globalement pour le hot reload
RUN npm install -g nodemon

COPY . .

# Exposer le port sur lequel le serveur écoute
EXPOSE 4000

# Lancer le serveur avec Nodemon pour surveiller les changements
CMD ["nodemon", "server.js"]
