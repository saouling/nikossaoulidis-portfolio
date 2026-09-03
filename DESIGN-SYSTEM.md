# Design system — nikossaoulidis.xyz

This describes the visual identity implemented in `css/styles.css`. It's a
description of what the CSS already does, not a separate spec to keep in
sync by hand — if you change a token in the CSS, update the number here too,
but the CSS is always the source of truth.

## Colour

Three brand colours, sampled directly from the live Readymag site's own
CSS, each with a darker "-ink" sibling for use as text:

| Token | Hex | Use |
|---|---|---|
| `--red` | `#BE1E2D` | Tags, eyebrow labels, pull-quote bar, focus outline |
| `--red-ink` | `#8E1620` | Red at body/small text size |
| `--blue` | `#21409A` | Project titles, inline prose links, hover/selected underlines |
| `--blue-ink` | `#1A3380` | Blue at small text size (extra AA margin) |
| `--gold` | `#C9A227` | Decorative only: pill fills, borders, large numerals |
| `--gold-ink` | `#7A5E13` | Gold at text size (the "Industry / School / Research" eyebrow labels) |

**Why two shades of each colour:** the bright versions, especially gold,
fail WCAG AA contrast (4.5:1) against the page background at body/small
text sizes. Never use `--red`, `--blue` or `--gold` directly as text colour;
use the `-ink` variant. The bright versions are for anything large,
decorative, or non-text: borders, fills, big numerals, hover-line strokes.

Neutrals:

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#16161A` | Headings, primary text |
| `--body` | `#33333A` | Body copy |
| `--muted` | `#6A6A73` | Captions, meta labels |
| `--bg` | `#FFFFFF` | Page background — pure white, so white-background source images (screenshots, product renders) don't show a seam |
| `--bg-alt` | `#F4F1EC` | Section banding, alternating with `--bg` |
| `--paper` | `#F3E9D6` | Warm gold tint for the Don't Be a Stranger "refusal" break-bands |
| `--hairline` | `#E6E2DB` | Borders, dividers |

## Type

Two families, matching the live site's geometric-display-plus-workhorse-body
pairing:

- **Display** (`--font-display`): **Jost**, a free geometric sans built as a
  homage to Futura, self-hosted as a variable woff2. Used for headings, nav,
  buttons, tags, eyebrows. Chosen because the live site's actual display font
  is served through Adobe Typekit and can't be legally self-hosted; Jost is
  the closest free match to that Futura reference.
- **Body** (`--font-body`): **Inter**, self-hosted variable woff2. Used for
  paragraph text, form fields.

Type scale is all tokens (`--fs-hero` through `--fs-small`), fluid via
`clamp()` where it matters (hero, h1, big pull-quotes) so nothing needs a
separate mobile override.

## Spacing

4px base scale, `--space-1` (4px) through `--space-8` (128px). Vertical
rhythm between sections uses `--space-6`/`--space-7`.

## Motion

- **Cross-page transitions**: the native CSS View Transitions API
  (`@view-transition { navigation: auto; }`, top of `styles.css`). Zero JS,
  zero build step — supporting browsers cross-fade between page navigations
  automatically, everywhere else navigation is just instant, which is the
  correct fallback. Chosen over a client-side JS router because a router
  would break "works with JS disabled" and "no build step."
- **Scroll reveal**: `.reveal` class + `js/menu.js`'s `IntersectionObserver`.
  Sections fade/rise in as they enter the viewport. Progressive enhancement,
  content is fully visible without it.
- **Hover / selected navigation**: nav links and homepage project titles get
  a thick dotted blue underline (`border-bottom: 3px dotted var(--blue)`,
  animated in via `transform: scaleX()`) on hover/focus. The current page's
  nav link shows the same line permanently, solid instead of dotted
  (`aria-current="page"` on the matching link — see the note in each
  page's header comment, this is the one deliberate exception to the
  byte-identical-header rule).

All motion respects `prefers-reduced-motion` (global transition-duration
override in `styles.css`) and requires no JavaScript to reach a correct,
fully visible end state.

## Components

| Component | Class | Where |
|---|---|---|
| Buttons | `.btn`, `.btn-outline` | Hero CTAs, contact form submit |
| Tags/pills | `.tag` | Case-study skill tags |
| Coloured inline tags | `.tag-word`, `.row-eyebrow` | Homepage project rows only |
| At-a-glance facts | `.at-a-glance` (a `<dl>`) | Every case-study hero |
| Pull-quote | `blockquote.pull` | Case-study body copy |
| Large payoff quotes | `.quote-grid` / `.quote-lg` | Don't Be a Stranger visitor quotes |
| Full-bleed tinted band | `.break-band` | Don't Be a Stranger's three "refusal" moments |
| Embeds | `.embed` (+ `.tall` modifier) | YouTube/Figma iframes, 16:9 or 4:3 |
| Project rows (homepage) | `.project-rows` / `.project-row` (+ `.flip`) | Homepage Work section, alternating image/text |
| Two-column split | `.two-col` | Text beside one image (Don't Be a Stranger "The idea") |
| Image cluster | `.image-cluster` (+ `.offset`) | 2–4 smaller images beside a `.two-col` text column, matching the live site's collage-beside-narrow-text pattern (confirmed on `/ewp-dashboard/`) — **built, not yet applied to any existing case-study page** |
| Placeholder/TODO block | `.todo` | Marks copy still waiting on the real text |

### Homepage row images

`.project-row .row-media` crops to a fixed 4:3 box on mobile (stacked,
nothing to stretch against), and on desktop (≥800px) stretches to match its
sibling text column's height exactly, via CSS grid's default `align-items:
stretch` plus `object-fit: cover`. This matches the confirmed behaviour on
the live Readymag homepage: images are height-bound to their text, cropped,
never shown at native aspect ratio.

### Case-study image placement

Two verified patterns from the live site, both available now:

1. **Full-width figure** — a single dominant image or diagram (hero shots,
   the Sound-Mediating Table's circuit diagram). Plain `<figure>`.
2. **Text column + image cluster** — a narrower text column beside 2–4
   smaller images (confirmed on `/ewp-dashboard/`: "Key Contributions" reads
   as a left text column with a right-hand collage of screenshots per
   subsection). Use `.two-col` for the split, `.image-cluster` inside one
   side for the collage.

Existing case-study pages (Ericsson, Don't Be a Stranger, EWP, Interactive
Table, Synodia, LightHouse) still use full-width figures throughout — the
`.two-col` + `.image-cluster` retrofit is a follow-up pass, not done yet.

## Accessibility commitments

- One accent per semantic role (never more than the three), and always the
  `-ink` variant for text, verified against WCAG AA.
- `lang="en"`, skip link, one `<h1>` per page, no skipped heading levels.
- Every meaningful image has real `alt` text; decorative images get `alt=""`.
- Visible `:focus-visible` states on every interactive element.
- `prefers-reduced-motion` disables all transitions/animations.
- Works fully with JavaScript disabled (progressive enhancement only).
