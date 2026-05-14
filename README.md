# Portfolio de Mohamed Daoud

Bienvenue sur le code source de mon portfolio personnel ! 
Ce projet est une application web moderne développée avec **React** et **Vite**, et stylisée avec **Tailwind CSS**. Il est prêt pour la production, conteneurisé avec **Docker** et **Nginx** pour un déploiement fluide et optimisé.

## 🚀 Technologies utilisées

- **Frontend** : React (v19), Vite, Tailwind CSS, Framer Motion
- **Déploiement / DevOps** : Docker, Docker Compose, Nginx

## 🛠 Lancer le projet en local (Mode Développement)

Si vous souhaitez modifier le code ou exécuter le projet sans Docker :

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
   Le projet sera alors accessible sur `http://localhost:5173`.

## 🐳 Déploiement avec Docker et Nginx (Production)

Le projet intègre une configuration Docker optimisée de type *multi-stage build* qui :
1. Compile le code source React.
2. Déploie les fichiers statiques finaux sur un serveur web Nginx très léger.

Pour lancer la version de production localement ou sur un serveur :

```bash
docker-compose up -d --build
```

Votre portfolio sera alors compilé et mis en ligne sur **[http://localhost:8080](http://localhost:8080)**.

### Configuration Nginx
La configuration Nginx (`nginx/default.conf`) incluse dans ce dépôt est spécialement conçue pour les applications "Single Page Application" (SPA). Elle s'assure que le rafraîchissement des pages via le routeur React fonctionne parfaitement en redirigeant le trafic vers `index.html`.

## 📁 Structure clé du projet

- `src/` : Code source React (Composants, Pages, CSS).
- `public/` : Images et assets statiques (ex: `bibliotheque.png`).
- `nginx/` : Fichier de configuration serveur Nginx.
- `Dockerfile` : Instructions pour la création de l'image Docker de production.
- `docker-compose.yml` : Permet de lancer facilement le conteneur.
