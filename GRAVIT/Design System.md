# Design System
Back: [[00 GRAVIT Map]]

Apple-style refresh (Nov 2026). `src/index.css` is the source of truth; `DESIGN.md` (Editorial Brutalism) is outdated.

- **Colors** (`--app-*`): light bg `#FBFBFD`, text `#1D1D1F`, secondary `#6E6E73`; dark bg `#000`, surface `#161617`, text `#F5F5F7`. Accent stays orange `#f97316`; `.text-gradient-accent` = orange → amber → rose.
- **Type**: system SF Pro on Apple devices, Inter (optical sizing) elsewhere. Headings semibold, tight negative tracking, `text-wrap: balance`. Syne was removed.
- **Patterns**: orange eyebrow label (`text-sm font-medium text-accent`) above a centered `display-editorial` h2; rounded tiles via `.bento-card !bg-surface-hover`; solid pill buttons (`bg-primary text-background`).
- **Easing**: Tailwind default transition is `cubic-bezier(0.28,0.11,0.32,1)` (`--ease-apple`).
- **Inner pages** open with `ui/PageIntro.tsx` and end with `CtaPanel`.

## GSAP layer
`src/components/PageTransition.tsx` wraps every route and runs:
- hero intro + desktop pin (`.hero`, `.hero-line`, `.hero-word`, `.hero-stage`)
- masked line reveal on `h1.page-title`, `h2.display-editorial`, `h2.font-heading` (skips headings framer already animates)
- `.gsap-stagger` children fade up; `.gsap-parallax` images settle from 1.15 zoom; `.gsap-zoom` panels grow in
- `ScrollTrigger.sort()` + `refresh()` at the end so child-created pins (Manifesto) order correctly

Everything is off under `prefers-reduced-motion`. Pins are desktop-only (≥768px).
