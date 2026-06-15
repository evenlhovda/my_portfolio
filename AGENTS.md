# AGENTS.md — Portfolio Maintenance Guide

## Language Convention

**The entire portfolio site must be in English.** This includes:

- Project `title`, `description`, `role`, `client` and `tags` in `lib/data.ts`
- All project description text in `components/projects/project-descriptions.tsx`
- Page content and UI text
- Image alt texts and aria labels

No Norwegian text anywhere on the public site (unless it's a proper name like "Hjertepermen" or "SkatteFunn").

## Portfolio Project Images

Each project should have a unique, thematic illustration. The current style uses:

- **Muted, earthy color palette** (sage green, sand, moss, dusky tones)
- **Nature-themed subjects** (moose, fox, hare, beaver, lynx, squirrel)
- **Scandinavian-influenced illustration style**
- **16:9 aspect ratio** for consistency

Images are generated via Gemini Flash Image Preview and saved to `public/images/`.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Deployment:** Vercel (auto-deploys from `main` branch)
- **Host:** GitHub (evenlhovda/my_portfolio)
- **Git auth:** SSH key via user `tyrianlaennister-coder`

## Adding a New Project

1. Generate a new image (16:9, matching style) and save to `public/images/`
2. Add project entry to the `projects` array in `lib/data.ts`
3. Add project id to `ids2026` or `ids2025` in `app/projects/page.tsx`
4. Commit and push to `main` — Vercel auto-deploys

## Git Workflow

- Direct pushes to `main` (single-contributor project)
- Always include the image file in the commit
- Update both `lib/data.ts` AND `app/projects/page.tsx` if changing year grouping
