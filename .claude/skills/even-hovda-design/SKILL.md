---
name: even-hovda-design
description: Use this skill to generate well-branded interfaces and assets for Even Lømo Hovda — an independent AI product leader / consultant — either for production work or throwaway prototypes, mocks, slides and one-pagers. Contains essential design guidelines (colors, type, fonts, assets, voice) plus UI kit components based on Even's existing portfolio, retuned to the "spring 2" sage/sky/mist palette. Norwegian-language brand.
user-invocable: true
---

# Even L. Hovda design skill

Read the `README.md` at the root of this skill, then explore the other
available files. The most important entry points:

- `README.md` — brand context, content fundamentals (Norwegian voice,
  casing rules, do/don't), visual foundations, iconography.
- `colors_and_type.css` — every design token (colors, type, spacing,
  radii, shadows, motion). **Always import this file and reference
  variables — never hard-code hex.**
- `preview/` — one-card-per-concept reference for color, type, spacing,
  components.
- `ui_kits/portfolio/` — pixel-accurate recreation of Even's portfolio,
  with reusable JSX components (header, footer, project card, dialog,
  contact form, animated logo).
- `assets/` — logos, portraits, project imagery, custom icon sprite,
  Geist / Geist Mono woff files.

## Working with this skill

- If creating **visual artifacts** (slides, mocks, throwaway
  prototypes, one-pagers), copy assets out of this skill into your
  working folder and produce static HTML the user can view directly.
- If working on **production code** (Next.js / React), import
  `colors_and_type.css`, lift the JSX patterns out of
  `ui_kits/portfolio/`, and follow the README's content rules.
- If the user invokes this skill **without other guidance**, ask them
  what they want to build, ask a few questions (audience, format,
  length, language), and then act as an expert designer who outputs
  HTML artifacts or production code, depending on the need.

## Critical rules

1. **Norwegian, first person, problem-first** — see CONTENT
   FUNDAMENTALS in the README. No "we", no emoji, no exclamation
   marks outside conversational asides.
2. **Light, calm, low-contrast.** No dark mode. No purple/violet
   gradients. No neon AI tropes.
3. **Sage is brand, sky is accent, slate is text.** Brand colour for
   text/icons on white is `--sage-500` (`#8FA77C`), not pure
   `--c-sage` (which is the soft variant for tints).
4. **Lucide for icons** by default; custom brand sprite for `ai`,
   `data`, `analytics`, `settings`, `file`, `logo`. **Never draw new
   icons by hand.**
5. **Fonts:** Inter (display & UI), Source Sans 3 (long-form),
   Geist Mono (code). Source Sans Pro from the original Dialect
   template is substituted with **Source Sans 3** — flag this if it
   matters and ask for licensed files.
