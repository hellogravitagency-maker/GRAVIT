# GRAVIT — Project Guidelines & Architecture

## Brand Identity & Positioning
- **Studio Name**: GRAVIT
- **Positioning**: Independent Digital Product Engineering Studio
- **Tagline**: We build what others imagine.
- **Dual Track Architecture**:
  1. **Client Engineering**: High-performance websites, web/mobile applications, software & SaaS products, AI & automation systems, product design, and interactive experiences.
  2. **Studio-Built Technology**: GRAVIT-owned applications, open-source developer tools, standalone browser demos across industries, and experimental games.
  *Always clearly distinguish client work, studio-owned products, open-source repositories, and interactive concept prototypes.*

---

## Approved Design System & Brand Tokens

### 1. Palette
```css
:root {
  --gravit-space: #0A0A0F;  /* Deep Space ground, dark mode foundation, primary dark surface */
  --gravit-canvas: #E9E8E1; /* Warm Studio Canvas, secondary neutral surface, editorial warmth */
  --gravit-nova: #F8F8F0;   /* Crisp Nova light ground, primary light mode surface */
  --gravit-ember: #FF6A39;  /* Sharp Ember accent: CTAs, active states, focus rings, status pings */
}
```
- **Rule**: Ember is an intentional accent—never apply it blindly to every heading, border, and badge.
- **Surface Alternation**: Sections alternate purposefully between `.surface-nova`, `.surface-canvas`, and `.surface-space`.

### 2. Typography
- **Primary Interface & Body**: **Geist** (fallback: **Inter**, -apple-system, sans-serif).
- **Editorial Emphasis (Restrained)**: **Instrument Serif** italic. Never use for all headings; use selectively for key words.
- **Technical Metadata & Numbers**: **Space Mono**. Used for indices, tags, dates, code labels, and telemetry.

### 3. Visual Language & Principles
- **References**: Apple clarity, Linear interface precision, Stripe structured storytelling.
- **Aesthetic**: Structured, editorial, precise, product-led, and technical.
- **Cards & Surfaces**: Clean borders (`border border-border-subtle`), subtle radii (`rounded-2xl`), restrained hover states without cheesy shadows.
- **Grid**: 12-column responsive layout, `max-w-[1400px]`, consistent section rhythm.

### 4. Strictly Forbidden (Anti-Patterns)
- ❌ Poster-style hero compositions, automotive campaign imagery (e.g. Porsche GT3 RS).
- ❌ Oversized all-caps display headlines dominating entire screens.
- ❌ Gratuitous 3D meshes, WebGL canvas particles, neon glows, and excessive glassmorphism.
- ❌ Stock photography that fails to explain software or engineering capability.
- ❌ Fabricated clients, fake testimonials, unverified growth metrics, or fictional case studies.
- ❌ Dead links, inert cards, and fake buttons.

---

## Technology Stack & Conventions
- **Framework**: React 19 + React DOM 19
- **Build Tool**: Vite 6 (ESM)
- **Language**: TypeScript (`tsconfig.json` ES2022)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + `@theme` tokens in `src/index.css`
- **Routing**: `react-router-dom` v7
- **Icons**: `lucide-react`
- **Backend / Integrations**: `@supabase/supabase-js`, Web3Forms API, WhatsApp direct link
- **State Management**: `zustand` (minimal, scroll and UI state)
- **Forms**: `react-hook-form` + `zod`

### Core Primitives (`src/components/ui/`)
- `Button`: Primary, Secondary, Outline, Ghost, Ember variants with accessible focus rings and loading states.
- `Badge`: Technical metadata, status pings (`live`, `beta`, `prototype`), ownership indicators (`client`, `product`, `opensource`).
- `Card`: Structured surface container (`default`, `canvas`, `space`, `interactive`).
- `SectionHeading`: Standardized eyebrow (Space Mono) + headline + optional Instrument Serif accent + subtitle.
- `Divider`: Minimal structural rule with optional mono label.
- `Input`, `Select`, `Textarea`: High-contrast, accessible form controls with explicit error and helper text.
- `Container`: Responsive max-width wrapper with unified padding.
- `ProjectCard`: Standard portfolio entry with ownership, status, tech tags, and UI screenshot.
- `ServiceCard`: Capability card with deliverables list and action link.
- `ProductPreviewCard`: Dedicated showcase card for studio-built software.

---

## Target Route Map
```text
/                         Homepage
/work                     Selected work / portfolio index
/work/:slug               Individual case study
/services                 Services overview
/services/websites        Websites & Web Experiences
/services/applications    Application Engineering
/services/software-saas   Software & SaaS Development
/services/ai-automation   AI & Automation
/services/product-design  Product Design & UX Engineering
/services/interactive     Interactive Experiences & Prototypes
/products                 GRAVIT-owned apps & products
/products/:slug           Product detail page
/open-source              Open-source repositories
/demos                    Interactive standalone browser demo catalogue
/demos/:domain/:slug      Demo detail & sandboxed iframe launch wrapper
/games                    Games & creative technology experiments
/studio                   About GRAVIT (Identity, philosophy, two-track model)
/process                  5-stage engineering workflow
/contact                  Project enquiry & scoping
/style-guide              Internal component & design system showcase
```

---

## Standard Commands
- `npm run dev`: Launch local development server on port 3000.
- `npm run build`: Production build to `dist/`.
- `npm run preview`: Preview production build locally.
- `npm run lint`: Run TypeScript type-check (`tsc --noEmit`).

---

## Quality Gates & Verification Checklist
Before completing any phase or submitting UI changes:
1. **Verification**: Run `npm run build` and ensure zero build errors.
2. **Accessibility**: Visible focus-visible rings (`#FF6A39`), WCAG AA contrast ratio (> 4.5:1), semantic landmark headings.
3. **Responsive**: Check layouts across 390px (mobile), 768px (tablet), and 1440px (desktop). Zero horizontal scroll overflow.
4. **Motion Safety**: Respect `prefers-reduced-motion` across all animations and transitions.
5. **Truthfulness**: Zero invented metrics, testimonials, or dead links.
