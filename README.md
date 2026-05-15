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

⚔️ Territory Battles

Challenge other runners for territory ownership.

Battle Mechanics:

Distance competition
Speed-based challenges
Weekly dominance score
Activity consistency

Winner gains control.

🏆 Leaderboards

Compete locally and globally.

Leaderboard Types:

City Rankings
State Rankings
National Rankings
Global Rankings
Weekly Champions
Longest Streak
👥 Friend Challenges

Challenge friends and compare performance.

Examples:

Most KM this week
Fastest 5K
Territory dominance
Weekend challenge
🛡️ Teams / Clans

Create teams and dominate cities together.

Features:

Clan territory
Group challenges
Team rankings
Shared achievements
🎯 Streaks & Rewards

Gamification to improve retention.

Examples:

Daily streak
Weekly consistency
Territory milestones
Distance rewards
Special badges
💎 Premium Features (Freemium)

Subscription-based monetization.

Premium users get:

Advanced analytics
Heatmaps
Territory insights
Exclusive challenges
AI coaching
Historical trends
🏗️ System Architecture
                    ┌────────────────────┐
                    │   Mobile App       │
                    │   React Native     │
                    └──────────┬─────────┘
                               │
                               │ API Calls
                               ▼
                    ┌────────────────────┐
                    │     API Gateway    │
                    │   NestJS Backend   │
                    └──────────┬─────────┘
                               │
          ┌────────────────────┼────────────────────┐
          ▼                    ▼                    ▼
 ┌───────────────┐   ┌────────────────┐   ┌────────────────┐
 │ Authentication│   │ Territory Core │   │ Battle Engine  │
 │ Firebase/Auth │   │ Geo Engine     │   │ Challenge Sys  │
 └───────────────┘   └────────────────┘   └────────────────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               ▼
                    ┌────────────────────┐
                    │ PostgreSQL +       │
                    │ PostGIS Database   │
                    └────────────────────┘
                               │
                               ▼
                    ┌────────────────────┐
                    │ Mapbox Maps API    │
                    │ GPS + Geo Data     │
                    └────────────────────┘
🧠 Product Vision

We are building more than a fitness app.

We are creating a real-world strategy game powered by movement.

Imagine:

Pokémon GO × Strava × Competitive Territory Wars

The more users run, the more competitive the ecosystem becomes.

🛠️ Tech Stack
Frontend
Technology	Purpose
Next.js	Website
React Native	Mobile App
TypeScript	Type Safety
Tailwind CSS	UI Styling
Backend
Technology	Purpose
Node.js	Runtime
NestJS	Backend Framework
REST API	API Layer
WebSockets	Realtime Updates
Database
Technology	Purpose
PostgreSQL	Primary DB
PostGIS	Geo-Spatial Queries
Redis	Cache
Maps & GPS
Technology	Purpose
Mapbox	Maps
GPS APIs	Location Tracking
Authentication

Options:

Firebase Auth
Clerk
JWT Authentication
📂 Recommended Folder Structure
terrarun/
│
├── mobile-app/
│   ├── screens/
│   ├── components/
│   ├── services/
│   ├── navigation/
│   └── hooks/
│
├── web-app/
│   ├── app/
│   ├── components/
│   ├── pages/
│   └── public/
│
├── backend/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── territory/
│   │   ├── battles/
│   │   ├── leaderboard/
│   │   └── rewards/
│   │
│   └── prisma/
│
└── docs/
🔥 Territory System
Grid-Based Ownership

The world is split into map grids.

Example:

[ A1 ] [ A2 ] [ A3 ]
[ B1 ] [ B2 ] [ B3 ]
[ C1 ] [ C2 ] [ C3 ]

Running through:

A1
B1
B2

Claims them.

Ownership expires if inactive.

🎮 Gamification Model
Earn XP

Users gain XP for:

Running
Winning battles
Territory ownership
Daily streaks
Unlock Badges

Examples:

🥉 Bronze Runner
🥈 Silver Runner
🥇 Gold Dominator
👑 City King

📊 Monetization Strategy
Freemium Subscription
Free Plan
Basic tracking
Limited analytics
Territory claiming
Premium Plan
AI coaching
Full analytics
Heatmaps
Advanced insights
Premium badges
Revenue Streams
Monthly subscriptions
Brand sponsorships
Local running events
Paid competitions
🛣️ Product Roadmap
Phase 1 — MVP
User authentication
GPS tracking
Territory claiming
Profile system
Maps integration
Goal:

Launch with under 10K users

Phase 2 — Competitive Layer
Territory battles
Challenges
Leaderboards
City rankings
Phase 3 — Social Expansion
Teams / clans
Premium plans
AI motivation system
Community events
📦 Installation
Clone Repository
git clone https://github.com/your-username/terrarun.git
cd terrarun
Install Dependencies
npm install
Setup Environment Variables

Create .env

DATABASE_URL=

JWT_SECRET=

MAPBOX_API_KEY=

FIREBASE_API_KEY=

REDIS_URL=
Run Development Server
Frontend
npm run dev
Backend
npm run start:dev
🚀 Deployment

Recommended:

Frontend:

Vercel

Backend:

Railway
Render
AWS

Database:

Neon PostgreSQL
Supabase
📸 Screenshots

Add screenshots here:

![Dashboard](./screenshots/dashboard.png)
![Territory Map](./screenshots/map.png)
![Battle Screen](./screenshots/battle.png)
🤝 Contributing

We welcome contributions.

Steps
Fork repo
Create branch
git checkout -b feature/new-feature
Commit changes
git commit -m "Add feature"
Push branch
git push origin feature/new-feature
Open Pull Request
🧾 License

MIT License

💡 Why TerraRun?

Most fitness apps stop at tracking.

TerraRun creates:

Competition + Motivation + Ownership + Community

Running becomes a game.

The city becomes the battlefield.

👨‍💻 Team

TerraRun Team

Building the future of movement.

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
