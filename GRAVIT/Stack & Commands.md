# Stack & Commands
Back: [[00 GRAVIT Map]]

| Need | Command |
|---|---|
| Dev server (port 3000) | `npm run dev` |
| Build to `dist/` | `npm run build` |
| Preview the build | `npm run preview` |
| Type check (the "lint" script) | `npm run lint` (runs `tsc --noEmit`) |

**Libraries the live code uses** (reachable from `main.tsx`): react 19, react-router-dom 7, react-helmet-async, framer-motion (imported as `motion/react` via a vite alias), gsap + @gsap/react + ScrollTrigger, lenis, zustand, react-hook-form + zod, @supabase/supabase-js, lucide-react, clsx + tailwind-merge, Tailwind v4 + tw-animate-css + shadcn css.

The 3D, Gemini and other unused packages were removed (see [[Dead Code]]). `@types/react` is not installed, and `npm run lint` reports 4 type errors that were there before the prune (in App.tsx, SmoothScroll.tsx and animated-theme-toggler.tsx). `npm run build` passes.

## vite.config.ts
- Aliases: `@` → `src/`, `motion/react` → `framer-motion`.
- `esbuild.drop: ['console','debugger']`: **all console.* calls are removed from builds.**
- Manual chunks: vendor-react, vendor-motion, vendor-gsap, vendor-lucide.
- The `defer-css` plugin rewrites stylesheet links into a preload plus a `media=print onload` swap.
- Security headers are set on dev and preview. Production headers, including the CSP, live in `public/_headers` (Netlify/Cloudflare format).
- `DISABLE_HMR=true` turns off HMR and file watching (left over from AI Studio).
