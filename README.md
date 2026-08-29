# Portfolio — Muhammad Hatta Yudia Gymnastiar

Personal portfolio site. Bilingual (English / Indonesian), animation-heavy, built on the Next.js App Router.

**Live:** _add your Vercel URL_ · **Source:** [github.com/attah1911/portofolio](https://github.com/attah1911/portofolio)

## Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 — App Router, Turbopack |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| i18n | Intlayer 9 — `en` (default) + `id` |
| Motion | GSAP, Lenis (smooth scroll), Swiper (carousels) |
| State | Redux Toolkit + redux-persist |
| Forms | react-hook-form + zod |
| Hosting | Vercel — Speed Insights + Analytics |

## Project structure

```
src/
  app/[locale]/         Routes — home, projects/[id], not-found; plus sitemap.ts, robots.ts
  common/*.data.tsx     Site content — career, contact, location, pages, projects, skills
  components/
    layout/             Page sections — Header, Footer, Heros, Blocks/*
    display/ input/     Cards, badges, images, buttons, clipboard
    modules/            Carousels, catalogs, drawers
    motion/             GSAP / Lenis wrappers, scroll effects
    navigation/ system/ Links, menus, logo, icons, text primitives
  styles/  types/  utils/  hooks/  contexts/
```

Path alias: `@/*` → `src/*`.
