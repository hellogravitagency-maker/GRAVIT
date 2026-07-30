---
name: prompt-architect
description: >
  Acts as a professional prompt engineer for AI coding tools. Runs a short interview to
  fill in whatever is missing, then writes a precise, build-ready prompt for Claude
  Code, Lovable, Bolt.new, v0, Cursor, Windsurf, or a generic LLM. ALWAYS use whenever
  the user asks to "write a prompt", "make/build a prompt for X", "help me prompt
  this", "prompt engineer this for me", wants a spec to hand to an AI builder or coding
  agent, or describes a project and asks how to get an AI tool to build exactly what
  they want — for ANY project type: landing page, full web app, mobile app,
  backend/API, ML pipeline, script, automation, or Claude Code build prompt. Trigger
  even with no named AI tool. For a landing-page/hero build, use this to run the
  interview, then hand drafting to motionsite-prompt-gen. For local-first agent /
  multi-service architecture requests, hand off to system-architect instead.
---

# Prompt Architect

## The one idea this skill exists to enforce

A prompt fails when the AI has to guess. Every adjective it's left to interpret
("modern", "clean", "robust", "nice UX") is a decision the AI makes for the user instead
of the user making it themselves. A professional prompt engineer's actual job is
converting vague intent into exact, checkable values — hex codes instead of "blue",
numbered flows instead of "handle the user journey", a stated definition of done instead
of trusting the AI to know when to stop. The interview below exists only to gather the
specific values needed to do that — not to be thorough for its own sake.

## Step 1 — Read before asking

Look at what the user already gave you. Most of a good prompt is usually already
sitting in their message or in what's already known about their stack, brand, or
conventions — don't re-ask for it. Only the interview should fill genuine gaps.

Identify the project category, since it decides which template applies:

- **Landing page / marketing site / hero section** → run Step 2, then hand the visual
  drafting to `motionsite-prompt-gen`
- **Full-stack app / SaaS feature**
- **Mobile app** (Flutter, React Native, etc.)
- **Backend / API / service**
- **ML / data pipeline**
- **Script, CLI tool, or automation**
- **Claude Code / agentic build prompt** (working inside an existing codebase)
- **Multi-service local-first agent / system architecture** → hand off to
  `system-architect` instead of using the templates below

## Step 2 — Interview only what's missing

Use `ask_user_input_v0` for this — tappable options beat typing, especially on mobile.
One question is ideal, three is the ceiling, and all of them should go in a single call
rather than serial back-and-forth rounds — the tool supports up to three questions at
once, so batch whatever's missing instead of interviewing in stages. If the request is
already narrow and well-specified, skip the interview entirely: state your assumptions
in one line and go straight to the draft. Interviewing a request that's already clear
just adds friction.

Fill in priority order, and stop as soon as there's enough to write a complete,
non-vague prompt:

1. **Target tool** — Claude Code, Lovable/Bolt/v0, Cursor/Windsurf, or a generic LLM.
   This changes syntax and what the prompt can assume the tool already knows (Claude
   Code wants file paths and verification steps; Lovable/Bolt/v0 want one dense
   copy-paste block; a generic LLM needs more upfront explanation).
2. **Scope tier** — throwaway demo, production-ready feature, or full system.
3. **Hard constraints** — existing codebase/stack it has to fit into, non-negotiable
   tech choices, things it must NOT touch or change.
4. **Visual/aesthetic direction** — only for anything user-facing.
5. **Definition of done** — what "finished" looks like, so the eventual prompt can state
   success criteria instead of leaving the AI to decide when it's done.

## Step 3 — Match category to section template

Every template below follows the same logic as a MotionSites-style hero prompt: name
every section explicitly, replace anything subjective with an exact value or example.

### Landing page / hero / marketing site
Hand off to `motionsite-prompt-gen` once brand name, vibe, and background type are
known — its 6-section DNA (stack, theme, ambient background, nav, hero content,
responsive rules) covers nav/typography/copy/CTA well. But check first whether the
hero needs an actual 3D/WebGL scene (orbiting geometry, a real particle system, a GLTF
model) rather than a DOM illusion of depth. Motionsite's background options (gradient
blobs, video, ghost text, noise) are all 2D DOM effects — if the brief calls for real
3D, that's a different problem. In that case, use motionsite-prompt-gen for sections 2,
4, and 5 (theme, nav, hero copy/CTAs), but pull the background/interactive layer from
`3d-web-dev` instead of motionsite's Option A–E list: declare the R3F/Canvas stack, the
shader or GLTF pipeline, and post-processing preset there. Defaulting to a DOM-only
background for a brief that wanted real 3D is the single most common way this category
goes wrong.

### Full-stack app / SaaS feature
1. Stack & environment (framework, language, package manager, deploy target)
2. Integration point — if this extends an existing system, name the existing
   auth/data model/design system it must fit, not just "hard constraints" in general
3. Data model (entities, fields, relationships, constraints)
4. Core user flows — numbered, each as entry point → steps → exit state
5. API surface — endpoint, method, request/response shape, auth requirement
6. UI requirements — reuse an already-established design system's colors/type/
   components if one exists; otherwise specify layout and information architecture
   directly (nav structure, card/table/list patterns, empty/loading/error states).
   Don't reach for the landing-page template here — a functional dashboard is a
   different design problem than a marketing hero, and ambient blobs or ghost-text
   watermarks have no place in a parent portal or admin panel
7. Edge cases and error states, listed explicitly, not implied
8. Definition of done

### Mobile app (Flutter, React Native, etc.)
1. Stack declaration — framework, state management, navigation library
2. Integration point — existing backend/auth/design system this has to plug into, if any
3. Screen list with the purpose of each screen stated in one line
4. Data/state flow between screens
5. Platform-specific requirements — iOS vs Android differences, permissions needed
6. Visual direction — reuse an established design system's colors/type/spacing if one
   exists for this brand; otherwise specify it directly (this is app-screen design,
   not hero/marketing design — don't borrow the landing-page template here either)
7. Definition of done

### Backend / API / service
1. Stack & runtime declaration
2. Integration point — existing services, schemas, or event buses this must plug into
   without breaking, if this isn't a greenfield build
3. Endpoint table: method, path, request body, response body, status codes
4. Data layer — database choice, schema, migration approach
5. Auth/permissions model
6. Non-functional requirements — rate limits, latency targets, logging
7. Definition of done, including what a passing test looks like

### ML / data pipeline
1. Input data — schema, source, approximate size
2. Task definition — classification/regression/etc., target variable
3. Pipeline stages — preprocessing → features → model → evaluation
4. Model/library constraints
5. Success metric and the threshold that counts as "working"
6. Output artifact format

### Script / CLI tool / automation
1. Trigger or invocation method
2. Inputs and expected outputs, with a concrete example of each
3. Step-by-step logic, numbered
4. Failure handling — what happens when a step fails partway through
5. Definition of done

### Claude Code / agentic build prompt inside an existing codebase
1. Project context — link or summarize existing architecture docs if any exist
2. Explicit task scope — what to touch, and just as importantly what NOT to touch
3. File/folder structure expectations
4. Verification steps — name the actual existing tests/scripts in this codebase to run
   or extend (e.g. "the 12 kill-switch tests," "the schema validation script") rather
   than writing generic "add tests and run them" language; invented verification steps
   don't catch regressions the real test suite already knows to check for
5. Constraints — no unrelated refactors, no new dependencies without asking, etc.

## Step 4 — Write with precision, not adjectives

- Replace every vague adjective with an exact value, a number, or a named reference
  ("dark cinematic hero" → "#000000 background, Space Grotesk headline, single
  8000-point GLSL particle field")
- State constraints as constraints ("must", "never"), not soft suggestions
- State exclusions explicitly — what the AI should leave alone
- Always include a definition of done, so the AI has a stopping condition instead of
  guessing when it's finished
- Match the target tool's conventions from Step 2 — don't write a Claude Code prompt
  like a Lovable one or vice versa

## Step 5 — Output

Give the finished prompt as a single fenced block, ready to copy-paste. If it's long
(architecture-level, multi-file) or clearly meant to be reused, offer to save it as a
file too. Never hand back something half-specified — if a value is still genuinely
unknown after the interview, make the most reasonable assumption, mark it inline as an
assumption, and keep going rather than leaving a gap for the AI builder to fill.

## Quality checklist — run before showing the user

- [ ] Target tool identified, and the prompt matches its conventions
- [ ] No vague adjectives left unbacked by an exact value ("nice", "modern", "clean")
- [ ] Constraints and exclusions stated explicitly, not implied
- [ ] Definition of done included
- [ ] Fits in a single copy-paste block, or is clearly split with instructions if too long
