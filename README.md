# CropVerse

<p align="center">
  <strong>A cozy real-time multiplayer farming world — concept marketing site.</strong>
</p>

<p align="center">
  Plant. Harvest. Earn.
</p>

---

## Overview

CropVerse is a public-facing **Next.js landing page** for a web3 farming game concept. Players grow crops, expand their farm, visit friends, complete orders and jobs, climb the leaderboard, and earn the on-chain **$CROP** token through the daily **Harvest Pool**.

> **Important:** This repository is a public demo / concept website. All tokenomics, prices, and statistics shown on the site are clearly marked as demo data. No real token contract exists.

## What the site covers

- **Hero** — Plant. Harvest. Earn. — core pitch and live game stats.
- **Farmer's Market** — animated ticker of in-game crop prices (in Gold).
- **How to Play** — grow crops, expand land, visit friends, complete orders & jobs, earn Gold & Gems, climb the leaderboard.
- **Harvest Pool** — the competitive daily $CROP reward system. Farmers sacrifice in-game progress for Pool Power; rewards are capped, server-verified, and not pay-to-win.
- **$CROP Token** — supply distribution donut chart. The largest share flows back to farmers.
- **Roadmap** — from the core farming loop to on-chain rewards, animals & pets, and building/customization.
- **FAQ** and **early-access** signup.

### The three currencies

| | What it is | How you get it |
|---|---|---|
| **Gold** | Free in-game currency that keeps your farm running | Earned by playing |
| **Gems** | Premium currency for speed-ups, premium crops, and cosmetics | Purchased (50% to treasury, 50% burned) |
| **$CROP** | On-chain token | Distributed daily via the Harvest Pool |

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Recharts](https://recharts.org/) for the token distribution chart
- [lucide-react](https://lucide.dev/) icons

## Quickstart

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
pnpm build
pnpm start
```

## Project structure

```
src/
  app/
    layout.tsx        # metadata + fonts
    page.tsx          # section composition
    globals.css       # theme tokens + animations
  components/
    Header.tsx
    Footer.tsx
    ui/Logo.tsx
    sections/
      Hero.tsx
      Ticker.tsx        # Farmer's Market crop ticker
      About.tsx         # How to Play
      HarvestPool.tsx   # daily $CROP rewards
      Stats.tsx
      Tokenomics.tsx
      Roadmap.tsx
      FAQ.tsx
      Newsletter.tsx
  lib/
    constants.ts      # site copy, nav, socials, crop market data
    types.ts
```

## Disclaimer

This is a concept/demo website. Nothing here is financial advice, and no real token or game economy is deployed.
