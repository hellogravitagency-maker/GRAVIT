# Gotchas
Back: [[00 GRAVIT Map]]

- **Console calls are removed from builds** (esbuild drop in `vite.config.ts`). Debug with `npm run dev`.
- `main.tsx` patches `ResizeObserver` so its callbacks run one frame later. It also reloads the page on `vite:preloadError`, which happens when a cached page requests old chunk hashes after a deploy.
- The `isStudioMode` check in `App.tsx` looks for `/ai-builder/studio`. That route was removed, so the check never matches.
- `README.md` is the stock Google AI Studio template and doesn't describe this project.
- framer-motion is imported as `motion/react` through a vite alias. Both the `motion` and `framer-motion` packages are installed.
- The repo root contains one-off scripts and scraps that aren't part of the build: `ArcImageCarousel.js`, `framer_carousel.js`, `CrescentQuotePro_line14.txt`, `nuke_gradients.cjs`, `remove_gradients.cjs`.
- `scripts/generate-favicons.cjs` generates the favicons with sharp.
- `.agent/` and `.agents/` hold agent skills and plugins. `mcp.json` configures the chrome-devtools MCP on port 9222.
- `.lighthouseci/` is Lighthouse CI output.
