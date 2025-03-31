# Stack de développement Laravel + Angular avec Docker

Une stack de développement complète pour les applications Laravel (backend) et Angular (frontend) utilisant Docker. Cette configuration simplifie le déploiement et le développement en encapsulant tous les services nécessaires.

## Fonctionnalités

- **Laravel** - Framework PHP pour le backend (port 8000)
- **Angular** - Framework JavaScript pour le frontend (port 8001)
- **MySQL** - Base de données (port 9906)
- **phpMyAdmin** - Interface d'administration de base de données (port 8080)
- **Nginx** - Serveur web avec configurations optimisées pour Laravel et Angular
- **PHP-FPM** - Pour des performances PHP optimales

## Prérequis

- Docker et Docker Compose
- Git (pour cloner ce dépôt)

## Installation

1. Clonez ce dépôt:
   ```bash
   git clone <url-du-repo>
   cd <nom-du-repo>
   ```

2. Construisez l'image Docker:
   ```bash
   docker build -t imageweb .
   ```

3. Lancez les services:
   ```bash
   ./run-docker.sh
   ```

## Accès aux services

- **Application Laravel**: http://localhost:8000
- **Application Angular**: http://localhost:8001
- **phpMyAdmin**: http://localhost:8080 (utilisateur: user1, mot de passe: userPass)
- **MySQL**: accessible via le port 9906

## Détails de configuration

### Base de données

- **Nom de la base**: mastack_db
- **Utilisateur**: user1
- **Mot de passe**: userPass
- **Port**: 9906

### Volumes persistants

Le service MySQL utilise un volume nommé `db_data` pour conserver les données entre les redémarrages.

## Développement

Pour travailler sur le code source:

1. Modifiez les fichiers dans le répertoire `./sources`
2. Les modifications seront automatiquement reflétées grâce au montage de volume