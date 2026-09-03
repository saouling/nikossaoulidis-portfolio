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
| `--red-ink` | `#8E1620` | Red at body/small text size, `.btn` hover background |
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
| `--ink` | `#16161A` | Headings, primary text, `.btn` background, `.btn-outline` hover fill |
| `--body` | `#33333A` | Body copy |
| `--muted` | `#6A6A73` | Captions, meta labels |
| `--bg` | `#FFFFFF` | Page background — pure white, so white-background source images (screenshots, product renders) don't show a seam |
| `--bg-alt` | `#F4F1EC` | Section banding, alternating with `--bg` |
| `--paper` | `#F3E9D6` | Warm gold tint for the Don't Be a Stranger "refusal" break-bands |
| `--hairline` | `#E6E2DB` | Borders, dividers |

## Type — a fluid, harmonic scale

Two families, matching the live site's geometric-display-plus-workhorse-body
pairing:

- **Display** (`--font-display`): **Jost**, a free geometric sans built as a
  homage to Futura, self-hosted as a variable woff2. Used for headings, nav,
  buttons, tags, eyebrows. Chosen because the live site's actual display font
  is served through Adobe Typekit and can't be legally self-hosted; Jost is
  the closest free match to that Futura reference.
- **Body** (`--font-body`): **Inter**, self-hosted variable woff2. Used for
  paragraph text, form fields.

**Scale method**: the [Utopia](https://utopia.fyi/type/calculator/) fluid
type-scale approach — every step is `base × ratio^n`, and each step is a
`clamp()` that interpolates smoothly between a size at a small viewport and
a size at a large one, instead of jumping at breakpoints. Parameters used
here:

- **Ratio**: Perfect Fourth, **1.333** — a deliberately bold jump between
  steps, so headings carry real presence against body text rather than
  blending into it.
- **Viewport range**: 320px → 1240px (matches `--container: 1120px`).
- **Base (step 0 / body text)**: 18px at the small end → 20px at the large
  end.

| Token | Step | Size range |
|---|---|---|
| `--fs-small` | −1 | 13.5px → 15px |
| `--fs-body` | 0 | 18px → 20px |
| `--fs-h3` | 1 | 24px → 26.7px |
| `--fs-h2` | 2 | 32px → 35.5px |
| `--fs-quote-lg` | 2.5 | 36.9px → 41px |
| `--fs-h1` | 3 | 42.6px → 47.4px |
| `--fs-hero` | 4 | 56.8px → 63.1px |

The homepage project-row titles (`.project-row h3`) intentionally use
`--fs-h1`, not `--fs-h3` — they're meant to read at heading weight, not
body-adjacent.

**To regenerate a step** (if the scale ever needs a new one): with
`minPx`/`maxPx` for the step,
```
slope = (maxPx - minPx) / (1240 - 320)
yIntersect = minPx - slope * 320
clamp(minPx/16 + "rem", yIntersect/16 + "rem" + slope*100 + "vw", maxPx/16 + "rem")
```

## Spacing

4px base scale, `--space-1` (4px) through `--space-8` (128px). Vertical
rhythm between sections uses `--space-6`/`--space-7`.

## Buttons — shadcn/ui-inspired variants

Two variants, styled after [shadcn/ui](https://ui.shadcn.com)'s button
conventions (adapted to plain CSS — no React/Tailwind, this stays a
hand-coded static site): a consistent radius/padding scale, and one hard
rule carried over from that system —

> **Every button state sets background AND text colour together. Never one
> without the other.**

This rule exists because of a real bug: an earlier version had
`.btn:hover { background: var(--accent-ink); }` with no matching `color`
change, and `.btn-outline` (which also carries the `.btn` class) inherited
that background on hover without ever setting its own text colour —
producing near-black text on a dark-red background, i.e. invisible. Fixed
by making every hover state explicit:

- **`.btn`** (default/primary): `--ink` background, white text. Hover →
  `--red-ink` background, white text (set explicitly, not inherited).
- **`.btn-outline`** (secondary): transparent background, `--ink` text,
  `--hairline` border. Hover → fills solid with `--ink` background and
  explicitly sets text to white — shadcn's "outline fills on hover"
  convention.

Both share `border-radius: 999px` (pill), the same padding scale, and the
site-wide `:focus-visible` ring.

## Motion

- **Cross-page transitions**: the native CSS View Transitions API
  (`@view-transition { navigation: auto; }`, top of `styles.css`). Zero JS,
  zero build step — supporting browsers cross-fade between page navigations
  automatically, everywhere else navigation is just instant, which is the
  correct fallback. Chosen over a client-side JS router because a router
  would break "works with JS disabled" and "no build step."
- **Scroll reveal, both directions**: `.reveal` class + `js/menu.js`'s
  `IntersectionObserver`. Sections fade + lift in as they enter the
  viewport, and fade back out as they leave it — in either scroll
  direction, not a one-time reveal. The observer keeps watching every
  `.reveal` element indefinitely (no `unobserve` after first trigger).
  Content is fully visible without JS or if the observer never fires.
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
| Coloured inline tags | `.tag-word`, `.row-eyebrow` | Homepage project rows only; `.row-eyebrow` sits above the title, not beside it |
| At-a-glance facts | `.at-a-glance` (a `<dl>`) | Every case-study hero |
| Pull-quote | `blockquote.pull` | Case-study body copy |
| Large payoff quotes | `.quote-grid` / `.quote-lg` | Don't Be a Stranger visitor quotes |
| Full-bleed tinted band | `.break-band` | Don't Be a Stranger's three "refusal" moments |
| Embeds | `.embed` (+ `.tall` modifier) | YouTube/Figma iframes, 16:9 or 4:3 |
| Project rows (homepage) | `.project-rows` / `.project-row` (+ `.flip`) | Homepage Work section, alternating image/text, no dividers between rows |
| Two-column split | `.two-col` | Text beside one image or an `.image-cluster` |
| Image cluster | `.image-cluster` (+ `.offset`) | 2–4 smaller images beside a `.two-col` text column |
| Placeholder/TODO block | `.todo` | Marks copy still waiting on the real text |

### Homepage row images

`.project-row .row-media` uses a fixed **380px height cap** on desktop
(≥800px), cropped via `object-fit: cover`, and a 4:3 crop when stacked on
mobile. (An earlier version tried `height: 100%` to stretch the image to
match its sibling text column via CSS Grid — that doesn't work: a
percentage height inside an `auto`-sized grid row resolves to `auto` too,
so a tall portrait photo still drove its own height from its intrinsic
aspect ratio. A fixed cap sidesteps that circularity and keeps every row a
consistent height, matching the live site's own cropped-to-fit images.)

### Case-study image placement — two verified patterns

Confirmed against the live Readymag site (`/ewp-dashboard/`):

1. **Full-width figure** — a single dominant image or diagram that needs
   reading in detail (hero shots, the Sound-Mediating Table's circuit
   diagram, Don't Be a Stranger's process diagram and closing image). Plain
   `<figure>`.
2. **Text column + image cluster** — a narrower text column beside 2–4
   smaller images, the pattern Readymag uses for most of its
   "Key Contributions"-style sections. `.two-col` for the split,
   `.image-cluster` inside one side for a collage of 2+ images (single
   image: just a `<figure>` as the second `.two-col` child, no cluster
   needed).

**Applied so far**: Ericsson (all three cases) and Don't Be a Stranger ("The
question", "Give permission", "Fine-tune friction", "Lead and align") use
pattern 2 for their supporting-image sections; their hero images and any
image meant to be read in detail stay pattern 1. EWP Dashboard, Interactive
Table, Synodia and LightHouse still use full-width figures throughout — the
`.two-col`/`.image-cluster` retrofit for those four is a follow-up pass.

## Accessibility commitments

- One accent per semantic role (never more than the three), and always the
  `-ink` variant for text, verified against WCAG AA.
- `lang="en"`, skip link, one `<h1>` per page, no skipped heading levels.
- Every meaningful image has real `alt` text; decorative images get `alt=""`.
- Visible `:focus-visible` states on every interactive element, including
  the dotted/solid nav underline (keyboard focus triggers it, not just
  mouse hover).
- `prefers-reduced-motion` disables all transitions/animations.
- Works fully with JavaScript disabled (progressive enhancement only).
