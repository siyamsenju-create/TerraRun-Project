# TerraRun

TerraRun is a fitness game where real outdoor runs claim and defend map territory.

This repository is the MVP foundation monorepo:

- `apps/web`: Next.js web app
- `apps/mobile`: Expo mobile shell
- `apps/admin`: Next.js admin shell
- `services/api`: NestJS API
- `packages/shared-types`: shared TypeScript DTOs and response types
- `packages/config`: shared TypeScript and ESLint configuration
- `infra/docker`: local PostgreSQL/PostGIS and Redis

## Local Setup

```bash
corepack enable
corepack prepare pnpm@9.15.4 --activate
corepack pnpm install
cp services/api/.env.example services/api/.env
corepack pnpm infra:up
corepack pnpm db:generate
corepack pnpm dev
```

The first implementation slice uses Clerk-compatible placeholders. Real Clerk keys are not required for local development.
