# Home Page (`/`)
Back: [[00 GRAVIT Map]] · Source: `src/components/Home.tsx`

Sections are listed in import order. All are in `src/components/home/` unless noted:
1. **Hero**, written inline in Home.tsx: the "Engineering the" headline with `ui/SmartTypewriter`, floating name pins and prop images (`/assets/hero-avatars/*.webp`), then `framer/Infinite3DCarousel.tsx` (a 3D card carousel with autoplay, drag momentum and nav buttons).
2. `TrustedBy`
3. `MotionFeatureCards`, which renders `home/features/{Experience,Product,AI,Systems}Visual`
4. `Capabilities`
5. `ServiceBranding`, `ServiceUIUX`, `ServiceDevelopment`
6. `ProcessSection`
7. `ManifestoSection` (GSAP)
8. `SelectedWork`, `PortfolioGrid`
9. `Results`, `Testimonials`, `Faq`

The render order may differ, so check the JSX in Home.tsx. The sections are imported directly rather than lazy-loaded, a change made to fix chunk preload errors.

Animation: mostly `motion/react` (`whileInView`), with GSAP in Manifesto and Faq.
