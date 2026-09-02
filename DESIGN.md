# Design System: GRAVIT | Editorial Digital Studio
**Project ID:** GRAVIT-main

## 1. Design Philosophy
**Less decoration. More intention.**

GRAVIT operates at the intersection of editorial publishing, Swiss typography, and systems engineering. Every visual decision must be justified. If removing an element doesn't hurt the experience, it should be removed.

**Tone:** Editorial Brutalism. Two tones only — never blend more than two.
- Primary: Editorial / Structured
- Secondary: Precision / Utilitarian

**Differentiation Anchor:** "If this were screenshotted with the logo removed, a sophisticated design buyer would recognize it by its typographic scale, structural border language, and refusal to decorate."

## 2. Color Palette & Roles

Light mode (default):
* **Off-White (#F5F5F2) — `--app-background`:** Primary surface. Warm, not clinical.
* **Surface White (#FFFFFF) — `--app-surface`:** Card and container backgrounds.
* **Void Black (#0A0A0A) — `--app-text-primary`:** Primary text and structural elements.
* **Field Gray (#666666) — `--app-text-secondary`:** Supporting text and metadata.
* **Structural Gray (#D8D8D3) — `--app-border`:** All borders and dividers.
* **Violet (#5B4BFF) — `--app-accent`:** One accent, used with restraint. CTAs, active states, hover reveals only.

**DO NOT USE:** Cyan gradients, glowing orbs, blur blobs, grain overlays, or any decorative color effect.

## 3. Typography Rules

* **Display/Headings:** Large-scale, uppercase, tight tracking (`tracking-tighter`). Scale from `clamp(40px, 10vw, 130px)`. This IS the design.
* **Body (`--font-sans` → Inter):** Clean, legible, secondary. Only for description text — not headlines.
* **Metadata (`--font-mono` → Space Mono):** Used for numbers, indices, tags, labels, categories. Never for body paragraphs.

**Scale Contract:**
- Hero: `text-[14vw]` minimum
- Section headings: `text-5xl` to `text-8xl`
- Sub-labels: `text-xs font-mono uppercase tracking-widest`

## 4. Component Rules

* **Buttons:** Sharp-edged rectangles. `bg-primary text-background` for primary; `border border-border` for secondary. Hover = `bg-accent`. No rounded-full buttons except in the Navbar pill.
* **Cards:** Flat borders only (`border border-border`). No shadows. No glassmorphism. No rounded corners beyond `rounded-xl` inside dropdowns.
* **Sections:** Full-width, `border-t border-border` as section dividers. No divider graphics, no decorative lines.
* **Navigation:** Floating pill (`Navbar.tsx`) — this is the exception to the sharp-edge rule, justified because it is a floating element above the page grid.

## 5. Layout Principles

* **Grid:** 12-column, `max-w-[1800px] mx-auto`, `px-6 md:px-8 lg:px-12`
* **Section rhythm:** `py-24 md:py-48` for primary sections, `py-24 md:py-32` for dense sections.
* **Whitespace:** Generous. Space is structure, not emptiness.
* **Asymmetry:** Use the 12-column grid asymmetrically. A 4/8 split or 3/9 split is preferred over 6/6.

## 6. Motion Philosophy

* One entrance animation per page. Max.
* `duration: 0.9, ease: [0.16, 1, 0.3, 1]` — cinematic, not bouncy.
* Hover states: `transition-colors` only. No scale, no translate, no blur.
* Exception: List items with `→` reveal on hover (`opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0`) — this is purposeful.
* **Forbidden:** Staggered animation on every element, scroll-triggered reveals on paragraphs, cursor effects, 3D decorations, particles, spinning objects.

## 7. Copy Standards (avoid-ai-writing)

**Banned phrases:**
- "We build digital experiences"
- "Transform your brand"
- "Innovative solutions"
- "Cutting-edge"
- "Seamless"
- "Leverage"
- Any metric that cannot be verified ($X revenue generated, X% retention)

**Preferred register:** Short, declarative, specific. Write as if every word costs money.
