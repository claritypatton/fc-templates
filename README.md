# fc-templates

Starter Site templates for the Full Circle Site Builder agent. Each template is a self-contained Next.js 14 project. The Site Builder agent clones whichever template the AM selects, fills `lib/site-config.ts` and `tailwind.config.ts` with client-specific data, builds, and deploys to Vercel.

## What's here

```
fc-templates/
├── templates.json              ← the registry (consumed by Andar /api/templates)
├── templates/
│   ├── onepage/                ← single-page launch site
│   ├── mainline/               ← 4-page industrial brochure
│   └── atrium/                 ← 4-page warm editorial brochure
├── previews/                   ← screenshot images for the picker UI
└── .github/workflows/
    └── validate.yml            ← CI: builds every template on PR
```

## How the system uses this repo

1. **Web Studio** reads `templates.json` (via Andar's `/api/templates` proxy) to populate the template-picker modal AMs see at "Build Starter Site"
2. **AM picks a template**, the choice flows through the build bundle as `templateId`
3. **Site Builder agent** sparse-checks-out the chosen template directory:
   ```bash
   git clone --filter=blob:none --no-checkout --depth 1 \
     "https://${GITHUB_CLONE_TOKEN}@github.com/claritypatton/fc-templates.git" "$WORK_DIR"
   cd "$WORK_DIR"
   git sparse-checkout init --cone
   git sparse-checkout set "templates/${TEMPLATE_ID}"
   git checkout
   ```
4. **Agent fills the template** with client data, builds, and deploys

## Per-template metadata

Each template has a `template.json` at its root:

```json
{
  "id": "mainline",
  "name": "Mainline",
  "shape": "multipage-brochure",
  "pages": ["/", "/services", "/about", "/contact"],
  "navigation": "routes",
  "agent_files_to_edit": ["lib/site-config.ts", "tailwind.config.ts", "app/layout.tsx", "public/img/"]
}
```

The `shape` field is the most important — it tells the agent which translation guide to load:

- `single-page` → loads the onepage translation guide (flat section structure)
- `multipage-brochure` → loads the brochure translation guide (page-grouped section structure)

Mainline and atrium share the same shape, the same `SiteConfig` type, and therefore the same translation guide. They differ only in visual rendering.

## Adding a new template

1. Create a new directory under `templates/{your-template-id}/` with a complete Next.js project that satisfies the [ideal template spec](https://github.com/claritypatton/fc-templates/blob/main/docs/ideal-template-spec.md) (or the equivalent doc your team is working from)
2. Add a `template.json` to the root of the new directory
3. Add an entry to `templates.json` with `"active": false` initially
4. Add a `previews/{your-template-id}.png` screenshot (~1200×800 PNG, populated with sample data)
5. Open a PR. CI must pass — every template's `npm install && npm run build` must succeed.
6. Merge. The template is in the catalog but hidden from AMs.
7. When ready to launch, flip `"active": false` → `"active": true` in `templates.json` and merge. Web Studio picks it up within ~5 minutes (cache TTL).

To take a template offline, flip back to `"active": false`. No code deploys required.

## Testing a template locally

```bash
cd templates/{template-id}
npm install
npm run dev
# Open http://localhost:3000
```

Default site-config.ts content is the template's design-time placeholder data — once the agent runs, it's replaced with client-specific copy.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript (strict mode)
- Tailwind CSS 3.4
- Google Fonts via `next/font/google`
- Node 20 / npm 10
- Vercel deployment

All three templates use the same versions. Dependency upgrades happen across all templates together to prevent drift.

## Related documentation

- The Site Builder agent package (`fc-site-builder-agent`) — defines how the agent uses these templates
- The agent's translation guides (`skill/templates/onepage/translation-guide.md` and `skill/templates/multipage-brochure/translation-guide.md`) — define how the agent fills `site-config.ts` from a project bundle

## Contact

Issues and PRs go through Full Circle's normal review process. For urgent fixes (a deployed site is broken because of a template bug), follow the runbook in the agent package's `docs/runbook.md`.
