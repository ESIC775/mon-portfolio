# Étape 1 : Construction de l'application avec Node.js
FROM node:20-alpine AS build
WORKDIR /app

# Copier les fichiers de dépendances et installer
COPY package*.json ./
RUN npm ci

# Copier le reste du projet et builder (génère le dossier dist)
COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Remplacer la configuration Nginx par défaut par la nôtre
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers construits depuis l'étape précédente
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
