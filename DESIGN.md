---
name: Nikos Saoulidis — Portfolio
description: A UX/product designer's portfolio, built on a fact-checked, Mondrian-flat visual system.
colors:
  ink: "#16161A"
  body-text: "#33333A"
  muted: "#6A6A73"
  bg: "#FFFFFF"
  bg-alt: "#F4F1EC"
  paper: "#F3E9D6"
  hairline: "#E6E2DB"
  signal-red: "#BE1E2D"
  signal-red-ink: "#8E1620"
  ultramarine: "#21409A"
  ultramarine-ink: "#1A3380"
  ochre-gold: "#C9A227"
  ochre-gold-ink: "#7A5E13"
  on-dark: "#FDFCFA"
typography:
  display:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(3.552rem, 3.4147rem + 0.6864vw, 3.9467rem)"
    fontWeight: 500
    lineHeight: 1.12
  headline:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(2.6647rem, 2.5617rem + 0.5149vw, 2.9607rem)"
    fontWeight: 500
    lineHeight: 1.12
  title:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.999rem, 1.9217rem + 0.3863vw, 2.2211rem)"
    fontWeight: 500
    lineHeight: 1.12
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(0.844rem, 0.8113rem + 0.1631vw, 0.9377rem)"
    fontWeight: 500
    letterSpacing: "0.06em"
rounded:
  sharp: "0px"
  default: "6px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "16px"
  4: "24px"
  5: "40px"
  6: "64px"
  7: "96px"
  8: "128px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-ink}"
    textColor: "{colors.on-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  tag:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.pill}"
    padding: "4px 16px"
---

# Design System: Nikos Saoulidis — Portfolio

## Overview

**Creative North Star: "The Ink Ledger"**

The system reads like a ledger, not a brochure: flat ink-gapped grids, sharp
corners, and a restraint borrowed from real Mondrian compositions, which are
mostly white space with one or two color accents, never a filled block per
cell. The first attempt at the Outcome/Learnings fact-grid filled every cell
and read as messy for exactly that reason — the fix (mostly white, one
accent cell) is now the rule for every grid on the site, not just that one.

That restraint isn't decorative minimalism; it's an extension of the site's
actual editorial discipline. Every factual claim on this site traces to a
primary source (a thesis, a published paper, an internal deck), and two real
errors have already been caught this way. The visual system is built to look
like it's keeping the same kind of honest record: flat color fields instead
of gradients, hairline borders instead of drop shadows, a numeral or a label
plate instead of an unlabeled photo. Shadows are reserved for the handful of
things that are actually physical objects in life — a post-it note, a
cutout photograph — never applied as generic "lift."

The type pairing carries the same duality: **Jost**, a free Futura-homage
geometric sans, for anything structural (headings, labels, buttons, nav) —
functional, poster-like, closer to a diagram title than a display font — set
against **Source Serif 4**, a serif built for on-screen text rather than a
print revival, for the actual reading experience of the case-study prose.
Structure is Bauhaus; the reading itself is editorial.

**Key characteristics:**
- Mostly white space, one color accent per composition — never every cell filled.
- Flat color fields; no gradients, no glassmorphism, no soft ambient shadows.
- Shadows appear only where they represent a real physical object (post-its, cutout photos), never as generic elevation.
- Sharp corners on the "ledger" family (fact-grid, ink-grid, museum-block, lens, label-plate captions); a small 6px softening only on photographic/color containers (images, video, the post-it board's notes).
- Fully round (pill) shapes are reserved for interactive affordances only (buttons, tags) — never for content containers.

## Colors

Three brand colors, restrained to one accent per composition, plus a
functional neutral scale built for a pure-white page.

### Primary
- **Signal Red** (`#BE1E2D`): tags, eyebrow labels, the short rule above a pull-quote, the fact-grid's default accent cell, focus outlines. The most-used accent; carries urgency without being alarmist.

### Secondary
- **Ultramarine** (`#21409A`): project titles, inline prose links, the alternate (blue) fact-grid/museum accent. Used wherever the red accent is already spoken for on the same composition (e.g. the two-museum color coding: red = Röhsska, blue = Mölndal).

### Tertiary
- **Ochre Gold** (`#C9A227`): decorative only — pill fills, borders, large numerals, the `[BREAK]` band tint (`--paper`). Never used as text at its bright value; too light to pass WCAG AA.

### Neutral
- **Ink** (`#16161A`): headings, primary text, default button fill.
- **Body** (`#33333A`): paragraph text.
- **Muted** (`#6A6A73`): captions, meta labels, form borders (chosen over the lighter hairline specifically for WCAG 1.4.11's 3:1 UI-boundary requirement).
- **Bg** (`#FFFFFF`): page background, kept pure white so white-background source images (screenshots, product renders) don't show a seam.
- **Bg Alt** (`#F4F1EC`): section banding, alternating with Bg.
- **Paper** (`#F3E9D6`): the warm gold-tinted background reserved for Don't Be a Stranger's "refusal" break-bands and the post-it board.
- **Hairline** (`#E6E2DB`): borders, dividers.

### Named Rules
**The Ink-Text Rule.** Gold never carries text at its bright value — always substitute `ochre-gold-ink` (`#7A5E13`) the moment gold needs to be legible as a label or eyebrow, since bright gold fails WCAG AA (2.42:1) as text.

**The One-Accent Rule.** Every Mondrian-style grid (fact-grid, ink-grid) gets exactly one colored accent cell — red by default, blue as the sole alternate for museum color-coding — never more, never a filled-every-cell treatment.

## Typography

**Display/Structural Font:** Jost (with Century Gothic, system-ui fallback)
**Body/Reading Font:** Source Serif 4 (with Georgia, serif fallback)

**Character:** a functional geometric sans paired with a serif built for
screen reading — structure reads as engineered and labeled, prose reads as
considered but sturdy. This pairing went through two iterations this
session: the original Jost+Inter pairing (both sans, one workhorse) was
first replaced with Jost+EB Garamond, but EB Garamond's thin, high-contrast
strokes read as too light at body size even pushed to 600 weight (which
then looked semi-bold, wrong for continuous reading). Source Serif 4's
lower stroke contrast reads substantial at its normal weight, so the body
font landed there instead — Jost's structural role is unchanged throughout.

Source Serif 4 is self-hosted the same way as Jost
(`/fonts/source-serif-4-var.woff2` plus a matching
`source-serif-4-italic-var.woff2`, latin-subset variable woff2s from Google
Fonts with the optical-size and weight axes, weight range 400–600; the
italic file is real, so italics are never browser-synthesized); EB Garamond and Inter's `@font-face`
declarations and font files have both been removed.

### Hierarchy
- **Display** (500, hero clamp 56.8–63.1px, 1.12 line-height): the homepage hero `<h1>` only.
- **Headline** (500, `--fs-h1` clamp 42.6–47.4px, 1.12): case-study page titles.
- **Title** (500, `--fs-h2`/`--fs-h3` clamp 24–35.5px, 1.12): section headings within a case study.
- **Body** (400, `--fs-body` clamp 18–20px, 1.6): all paragraph text; capped at a 720px measure for readability, never full-width.
- **Label** (500, `--fs-small` clamp 13.5–15px, uppercase, 0.06em tracking): eyebrows, nav links, tags, at-a-glance labels, buttons.

**Scale method:** the Utopia (utopia.fyi) fluid type-scale approach, Perfect Fourth ratio (1.333), interpolated between a 320px and 1240px viewport via `clamp()` rather than jumping at breakpoints — a deliberately bold step between sizes so headings carry real presence against body text.

### Named Rules
**The Structural-Sans Rule.** Jost is never used for reading prose, only for anything the reader scans rather than reads: headings, labels, nav, buttons, captions-as-labels. Source Serif 4 owns continuous prose exclusively.

## Layout

A single content container (1120px) with a narrower 720px measure for
running text — text and images share the same container but text never
uses the full width. Vertical rhythm between sections runs on the 4px
spacing scale's largest steps (64px mobile, 96px desktop). A `.breakout`/
`.full-bleed` escape (100vw, negative-margin centering) exists specifically
for images and image grids that benefit from more room than 1120px gives
them — never for body text, at-a-glance facts, or pull-quotes, which stay
narrow on purpose.

**Case studies are single-column only.** A two-column "sticky media" layout
(text scrolling beside a pinned image) was built, then explicitly retired —
it read as "still there, just not easy to read" even after several repair
attempts. Every case study now uses the same skeleton: full-width text in
the 720px measure, images breaking out to full width when they need room,
never side-by-side with running text.

### Named Rules
**The Single-Column Rule.** No case-study section pairs running text with a
sticky or side-by-side image column. If an image needs to sit beside
something, it sits beside another image (`.figure-grid`), not beside prose.

## Elevation & Depth

Flat by default. The ledger family (fact-grid, ink-grid, museum-block, lens
disclosures, label-plate captions, card-stack frame) uses hairline borders
and flat color fields exclusively — no shadow, no blur, ever.

### Shadow Vocabulary
- **Post-it lift** (`box-shadow: 0 6px 16px rgba(0,0,0,.14), 0 1px 3px rgba(0,0,0,.08)`, deepening on hover): the one place shadows are real, because a post-it board's post-its are literally paper notes that cast a real shadow off the page.
- **Cutout-photo drop** (`filter: drop-shadow(0 12px 20px rgba(22,22,26,.18))`): the About page's leaning, die-cut photo cluster — the shadow reads as the photo itself lifted off the page, not as a UI elevation cue.

### Named Rules
**The Physical-Object Exception.** A shadow is only ever added because the thing it's attached to is a real physical object in life (a note, a cut photograph) — never as a generic "this element floats above the page" affordance. If nothing in the real world would cast that shadow, the element stays flat.

## Shapes

Three deliberately distinct corner languages, each tied to a role rather than applied uniformly:

- **Pill** (`border-radius: 999px`): interactive affordances only — buttons, tags. Signals "you can act on this."
- **Soft** (`border-radius: 6px`): photographic and colored-block containers — images, the hero video, project cards, the fact-grid's outer edge. A small enough radius to feel considered without softening the flat-color language.
- **Sharp** (no radius): the ledger family itself — ink-grid cells, museum-block, lens disclosures, label-plate captions, the card-stack frame. These are meant to read as a grid or a record, and a rounded corner would undercut that.

## Components

### Buttons
- **Shape:** pill (999px), two variants.
- **Primary (`.btn`):** ink background, white text. Hover fills signal-red-ink, white text set explicitly (not inherited) — see the Named Rule below, born from a real bug.
- **Outline (`.btn-outline`):** transparent background, ink text, hairline border. Hover fills solid ink with white text (shadcn's "outline fills on hover" convention).

### Named Rules
**Every State Sets Both.** Every button state (default, hover, focus) sets background-color and text-color together, never one without the other. This exists because an earlier version set only a hover background on `.btn`, and `.btn-outline` (which inherits `.btn`) picked up that dark-red background without ever getting its own hover text color — producing invisible near-black-on-dark-red text.

### Tags / Pills
- **Style:** pill, bg-alt background, hairline border, body-color text. Used for case-study skill tags; a colored-text variant (`.tag-word`, `.row-eyebrow`) appears only on homepage project rows.

### Cards / Containers — the Ledger family
- **Fact-grid** (Outcome/Learnings): asymmetric two-column grid, 3px ink gaps between cells (not borders — the background itself is ink, cells are white insets), one accent cell spanning two rows in signal-red or ultramarine, everything else plain white. Soft 6px radius on the outer edge only.
- **Ink-grid** (case-study "moments"/lens-adjacent grids): the same ink-gap mechanism generalized to two-or-more text or photo cells, sharp corners throughout, no outer radius.
- **Museum-block:** a hairline-bordered block with a 4px colored top edge (red = Röhsska, blue = Mölndal) — a paragraph and its own photo merged into one bordered unit rather than separate elements.
- **Label-plate caption (`.cap-plate`):** an ink-bordered caption sitting directly under an image, with a colored tab on its left edge (same red/blue museum coding) — used where a caption needs visual weight of its own, not just muted figcaption text.

### Disclosures
- **Lens (`.lens`, a native `<details>`):** a full-width hairline-bordered card; the closed question is the clickable summary, the answer is hidden until opened. A `+`/`−` glyph in signal-red marks state. Zero-JS.
- **Card-stack:** radio-input-driven "rolodex" gallery — one card visible at a time in normal flow (never CSS Grid stretch, which caused a real dead-space bug), with a permanent offset ink-and-hairline frame behind it suggesting the rest of the stack. Zero-JS, animated via `@starting-style` where supported, an instant swap everywhere else.

### Navigation
- **Style:** Jost label type, dotted blue underline animating in on hover/focus (`transform: scaleX()`), solid instead of dotted for the current page (`aria-current="page"`). Mobile collapses to a full-screen stacked menu; a no-JS fallback renders the links as a plain static row.

### Pull-quote
- **Default (`blockquote.pull`):** Jost at `--fs-h2`, ink, 720px measure, with a short 3px signal-red rule (64px wide) sitting *above* the quote. That's the same colored-top-edge language as museum-block, never a full-height left border.
- **Boxed (`variant="boxed"`):** a 1px ink border with no fill and no red rule, at `--fs-h3`, for a standout statement or question. It borrows the bordered-title language from Nikos's own thesis diagrams.

## Pattern inventory (frozen)

This is the complete set of visual patterns the site ships, checked against real usage on
2026-09-23. 46 unused classes were deleted in that pass: the old site's poster blocks,
stepper, term strip, guideline cards, embeds, image clusters, portrait caps and
sticky-media. **The set is closed. A new pattern ships only after it is added here first,
with the page that needs it and why no existing pattern fits.**

| Pattern | Class / component | Where it's used |
|---|---|---|
| At-a-glance facts, with a full-width Outcome row (`.glance-outcome`, set by the label "Outcome") | `AtAGlance` / `.at-a-glance` | every case study |
| Hero video + sound toggle | `.hero-video` | DBAS |
| Figure: default, diagram, overlay, plate | `Figure` / `.cap-overlay`, `.cap-plate` | all case studies |
| Figure grid | `.figure-grid.cols-2/3` | Ericsson, EWP |
| Full-bleed breakout | `.breakout`, `.full-bleed` | all case studies |
| Pull-quote | `PullQuote` / `blockquote.pull` | all case studies |
| Fact-grid (Outcome/Learnings) | `.fact-grid` | every case study |
| Ink-grid | `.ink-grid` | DBAS |
| Museum-block | `.museum-block` | DBAS |
| Lens disclosure | `.lens` | DBAS |
| Card-stack | `.card-stack` | DBAS |
| Post-it board | `PostitBoard` | DBAS |
| Break band | `BreakBand` | DBAS |
| Column grid | `.col-grid.cols-3` | Ericsson |
| Project rows and cards | `.project-row`, `ProjectCard` | homepage |
| Photo cluster | `.photo-cluster` | About |

Seven of the eleven case-study patterns are used only on DBAS. That's the pattern sprawl
the replan diagnosed, and the DBAS structural fix shouldn't add to it.

## Accessibility commitments

Carried over from the retired `DESIGN-SYSTEM.md`. These are the checks run before any cutover:

- One accent per semantic role (never more than the three), and always the `-ink` variant for text, verified against WCAG AA.
- `lang="en"`, a skip link, one `<h1>` per page, no skipped heading levels.
- Every meaningful image has real `alt` text; decorative images get `alt=""`.
- Visible `:focus-visible` states on every interactive element, including the dotted/solid nav underline (keyboard focus triggers it, not just mouse hover).
- `prefers-reduced-motion` disables all transitions and animations.
- Works fully with JavaScript disabled (progressive enhancement only).

## Do's and Don'ts

### Do:
- **Do** keep exactly one colored accent per Mondrian-style grid composition — mostly white space, never a filled-every-cell treatment.
- **Do** set background-color and text-color together on every interactive state.
- **Do** use `ochre-gold-ink`, never bright `ochre-gold`, whenever gold needs to carry legible text.
- **Do** reserve shadows for things that are physical objects in real life (post-its, cutout photos).
- **Do** keep every case-study section single-column; pair an image with another image, never with running text beside it.

### Don't:
- **Don't** add drop shadows, blur, or soft ambient elevation to the ledger family (fact-grid, ink-grid, museum-block, lens, label-plate captions) — they stay flat and hairline-bordered.
- **Don't** reintroduce a two-column sticky-media case-study layout — tried, retired, and the reason ("still there, just not easy to read") is on record.
- **Don't** use Inter or EB Garamond for body copy — both tried and retired this session in favor of Source Serif 4; Jost remains structural-only and was never body copy.
- **Don't** add a persistent floating in-page navigation rail (rotated-text rail, fanned cards) — tried twice, both read as "awkward." The plain inline "jump to a case" text link already works and needs no component.
- **Don't** mark a card or quote with a thick colored left border (the generic "side-tab" accent). Pull-quotes use a short rule on top instead; two earlier left-bordered cards (decision, email) were removed as unused.
- **Don't** apply a rounded corner to anything in the ledger family — sharp corners are what signal "this is a record," not decoration to soften.
