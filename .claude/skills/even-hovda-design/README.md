# Even L. Hovda — Design System

A calm, considered visual language for **Even Lømo Hovda**, an independent
AI product leader and consultant helping small and medium-sized
Norwegian businesses build valuable solutions with AI at the centre.

> *"Even Lømo Hovda: Konsulent. AI produktleder — hjelper små og
> mellomstore bedrifter utvikle verdifulle løsninger med AI i sentrum."*

The system pairs the structural rigour of the
[Dialect — Design System & Component Library](https://www.figma.com/community)
template with a soft, organic **"spring 2"** palette: sage greens,
sky blues, slate gray and warm neutrals. Where Even's original
portfolio used an indigo/orange dark theme, this system is its
daylight counterpart — light, airy, deliberate, optimistic.

---

## Sources

This design system was built from the following inputs:

| Source | Path / URL |
| --- | --- |
| **Portfolio codebase** (Next.js + Tailwind) | `portfolio_page/` (local, read-only) |
| **GitHub** | <https://github.com/evenlhovda/my_portfolio> |
| **Figma template** | Dialect — Design System & Component Library (Free) (Community) |
| **Color palette** | "spring 2" by Kiki Woodham — `uploads/Skjermbilde 2026-05-20 kl. 10.39.09.png` |

The portfolio's runtime is Next.js 14 + Tailwind, with the original
indigo (`#4F46E5`) / orange-contrast (`#F97316`) dark theme. We have
*recoloured* it — replacing the dark slate background with mist white,
indigo with sage, and orange with a calmer sky-blue accent — while
preserving Even's iconography, copy and Norwegian voice.

---

## Index

| File | What it is |
| --- | --- |
| `README.md` | This file — context, foundations, content rules |
| `CLAUDE_CODE_WORKFLOW.md` | **Step-by-step guide for implementing this system in `portfolio_page/` via Claude Code.** |
| `colors_and_type.css` | CSS custom properties for color, type, spacing, shadow, motion |
| `imagery.md` | **Imagery system** — three buckets, three rules, what to drop |
| `SKILL.md` | Agent skill manifest (for Claude Code / Claude.ai skills) |
| `assets/` | Logos, portraits, project imagery, fonts, icon sprite |
| `assets/fonts/` | Geist & Geist Mono (woff) carried over from portfolio |
| `assets/icons/` | Custom SVG icons used by the portfolio |
| `assets/projects/` | Project tile imagery |
| `preview/` | One HTML card per design-system concept (registered for review) |
| `ui_kits/portfolio/` | Pixel-accurate recreation of Even's portfolio in the new palette |
| `ui_kits/logo_explorations/` | Six logo direction explorations — pick one (or steal pieces) |

---

## Brand essence

Even sells **clarity**, not novelty. His value proposition is *"jeg elsker
problemer og mener at det å virkelig forstå problemet man ønsker løst,
er halvparten av løsningen"* — I love problems, and truly understanding
them is half the solution. The visual system reflects that:

- **Calm, not loud.** Soft greens and blues over neutral mist.
- **Plenty of breathing room.** Generous whitespace; 8pt rhythm.
- **Norwegian-modernist.** Inter typography, low-contrast surfaces,
  no decorative chrome.
- **Optimistic AI.** Sage green signals growth and balance — a deliberate
  counter to the synthetic neon-purple-and-black so common in AI branding.

---

## CONTENT FUNDAMENTALS

Even writes **in Norwegian (bokmål)**, first person, with a warm
practitioner's voice. Copy is grounded, technical when it needs to be,
and never hyped.

### Voice & tone
- **"Jeg" — first person, singular.** Even is a one-person consultancy;
  he speaks as himself, never as a "we".
- **Direct address.** Readers are *"du"* (informal you).
- **Plainspoken but technical.** He names tools by their real names
  (Flowise, LangChain, Cursor, Bubble, MCP, RAG, TTS, ASR) without
  glossing over jargon, but always pairs them with the business
  outcome.
- **Problem-first framing.** Posts and project copy lead with the
  problem, not the technology.
- **Dry humour, sparingly.** The footer reads *"© 2025 Even Lømo Hovda.
  Reserverte rettigheter og sånne ting…"* — "all rights reserved and
  such things…". This is the upper bound of irreverence; everything
  else is straightforward.
- **No emoji** in product/marketing copy. Icons do the visual work.
- **No exclamation marks** outside conversational asides.

### Casing
- **Sentence case** for headings — `"Se prosjekter"`, not `"Se Prosjekter"`.
- **Norwegian sentence-case for proper nouns:** `OwnersRoom`, `Bryne
  Kitefestival`, `Belron Solutions`, `AI` (always uppercase), `KI` (the
  Norwegian abbreviation, also seen in his consulting copy).
- Button labels are imperatives in lowercase-first: `Se prosjekter`,
  `Ta kontakt`, `Send melding`.

### Specific examples

> **Hero (homepage):**
> *Even L. Hovda*
> AI, automatisering og forretningsutvikling.
> `[ Se prosjekter ]`

> **Project bullet:**
> *Randi fakturaansvarlig AI agent — En AI-agent som automatisk
> prosesserer og analyserer fakturaer. […] Dette er ett eksempel på
> hvordan AI kan effektivisere administrative oppgaver og inngå som ett
> ledd i en større automatisert prosess.*

> **About:** *Jeg jobber med å skape teknologiske løsninger på
> forretningsproblemer. Jeg elsker problemer og mener at det å virkelig
> forstå problemet man ønsker løst, er halvparten av løsningen.*

> **CTA on contact:** *La oss ta en prat* — "Let's have a chat."

### Section headers
- `Kjerneområder` — Core areas
- `Om meg` — About me
- `Prosjekter 2025` — Projects 2025
- `Tidligere prosjekter` — Previous projects
- `Kontaktinformasjon` — Contact info
- `Interessert i en prat?` — Interested in a chat?

When you need English copy, use the same conversational register
("I help …", "Let's talk …", never "We empower …" or "Unlock the
potential of …").

---

## VISUAL FOUNDATIONS

### Color
Five hand-picked hues from the "spring 2" palette, plus derived
scales for usable tonal range. See `colors_and_type.css` for the
full token set.

| Token | Hex | Role |
| --- | --- | --- |
| `--c-sky` | `#BDDEF2` | Light blue — calm secondary accent |
| `--c-slate` | `#5F6B73` | Slate gray — primary text |
| `--c-mist` | `#F2F2F2` | Neutral background |
| `--c-spring` | `#DEF2D5` | Pale green — highlights, soft fills |
| `--c-sage` | `#AABF9B` | Sage — primary brand colour |

Working palette:

- **Backgrounds** are warm-neutral (`#FAFBF8` page, `#FFFFFF` cards,
  `#F2F2F2` subtle).
- **Brand** is `sage-500` (`#8FA77C`) — a darkened, more saturated
  shade of `--c-sage` to meet WCAG AA on white. Pure `--c-sage` is the
  *soft* brand colour for tints and avatars.
- **Accent** is `sky-400` (`#6BAFD8`) for links and info.
- **Text** uses the `slate-*` scale: `slate-800` body, `slate-600`
  secondary, `slate-400` muted.

### Type
- **Display & UI:** `Inter` (400/500/600/700/800). The Dialect
  template's primary face; already used on Even's portfolio.
- **Long-form:** `Source Sans 3` available as a secondary humanist
  alternative (the template's secondary face).
- **Mono:** `Geist Mono` (woff in `assets/fonts/`) with `JetBrains
  Mono` as a Google-Fonts fallback.
- **Fallback note:** **Geist Sans / Geist Mono ship as `.woff`** from
  the portfolio. Inter and Source Sans 3 are pulled from Google Fonts.
  We have *not* obtained the original Dialect-licensed Source Sans Pro
  (its successor on Google Fonts is **Source Sans 3** — virtually
  identical metrics; this is the substitution). **→ If Even has a
  licensed Source Sans Pro file, please drop it in `assets/fonts/`
  and we'll swap the @import.**

Scale: `12 / 14 / 16 / 18 / 20 / 24 / 32 / 44 / 54 / 72 / 96`.
Headings track `-0.02em`; body sits at line-height `1.65`.

### Spacing & layout
8pt baseline: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
Pages use a centred 1200px content container with 32px gutters.
Card grids use 32px column gaps. Section vertical rhythm is 96px on
desktop, 64px on tablet.

### Backgrounds
- **Default:** flat warm neutral (`#FAFBF8`).
- **Hero/feature sections:** layered with a *sage tint* (`--bg-tint-sage`)
  or a soft full-bleed photo with a 60% white wash. **No diagonal
  gradients, no aurora blobs.**
- **Optional texture:** subtle 1px grid lines at `slate-100`, used
  sparingly in the Dialect-style documentation layouts.
- The portfolio's two background photos (`assets/bg-01.webp`,
  `assets/bg-02.webp`) remain available for editorial/long-form pages,
  always with a translucent surface card on top.

### Animation
- **Fades and small translations only.** 200ms standard, 360ms slow,
  120ms hover. Easing `cubic-bezier(0.22, 1, 0.36, 1)` (a soft
  decelerate).
- **No bounce, no spring overshoot.** The portfolio's animated logo
  uses a gentle 4s sway — that's the upper bound.
- **Hover** = colour shift (one tonal step) + `translateY(-2px)` on
  cards. Never scale > 1.02.
- **Press** = no scale change; subtle colour darken (`brand-hover`).
  Buttons have `transition: background 120ms`.

### Borders & lines
- 1px hairlines at `--line-1` (slate-100) for tables and dividers.
- 1px card borders at `--line-2` (slate-200).
- Strong dividers at `--line-strong` (slate-300) only for hero-level
  separators.
- **No dotted or dashed borders** except in dev/Dialect docs frames.

### Shadows
A single, calibrated "soft, low-contrast" elevation system. All
shadows tint slightly green (`rgba(47,61,40, …)`) so they sit on the
warm-neutral backgrounds without going gray.

`--shadow-xs`, `-sm`, `-md`, `-lg`, `-xl` and `-inner`. The most
common is `--shadow-sm` for cards; `--shadow-md` only when an element
needs to read as "lifted" (modals, popovers, hovered cards).

### Transparency & blur
- Sticky headers use `background: rgba(255,255,255,0.78)` +
  `backdrop-filter: blur(8px)`.
- Image overlays use `rgba(95,107,115,0.55)` (slate at 55%) over
  photography when text sits on top.
- No frosted-glass cards in normal flow.

### Corner radii
`4 / 6 / 10 / 16 / 24` and `pill (999px)`. Defaults: inputs and
buttons `6–10`, cards `16`, modals `24`, avatars and chips `pill`.

### Cards
- White surface (`--bg-elevated`), `1px solid --line-2`,
  `--shadow-sm`, `--radius-lg` (16px).
- Padding `24px`; titles 20px/600, body 16px/400/`--fg-2`.
- Hover: `translateY(-2px)` + shadow `-md` over 200ms.
- *Project tile* variant overrides padding to `0`, with a 16:9 image
  on top and content padded 24px below.

### Buttons
See `preview/components-buttons.html`. Primary fills with sage,
secondary outlines, tertiary is a ghost link.

### Forms
Inputs sit at `--bg-surface`, `1px --line-2` border, `radius-md`,
12/14px padding. Focus ring is `--shadow-focus` (sage at 35% alpha).

### Layout rules
- Fixed sticky header on scroll, 64px tall on desktop.
- Maximum content width 1200px; long-form prose caps at 680px.
- **One** prominent imagery moment per page (hero portrait or a
  large project image). Other sections rely on typography rhythm.
- Norwegian copy tends to be 15–25% longer than English; line lengths
  cap at 70 characters to keep paragraphs visually short.

---

## ICONOGRAPHY

### Brand mark

The mark is a **simple "EH" monogram on a sage-50 disc** — Inter 700,
sage-700 letters, letter-spacing `-0.04em`. It's what's on Even's live
site today, retuned to the new palette. The simplicity is deliberate:
it sits quietly next to long Norwegian project titles, it works at
favicon size, and it doesn't compete with the content.

- **Default (`soft`)** — sage-50 disc `#E6EDDF`, sage-700 letters `#5A6F4C`. Use on white / page surface.
- **Brand-fill** — sage-500 disc `#8FA77C`, white letters. Use on white when the mark needs presence.
- **Inverse** — white disc, sage-700 letters. Use on sage or dark backgrounds.
- **Dark / on hero** — white disc, sage-700 letters. Same as inverse.

Implementation:
- React: `<EHMonogram size={32} variant="soft" />` (see `ui_kits/portfolio/EHMonogram.jsx`)
- Plain HTML: a `<div>` styled as a circle with `EH` inside, see any `preview/brand-*.html` card.
- Favicon: `assets/favicon.svg` (soft variant) and `assets/favicon-brand.svg` (brand-fill).

There is also a legacy **animated network-graph logo** (`ui_kits/portfolio/AnimatedLogo.jsx`)
carried over from the original portfolio. It's kept in the system as a
secondary motion-piece but is *not* the default mark — use only for hero
moments or as a watermark/loader.

### Icons

1. **Lucide** (open-source, MIT). The portfolio imports
   `Mail`, `Linkedin`, `MapPin`, `Phone`, `Calendar`, `Users`,
   `Building`, `Loader2`, `ArrowRight` from
   [`lucide-react`](https://lucide.dev). This is the **default icon
   system** — clean 1.5px strokes, 24×24 viewBox, no fills.
   We load it from CDN where needed:
   `<script src="https://unpkg.com/lucide@latest"></script>`.
2. **Custom brand icons** — a small sprite at
   `assets/icons/design-system-sprite.svg` (six 60×60 tiles: `ai`,
   `data`, `analytics`, `settings`, `file`, `logo`). Plus three
   standalone SVGs in `assets/icons/`: `bot.svg`, `user.svg`,
   `chat.svg`.

Other rules:

- **No emoji** in iconography.
- **No Unicode glyphs as icons** (no `✓`, `→`, `★`). Use Lucide's
  `Check`, `ArrowRight`, `Star` instead.
- **All Lucide icons** inherit `currentColor`, so they tint to brand
  / accent automatically. Stroke width is 1.5px by default.
- **Don't redraw icons.** If a needed icon isn't in Lucide or the
  custom sprite, pick the closest Lucide neighbour and document the
  substitution in your design notes.

---

## Production notes

When using this system in production code (the live Next.js portfolio,
slide decks, or downstream skill outputs):

1. Import `colors_and_type.css` once at the top level. Reference tokens
   by CSS variable name — never paste hex codes inline.
2. Match the **light-theme defaults**. We have explicitly moved away
   from the original portfolio's dark mode. If a dark mode is needed
   later, build it as a `@media (prefers-color-scheme: dark)` block in
   a separate file — don't mutate the tokens here.
3. Read `ui_kits/portfolio/` for canonical implementations of header,
   footer, project card, project dialog and contact form.
4. Honour the Norwegian voice. If a downstream artefact must be in
   English, mirror Even's first-person, problem-led register — don't
   substitute generic agency copy.

---

## Further reading

- **GitHub:** the original portfolio source lives at
  <https://github.com/evenlhovda/my_portfolio>. Browse it to see
  data models (`lib/data.ts`), the Flowise chat integration
  (`app/components/FlowiseChat.tsx`), and the project dialog flow
  (`app/projects/page.tsx`).
- **Figma template:** Dialect — Design System & Component Library
  (Community). Useful as a structural reference for documentation
  layouts; we have re-themed it from blue/violet into the spring
  palette.
