# RoommateHub

A full-stack household management application for roommates to coordinate chores, shared expenses, and tasks.

## Stack

- Client: React, Vite, TypeScript
- API: Node.js, Express, TypeScript
- Database: PostgreSQL with Prisma
- Local environment: Docker Compose

## Local development

### Prerequisites

- Node.js 22+
- Docker Desktop

### Start the database

```bash
docker compose up -d
```

### Start the API

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### Start the client

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173`. The API health endpoint is available at `http://localhost:4000/api/health`.

## Database

After creating `server/.env`, install dependencies and initialize Prisma:

```bash
cd server
npx prisma migrate dev --name init
```

The initial schema includes users, households, and household memberships.

## Planned features

- Secure authentication and household invitations
- Shared chores with fair rotation
- Expense splitting and settlement tracking
- Household tasks and activity history
- Role-based permissions
