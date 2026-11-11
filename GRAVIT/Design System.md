# Design System
Back: [[00 GRAVIT Map]]

`DESIGN.md` (in the repo root) describes "Editorial Brutalism": off-white and void-black, a single violet accent `#5B4BFF`, Inter + Space Mono, and no 3D, particles or glows.

**What the code actually does** (`src/index.css`, 388 lines):
- `--app-*` tokens. Light: bg `#FDFCF9`, text `#1A1A1A`, accent **orange `#f97316`**, secondary `#f43f5e`. Dark (`.dark` class): bg `#000`, text `#fff`.
- shadcn oklch tokens (`--background`, `--primary`, …) are defined alongside them.
- Fonts: `--font-heading` is **Syne**, `--font-body` and `--font-sans` are Inter, `--font-mono` is Space Mono. Instrument Serif is used for one accent class.
- Dark mode: a `.dark` class on `<html>`, toggled by `ui/animated-theme-toggler.tsx` and saved in `localStorage.theme`.

⚠️ DESIGN.md no longer matches the code: the accent color and heading font differ, and the hero uses a 3D carousel with floating props, which DESIGN.md forbids. Trust `index.css` for now. If DESIGN.md is meant to be the reference, update it.
