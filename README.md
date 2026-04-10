# Pauza Landing Page

Marketing website for **Pauza** — a digital wellbeing and focus app that lets users create modes to block or restrict apps on their phone. Live at [pauza.dev](https://pauza.dev).

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Code Quality](#code-quality)
- [Tests](#tests)
- [Internationalisation](#internationalisation)
- [Deployment](#deployment)
- [Key Conventions](#key-conventions)

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 15 (App Router) | Framework |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling (CSS-based config, no `tailwind.config.ts`) |
| next-intl | 4 | Internationalisation (i18n) |
| Framer Motion | 12 | Animations |
| pnpm | 9+ | Package manager |

## Features

- **5 locales:** English (default), Russian (`ru`), Uzbek Latin (`uz`), Uzbek Cyrillic (`uz-Cyrl`), Kazakh (`kk`)
- **Fully static** — all pages pre-rendered at build time via `generateStaticParams`
- **Dark mode** via `prefers-color-scheme` (no JS toggle)
- **Animations** with Framer Motion, respecting `prefers-reduced-motion`
- **Cookie consent** banner with Google Analytics integration
- **Sitemap** auto-generated at `/sitemap.xml`

## Project Structure

```
pauza-landing-page/
├── messages/               # Translation files (one per locale)
│   ├── en.json
│   ├── ru.json
│   ├── uz.json
│   ├── uz-Cyrl.json
│   └── kk.json
├── public/                 # Static files served at root
│   └── robots.txt
├── src/
│   ├── app/                # Root Next.js app (error boundary, global layout, sitemap)
│   ├── assets/             # Statically imported images & SVGs
│   ├── components/         # Page sections (Hero, Features, Screenshots, Footer, ...)
│   ├── i18n/               # next-intl config (routing, request handler, navigation)
│   └── lib/                # Shared helpers (constants, analytics, motion presets)
├── .env.example            # Template for required environment variables
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Prerequisites

### Node.js (v20 or later)

**macOS / Linux (via nvm):**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 20
nvm use 20
```

**Direct download:** <https://nodejs.org/en/download>

Verify:

```bash
node -v   # should print v20.x.x or higher
```

### pnpm (v9 or later)

```bash
npm install -g pnpm
```

Verify:

```bash
pnpm -v   # should print 9.x.x or higher
```

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/IsroilovA/pauza-landing-page.git
   cd pauza-landing-page
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Open `.env.local` and fill in the values:

   | Variable | Description |
   |----------|-------------|
   | `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`) |
   | `NEXT_PUBLIC_APP_STORE_URL` | Full URL to the iOS App Store listing |
   | `NEXT_PUBLIC_PLAY_STORE_URL` | Full URL to the Google Play listing |
   | `NEXT_PUBLIC_PRIVACY_URL` | URL to the Privacy Policy page |
   | `NEXT_PUBLIC_TERMS_URL` | URL to the Terms of Service page |
   | `NEXT_PUBLIC_GITHUB_ISSUES_URL` | URL to the GitHub Issues tracker |
   | `NEXT_PUBLIC_TELEGRAM_URL` | URL to the Telegram support channel |
   | `NEXT_PUBLIC_SUPPORT_EMAIL` | Support email address |

   All variables are optional for local development — missing ones fall back to `#`.

## Running Locally

```bash
pnpm dev
```

Opens at [http://localhost:3000](http://localhost:3000) with Turbopack hot-reload.

Locale-prefixed routes are available immediately:

- `http://localhost:3000/` — English (default, no prefix)
- `http://localhost:3000/ru` — Russian
- `http://localhost:3000/uz` — Uzbek (Latin)
- `http://localhost:3000/uz-Cyrl` — Uzbek (Cyrillic)
- `http://localhost:3000/kk` — Kazakh

## Building for Production

```bash
pnpm build
```

Outputs a static-optimised build to `.next/`. To preview it locally:

```bash
pnpm start
```

This starts a production server at [http://localhost:3000](http://localhost:3000).

## Code Quality

### Lint

```bash
pnpm lint
```

Runs ESLint with the Next.js and Prettier configs. Fix auto-fixable issues with:

```bash
pnpm lint --fix
```

### Format

```bash
pnpm format
```

Runs Prettier over all source files.

### Type-check

TypeScript type checking is included in the build step (`pnpm build`). To run it separately:

```bash
pnpm exec tsc --noEmit
```

## Tests

This project does not currently have a unit or integration test suite. The primary quality gates are:

- `pnpm lint` — ESLint
- `pnpm exec tsc --noEmit` — TypeScript strict mode
- `pnpm build` — full Next.js production build (catches rendering errors and broken imports)

Run all three before committing:

```bash
pnpm lint && pnpm exec tsc --noEmit && pnpm build
```

## Internationalisation

All user-visible strings live in `messages/<locale>.json`. To add or modify copy:

1. Edit the relevant key in `messages/en.json` (source of truth).
2. Add the same key and a translated value to every other locale file.
3. Reference the key in components via `useTranslations()` (client) or `getTranslations()` (server).

To add a new locale:

1. Add the locale code to the `locales` array in `src/i18n/routing.ts`.
2. Create `messages/<locale>.json` with all translated strings.
3. Next.js will automatically generate the static route.

## Deployment

The site is deployed on **Vercel**. Every push to `main` triggers a production deployment automatically. Pull requests get preview deployments.

Environment variables must be configured in the Vercel project settings (not committed to the repo).

## Key Conventions

- **No hardcoded strings** in components — all text goes through `messages/*.json`.
- **No hardcoded URLs** — use the constants in `src/lib/constants.ts` which read from env vars.
- **Images** go in `src/assets/` (static imports) unless they need a public URL, in which case use `public/`.
- **Tailwind theme** is configured via `@theme` in `src/app/globals.css` — use semantic tokens (`bg-primary`, `text-on-surface`) rather than raw colour values.
- **Server components by default** — only add `"use client"` when interactivity or browser APIs are needed.
- **Performance budget:** <100 KB JS gzipped, LCP <2 s.
- **Accessibility:** WCAG 2.1 AA. The primary brand colour `#800020` has low contrast on dark backgrounds — use it only for large text or on lighter containers.
