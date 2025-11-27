# 🌱 GreenBuddy Service

Back-end services for the GreenBuddy application.

## Prérequis

- [Bun](https://bun.sh/) v1.0+
- [Docker](https://www.docker.com/)

## Installation

```bash
bun install
```

## Lancer la DB

```bash
docker compose up -d
```

## Lancer l'app

```bash
# Copier les variables d'environnement
cp .env.example .env

# Générer le client Prisma
bun prisma generate

# Appliquer les migrations
bun prisma migrate dev

# Lancer en dev
bun run start:dev
```

## Scripts utiles

| Commande                 | Description                 |
| ------------------------ | --------------------------- |
| `bun run start:dev`      | Lance l'app en mode watch   |
| `bun run build`          | Build pour la production    |
| `bun run test`           | Lance les tests             |
| `bun prisma studio`      | Interface web pour la DB    |
| `docker compose down`    | Stop la DB                  |
| `docker compose down -v` | Stop + supprime les données |
