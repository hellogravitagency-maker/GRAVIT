# Dead Code (pruned 2026-11-12)
Back: [[00 GRAVIT Map]]

100 files that `src/main.tsx` never imported were removed with `git rm`. That covered `ai-builder/`, `visualcraft/`, `three/`, `data/`, `hooks/`, `cartStore`, `useCursorStore`, `lib/ai-training`, about 37 unused components with their `.css` files, three unused `framer/*.jsx` files, `contact/ContactInfo`, and the unused `ui/*` files (including `button.tsx`).

These packages were uninstalled with them: three, @react-three/fiber, drei and postprocessing, postprocessing, ogl, gl-matrix, d3-geo, @google/genai, framer, @tabler/icons-react, @base-ui/react, express, dotenv, @fontsource-variable/geist, class-variance-authority, @types/three, @types/d3-geo, @types/express.

To get a file back: `git log --diff-filter=D --name-only` shows deleted files, and `git checkout <commit>^ -- <path>` restores one.

Every file left in `src/` is reachable from `main.tsx`.
