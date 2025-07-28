# 🚀 Turborepo Monorepo Starter

This is a full-stack monorepo setup using [Turborepo](https://turbo.build/repo) that includes:

* `http-server` – Express or REST API server
* `web-app` – Next.js frontend
* `websocket-connection` – WebSocket server
* `packages/prisma` – Shared Prisma ORM package

---

## 🧱 Getting Started

### 1. Create Monorepo with Turborepo

```bash
npx create-turbo@latest
```

---

## 📦 Apps & Packages

### 🧩 Apps

| App                    | Description                                   |
| ---------------------- | --------------------------------------------- |
| `http-server`          | Backend API server (e.g., Express or Fastify) |
| `web-app`              | Next.js frontend with Turbopack               |
| `websocket-connection` | WebSocket-based real-time server              |

### 📦 Packages

| Package  | Description                                  |
| -------- | -------------------------------------------- |
| `prisma` | Centralized database client using Prisma ORM |

---

## 🛠 Create App/Package Structure

```bash
cd turbo-monorepo # or your monorepo name

# Create apps
mkdir -p apps/http-server
mkdir -p apps/web-app
mkdir -p apps/websocket-connection

# Create shared package
mkdir -p packages/prisma
```

---

## 🧪 Prisma Setup

### 1. Initialize Prisma inside `packages/prisma`:

```bash
cd packages/prisma
npm init -y
npm install prisma @prisma/client
npx prisma init
```

This will create:

```
packages/prisma/
├── prisma/
│   └── schema.prisma
├── src/
│   └── index.ts
```

### 2. Export Prisma client in `src/index.ts`

```ts
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export default client;
```

---

## 🧩 Link Prisma in Apps

In your `apps/web-app`, `apps/http-server`, or `apps/websocket-connection`:

```ts
import client from '@repo/prisma'; // or your alias path
```

---

## 🔧 tsconfig.json Alias Setup (Optional)

In the monorepo root `tsconfig.json`, add:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@repo/prisma": ["packages/prisma/src"]
    }
  }
}
```

---

## 🧼 Fix Common Issues

If you see **multiple lockfile warnings**, run:

```bash
rm -rf node_modules pnpm-lock.yaml package-lock.json
```

Then reinstall cleanly:

```bash
pnpm install # or npm install
```

---

## 🏁 Start Dev Servers

### From root:

```bash
# Start all apps concurrently
pnpm dev
```

Or individually:

```bash
# Run HTTP Server
cd apps/http-server
pnpm dev

# Run Web App
cd apps/web-app
pnpm dev

# Run WebSocket Server
cd apps/websocket-connection
pnpm dev
```