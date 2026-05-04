# Full Circle Starter — One-Page Template (V1)

A Next.js 14 + Tailwind CSS starter site template, derived from the homepage
structure of [scamhc.org](https://www.scamhc.org/). Single-page with
anchor-based navigation. Designed to be re-skinned per client by the
**Build Starter Site** agent.

---

## Quick start (manual)

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build
npm run start  # production build
```

---

## How the agent uses this template

The agent's job per client is **two file edits, plus image swaps**:

### 1. `lib/site-config.ts` — content

Every word of copy, every link, every section's data lives in this file as
typed structured data. The agent rewrites this file completely per client,
based on the project bundle from Web Studio (audience profile, brand
adjectives, business goals, recommended pages, etc.).

The TypeScript types in this file are the contract. If the agent's output
type-checks against `SiteConfig`, the site will render. If it doesn't, the
build fails fast with a clear error — which becomes the agent's signal to
self-correct.

### 2. `tailwind.config.ts` — brand tokens

Three things change here per client:

- `theme.extend.colors` — semantic palette (`bg`, `surface`, `primary`,
  `accent`, `ink`, `line`)
- `theme.extend.fontFamily` — display + body font pair (referenced via
  CSS variables defined in `app/layout.tsx`)
- `theme.extend.borderRadius` — corner softness (`card`, `pill`)

Components reference these via Tailwind class names only (`bg-primary`,
`font-display`, `rounded-card`). They never reference colors or fonts
directly. This keeps the re-skin to a single config file.

### 3. `app/layout.tsx` — fonts (sometimes)

If the brand needs different fonts than Fraunces + Plus Jakarta Sans, the
agent updates the imports from `next/font/google` and replaces the variable
assignments. The CSS variable names (`--font-display`, `--font-body`) stay
fixed.

### 4. `public/img/` — images

Drop client images into `public/img/`. Filenames referenced in
`site-config.ts`:

- `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg` (one per hero block)
- `about.jpg`
- `volunteer-1.jpg`, `volunteer-2.jpg`

Until images are added, the layout falls back to branded gradient
placeholders (CSS-only, defined in `globals.css` under `.placeholder-image`).
This means the template is presentable without any images — useful for
preview deployments before client photography is finalized.

---

## Section inventory

In page order, all anchored from the header nav:

| ID            | Component         | Purpose                                       |
| ------------- | ----------------- | --------------------------------------------- |
| —             | `TopBar`          | Utility links + phone (above header)          |
| —             | `Header`          | Sticky nav with logo, anchors, CTA            |
| `#home-hero`  | `HeroStack`       | Three full-width heroes alternating L/R       |
| —             | `TrustBadges`     | 3-column trust statement strip                |
| —             | `CrisisBand`      | Full-width call-to-action band                |
| `#about`      | `AboutSection`    | Image + bullets composition                   |
| `#resources`  | `ResourceCards`   | 3-column resource cards                       |
| `#urgent-care`| `UrgentCareBlock` | Location + phone + dual CTAs (dark card)      |
| `#volunteer`  | `VolunteerGrid`   | Eyebrow + headline + 4-item grid + 2 images   |
| `#partners`   | `PartnersSection` | 4-category grid                               |
| `#hiring`     | `HiringBand`      | Bullets + dual CTAs                           |
| `#final-cta`  | `FinalCTA`        | Closing dual-CTA band                         |
| `#footer`     | `Footer`          | Multi-column footer                           |

The agent can omit sections by simply not exporting their data from
`site-config.ts` and removing the corresponding import + JSX from
`app/page.tsx`. Most clients will use all sections; some will skip
`HiringBand` or `VolunteerGrid` depending on industry.

---

## Architectural rules (for the agent)

1. **Never modify component files.** All client-specific changes go in
   `lib/site-config.ts` and `tailwind.config.ts`.
2. **Never hardcode colors or fonts in JSX or CSS.** Use Tailwind tokens.
3. **Never break the type contract.** `SiteConfig` is the source of truth.
4. **Always run `npm run build` before deploying.** If the build fails,
   read the error and fix it. Do not deploy a failing build.
5. **Always verify the deployed URL responds with HTTP 200** before
   declaring the build successful.

---

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript 5
- Tailwind CSS 3
- next/font (Google Fonts)

No CMS, no third-party integrations, no external dependencies beyond the
above. This is a **starter**, not a production CMS-backed site — that's
the V2/Premium template's job.

---

## Roadmap

- **V1 (this template)** — single-page, anchor-nav, gradient placeholders
- **V2** — image management (Unsplash API or AI generation per industry)
- **V3** — variant section library (alternative hero, alternative footer)
- **Premium** — full multi-page Strapi-backed template (modeled on full SCAMHC)
