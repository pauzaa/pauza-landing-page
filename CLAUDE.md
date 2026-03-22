# Pauza Landing Page

Single-page landing site for **Pauza** — a digital wellbeing and focus app. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, next-intl (4 locales), and Framer Motion. Deployed on Vercel at `pauza.dev`.

## Quick Commands

```bash
pnpm dev        # Start dev server (Turbopack) at localhost:3000
pnpm build      # Production build
pnpm start      # Preview production build
pnpm lint       # Run ESLint
pnpm format     # Run Prettier
```

## Architecture

- **App Router** with `[locale]` dynamic segment for i18n routing
- **next-intl** handles locale detection, middleware redirects, and translation loading
- **4 locales:** `en` (default, served at `/`), `ru`, `uz`, `uz-Cyrl`
- **Tailwind CSS v4** — CSS-based config via `@theme` in `src/app/globals.css` (no `tailwind.config.ts`)
- **Dark mode** via `prefers-color-scheme` media query (no class toggle)
- **Static generation** via `generateStaticParams` — all locale pages pre-rendered at build time

## Key Conventions

- All text externalized to `messages/*.json` — no hardcoded strings in components
- Images in `src/assets/` with static imports (not `public/`), except files that need public URLs (favicon, OG image, robots.txt)
- Color tokens via Tailwind `@theme` in `globals.css` — use `bg-primary`, `text-on-surface`, etc.
- `params` is async (`Promise<{locale}>`) in Next.js 15 layouts/pages — always `await params`
- `setRequestLocale(locale)` must be called in every page/layout for static rendering
- Components are server components by default — only add `"use client"` when needed
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`
- No hardcoded URLs — use env vars for store links, legal pages, support links
- All images must have descriptive `alt` text
- Respect `prefers-reduced-motion` for all animations
- WCAG 2.1 AA compliance — primary `#800020` on dark bg is only 2.8:1, use only for large text or on lighter containers
- Performance budget: <100KB JS gzipped, LCP <2s
- Strongly typed — no `any`, no `as` casts unless truly unavoidable, no `@ts-ignore`. Prefer explicit types for component props and function signatures. `tsconfig.json` has `strict: true`
- Don't add dependencies without justification
- Run `pnpm lint` and `pnpm build` after every implementation to catch lint/type/build errors before committing
