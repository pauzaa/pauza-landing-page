# Pauza Landing Page — Specifications

## 1. Project Overview

### Purpose
A single-page static landing page for **Pauza** — a digital wellbeing and focus app for Android and iOS. The page introduces the app to potential users, highlights key features, displays app screenshots, and provides direct download links to the App Store and Google Play.

### Domain
- **URL:** `pauza.dev` (root domain; API is at `api.pauza.dev`)
- **Locale routes:** `/ru`, `/uz`, `/uz-Cyrl` (English at root `/`)

### Target Audience
People looking for a screen time management / focus app — students, professionals, parents, or anyone wanting to reduce phone distractions and build healthier digital habits.

---

## 2. Technical Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js 15** (App Router) | Modern React, SSG, built-in i18n routing, seamless Vercel integration |
| Language | **TypeScript** (strict mode) | Type safety, better DX — no `any`, no implicit types |
| Styling | **Tailwind CSS 4** | Utility-first, responsive-by-default, fast iteration |
| Animations | **Framer Motion** | Scroll-triggered reveals, smooth transitions |
| Internationalization | **next-intl** | 4 locales with App Router `[locale]` segment routing |
| Deployment | **Vercel** | Auto-deploy from Git, edge CDN, zero-config for Next.js |
| Package Manager | **pnpm** | Fast, disk-efficient |
| Linting | **ESLint + Prettier** | Consistent code style |

### Key Technical Decisions
- **Server-side rendering with Vercel** — standard Next.js deployment on Vercel (no `output: 'export'`). This enables `next-intl` middleware for locale routing, `next/image` server-side optimization, and dynamic `sitemap.xml` generation. Vercel handles edge caching automatically.
- **No backend** — all content is static, no API calls. Pages are statically generated at build time via `generateStaticParams`.
- **Image optimization** — `next/image` with static imports (`import img from '@/assets/...'`) for app screenshots and assets. Static imports enable automatic width/height detection and build-time optimization. Images live in `src/assets/` (not `public/`), except for files that must be publicly addressable by URL (favicon, OG image, robots.txt).
- **Font optimization** — `next/font/google`, self-hosted for performance.
- **Dark mode** — CSS `prefers-color-scheme` media query, matching the app's light/dark themes.
- **Static params** — `generateStaticParams` in `[locale]/layout.tsx` to enumerate all locale paths for static generation.

---

## 3. Design Specifications

### 3.1 Brand Identity

- **App Name:** Pauza
- **Tagline:** "Focus & Wellbeing"
- **Brand Color:** `#800020` (deep burgundy/wine red)

### 3.2 Color Tokens

Mapped from the app's `PauzaColorScheme` (`pauza_ui_kit`):

#### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#800020` | CTAs, accent elements, links |
| `onPrimary` | `#FFFFFF` | Text on primary backgrounds |
| `surface` | `#FFFFFF` | Page background |
| `surfaceContainerLow` | `#FCFAFB` | Card backgrounds |
| `surfaceContainerHighest` | `#EEE8EA` | Subtle background sections |
| `onSurface` | `#171214` | Primary text |
| `onSurfaceVariant` | `#6D6470` | Secondary/muted text |
| `outline` | `#B0A8B2` | Borders, dividers |
| `outlineVariant` | `#D9D3D8` | Subtle borders |
| `error` | `#BA1A1A` | Error states |
| `success` | `#2E7D32` | Success indicators |

#### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#800020` | CTAs, accent elements |
| `onPrimary` | `#FFFFFF` | Text on primary |
| `surface` | `#070607` | Page background |
| `surfaceContainerLow` | `#0B090A` | Card backgrounds |
| `surfaceContainerHighest` | `#1C1719` | Subtle background sections |
| `onSurface` | `#F4F2F3` | Primary text |
| `onSurfaceVariant` | `#97A2B6` | Secondary/muted text |
| `outline` | `#2A2D33` | Borders, dividers |
| `outlineVariant` | `#202329` | Subtle borders |

---

## 4. Page Sections

### 4.1 Header / Navigation Bar

**Purpose:** Fixed top navigation with branding, language switcher, and download CTA.

**Content:**
- Pauza logo (left)
- Language switcher dropdown — 4 locales: English, Русский, O'zbek, Ўзбек (right)
- CTA button: "Download" → scrolls to download section (right)

**Behavior:**
- Fixed position, full-width
- On mobile (< 768px): collapses to a hamburger icon that opens a full-screen overlay menu containing the language switcher and "Download" CTA button. Menu closes on link tap or overlay tap.

---

### 4.2 Hero Section

**Purpose:** First impression — communicate the app's value proposition and drive downloads.

**Content:**
- **Headline:** "Take Back Your Time"
- **Subtitle:** "Block distracting apps, build focus habits, and take control of your screen time — with physical NFC unlocking that makes quitting intentional."
- **Store badges:** Apple App Store badge + Google Play badge (side by side)
- **Hero image:** App mockup showing the home/dashboard screen inside a phone frame

**Notes:**
- Hero image should show an app mockup of the home/dashboard screen inside a phone frame
- Store badges use official Apple/Google badge assets

---

### 4.3 Features Section

**Purpose:** Showcase the app's 6 key features with icons, titles, and short descriptions.

**Section Heading:** "Everything You Need to Stay Focused"

**Features (6 cards):**

1. **Hard App Blocking**
   - Icon: Shield icon
   - Description: "Create custom blocking modes for work, study, or sleep. When a blocked app is opened, a full-screen shield takes over — no soft warnings, no easy bypasses."

2. **Physical NFC Unlock**
   - Icon: NFC/tap icon
   - Description: "Link an NFC tag as your physical key to end focus sessions. Stopping requires a deliberate physical action, making quitting intentional — not impulsive."

3. **Smart Schedules**
   - Icon: Calendar/clock icon
   - Description: "Set automatic blocking schedules for each mode. Blocks start and end on time, even offline — no internet required for enforcement."

4. **Usage Analytics**
   - Icon: Chart/graph icon
   - Description: "Track your screen time, app usage, daily streaks, and focus history. See hourly heatmaps, per-app breakdowns, and progress trends."

5. **AI-Powered Insights**
   - Icon: Sparkle/brain icon
   - Description: "Get personalized usage analysis, addiction checks, and AI-suggested focus schedules. Understand your habits and get actionable recommendations."

6. **Friends & Leaderboard**
   - Icon: People/trophy icon
   - Description: "Add friends, compare streaks, and compete on the leaderboard. Stay accountable with social motivation and friendly competition."

**Notes:**
- Each card should have an icon, title, and description

---

### 4.4 How It Works Section

**Purpose:** Simple 3-step visual explanation of the core user flow.

**Section Heading:** "How It Works"

**Steps:**

1. **Create a Mode**
   - Description: "Set up a blocking mode — choose which apps to block, set pause rules, and pick your unlock method: NFC tag, QR code, or manual."
   - Visual: Screenshot of the mode creation screen

2. **Start a Session**
   - Description: "Activate your mode with one tap. Blocked apps are instantly shielded. Set a schedule to automate it."
   - Visual: Screenshot of the active session dashboard

3. **Stay Focused**
   - Description: "If you try to open a blocked app, a shield screen takes over. To stop early, scan your NFC tag — making the decision physical and intentional."
   - Visual: Screenshot of the shield/block screen

**Notes:**
- Each step should include a screenshot inside a phone mockup frame

---

### 4.5 App Screenshots Carousel

**Purpose:** Showcase key app screens in device mockups.

**Section Heading:** "See Pauza in Action"

**Screenshots to include (8 screens):**
1. Home/Dashboard — active session with streak counter
2. Mode creation — app selection and configuration
3. Shield/block screen — "This app is blocked"
4. Statistics — usage analytics with charts
5. Statistics — blocking stats with streaks
6. AI Insights — usage analysis results
7. Friends list — social view with streaks
8. Leaderboard — streak and focus rankings

**Behavior:**
- Scrollable/carousel of screenshots in phone mockup frames

---

### 4.6 Social Proof / Testimonials (Placeholder)

**Purpose:** Build trust with user testimonials and ratings.

**Section Heading:** "What Users Say"

**Content (placeholder — to be replaced with real reviews post-launch):**
- 3 testimonial cards with: quote text, user name, short descriptor
- Optional: app store rating badge (e.g., "4.8 ★ on App Store")

**Notes:**
- This section is **placeholder-ready** — use sample testimonials during initial launch
- Structure should support easy replacement with real data later

---

### 4.7 Download CTA Section

**Purpose:** Final call-to-action to drive app downloads.

**Content:**
- **Heading:** "Ready to Take Back Your Time?"
- **Subtitle:** "Download Pauza for free and start building healthier screen habits today."
- **Store badges:** Apple App Store + Google Play (same as hero)

---

### 4.8 Footer

**Purpose:** Legal links, social media, and copyright.

**Content:**
- Pauza logo + "Focus & Wellbeing" tagline
- Links: Privacy Policy, Terms of Service (external URLs — see Section 13 env vars)
- Support links: GitHub Issues (bug reports & feature requests), Telegram (direct support chat)
- Social media icons (placeholders for future social accounts)
- Copyright: "© 2026 Pauza. All rights reserved."
- Language switcher (secondary placement)

**Notes:**
- Privacy Policy and Terms of Service are **external URLs** configured via environment variables (`NEXT_PUBLIC_PRIVACY_URL`, `NEXT_PUBLIC_TERMS_URL`). They are not pages within this site — they link to externally hosted legal documents.
- Support links are configured via `NEXT_PUBLIC_GITHUB_ISSUES_URL` (GitHub Issues page for bug reports and feature requests) and `NEXT_PUBLIC_TELEGRAM_URL` (Telegram link for direct support).


---

### 4.9 Not Found (404) Page

**Purpose:** Friendly error page for invalid routes.

**Content:**
- Pauza logo
- **Heading:** "Page Not Found"
- **Subtitle:** "The page you're looking for doesn't exist or has been moved."
- **CTA button:** "Go Home" → links to `/` (or `/{locale}` for current locale)

**Notes:**
- Translated for all 4 locales
- Minimal layout — no header/footer, just centered content

---

## 5. Internationalization (i18n)

### Supported Locales

| Locale Code | Language | URL Path |
|-------------|----------|----------|
| `en` | English | `/` (default) |
| `ru` | Русский (Russian) | `/ru` |
| `uz` | O'zbek (Uzbek Latin) | `/uz` |
| `uz-Cyrl` | Ўзбек (Uzbek Cyrillic) | `/uz-Cyrl` |

### Implementation
- **Routing:** `next-intl` middleware rewrites URLs based on locale prefix
- **Default locale:** `en` — served at root `/` without prefix
- **Translation files:** JSON files in `messages/` directory:
  ```
  messages/
    en.json
    ru.json
    uz.json
    uz-Cyrl.json
  ```
- **Language switcher:** Dropdown in header showing language names in their native script
- **SEO:** `<link rel="alternate" hreflang="...">` tags for all locales
- **Content:** All visible text must be externalized — no hardcoded strings in components
- **`uz-Cyrl` handling:** The locale code contains a hyphen — ensure `next-intl` middleware includes `uz-Cyrl` in the locales array and that file/URL path handling works correctly with hyphenated locale codes

### Translation Scope
All section headings, feature descriptions, CTA text, button labels, meta tags (title, description), and alt text must be translated for all 4 locales. Existing translations from the app's ARB files (`assets/l10n/app_en.arb`) can be referenced for consistency.

---

## 6. Assets Requirements

### Required Assets

| Asset | Format | Sizes | Notes |
|-------|--------|-------|-------|
| Pauza logo | SVG + PNG | — | Used in header and footer. **Available:** `src/assets/logo.svg` (copied from app repo) |
| App icon | PNG | 192px, 512px | For favicon, PWA manifest |
| App screenshots | PNG | 1290×2796px (iPhone 15 Pro Max) | 8 key screens, light + dark variants |
| Phone mockup frame | SVG/PNG | — | Wraps screenshots in a realistic device frame |
| Apple App Store badge | SVG | — | Official Apple badge, one per locale (`app-store-badge-{locale}.svg`) |
| Google Play badge | SVG/PNG | — | Official Google badge, one per locale (`google-play-badge-{locale}.svg`) |
| Feature icons | SVG | 24px–48px | 6 icons for feature cards (shield, nfc, calendar, chart, sparkle, people) |
| OG image | PNG | 1200×630px | Social sharing preview image |
| Favicon | ICO + PNG | 16, 32, 180px | Browser tab icon |

### Screenshot Preparation
Screenshots should be captured from the app in both light and dark mode. The landing page should display the version matching the user's system theme. Screenshots should be taken on a modern device resolution (iPhone 15 Pro Max or equivalent).

**File naming convention:** `{screen}-light.png` and `{screen}-dark.png` (e.g., `dashboard-light.png`, `dashboard-dark.png`).

**Image format note:** `next/image` automatically serves WebP/AVIF when the browser supports it, so source PNGs are fine — no manual format conversion needed.

**Screens to capture:**
1. Home dashboard with active session
2. Mode editor with apps selected
3. Shield/block screen
4. Usage statistics tab
5. Blocking statistics tab
6. AI insights results
7. Friends list
8. Leaderboard

---

## 7. SEO & Metadata

### Page Meta Tags (per locale)

**English:**
- **Title:** "Pauza — Focus & Digital Wellbeing App"
- **Description:** "Block distracting apps with custom modes, NFC-powered physical unlock, smart schedules, and AI insights. Take back your time with Pauza."
- **Keywords:** "focus app, screen time, app blocker, digital wellbeing, NFC focus, phone addiction, screen time tracker"

### Open Graph / Social

```html
<meta property="og:title" content="Pauza — Focus & Digital Wellbeing App" />
<meta property="og:description" content="Block distracting apps with custom modes and NFC-powered physical unlock. Take back your time." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://pauza.dev" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Pauza",
  "operatingSystem": "Android, iOS",
  "applicationCategory": "HealthApplication",
  "description": "Digital wellbeing and focus app with hard app blocking, NFC unlock, and AI insights.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

### Technical SEO
- `sitemap.xml` — generated via `src/app/sitemap.ts` using Next.js metadata API, includes all locale variants with `hreflang` alternates
- `robots.txt` — static file in `public/`, allows all crawlers, references sitemap at `https://pauza.dev/sitemap.xml`
- Canonical URLs with `hreflang` alternates per locale
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)

---

## 8. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.05 |
| Total bundle size (JS) | < 100KB gzipped |

### Optimization Strategies
- Static generation at build time via `generateStaticParams` — pages are pre-rendered and edge-cached by Vercel
- `next/image` with `priority` on hero image, lazy loading for below-fold images
- `next/font` for self-hosted fonts — no external font requests
- Minimal JavaScript — most content is static HTML/CSS
- Framer Motion tree-shaking — import only needed animation primitives
- Vercel Edge CDN for global distribution

---

## 9. Analytics & Tracking

### Implementation
- **Analytics provider:** Google Analytics 4 (GA4) or Plausible Analytics (privacy-friendly alternative)
- **Consent:** If using GA4, include a cookie consent banner — a simple bottom bar with "Accept" / "Decline" buttons. Analytics scripts must not load until the user consents. Consent preference is stored in `localStorage`. If using Plausible (cookieless), no consent banner is needed.

### Events to Track

| Event | Trigger |
|-------|---------|
| `page_view` | Page load |
| `store_badge_click` | Click on App Store or Google Play badge |
| `store_badge_location` | Which section the badge was clicked from (hero vs CTA) |
| `language_switch` | Language switcher used |
| `section_view` | Each section scrolled into viewport |
| `carousel_interact` | Screenshot carousel manually swiped |

---

## 10. Project Structure

```
pauza-landing-page/
├── public/
│   ├── favicon.ico
│   ├── og-image.png                # Must be in public/ for OG meta tag URL
│   └── robots.txt
├── src/
│   ├── assets/                     # Static imports — enables next/image auto size detection
│   │   ├── logo.svg
│   │   ├── phone-frame.svg
│   │   ├── screenshots/            # {screen}-light.png + {screen}-dark.png per screen
│   │   │   ├── dashboard-light.png
│   │   │   ├── dashboard-dark.png
│   │   │   ├── mode-editor-light.png
│   │   │   ├── mode-editor-dark.png
│   │   │   ├── shield-screen-light.png
│   │   │   ├── shield-screen-dark.png
│   │   │   ├── usage-stats-light.png
│   │   │   ├── usage-stats-dark.png
│   │   │   ├── blocking-stats-light.png
│   │   │   ├── blocking-stats-dark.png
│   │   │   ├── ai-insights-light.png
│   │   │   ├── ai-insights-dark.png
│   │   │   ├── friends-light.png
│   │   │   ├── friends-dark.png
│   │   │   ├── leaderboard-light.png
│   │   │   └── leaderboard-dark.png
│   │   └── badges/                  # Localized store badges
│   │       ├── app-store-badge-en.svg
│   │       ├── app-store-badge-ru.svg
│   │       ├── app-store-badge-uz.svg
│   │       ├── app-store-badge-uz-Cyrl.svg
│   │       ├── google-play-badge-en.svg
│   │       ├── google-play-badge-ru.svg
│   │       ├── google-play-badge-uz.svg
│   │       └── google-play-badge-uz-Cyrl.svg
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx          # Root layout with i18n provider + generateStaticParams
│   │   │   ├── page.tsx            # Landing page (all sections)
│   │   │   └── not-found.tsx       # 404 page with i18n
│   │   ├── not-found.tsx           # Root 404 — catches requests outside locale prefixes
│   │   ├── global-error.tsx        # Root error boundary — fallback for unhandled errors
│   │   ├── sitemap.ts              # Dynamic sitemap generation with locale variants
│   │   ├── layout.tsx              # HTML root
│   │   └── globals.css             # Tailwind v4 @theme config + custom properties
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Screenshots.tsx
│   │   ├── Testimonials.tsx
│   │   ├── DownloadCta.tsx
│   │   ├── Footer.tsx
│   │   ├── StoreBadges.tsx         # Reusable store badge pair
│   │   ├── PhoneMockup.tsx         # Screenshot in device frame
│   │   ├── LanguageSwitcher.tsx
│   │   └── CookieConsent.tsx       # GDPR consent banner (only if using GA4)
│   ├── lib/
│   │   └── analytics.ts            # Event tracking helpers
│   └── i18n/
│       ├── request.ts              # next-intl server config
│       └── routing.ts              # Locale routing config
├── messages/
│   ├── en.json
│   ├── ru.json
│   ├── uz.json
│   └── uz-Cyrl.json
├── middleware.ts                    # next-intl locale routing middleware (redirects/rewrites based on locale prefix)
├── next.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```

**Note:** Tailwind CSS 4 uses CSS-based configuration via `@theme` directives in `globals.css` instead of a `tailwind.config.ts` file. Color tokens, fonts, and spacing from Section 3.2 are defined there.

---

## 11. Accessibility Requirements

- WCAG 2.1 AA compliance minimum
- All images have descriptive `alt` text
- Store badges are `<a>` elements with accessible labels
- Color contrast ratios meet AA standard (4.5:1 for body text, 3:1 for large text). **Note:** The `primary` color `#800020` on dark `surface` `#070607` has a contrast ratio of ~2.8:1, which is below AA for small text. For dark mode, primary-colored text on dark backgrounds must be used only for large/bold text (≥18px/14px bold), or paired with a lighter background container. Primary CTA buttons with `onPrimary` white text on `primary` background are fine (7.9:1).
- Keyboard navigable — all interactive elements focusable with visible focus rings
- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<footer>`)
- `prefers-reduced-motion` media query to disable animations
- Skip-to-content link for keyboard users
- Language switcher announces current language to screen readers
- Language switcher marks active locale with `aria-current="page"`
- `<html lang={locale}>` attribute set dynamically per locale in root layout

---

## 12. Store Badge Links

Store badge URLs are configured via environment variables (`NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL` — see Section 13) and used consistently across the hero and CTA sections:

| Store | URL Template | Notes |
|-------|-------------|-------|
| Apple App Store | `https://apps.apple.com/app/pauza/id{APPLE_APP_ID}` | Replace `{APPLE_APP_ID}` after App Store submission |
| Google Play | `https://play.google.com/store/apps/details?id={ANDROID_PACKAGE_ID}` | Replace `{ANDROID_PACKAGE_ID}` with actual package ID |

Both badges should:
- Open in a new tab (`target="_blank"`, `rel="noopener noreferrer"`)
- Use official localized badge SVGs per current locale
- Track click events via analytics

---

## 13. Development & Deployment

### Local Development
```bash
pnpm install
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Build static export
pnpm start        # Preview production build
pnpm lint         # Run ESLint
```

### Deployment Pipeline
1. Push to `main` branch on GitHub
2. Vercel auto-builds and deploys
3. Custom domain `pauza.dev` configured in Vercel dashboard
4. Preview deployments for pull requests

### Environment Variables
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX        # Google Analytics ID (optional)
NEXT_PUBLIC_APP_STORE_URL=https://...  # App Store link
NEXT_PUBLIC_PLAY_STORE_URL=https://... # Google Play link
NEXT_PUBLIC_PRIVACY_URL=https://...    # Privacy Policy page (external)
NEXT_PUBLIC_TERMS_URL=https://...      # Terms of Service page (external)
NEXT_PUBLIC_GITHUB_ISSUES_URL=https://github.com/...  # GitHub Issues for bug reports & feature requests
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/...              # Telegram support chat
```

---

## 14. Design Implementation

All visual design — typography, layout, spacing, animations, and overall aesthetic direction — should be implemented using the **Claude Code `frontend-design` plugin** (`/frontend-design` skill). The plugin autonomously makes design decisions for:
- Font selection and pairing
- Layout composition and responsive behavior
- Spacing, sizing, and visual hierarchy
- Animations and motion design
- Visual effects (gradients, textures, shadows)

The plugin must respect the **brand color tokens** defined in Section 3.2 to maintain consistency with the Pauza mobile app. Provide the plugin with the page content, sections, and color constraints from this spec, and let it handle the creative visual execution.

---

## 15. Content Checklist

Before launch, ensure the following content is prepared:

- [ ] Final marketing copy reviewed and approved (all 4 languages)
- [ ] 8 app screenshots captured (light + dark mode, 16 files total)
- [ ] Pauza logo in SVG format
- [ ] OG social sharing image (1200×630px)
- [ ] Privacy Policy page URL
- [ ] Terms of Service page URL
- [ ] App Store listing approved and live
- [ ] Google Play listing approved and live
- [ ] Store badge URLs updated with real app IDs
- [ ] Localized store badges downloaded for all 4 locales (8 SVG files)
- [ ] Privacy Policy and Terms of Service URLs configured
- [ ] Analytics tracking ID configured
- [ ] Domain DNS configured to point to Vercel
