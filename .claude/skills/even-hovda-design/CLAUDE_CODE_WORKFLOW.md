# Implementing this design system with Claude Code

How to take this design system from "design artifact" to "live on
`portfolio_page/`" the cleanest way.

---

## 0 · Download this project

From the Even L. Hovda — Design System project, hit **Export ▾ →
Download project** (or use the download link the agent sends you). You
get a `.zip` containing this whole folder.

---

## 1 · Place it in your codebase

You have two good options. **Option A is the recommended one.**

### Option A · Install as a Claude Code skill *(recommended)*

```bash
cd ~/projects/my_portfolio        # your Next.js repo
mkdir -p .claude/skills
unzip ~/Downloads/even-hovda-design-system.zip -d .claude/skills/even-hovda-design
```

This makes `SKILL.md` discoverable by Claude Code. The skill auto-activates
whenever you say *"design"*, *"brand"*, *"recolor"*, *"button"*,
*"portfolio page"* etc. — or you can invoke it explicitly with:

> *"Use the **even-hovda-design** skill."*

You can also install it user-wide at `~/.claude/skills/even-hovda-design`
if you want it available across multiple projects (the kitefestival site,
client work, etc.).

### Option B · Drop in as project documentation

If you don't want the skill plumbing, just put the folder at the repo
root as `design-system/` and add a one-liner to `CLAUDE.md`:

```md
# Project notes for Claude Code
The brand and component system lives in `design-system/`. Read
`design-system/README.md` and `design-system/colors_and_type.css`
before designing anything. UI patterns live in
`design-system/ui_kits/portfolio/`.
```

Slightly less ergonomic; same end result.

---

## 2 · The first session — refactor tokens

Open `portfolio_page/` in Claude Code and start with this prompt:

> Read `.claude/skills/even-hovda-design/README.md` and
> `.claude/skills/even-hovda-design/colors_and_type.css`. Then refactor
> `tailwind.config.ts` and `app/globals.css` so every brand color and
> font references the new tokens (spring 2 palette, sage as primary,
> sky as accent, Inter + Source Sans 3 + Geist Mono). Do not change
> any page or component yet — only the token layer. Show me the diff.

This is the single most leveraged change. After it lands, every Tailwind
utility in the existing code (`bg-primary`, `text-slate-100`, etc.)
automatically picks up the new palette. The dark theme becomes light in
one shot.

Verify by running `npm run dev` and eyeballing the home page. Expect
some contrast bugs — `text-slate-100` on the now-light `bg-background`
will be invisible. That's fine; we fix those page by page next.

---

## 3 · Page by page, in this order

Don't try to convert the whole app at once. Go route by route, smallest
first. For each route, the prompt template is:

> Convert `portfolio_page/app/<route>/page.tsx` to match the design
> system. The canonical reference is
> `.claude/skills/even-hovda-design/ui_kits/portfolio/<corresponding>.jsx`
> — read it, then update the Next.js page. Keep the existing component
> structure (`SiteLayout`, `Card`, `Dialog`, etc.) but restyle them.
> Don't rewrite the data layer.

Recommended order:

| # | Route / file | Reference in design system |
|---|---|---|
| 1 | `components/layout/site-header.tsx` | `ui_kits/portfolio/SiteHeader.jsx` + `EHMonogram.jsx` |
| 2 | `components/layout/site-layout.tsx` | `ui_kits/portfolio/SiteFooter.jsx` |
| 3 | `components/ui/button-variants.tsx` | `preview/components-buttons.html` |
| 4 | `components/ui/card.tsx`, `badge.tsx` | `preview/components-project-card.html`, `components-badges.html` |
| 5 | `app/page.tsx` (home) | `ui_kits/portfolio/HeroSection.jsx`, `CoreAreasSection.jsx`, `AboutSection.jsx` |
| 6 | `app/projects/page.tsx` | `ui_kits/portfolio/ProjectCard.jsx`, `ProjectDialog.jsx` |
| 7 | `app/contact/page.tsx` | `ui_kits/portfolio/ContactForm.jsx` |
| 8 | `app/layout.tsx` (favicon, fonts) | `assets/favicon.svg`, `SKILL.md` fonts section |

For each one: read the reference JSX, look at the existing Next.js
component, write a focused diff, then `git commit` before moving on.
Small commits per route make rollback trivial.

---

## 4 · Replace the logo mark

The live site uses `components/ui/animated-logo.tsx` (the network-graph
SVG). Replace it with the EH monogram:

> Copy `.claude/skills/even-hovda-design/ui_kits/portfolio/EHMonogram.jsx`
> into `portfolio_page/components/ui/eh-monogram.tsx` (rewrite to
> TypeScript, no `window.` exports). Update `site-header.tsx` to use it
> at `size={32} variant="soft"`. Replace `public/favicon3.svg` with
> `.claude/skills/even-hovda-design/assets/favicon.svg`. Update
> `app/layout.tsx` metadata.icons accordingly.

---

## 5 · Imagery cleanup

Open `.claude/skills/even-hovda-design/imagery.md` and follow it:

> Apply the imagery system from `.claude/skills/even-hovda-design/imagery.md`
> to `portfolio_page/`. Specifically:
> 1. Delete `public/images/kommersiell_rigg*.png`,
>    `generic_consulting_company_AI.png`, and any duplicate snowkiting
>    JPGs. Update `lib/data.ts` references if any.
> 2. Wrap every project tile image in a `bg-sage-100` letterbox
>    (16:9, `object-contain`).
> 3. Add a 55% slate overlay to any full-bleed editorial photo.
> 4. Round-crop the hero portrait with the sage→sky gradient ring.

---

## 6 · Verification

After each chunk, ask Claude Code to:

> Run `npm run dev`, then puppeteer/curl the page and check it against
> `.claude/skills/even-hovda-design/ui_kits/portfolio/index.html`. Tell
> me any differences in spacing, color, or typography.

The HTML reference in `ui_kits/portfolio/` is the spec; the live Next.js
output is what we're matching. If something diverges, **trust the
reference** — that's where decisions are recorded.

---

## 7 · Ongoing — keep the skill alive

When you build new features (consulting page, blog, kite festival
microsite), reach for the skill in Claude Code first:

> Use the even-hovda-design skill to build a blog post template. The
> layout should follow the design system's prose rules (680px column,
> Inter, sage headings, sage-700 inline links). Pull components from
> `ui_kits/portfolio/` where applicable.

If you make a decision that contradicts the skill (new accent color,
new component pattern), update the skill at the same time:

> Update the skill's README.md and `colors_and_type.css` to add the new
> `--warning-strong` token I just defined in `tailwind.config.ts`. Keep
> them in sync.

The skill is a living document. Treat it like code.

---

## Quick reference — copy-paste prompts

**Setup:**
```
Read .claude/skills/even-hovda-design/README.md and
colors_and_type.css. Refactor tailwind.config.ts to match. Show diff.
```

**Per-page conversion:**
```
Convert app/<ROUTE>/page.tsx to match
.claude/skills/even-hovda-design/ui_kits/portfolio/<REF>.jsx. Same
data, new visuals. Diff only.
```

**Verification:**
```
Compare http://localhost:3000/<ROUTE> against the reference at
.claude/skills/even-hovda-design/ui_kits/portfolio/index.html. List
visual diffs.
```

**New feature:**
```
Use the even-hovda-design skill to build <FEATURE>. Reference the
patterns in ui_kits/portfolio/.
```
