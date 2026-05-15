# TerraRun

 # 🏃 TerraRun — Run Real Roads, Conquer Real Territory

<p align="center">
  <img src="./public/banner.png" alt="TerraRun Banner" width="100%" />
</p>

<p align="center">
  <strong>A territory-based running platform where real-world movement becomes competition.</strong>
</p>

<p align="center">
  TerraRun transforms running into a strategic game. Claim streets, dominate regions, challenge runners, and build your territory through real-life movement.
</p>

---

## 🌍 Overview

**TerraRun** is a next-generation fitness platform inspired by Strava, but with a unique **territory ownership system**.

Users claim real-world map regions simply by running. Every route contributes toward ownership. Compete against other runners, challenge territories, climb city rankings, and create your running empire.

Instead of only tracking fitness, TerraRun makes movement:

- Competitive
- Addictive
- Social
- Gamified
- Community-driven

---

# 🚀 Core Concept

### Traditional Running Apps
You run → Activity gets recorded → End.

### TerraRun
You run → Territory gets claimed → Competitors challenge → Rankings change → Real-world competition begins.

Every kilometer matters.

Your city becomes the game board.

---

# ✨ Key Features

## 🛰️ GPS Run Tracking
Track running sessions in real-time using GPS.

Features:
- Live route tracking
- Distance monitoring
- Pace calculation
- Calories burned
- Run history

---

## 🗺️ Territory Claiming System
Claim real-world map regions by running through them.

### How it Works
- Map divided into **grid cells**
- Running inside grids captures territory
- More activity strengthens ownership
- Territories decay over time if inactive

Example:

```txt
□ □ □ □
■ ■ □ □
■ ■ ■ □
□ □ □ □
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
# New-project
