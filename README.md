# FU DEVELOPERS — Official Agency Website

Premium multi-page website for **FU DEVELOPERS**, a digital development agency
(websites · web apps · mobile apps · games · AI solutions · desktop software · custom development).

The website uses a black, white and neutral-grey visual system. The original logo artwork is
preserved unmodified.

---

## Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** (custom brand theme in `tailwind.config.js`)
- **React Router 6** — true multi-page routing
- **Lucide Icons**
- No heavy animation libraries — route entrances, one-time scroll reveals, progressive
  navigation, restrained component interactions and footer motion use CSS and a small
  `IntersectionObserver` component. Reduced-motion preferences disable nonessential motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
```

## Hero video

The hero accepts an optimized, properly licensed coding-session video and matching poster through
`VITE_HERO_VIDEO_URL` and `VITE_HERO_VIDEO_POSTER`. Copy `.env.example` to `.env` and set both
values to real, accessible asset URLs. Do not add a local path until the corresponding asset exists.
The video is muted, loops, plays inline and is only loaded on larger screens when reduced motion is
not requested. The poster (when configured) or the static dark fallback is used otherwise.

No footage is bundled by default: configure a clip you have permission to use before enabling video
in a deployed environment.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home (hero, intro, services preview, Rs. 15,000 / 7-days offer, selected work) |
| `/about` | About FU DEVELOPERS + the developer behind the agency + mission + technologies |
| `/services` | Services overview (7 services) |
| `/services/web-development` | Websites (incl. Rs. 15,000 / 7-day offer) |
| `/services/web-applications` | Web applications |
| `/services/mobile-apps` | Mobile applications |
| `/services/games` | Games |
| `/services/ai-solutions` | AI solutions |
| `/services/software` | Desktop / software solutions |
| `/services/custom-development` | Custom development |
| `/projects` | All projects with ALL / WEB / APPLICATIONS / OTHER filter |
| `/projects/todo-list` | Todo List case page + live demo |
| `/projects/calculator` | Calculator case page + live demo |
| `/projects/weather-app` | Weather App case page + live demo |
| `/process` | 5-step process (Discover → Plan → Design → Develop → Launch) |
| `/contact` | Inquiry form + WhatsApp + email + Instagram |
| `*` | 404 page |

Every page ships unique SEO metadata (title, description, Open Graph, Twitter), semantic
HTML, a sticky blurred navbar, mobile navigation and the shared footer.

## Structure

```
src/
  components/          Navbar, Footer, Layout, Logo, Reveal, ui, cards, CTA, PageHero…
    mockups/           Hand-built UI previews (todo / calculator / weather / portfolio)
  pages/               Home, About, Services, ServiceDetail, Projects, ProjectDetail, Process, Contact, NotFound
  data/                site.ts, services.ts, projects.ts, process.ts  (single source of truth)
  lib/                 seo.ts (per-page metadata), contact.ts (form sending)
  scripts/             ssr-entry.tsx + prerender.mjs (build-time prerender), ssr-check.mjs (verifies dist/ HTML)
```

## Logo usage

`public/logo.jpg` is the **official artwork, used unmodified**. The navbar and footer display
the artwork's own monogram / lockup regions through a CSS viewport crop (`components/Logo.tsx`)
so proportions are never distorted. `public/favicon.png` is a square canvas containing the
original monogram.

## Contact form / EmailJS

The form validates in-page and then sends honestly:

- If `EMAILJS_CONFIG` in `src/lib/contact.ts` is filled (serviceId / templateId / publicKey),
  it posts to the EmailJS REST API — no backend needed.
- While empty, submitting opens the visitor's email client with the full request pre-filled
  (`mailto:info.fudevelopers@gmail.com`), and the UI says exactly that.
- "Chat on WhatsApp" always composes a WhatsApp message (`wa.me/923350387417`) from the form fields.

## Content rules honored

No invented clients, testimonials, reviews, awards, statistics or team members. Only the four
real projects (with live demos) are shown, plus a "More projects coming soon" section.

## Prerender (SSG) & SEO verification

`npm run build` = `tsc` → `vite build` → SSR bundle → `scripts/prerender.mjs`, which writes
`dist/index.html`, `dist/<route>/index.html` for all 16 routes, and `dist/404.html` (noindex).
Each file contains its own `<title>`, description, Open Graph, Twitter and canonical tags, plus the
rendered page body; the browser then hydrates it. Head tags come from `usePageMeta`
(`src/lib/seo.ts`), so there is one source of truth for browser and prerender.

`public/_redirects` deliberately has no `/*  /index.html  200` catch-all: unknown URLs get
`404.html` with a real HTTP 404.

```bash
npm run build
npm run ssr-check   # verifies the generated dist/ HTML (H1, title, description, og:*, twitter:*, canonical, JSON-LD, 404)
```
