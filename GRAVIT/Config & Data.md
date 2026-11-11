# Config & Data
Back: [[00 GRAVIT Map]]

| What | Where |
|---|---|
| Brand, domain, email, socials, service copy | `src/config/siteConfig.ts` |
| Case studies (`ssvemhs`, `little-stars`, `wonderkids`) | `projectsData` in `src/components/Work.tsx` |
| JSON-LD / breadcrumb helpers | `src/lib/seo.ts` |
| Theme tokens | `src/index.css` (see [[Design System]]) |
| Env template | `.env.example` |

**Env vars:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_WEB3FORMS_ACCESS_KEY`, and `VITE_GEMINI_API_KEY` (now unused, since the AI builder was removed).

Nothing reads `siteConfig.navigation` or `siteConfig.services`. The Navbar has its own hardcoded links. The pages listed in siteConfig (`/pricing`, `/services/:slug`, `/process`, `/insights`, `/careers`) have no routes.

**Adding a case study:** add an entry to `projectsData` and `/work/<slug>` works with no other code changes. Also add the URL to `public/sitemap.xml`.
