# Atrium — Four-Page Template (Warm / Editorial)

A Next.js 14 + Tailwind CSS template with a warm editorial aesthetic — full-bleed
photographic hero on the home page, compact text heroes on inner pages, in the
visual tradition of [scamhc.org](https://www.scamhc.org/). Four pages: Home,
Services, About, Contact.

Designed to be re-skinned per client by the **Build Starter Site** agent
(see `ideal-template-spec.md`).

---

## Quick start

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
typed structured data. The agent rewrites this file completely per client.

The TypeScript types are the contract. If the agent's output type-checks
against `SiteConfig`, the site renders. If it doesn't, the build fails fast.

The `SiteConfig` shape is **stable across the FC template catalog** — the
same client data structure renders into Atrium or Mainline without
re-translation.

### 2. `tailwind.config.ts` — brand tokens

Three things change here per client:

- `theme.extend.colors` — semantic palette (`bg`, `surface`, `surface2`,
  `primary`, `accent`, `ink`, `ink2`, `ink3`, `line`)
- `theme.extend.fontFamily` — display + body font pair (referenced via
  CSS variables defined in `app/layout.tsx`)
- `theme.extend.borderRadius` — corner softness

Components reference these via Tailwind class names only (`bg-primary`,
`font-display`, `rounded-card`). They never reference colors or fonts directly.

### 3. `app/layout.tsx` — fonts (sometimes)

If the brand needs different fonts than Fraunces + Plus Jakarta Sans, the
agent updates the imports from `next/font/google` and replaces the variable
assignments. The CSS variable names (`--font-display`, `--font-body`) stay
fixed.

### 4. `public/img/` — images

Drop client images into `public/img/`. Filenames referenced in
`site-config.ts` (e.g. `image: { src: '/img/hero.jpg', alt: '...' }`).

Until images are added, **every image slot falls back to a branded gradient
placeholder labeled "Client image"** — defined in `globals.css` under
`.placeholder-image`. The template is presentable empty.

---

## Page & section inventory

### Home (`app/page.tsx`)

| Component         | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `ImageHero`       | Full-bleed photo hero with overlay (signature)    |
| `TrustBadges`     | 3-column trust strip                              |
| `ServicesPreview` | 3 service cards with "Learn More" CTAs            |
| `AboutTeaser`     | Image + bullets + CTA into the About page         |
| `Testimonials`    | 3 editorial-style quotes                          |
| `FinalCTA`        | Closing dual-CTA band (teal)                      |

### Services (`app/services/page.tsx`)

| Component       | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `PageHero`      | Compact text-only hero                           |
| `ServiceList`   | Alternating image/text rows, one per service     |
| `ProcessSteps`  | 4-step process band (dark teal)                  |
| `FinalCTA`      | Closing dual-CTA band                            |

### About (`app/about/page.tsx`)

| Component      | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `PageHero`     | Compact text-only hero                           |
| `StatsStrip`   | 4 stats with accent-bar treatment                |
| `StorySection` | Long-form story copy + image                     |
| `ValuesGrid`   | 4 values as cards on warm-cream surface          |
| `TeamGrid`     | Team member portraits + bios                     |
| `FinalCTA`     | Closing dual-CTA band                            |

### Contact (`app/contact/page.tsx`)

| Component      | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `PageHero`     | Compact text-only hero                           |
| `ContactPanel` | Form + sidebar (address, hours, service area)    |
| `FinalCTA`     | Closing dual-CTA band (urgent-care fallback)     |

### Shared (rendered by `app/layout.tsx`)

- `TopBar` — utility links + phone (above header). Hides if `siteConfig.topBar` is omitted.
- `Header` — sticky multi-page nav with active-route highlighting and mobile menu.
- `Footer` — multi-column footer with brand, links, mission column, social row.

The agent omits a section by leaving its `siteConfig` slice empty (components
return `null`) or by removing its import from the page file.

---

## Architectural rules (for the agent)

1. **Never modify component files.** All client-specific changes go in
   `lib/site-config.ts` and `tailwind.config.ts`.
2. **Never hardcode colors or fonts in JSX or CSS.** Use Tailwind tokens.
3. **Never break the type contract.** `SiteConfig` is the source of truth.
4. **Always run `npm run build` before deploying.** If the build fails, read
   the error and fix it. Do not deploy a failing build.
5. **Always verify the deployed URL responds with HTTP 200** before declaring
   the build successful.

---

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript 5 (strict)
- Tailwind CSS 3
- next/font (Google Fonts)

No CMS, no third-party integrations, no external dependencies beyond the above.
The site is fully static after build.

---

## Form handling

The contact form uses a `mailto:` action as a graceful no-config fallback. For
production, wire the form to a service like Resend, Formspree, or Web3Forms by
swapping the form's `action` and `method` attributes — that wiring lives at the
deploy layer, not in the template.

---

## Brand catalog note

This template lives alongside **Mainline** (modern trades) in the FC template
catalog. Both consume the same `SiteConfig` shape. The agent picks the template
based on the client's brand voice — warm/editorial vs. industrial/precise — and
fills the same data into either.
