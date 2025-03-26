# Image de base
FROM node:18

# Dossier de travail
WORKDIR /app

# Copier les fichiers
COPY package*.json ./
RUN npm install

# Copier le reste
COPY . .

# Construire l'application
RUN npm run build

# Installer un serveur statique
RUN npm install -g serve

# Exposer le port
EXPOSE 4200

# Lancer l'application
# CMD ["serve", "-s", "build"]

# Lancer le serveur de développement
CMD ["npm", "start"]