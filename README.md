# VortxLab Creations

Full-screen immersive landing page for a fictional creative-tech studio.
React + TypeScript + Vite + Tailwind.

Built as the reference project for [GitCMS](../GitCMS) — **every piece of copy on
the page lives in [`content/home.json`](content/home.json)**, nothing is hardcoded in
the components.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## How the content works

[`src/content.ts`](src/content.ts) imports `content/home.json` and types it. The
components read from that object and nothing else:

```
content/home.json  →  src/content.ts  →  src/App.tsx
```

Vite inlines the JSON at build time. There is no runtime fetch, no CMS API call and
no content database — so editing the site is editing a file in git.

That is the whole point: GitCMS commits a change to `content/home.json`, the host
rebuilds, and the new copy is live. **The git history is the content history.**

### What is editable

| Path | Renders as |
|---|---|
| `brand.wordmark` | the `V O R T X` lockup under the logo |
| `media.backgroundVideoUrl` | the looping background video |
| `nav.*` | both navbar buttons and their links |
| `aside.text` / `aside.caption` | the left-hand column (newlines become line breaks) |
| `hero.lines` | the three heading lines — **an array, so they reorder and grow** |
| `footer.description` | the bottom-left paragraph |
| `footer.label` | "Net Dynamics" |
| `footer.ctaLabel` / `ctaHref` | the "Discover Now" button |
| `footer.social[]` | the social buttons — add or remove entries |

`hero.lines` and `footer.social` are arrays, which GitCMS renders as repeaters: add,
remove, reorder and duplicate items without touching code. Adding a fourth heading
line works because [`App.tsx`](src/App.tsx) maps over the array rather than rendering
three fixed lines.

Social icons are keyed by `platform` (`x`, `linkedin`, `facebook`) in
[`src/icons.tsx`](src/icons.tsx). An unrecognised platform renders no icon rather
than crashing.

## `gitcms.config.json`

Committed at the repo root, so GitCMS uses it instead of guessing:

```json
{ "content": { "dir": "content" }, "media": { "dir": "public/images", "publicPath": "/images" } }
```

## Design notes

- **Octagonal buttons** — three `clip-path` classes in [`src/index.css`](src/index.css)
  (`.btn-cut` 12px, `.btn-cut-sm` 8px, and `.btn-cut-border`, which layers a black
  inset over a white shape so the 1px gap reads as a border that follows the octagon).
- **Staggered entrance** — `fadeUp` from 0.1s to 1s across logo → nav → aside →
  heading → the three bottom columns, easing on `cubic-bezier(0.16, 1, 0.3, 1)`.
  Disabled under `prefers-reduced-motion`.
- **Zero image requests** — the logo and all three social marks are inline SVG.
