# Routes
Back: [[00 GRAVIT Map]] · Source: `src/App.tsx`

| Path | Component | Notes |
|---|---|---|
| `/` | `components/Home.tsx` | eager import, see [[Home Page]] |
| `/about` | `components/About.tsx` | lazy |
| `/agency` | redirects to `/about` | |
| `/services` | `pages/Services.tsx` | lazy |
| `/work` | `components/Work.tsx` | lazy; also exports `projectsData` |
| `/work/:slug` | `components/CaseStudy.tsx` | reads `projectsData[slug]`; an unknown slug redirects via Navigate |
| `/contact` | `components/Contact.tsx` | see [[Contact Flow]] |
| `/terms` `/privacy` `/refund-policy` | `Terms` / `Privacy` / `RefundPolicy` | all wrap `ui/LegalLayout.tsx` |
| `*` | `components/NotFound.tsx` | uses the `BlackHole.tsx` canvas |

Every page is wrapped in `PageTransition`. The whole app sits inside `SmoothScroll`, which syncs Lenis with GSAP ScrollTrigger and writes to `store/useScrollStore`.

**Global chrome:** `Navbar` (Logo, theme toggle, links to Home/Work/Services/About, plus a Contact button), a lazy-loaded `Footer`, and `ChatWidget`, which appears after 1s via `ui/DelayedRender`. All three are hidden when the path starts with `/ai-builder/studio`, but that route no longer exists (see [[Gotchas]]).

**SEO:** each page renders `components/SEO.tsx` (Helmet), using `config/siteConfig.ts` and the JSON-LD helpers in `lib/seo.ts`. Static files: `public/sitemap.xml`, `robots.txt`, `llms.txt`.

All internal links in the live code point to existing routes.
