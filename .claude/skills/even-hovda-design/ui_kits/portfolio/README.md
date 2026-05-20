# Portfolio — UI Kit

A pixel-accurate recreation of Even Lømo Hovda's Next.js portfolio,
**retuned from the original indigo / orange dark theme to the "spring 2"
sage / sky / mist light palette**. Same copy, same iconography, same
interactions; new visual language.

## What's here

| File | Role |
| --- | --- |
| `index.html` | Full interactive prototype — home, projects grid, project dialog modal, contact form. |
| `AnimatedLogo.jsx` | Even's signature network-graph mark (sway-animated SVG), recolored to sage. |
| `SiteHeader.jsx` | Sticky 64px header with mark, name and Norwegian nav (`Prosjekter · Om meg · Kontakt`). |
| `SiteFooter.jsx` | Footer with copyright line and outline icon buttons (LinkedIn, Mail). |
| `HeroSection.jsx` | Hero with name, tagline, primary CTA and round portrait. |
| `CoreAreasSection.jsx` | The three "Kjerneområder" cards. |
| `AboutSection.jsx` | About-me long-form, dividers. |
| `ProjectCard.jsx` | Tile used in both ongoing + previous projects grids. |
| `ProjectDialog.jsx` | Modal that opens when a project is clicked. |
| `ContactForm.jsx` | Form from `app/contact/page.tsx`, restyled. |
| `LucideIcons.jsx` | Inline copies of the seven Lucide icons the portfolio uses (Mail, Linkedin, MapPin, Calendar, Users, Building, ArrowRight). |
| `data.js` | The project list from `lib/data.ts`, image paths rewritten to `../../assets/projects/`. |

## Interactions in the prototype

- **Home** is the default route. The hero portrait, the three core-area
  cards, the about prose, and the project grid all scroll on one page.
- **Click any project tile** — opens a modal showing the long
  description, role / client / year fields, and tags. Esc / clicking
  outside closes it.
- **Click "Ta kontakt"** in the header — scrolls to a contact form
  inline at the bottom. Submitting shows a success toast (fake; no
  network call).
- **Hover any card** — lifts 2px and gains a soft shadow.

## Faithful to the original

The structural layouts of `app/page.tsx`, `app/projects/page.tsx` and
`app/contact/page.tsx` are preserved. The only deliberate divergences:

1. **Theme:** dark slate → light mist + warm white. All `text-slate-100`
   inverted to `text-slate-800`; all `bg-secondary` (`#374151`) becomes
   white surface with sage borders.
2. **Primary accent:** indigo `#4F46E5` → sage-700 `#5A6F4C`.
3. **Contrast accent:** orange `#F97316` → sky-500 `#4892BF`.
4. **Logo gradient dots:** orange `--fill-contrast` → sky-200.

Otherwise: same copy, same project data, same Norwegian voice.
