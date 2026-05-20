# Imagery system

Today the portfolio's imagery reads as a stitched-together collage:
AI-generated illustrations next to phone-camera photos next to app
screenshots next to clip art. Below is a system that cleans it up
without forcing you to commission anything.

The goal is **three image buckets, three treatments, one rule each.**
Anything that doesn't fit one of the three buckets does not ship.

---

## Bucket 1 · Hero photography (people)

**What:** Even himself, occasional client/team portraits.
**Status today:** ✅ `assets/portrait.png` is on-brand — handheld, warm light,
casual cap, neutral background. Keep it. Reshoot only if needed.

**Treatment:**
- Round crop, framed by a 8px sage→sky gradient ring.
- Or, square crop on a `--bg-tint-sage` block, no ring.
- Always center-cropped on the face. No tilted or full-body shots.
- Background should be neutral / out-of-focus — never busy.

**Rule:** *one* portrait per page. Resist the urge to add a "team" row.

---

## Bucket 2 · Project evidence (screenshots)

**What:** Real screenshots of the things you built — Randi reading a
PDF, Mina parsing an email, Rune mid-conversation, the OwnersRoom
investor view, the betting app, the voice agent dashboard.

**Status today:** ❌ This is where the mess lives. Screenshots are
cropped inconsistently (some 16:9, some square, some portrait), some
sit on white, some on gradients, some are mid-loading.

**Treatment:**
- **Always 16:9** aspect ratio.
- **Sage-100 letterbox** (`#E6EDDF`) behind every screenshot — gives
  every project tile the same warm-neutral edge instead of jagged
  white-on-white. Use `background-color: var(--sage-100);` +
  `background-size: contain` + `background-position: center` on the
  card's image div. (Built into `ui_kits/portfolio/styles.css`
  `.project-card__img`.)
- **Drop shadows are not allowed** on screenshots. They make the UI
  inside the screenshot fight the card's own shadow.
- A subtle **8px-radius mac-style window frame** is allowed as long as
  it's flat (no traffic lights, no gradient titlebar) — but only when
  the screenshot would otherwise look orphaned on a page.

**Rule:** If a project doesn't have a real screenshot, **leave the tile
illustration-free** with a sage-tinted block + the project name in
display type. Better than a stock illustration.

---

## Bucket 3 · Editorial / outdoor (atmospheric)

**What:** Norwegian landscape, kitesurfing, sky/wind imagery — used for
hero backgrounds and section breaks. **Not** for project tiles.

**Status today:** ⚠️ Mixed. `Snowkiting.webp` and `bg-01/02.webp` are
the right vibe; the AI-generated "kommersiell_rigg" / "generic
consulting" illustrations are not — drop them.

**Treatment:**
- Wide 21:9 or 16:5 crop only. Never square.
- **Always overlaid with a 55% slate wash** (`rgba(95,107,115,0.55)`)
  so text reads on top.
- Stay in the warm-cool-neutral lane: blue sky, sage grass, snow,
  weathered wood. **No saturated reds/oranges, no neon, no overcast
  gray-sludge.**

**Rule:** *Zero* AI-generated imagery. If you need a hero photo and
don't have one, use a flat sage-tint block with display type instead.
The brand is more honest without filler.

---

## Quick decision table

| Image lands on… | Bucket | Treatment |
| --- | --- | --- |
| Hero portrait | 1 | Round crop, gradient ring |
| Project tile | 2 | 16:9, sage-100 letterbox |
| Section background | 3 | 21:9, 55% slate wash |
| "About me" inline | 1 | Square, on sage-tint block |
| Blog post header | 3 | 16:5, 55% slate wash |
| Anywhere else | — | Use type, not imagery |

---

## What to drop right now

The following live in `portfolio_page/public/images/` but do **not** fit
any bucket above:

- `generic_consulting_company_AI.png` — generic AI stock-y illustration
- `kommersiell_rigg.png`, `kommersiell_rigg_2.png`, `kommersiell_rigg_3.png`
  — stock-y illustrations
- The bare `snowkiter.jpg` / `snowkiting.jpg` if they duplicate
  `Snowkiting.webp` (keep the webp; drop the others)

Reusable project screenshots that are already in-bucket and that we've
copied into `assets/projects/`:

✅ randi-fakturatolk · rune-avatar · mina-mailassistent · innovasjons-agent
✅ voice-insurance-agent · invoice-insurance-agent · ownersroom-01 / 02
✅ portfolio.gif (legitimate product UI)

Project portraits already in-bucket-3:

✅ snowkiting.webp · fotball.jpg · ai-code-project.webp · bg-01.webp · bg-02.webp

---

## Asking for new imagery

If/when commissioning new photography or screenshots, give the
photographer / designer this brief:

> **Mood:** calm, deliberate, north-Scandinavian. Cool daylight, soft
> shadow. The brand colour is sage green (`#8FA77C`) — don't fight
> it with warm autumn tones.
>
> **No props that read "AI":** no glowing brains, no neon circuits,
> no robot hands. The work is real; let the screenshots do the talking.
>
> **Composition:** generous negative space at the top — every image
> may eventually carry overlaid type.
