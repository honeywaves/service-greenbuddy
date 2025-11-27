<div align="center">

# 🌱 GreenBuddy Service

**Your personal plant care companion — backend services**

[![Bun](https://img.shields.io/badge/Bun-1.0+-black?logo=bun&logoColor=white)](https://bun.sh/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0-E0234E?logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.0-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

<p align="center">
  <sub>Built with ❤️ for plant lovers everywhere</sub>
</p>

---

[Getting Started](#-getting-started) •
[Development](#-development) •
[Scripts](#-available-scripts) •
[Tech Stack](#-tech-stack) •
[License](#-license)

</div>

## ✨ Features

- 🌿 **Plant Management** — Create, read, update and track your plants
- 🏥 **Health Monitoring** — Built-in health check endpoints
- ⚡ **Lightning Fast** — Powered by Bun runtime
- 🔒 **Type-Safe** — Full TypeScript support with Prisma ORM
- 🐳 **Docker Ready** — One-command database setup

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Tool   | Version | Link                                  |
| ------ | ------- | ------------------------------------- |
| Bun    | 1.0+    | [bun.sh](https://bun.sh/)             |
| Docker | Latest  | [docker.com](https://www.docker.com/) |

## 🚀 Getting Started

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/chriiiiiss/service-greenbuddy.git
cd service-greenbuddy

# Install dependencies
bun install
```

### 2. Environment Setup

```bash
# Copy the environment template
cp .env.example .env
```

### 3. Database Setup

```bash
# Start PostgreSQL with Docker
docker compose up -d

# Generate Prisma client
bun prisma generate

# Run database migrations
bun prisma migrate dev
```

### 4. Launch! 🎉

```bash
bun run start:dev
```

Your API is now running at `http://localhost:3000` 🌱

## 💻 Development

```bash
# Start development server with hot-reload
bun run start:dev

# Run in debug mode
bun run start:debug

# Build for production
bun run build

# Start production server
bun run start:prod
```

## 📜 Available Scripts

| Command               | Description                      |
| --------------------- | -------------------------------- |
| `bun run start:dev`   | Start dev server with hot-reload |
| `bun run start:debug` | Start with debug mode enabled    |
| `bun run build`       | Build for production             |
| `bun run start:prod`  | Run production build             |
| `bun run test`        | Run test suite                   |
| `bun run test:watch`  | Run tests in watch mode          |
| `bun run test:cov`    | Run tests with coverage          |
| `bun run lint`        | Lint and fix code                |
| `bun run format`      | Format code with Prettier        |

### Database Commands

| Command                  | Description                 |
| ------------------------ | --------------------------- |
| `bun prisma studio`      | Open Prisma Studio (DB GUI) |
| `bun prisma migrate dev` | Run pending migrations      |
| `bun prisma generate`    | Regenerate Prisma client    |
| `docker compose up -d`   | Start database              |
| `docker compose down`    | Stop database               |
| `docker compose down -v` | Stop & wipe database        |

## 🛠 Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" width="48" height="48" alt="NestJS" />
      <br>NestJS
    </td>
    <td align="center" width="96">
      <img src="https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png" width="48" height="48" alt="Bun" />
      <br>Bun
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="48" height="48" alt="PostgreSQL" />
      <br>PostgreSQL
    </td>
    <td align="center" width="96">
      <img src="https://www.prisma.io/images/favicon-32x32.png" width="48" height="48" alt="Prisma" />
      <br>Prisma
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="48" height="48" alt="Docker" />
      <br>Docker
    </td>
  </tr>
</table>

## 📁 Project Structure

```
src/
├── database/        # Prisma service & database module
├── health/          # Health check endpoints
├── plant/           # Plant management module
├── types/           # TypeScript type definitions
├── app.module.ts    # Root application module
└── main.ts          # Application entry point
```

## 🧪 API Testing

This project includes [Bruno](https://www.usebruno.com/) collections for API testing. Find them in the `bruno/` directory.

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**[⬆ Back to Top](#-greenbuddy-service)**

<sub>Made with 🌿 by the GreenBuddy team</sub>

</div>
