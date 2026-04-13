# SpeedLink EU 🚚

> Premium logistics website — bilingual (BG/EN), AI-generated imagery, dark theme.

![SpeedLink EU](public/images/header-services.jpg)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + Relume UI |
| Animations | Framer Motion |
| Routing | React Router DOM v7 |
| i18n | Custom BG/EN context |
| AI Images | Leonardo AI — Nano Banana (Gemini 2.5 Flash Image) |

## Features

- **Bilingual** — Bulgarian & English with instant language toggle
- **Premium dark theme** — `#0e0e0e` base, `#E8A838` brand orange
- **AI-generated imagery** — 29 custom images via Leonardo AI (Nano Banana)
- **Framer Motion** — scroll-triggered animations, staggered entrances
- **Fully responsive** — mobile-first, tested down to 375px
- **Pages** — Home, Services, Reviews, Contact

## Pages

```
/           → Home (начало)
/услуги     → Services
/отзиви     → Reviews
/контакт    → Contact
```

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Image Generation

Images were generated via the Leonardo AI API using the **Nano Banana** model (`gemini-2.5-flash-image`). To regenerate:

```bash
LEONARDO_API_KEY=your_key node scripts/leonardo-generate.mjs
```

Images are saved to `public/images/` and referenced in `src/data/images.js`.

## Project Structure

```
src/
├── context/          # LanguageContext (BG/EN i18n)
├── data/
│   ├── images.js     # Image paths (local or Unsplash fallback)
│   └── translations.js
├── components/       # Shared: Navbar, Footer, PageHeader
├── index.css         # Design tokens, utility classes
начало/               # Home page
услуги/               # Services page
отзиви/               # Reviews page
контакт/              # Contact page
public/images/        # AI-generated images (1024×1024 JPG)
scripts/
└── leonardo-generate.mjs  # Image generation script
```

---

Built by [tanev.design](https://tanev.design) · Stoyan Tanev
