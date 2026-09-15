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

**Why two shades of each colour:** computed contrast against `--bg`
(#FFFFFF) for every token: `--red` 6.15:1, `--blue` 9.27:1, `--gold` 2.42:1.
Only `--gold` actually fails WCAG AA (4.5:1) as text — bright `--red` and
`--blue` already pass on their own and are used directly as text in a few
places (project titles, inline links). Use `--gold-ink` whenever gold needs
to carry text (it's the one real requirement here); the `-ink` variants of
red/blue exist for extra margin at small sizes or on `--paper`/`--bg-alt`,
not because the bright versions are unsafe. `--gold` itself stays
decorative-only: pill fills, borders, large numerals, never text.

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

| Component | Astro component | Class | Where |
|---|---|---|---|
| Buttons | — | `.btn`, `.btn-outline` | Hero CTAs, contact form submit |
| Tags/pills | — | `.tag` | Case-study skill tags |
| Coloured inline tags | — | `.tag-word`, `.row-eyebrow` | Homepage project rows only; `.row-eyebrow` sits above the title, not beside it |
| At-a-glance facts | `AtAGlance.astro` | `.at-a-glance` (a `<dl>`) | Every case-study hero |
| Pull-quote | `PullQuote.astro` | `blockquote.pull` | Case-study body copy |
| Large payoff quotes | `PostitBoard.astro` | `.postit-board` / `.postit` | Don't Be a Stranger visitor quotes. **Corrected in Session B6**: this table previously named the classes `.quote-grid` / `.quote-lg`, which don't exist anywhere in `styles.css` or the site — the real mechanism is the post-it board built for the museum-feedback payoff moment. |
| Full-bleed tinted band | `BreakBand.astro` | `.break-band` | Don't Be a Stranger's three "refusal" moments |
| Figure with one caption convention | `Figure.astro` | `figure` / `figcaption` (+ `.diagram-caption` variant) | Every case-study image. See "Case-study image placement" below — single column only as of Session B6. |
| Embeds | — | `.embed` (+ `.tall` modifier) | YouTube/Figma iframes, 16:9 or 4:3 |
| Project rows (homepage) | — | `.project-rows` / `.project-row` (+ `.flip`) | Homepage Work section, alternating image/text, no dividers between rows |
| Tier-2 project cards | `ProjectCard.astro` | `.project-grid` / `.project-card` | Homepage-only cards for Interactive Table, LightHouse, Synodia (decision 10). Wired in Session B10. |
| Fact grid | — | `.fact-grid` | Case-study Outcome/Learnings sections (added Session B8, refined same session on Nikos's feedback). Asymmetric rectangles with thin ink gaps, one colour accent cell (`.accent`, or `.accent.blue`) and the rest plain white — deliberately *not* a filled block per cell, since a filled-every-cell version read as messy. Replaces the `.todo` styling those sections used before real content existed. |
| Two-column split | — | `.two-col` | Still valid — the About page's text-beside-photo-cluster split. **Not** the case-study image pattern; see below. |
| Placeholder/TODO block | — | `.todo` | Marks copy still waiting on the real text |

### Homepage row images

`.project-row .row-media` uses a fixed **380px height cap** on desktop
(≥800px), cropped via `object-fit: cover`, and a 4:3 crop when stacked on
mobile. (An earlier version tried `height: 100%` to stretch the image to
match its sibling text column via CSS Grid — that doesn't work: a
percentage height inside an `auto`-sized grid row resolves to `auto` too,
so a tall portrait photo still drove its own height from its intrinsic
aspect ratio. A fixed cap sidesteps that circularity and keeps every row a
consistent height, matching the live site's own cropped-to-fit images.)

### Case-study image placement — single column only

**Superseded in Session B6.** This section used to document a second,
verified-against-Readymag pattern — a narrower text column beside a
`.two-col.sticky-media` image or `.image-cluster` collage, used for
"Key Contributions"-style sections. That pattern is **retired** (decision
08): every case study is single column now, `.wrap.col` for text and
`.breakout`/`.full-bleed` for images, exactly like the rest of the site.
`.two-col` itself isn't gone — the About page's text-beside-photo-cluster
split still uses it — but `.two-col.sticky-media` (the case-study variant
that pinned an image while its text scrolled past) has no more call sites
once Ericsson is rebuilt in Session B7.

One pattern now, covering what both old patterns used to:

- **`Figure.astro`** — one image, or slotted composite content, with one
  caption prop. Two visual variants: `default` (left-aligned, muted, small
  — the plain figcaption look) and `diagram` (centred, italic — for an
  interpretive caption under a diagram or composite block, replacing the
  old loose `.diagram-caption` paragraphs).
- **`.figure-grid`** (+ `.cols-2`/`.cols-3`/`.cols-4`) — for what used to
  need an `.image-cluster` beside a `.two-col` split, wrap multiple
  `<Figure>` instances in a `.figure-grid` div instead. It's a plain CSS
  grid, single column at narrow widths and multi-column at wider ones, but
  never paired with a text column beside it — the grid itself sits in the
  normal single-column flow.

**Where this lands**: Ericsson's layout rebuild (Session B7) is the first
real test of this — six existing `.two-col.sticky-media` instances become
single-column `Figure`/`.figure-grid` usage there. EWP Dashboard (B9) has
three more of the same to migrate when it's deepened. Don't Be a Stranger
(B11) is being rebuilt from thesis source rather than migrated from HTML
(decision 13), so it never had the old pattern to begin with — it starts
single-column from day one.

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
