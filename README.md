# SpeedLink EU

Marketing site for a European logistics company. Single-page React app with in-page scroll sections, bilingual (Bulgarian / English), dark by default.

Built on Vite + React 18, Tailwind for styling, GSAP + Framer Motion for the scroll and reveal animations. Deployed on Vercel.

## Running it locally

```bash
npm install
npm run dev
```

Dev server is at http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Sections

Single page, scroll anchors:

- `#home` — hero + why-us + industries + stats + testimonials + gallery
- `#services`
- `#faq`
- `#contact`

`vercel.json` rewrites every path back to `/` — the app is deliberately one document.

Language toggle swaps all copy in place via a small context in `src/context/LanguageContext.jsx`. No route changes per language.

## Project layout

```
src/
  App.jsx              section composition + smooth-scroll + error boundary
  main.jsx             entry
  components/          Navbar, Footer, PageHeader, LeafletMap, CookieBanner, ContactForm, TrustSection, Modal
  context/             Language + Theme providers
  data/                translations.js (BG/EN strings) and images.js
  hooks/               small reusable bits (counter, magnetic, reveal, parallax)
  lib/gsap-config.js   GSAP plugin registration + custom eases
  index.css            tokens, utility classes, a few @layer rules

home/      services/      contact/
  each owns its own components/ folder and an index.jsx
```

Section folders (`home`, `services`, `contact`) live at the root alongside `src/` so each section owns its own components without polluting a shared tree.

## Images

All imagery in `public/images/` was generated with Leonardo AI (Nano Banana / Gemini 2.5 Flash Image). The generation script is in `scripts/leonardo-generate.mjs` — needs a `LEONARDO_API_KEY` env var if you want to regenerate:

```bash
LEONARDO_API_KEY=xxx node scripts/leonardo-generate.mjs
```

Paths are wired up in `src/data/images.js` — edit there if you change filenames.

## Styling notes

- Brand orange: `#E8A838`. Dark surface: `#0a0a0a`.
- Design tokens live in `:root` of `index.css` and are consumed by Tailwind via CSS variables (`rgb(var(--c-heading))` pattern).
- Theme toggling flips a `data-theme` attribute on `<html>`.

## Deploy

`vercel.json` handles SPA rewrites. Just push — Vercel picks up the Vite preset.

---

Stoyan Tanev · [tanev.design](https://tanev.design)
