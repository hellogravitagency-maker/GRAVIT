# Design System: GRAVIT | High-Performance Digital Engineering
**Project ID:** GRAVIT-main

## 1. Visual Theme & Atmosphere
Cinematic, brutalist, and structurally minimalist. The aesthetic is high-contrast and uncompromising, prioritizing purposeful motion over colorful noise. The atmosphere feels stark, technical, and premium, defined by a vast, dark canvas that is punctuated by architectural markers (corner plus symbols) and a subtle film grain overlay. This creates a utilitarian yet high-end spatial computing experience that feels like a digital blueprint.

## 2. Color Palette & Roles
* **Deep Space Black (#000000):** Used for the primary background, establishing the vast, dark cinematic canvas.
* **Starlight Nova White (#FFFFFF):** Used for primary text, active states, and high-contrast structural borders.
* **Monolith Field Gray (#CCCCCC):** Used for secondary text, inactive elements, and paragraph bodies requiring slightly lower contrast than pure white.
* **Ghost Ember Gray (#AAAAAA):** Used for muted text, subtle borders, and background divisions.
* **Neon Accent Orange (#FF6A00):** Used for primary calls to action, highlights, section numbering, and brutalist hover states (such as the liquid-glass effect).

## 3. Typography Rules
* **Headings ("Space Grotesk"):** Used for bold, uppercase statements and primary titles. Often tracked tightly (letter-spacing: -0.04em) to create a monolithic, structural presence.
* **Body ("Inter"):** Used for highly legible paragraphs and long-form descriptive text.
* **Metadata & Micro-copy ("Space Mono"):** Used for technical metadata, numbering, indices (e.g., "[01. ABSTRACT]"), and buttons. It is heavily tracked (tracking-widest / letter-spacing: 0.1em) for a utilitarian, engineered, and technical feel.

## 4. Component Stylings
* **Buttons:** Utilitarian and sharp. Standard buttons feature a "liquid-glass" treatment with a transparent background and a subtle 20% opacity white border. On hover, they sharply transition to a solid Neon Accent Orange background with Deep Space Black text.
* **Cards/Containers:** Feature subtle roundness (rounded-2xl) wrapped in thin, low-opacity white borders (`rgba(255, 255, 255, 0.1)`). Backgrounds are transparent but reveal a faint, ghostly white fill (`hover:bg-white/5`) upon interaction.
* **Navigation:** A frosted "glass nav" floating pill (rounded-full) with heavy blur (`backdrop-filter: blur(8px)`) and a faint border, creating a distinct, elevated layer above the dense dark background.
* **Architectural Details:** Pixel cards and structural wrappers use corner pluses (`.corner-plus`) to denote bounds, reinforcing the engineering theme.

## 5. Layout Principles
* **Whitespace Strategy:** Expansive, deliberate, and structural. Sections utilize deep padding (`py-32`) to create significant breathing room, establishing a cinematic pacing as the user scrolls.
* **Grid Alignment:** Strict 12-column grid alignment for content layout.
* **Sectioning:** Content is heavily divided by pronounced horizontal rules (`border-t border-white/20`) that act as chapter markers across the experience.
* **Scrollbars:** Hidden globally to maintain an unbroken, immersive brutalist presentation.
