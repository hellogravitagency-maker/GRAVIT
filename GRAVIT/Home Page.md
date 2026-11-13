# Home Page (`/`)
Back: [[00 GRAVIT Map]] · Source: `src/components/Home.tsx`

Render order (all in `src/components/home/` unless noted):
1. **Hero**, inline in Home.tsx: "Web Development · SaaS · AI Automation" pill eyebrow, "Engineering the / Extraordinary." headline, two CTAs, a mono tech-stack row, then `framer/Infinite3DCarousel` as the product stage fed `HERO_ITEMS` from `home/HeroCards.tsx` — coded app-window cards (automation flow, SaaS dashboard, code + deploy, AI agent chat, Lighthouse) plus two real builds in browser frames. Only the centered card animates; side screenshots go grayscale. GSAP pins it on desktop and grows the stage.
2. `TrustedBy`: static row of the 4 client names.
3. `MotionFeatureCards`: "What we build" bento tiles; each `features/*Visual` plays while its tile is in view.
4. `Capabilities`: slim 3-fact band + link to /services.
5. `ServiceBranding`, `ServiceUIUX`, `ServiceDevelopment`: same restyle, framer animations kept.
6. `ProcessSection`: four big numbered steps.
7. `ManifestoSection`: pinned full-screen word-lighting (own GSAP).
8. `SelectedWork`: client tiles → `/work/:slug` case studies, plus 6 Dribbble concept tiles. Also used on `/work` with `showHeader={false}`.
9. `Results`: single verified stat (3 live client sites).
10. `Faq`, then `CtaPanel` (`src/components/CtaPanel.tsx`, shared with Work/Services/About).

Removed on purpose: PortfolioGrid (merged into SelectedWork), Testimonials (quotes were not real), SmartTypewriter.

Motion: see [[Design System]] → GSAP layer.
