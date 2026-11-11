---
tags: [moc]
---
# GRAVIT — Project Map

This is the marketing site for **GRAVIT STUDIO** (gravit.agency). It's a React 19 + Vite single-page app with no backend of its own.

## Notes
- [[Stack & Commands]]: dependencies, scripts, build config
- [[Routes]]: every URL and the component it renders
- [[Home Page]]: the order of sections on `/`
- [[Contact Flow]]: the form (sends to Supabase and Web3Forms) and the WhatsApp widget
- [[Config & Data]]: siteConfig, projects, env vars
- [[Design System]]: tokens, fonts, and where DESIGN.md disagrees with the code
- [[Dead Code]]: what was pruned and how to recover it
- [[Gotchas]]: things to know before editing

## Entry chain
`index.html` → `src/main.tsx` (Router, Helmet, ResizeObserver patch) → `src/App.tsx` (routes, Navbar, Footer, ChatWidget) → page components.
