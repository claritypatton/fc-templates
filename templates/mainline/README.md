# Mainline — Four-Page Template (Industrial / Trades)

A Next.js 14 + Tailwind CSS template with an industrial-precise aesthetic —
split layout home hero with an emergency-call band, dark navy page heroes on
inner pages, sharp 4–8px corners, all-caps micro-labels, and a safety-orange
accent verified at WCAG-AA contrast on white. Designed for HVAC, plumbing,
electrical, custom millwork, and other modern small-business contractors.

Four pages: Home, Services, About, Contact. Designed to be re-skinned per
client by the **Build Starter Site** agent (see `ideal-template-spec.md`).

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

The `SiteConfig` shape is **identical to the Atrium template** — both
templates share this contract so the agent can translate one client's data
into either template without re-shaping.

### 2. `tailwind.config.ts` — brand tokens

Three things change here per client:

- `theme.extend.colors` — semantic palette (`bg`, `surface`, `surface2`,
  `primary`, `accent`, `ink`, `ink2`, `ink3`, `line`, `line2`)
- `theme.extend.fontFamily` — display + body font pair (referenced via
  CSS variables defined in `app/layout.tsx`)
- `theme.extend.borderRadius` — Mainline uses sharp corners (2–8px) by
  default; clients in dressier categories may want to bump these up.

Components reference these via Tailwind class names only (`bg-primary`,
`font-display`, `rounded-md`). They never reference colors or fonts directly.

### 3. `app/layout.tsx` — fonts (sometimes)

If the brand needs different fonts than Archivo + DM Sans, the agent updates
the imports from `next/font/google` and replaces the variable assignments.
The CSS variable names (`--font-display`, `--font-body`) stay fixed.

### 4. `public/img/` — images

Drop client images into `public/img/`. Filenames referenced in
`site-config.ts` (e.g. `image: { src: '/img/hero.jpg', alt: '...' }`).

Until images are added, **every image slot falls back to a branded gradient
placeholder labeled "Client image"** — defined in `globals.css` under
`.placeholder-image`.

---

## Page & section inventory

### Home (`app/page.tsx`)

| Component         | Purpose                                                |
| ----------------- | ------------------------------------------------------ |
| `SplitHero`       | Split layout + 24/7 emergency-call band (signature)    |
| `TrustBadges`     | 3-column tile grid with monospace numbering            |
| `ServicesPreview` | 4-up tile grid with hover-fill cards                   |
| `AboutTeaser`     | Image + bullets (with corner-bracket accent)           |
| `Testimonials`    | Star-rated card grid on dark navy                      |
| `FinalCTA`        | Bold orange CTA band                                   |

### Services (`app/services/page.tsx`)

| Component       | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `PageHero`      | Dark navy hero with accent stripe                |
| `ServiceList`   | Alternating image/text rows with /SERVICE.0N tags |
| `ProcessSteps`  | 4-step grid with numbered tiles                  |
| `FinalCTA`      | Orange CTA band                                  |

### About (`app/about/page.tsx`)

| Component      | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `PageHero`     | Dark navy hero                                   |
| `StatsStrip`   | Large orange numbers on dark navy with mono labels |
| `StorySection` | Long-form story copy + image with corner accent  |
| `ValuesGrid`   | Numbered rule grid (/RULE.0N)                    |
| `TeamGrid`     | Cleaner industrial cards with role above name   |
| `FinalCTA`     | Orange CTA band                                  |

### Contact (`app/contact/page.tsx`)

| Component      | Purpose                                                 |
| -------------- | ------------------------------------------------------- |
| `PageHero`     | Dark navy hero                                          |
| `ContactPanel` | Form + sidebar (emergency CTA, address, hours, areas)   |
| `FinalCTA`     | Orange band — "heating or cooling emergency?"           |

### Shared (rendered by `app/layout.tsx`)

- `TopBar` — black band with orange phone CTA. Hides if `siteConfig.topBar` is omitted.
- `Header` — sticky white nav, all-caps links, accent underline on active route.
- `Footer` — deep navy with dot-grid texture; license number, prominent phone, social row.

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
- next/font (Google Fonts — Archivo + DM Sans)

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

This template lives alongside **Atrium** (warm/editorial) in the FC template
catalog. Both consume the same `SiteConfig` shape. The agent picks the template
based on the client's brand voice — warm/editorial vs. industrial/precise — and
fills the same data into either.
