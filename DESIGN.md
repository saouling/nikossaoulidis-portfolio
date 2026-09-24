---
name: Nikos Saoulidis — Portfolio
description: A UX/product designer's portfolio set as a museum catalogue, with a numbered collection index, label plates and three Kandinsky forms.
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
  on-dark: "#FDFCFA"
typography:
  display:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(3rem, 2.2rem + 3.2vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(3.552rem, 3.4147rem + 0.6864vw, 3.9467rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.999rem, 1.9217rem + 0.3863vw, 2.2211rem)"
    fontWeight: 500
    lineHeight: 1.12
  subtitle:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.4996rem, 1.4417rem + 0.2898vw, 1.6663rem)"
    fontWeight: 600
    lineHeight: 1.12
  catalogue-number:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Jost, Century Gothic, system-ui, sans-serif"
    fontSize: "clamp(0.844rem, 0.8113rem + 0.1631vw, 0.9377rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0.06em"
  standfirst:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.4996rem, 1.4417rem + 0.2898vw, 1.6663rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  quote:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.4996rem, 1.4417rem + 0.2898vw, 1.6663rem)"
    fontWeight: 400
    lineHeight: 1.35
rounded:
  sharp: "0px"
  hairline: "2px"
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
  catalogue-row:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.body-text}"
    typography: "{typography.title}"
    rounded: "{rounded.sharp}"
    padding: "16px 0"
  catalogue-row-hover:
    backgroundColor: "{colors.bg-alt}"
    textColor: "{colors.ultramarine-ink}"
  label-plate:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "8px 16px"
  fact-grid-outcome:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sharp}"
    padding: "24px"
  fact-grid-learnings:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.sharp}"
    padding: "24px"
  pull-quote:
    textColor: "{colors.ink}"
    typography: "{typography.quote}"
    padding: "24px 0 0"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ultramarine-ink}"
    textColor: "{colors.on-dark}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.body-text}"
    typography: "{typography.body}"
    rounded: "{rounded.default}"
    padding: "16px"
---

# Design System: Nikos Saoulidis — Portfolio

## Overview

**Creative North Star: "The Collection Catalogue"**

Every project is an object in a collection, and each one is shown the way a
museum catalogue shows it: a number, a label and a status first, then the
story. The homepage is page one of that catalogue. It has a name, one
positioning line, three Kandinsky forms as a still composition, and a
numbered index ruled in ink with a display case beside it. Each case study is
a catalogue entry. It opens with a title and the object's form, a standfirst,
and a label plate beside a four-line summary. Then come four fixed sections,
and the page closes on the next object in the collection.

The material is paper and ink. The ground is pure white. Type is ink, and the
page is divided by hairline rules rather than by tinted bands or boxes. The
three Kandinsky forms (a blue circle, a red square, a gold triangle) are the
only large areas of colour. Elsewhere colour is a small, functional mark.
Red is the catalogue's own mark, used for numbers, status and rules. Blue marks what
you can act on. Structure is set in Jost, a geometric sans with tabular
catalogue numerals. Reading prose is set in Source Serif 4, and its real
italic carries the pull-quotes.

Depth comes from rules, not shadows. The ledger (index rows, label plates,
fact-grids, the display case) has sharp corners and ink edges. Soft corners
belong only to photographs and a few form controls. Shadows appear only on
things that are physical objects in life: the post-it notes and the About
page's cut-out photographs.

**Key Characteristics:**
- White ground, ink type, hairline rules. Sections are divided by rules, never by background banding.
- Three Kandinsky forms carry the only large colour: circle = Don't Be a Stranger (blue), square = EWP (red), triangle = Ericsson (gold).
- Red is the catalogue mark, blue is the interactive colour, and gold appears only in the forms and in diagrams.
- Jost for structure with tabular numerals; Source Serif 4 for prose and its italic for quotes.
- Sharp corners and ink edges on the ledger; a soft 6px only on photographs and form fields.
- Every mark is a drawn SVG shape. Text glyphs are never used as icons.

## Colors

A white page with ink type. Three Bauhaus colours each have one job, so each colour's meaning stays readable.

### Primary
- **Signal Red** (catalogue mark): the Outcome cell of every fact-grid, the 3px rule above a pull-quote, the square form (EWP), and Röhsska's museum coding on Don't Be a Stranger (a 4px top edge on a museum block, and the top tab on a caption plate).
- **Signal Red Ink** (red as text): catalogue numbers (01, 02, 01a…), status lines on index rows and label plates, and the Result row of a sub-record. Any red that is text uses this value.

### Secondary
- **Ultramarine** (interactive): inline prose links (with a 35% tint underline), the dotted nav underline, the ::selection tint (18% mixed into white), the circle form (Don't Be a Stranger), and Mölndal's museum coding on DBAS.
- **Ultramarine Ink** (interactive state): the focus ring, the text caret, the hover and focus colour of index titles, summary labels, sub-index links and the next-object title, the primary button's hover fill, and the lens disclosure's +/− mark.

### Tertiary
- **Ochre Gold** (form and diagram only): the triangle form (Ericsson), and Ericsson's diagrams drawn in code, where it marks structure: spec frames' top edges, gold-edged method chips, overlays and notes in the before canvas, trend lines. It never fills behind text and never carries UI; text on or beside gold is ink on white.

### Neutral
- **Ink**: headings, the name, index titles, label-plate values, the 1px ink rules (index head, summary top, section-heading rules, plate borders, display-case frame), the fact-grid's 3px frame and gaps, and the Learnings cell.
- **Body**: paragraph text and row summaries.
- **Muted**: plate field names, index column heads, meta lines, captions, footer links, and form-field borders (it clears the 3:1 contrast WCAG 1.4.11 requires for UI boundaries, and hairline does not).
- **Bg**: the only page ground, kept pure white so white-background screenshots and renders don't show a seam.
- **Bg Alt**: a warm tint used only for small surfaces. It is the index-row hover, the matte behind contained images in the display case, and the placeholder behind thumbnails. It is never a section background.
- **Paper**: the post-it notes on DBAS, sometimes mixed with 10% red or blue.
- **Hairline**: the dividing rule between rows, plate fields, summary lines and the header/footer edges.
- **On-dark**: text on red, ink or blue fills.

### Named Rules
**The One-Job Rule.** Red marks the catalogue (numbers, status, rules, the Outcome cell). Blue marks what you can act on (links, focus, hover, the lens mark). Gold appears only as the triangle. If you cannot say which job a colour is doing, it should not be there.

**The Forms-Carry-Colour Rule.** The three Kandinsky forms are the only large areas of colour on the site. Every other use of colour is a mark: a number, a rule, a tab, one accent cell. The forms follow the collection: circle = Don't Be a Stranger, square = EWP Dashboard, triangle = Ericsson. They appear in the homepage composition, beside each index number, in the label plate's No. row, after the case-study title, and after the next-object title.

**The Museum-Coding Exception.** Don't Be a Stranger keeps its two-museum colour coding: red = Röhsska, blue = Mölndal. It is used only as a museum block's 4px top edge and a caption plate's 4px top tab. It is local to that study and does not change the global colour jobs.

## Typography

**Structural Font:** Jost (with Century Gothic, system-ui fallback)
**Reading Font:** Source Serif 4 (with Georgia fallback), with a real italic file
**Numerals:** Jost with `font-variant-numeric: tabular-nums`

**Character:** Jost is a Futura-like geometric sans. It sets the catalogue apparatus (names, titles, numbers, labels, plates, nav) and reads like a museum wall label. Source Serif 4 is built for screen reading and sets everything you read continuously. Both are self-hosted variable woff2 files (Jost 400–700, Source Serif 4 400–600 roman and italic), so italics are never synthesized by the browser.

### Hierarchy
- **Display** (500, 48–72px fluid, 1.02, −0.02em): the homepage name only.
- **Headline** (500, 56.8–63.1px, 1.02, −0.02em): the case-study title, followed by its inline form at 0.5em.
- **Title** (500, 32–35.5px, 1.12): section headings in a case body, and object titles in the homepage index. On phones under 600px the index titles drop to the subtitle size.
- **Subtitle** (600, 24–26.7px, 1.12): h3 sub-headings and sub-record titles, which carry their catalogue number.
- **Standfirst** (Source Serif 4, 400, 24–26.7px, 1.4, max 44ch): the one-sentence standfirst under a case-study title. The homepage positioning line uses the same size in Jost.
- **Body** (Source Serif 4, 400, 18–20px, 1.6, 720px measure): all prose.
- **Quote** (Source Serif 4 italic, 400, 24–26.7px, 1.35): pull-quotes. The citation is set upright in the small size, in muted.
- **Catalogue number** (Jost, 400, 18–20px, tabular numerals, signal-red-ink): No. 01–06 in the index, the label plate and the next-object footer, and 01a–01c on the Ericsson sub-records. Minor objects use the small size.
- **Label** (Jost, 400, 13.5–15px): plate values, meta lines, captions and nav. Set in uppercase with 0.06em tracking only for field names in a record: the index column heads, label-plate and sub-plate field names, and the four summary-row labels.

**Scale method:** Utopia fluid scale, Perfect Fourth (1.333), interpolated between 320px and 1240px. The homepage name is the one step outside the scale.

### Named Rules
**The Structural-Sans Rule.** Jost sets whatever the reader scans: names, numbers, labels, plates, nav, buttons. Source Serif 4 sets whatever the reader reads. Short display statements inside a composition (ink-grid text cells, post-its) use Jost because they are exhibits, not running text.

**The Tabular-Numeral Rule.** Every catalogue number uses tabular figures in red ink, so 01, 02 and 03 line up in a column the way a printed index does.

**The Two-Quote Rule.** A case study has at most two pull-quotes. A third quote belongs in the prose.

**The Field-Name Rule.** Uppercase tracked labels appear only as field names inside a record (a column head, a plate field, a summary row). They are never a free-floating label above a heading.

## Layout

One 1120px container with 24px side padding, and a 720px reading measure.
Section rhythm uses the spacing scale's large steps: 64px vertical padding on
mobile and 96px from 768px up. The sticky header is 72px tall and uses a
hairline bottom rule.

**Homepage.** The intro is a 7:5 grid from 900px: the name and positioning
lines on the left, the three-form composition on the right (320px wide, 3:2,
multiply-blended where the forms overlap). Below it, the catalogue is an 8:4
grid from 1000px. The index runs on the left and a sticky display case
(1:1, ink-framed, 96px below the top) sits on the right. Index rows are a
three-column ledger: number, object (title, year · medium, one-line summary)
and a right-aligned status. The rows sit under an ink-ruled column head and
are divided by hairlines. Three main objects are followed by "Also in the collection" (04–06) at a smaller size.
Hovering or focusing a row swaps its image into the display case and brings
its form forward in the composition (the other forms fade to 14%). This is done with
CSS `:has()` only and works without JavaScript. Under 1000px there is no
display case. Each main row gets its own 3:2 photo plate above it, and each minor
row gets a 64px square thumbnail. Under 600px the column head is hidden and
the status moves under the title.

**Case study.** The head sits in the container. It has the title, the standfirst, then a
5:7 grid from 900px with the label plate on the left and the four-line summary on the
right, then the hero image or video. The body is a grid with named lines:
a `full` track and a `content` track. The content track's left edge is the
container's left edge, so prose and headings share the site's one left edge.
Breakout figures span `full` from the same grid, capped at 1600px. The
four sections always carry the same ids: `problem`, `what-i-did`,
`how-it-went`, `what-i-learned`. Each opens with a 1px ink rule above its
heading. The page closes with an ink-ruled next-object footer.

### Named Rules
**The One-Left-Edge Rule.** Everything that is text shares the container's left edge: prose, headings, plates, quotes. Only images break out, and they break out to the full track of the same grid. They never break out by translating off the viewport.

**The Single-Column Rule.** Running text is never paired with a sticky or side-by-side image column. An image sits beside another image (figure grid), never beside prose. The homepage display case is an index device, not a reading layout.

**The Rules-Not-Bands Rule.** Sections are separated by a hairline or ink rule on white. Tinted full-width section bands are not part of this world.

## Elevation & Depth

Flat by default. Depth comes from rule weight: a hairline between items, a 1px
ink edge around a record, and a 3px ink frame around a fact-grid. The one
translucent surface is the sticky header (white at 92% with a 6px backdrop
blur), so content scrolling underneath softens rather than showing a hard
seam.

### Shadow Vocabulary
- **Post-it lift** (`0 6px 16px rgba(0,0,0,.14), 0 1px 3px rgba(0,0,0,.08)`, deepening to `0 12px 26px rgba(0,0,0,.2)` on hover): DBAS's visitor post-its, which were real paper notes.
- **Cut-out drop** (`drop-shadow(0 12px 20px rgba(22,22,26,.18))`): the About page's die-cut photo cluster.

### Named Rules
**The Physical-Object Exception.** A shadow exists only because the thing it belongs to is a physical object in life (a note, a cut photograph). Nothing in the ledger casts one.

## Shapes

- **Sharp** (0): the ledger. Index rows, the display case and its images, label plates, sub-plates, the four-line summary, fact-grids, ink-grids, museum blocks, lens disclosures, caption plates and the boxed rules. Sharp corners are what make it read as a record.
- **Soft** (6px): photographs outside the ledger (figures, the hero image and video, phone plates), form fields and the skip link.
- **Hairline** (2px): the square phone thumbnails and the focus ring's corners.
- **Pill** (999px): action buttons only (contact actions, the hero-video sound toggle).

**The Kandinsky forms** are the site's one geometric motif. They are drawn as SVG: a circle, an inset square and an upward triangle, each in its own colour, always `aria-hidden`.

**Drawn marks only.** Every mark is drawn: the forms, the lens +/− (an SVG mask in ultramarine-ink), the summary row's down arrow (an SVG mask that appears on hover or focus), and the hamburger bars. No text character is ever used as an icon.

## Components

### Catalogue index row
- **Character:** one ledger line per object. It is a single link covering the number with its form, the title, year · medium, a one-line summary and a right-aligned red status.
- **States:** hover tints the row bg-alt and turns the title ultramarine-ink. Keyboard focus draws the focus ring inside the row (−2px offset) and triggers the same display-case swap as hover.
- **Minor rows (04–06):** smaller title and number, no form. They link out in a new tab, with the link label in ultramarine-ink and "(opens in a new tab)" for screen readers.

### Display case
- **Character:** a sticky, ink-framed 1:1 case holding one image at a time. It has an ink-ruled caption strip ("No. 01 — Ericsson").
- **Behaviour:** object 01 shows by default. Any row's hover or focus crossfades in its own image (0.45s). Contained images (diagrams, screenshots) sit on a bg-alt matte with 24px padding. The case is desktop-only and `aria-hidden`, because the index already carries the content.

### Label plate
- **Character:** the catalogue record. A 1px ink-bordered, sharp definition list whose rows are divided by hairlines.
- **Rows:** No. (red tabular number and the form), Year, Medium, then Role / Where / Worked with from the study's frontmatter, then Status. Status sits under a 1px ink rule and is set in red ink at weight 500.
- **Field names:** uppercase muted labels in a fixed 7.5rem column. Values are Jost small in ink.

### Four-line summary
- **Character:** the entry's skim layer. Four linked rows (The problem, What I did, How it went, What I learned) under an ink rule, divided by hairlines. Each row jumps to its section id.
- **States:** hover or focus turns the label ultramarine-ink and shows a drawn down arrow.

### Fact-grid (Outcome / Learnings)
- **Character:** a Mondrian ledger that is mostly white. A 1.4:1 two-column grid with a 3px ink frame and 3px ink gaps. It has sharp corners.
- **Placement:** it opens "How it went" (Outcome) and "What I learned" (Learnings), so the payoff leads its section.
- **Accent:** exactly one accent cell, which spans two rows. It is signal red for Outcome and ink for Learnings. The stat is Jost 700 at subtitle size in on-dark. The other cells are white, with the text in ink.
- **Mobile:** one column under 640px.

### Sub-record (Ericsson 01a–01c)
- A sub-index of the three cases under an ink rule. Each case then gets a numbered subtitle, a standfirst-size lead line in ink, and a two-row ink-bordered sub-plate (My part / Result, with Result in red ink). It renders only the heading and plate, so breakout figures stay direct children of the body grid.

### Pull-quote
- **Default:** Source Serif 4 italic at subtitle size, in ink, within the 720px measure, under a short 3px signal-red rule (64px wide) that sits above the quote. The citation is upright small muted text, and the component adds the em dash itself.
- **Frequency:** at most two per study (Ericsson 2, DBAS 2, EWP 1).

### Figures
- **Default:** a 6px-radius image with a muted small caption. **Diagram:** a centred italic caption. **Plate:** a hairline-bordered Jost caption plate under a supporting image. On DBAS it carries a 4px red or blue top tab for museum coding.
- **Figure grid:** 2 or 3 columns from 640px, cropped to 4:3. The `natural` modifier keeps the source ratios where cropping would cut a label.

### DBAS-only exhibits
- **Museum pair / block:** a hairline-bordered block with a 4px red (Röhsska) or blue (Mölndal) top edge. It merges a paragraph and its annotated photo.
- **Ink-grid:** the fact-grid's ink-gap mechanism applied to text and photo cells. Photos crop to 3:4 unless `natural`.
- **Lens disclosure:** a native `<details>` in a hairline-bordered sharp card with a Jost 700 question and a drawn ultramarine-ink +/− mark. It uses no JavaScript.
- **Post-it board:** five paper notes with fixed rotations that straighten and lift on hover (see Elevation).
- **Hero video:** an autoplaying muted loop with an ink pill "Turn sound on" toggle that goes ultramarine-ink on hover.

### Next-object footer
- Under a 1px ink rule: "No. 0X", the next object's title at headline-1 size (42.6–47.4px), and its form. It turns ultramarine-ink on hover or focus. Below it sit an email line and a link back to the collection.

### Navigation
- **Style:** Jost small in body colour, with a 72px sticky header. On hover or focus a 3px dotted ultramarine underline scales in from the left. The current page gets a solid underline. CV is marked "(PDF)" in muted.
- **Mobile (≤640px):** a three-bar toggle that crosses into an X and opens a full-screen stacked menu at subtitle size. Without JavaScript the links render as a plain static list.

### Buttons and fields (contact page)
- **Primary:** an ink pill with on-dark text. Hover goes to ultramarine-ink. **Outline:** a transparent pill with a muted border and ink text. Hover fills with ink and on-dark text. Every state sets background and text colour together.
- **Fields:** 1px muted border, 6px radius, white fill, body-size text. Focus moves the border to ultramarine-ink and adds the focus ring. Labels are Jost small in ink, and hints are muted small.

### Browser surfaces and motion
- **Selection:** ultramarine mixed 18% into white, with ink text. **Caret:** ultramarine-ink.
- **Title view transition:** each main object's index title and its case-study title share a `view-transition-name` (obj-01…03). The title glides between the two views on navigation (0.45s, `cubic-bezier(.16,1,.3,1)`), and other same-origin navigations crossfade. This is disabled under reduced motion.
- **Easing:** the same expo-out curve drives the display-case crossfade and the forms coming forward (0.6s). Colour changes run 0.15–0.25s.

## Pattern inventory (frozen)

This is the complete set of patterns the site ships, checked against the build on 2026-09-23. **The set is closed. A new pattern ships only after it is added here first, with the page that needs it and a reason no existing pattern fits.**

| Pattern | Class / component | Where it's used |
|---|---|---|
| Kandinsky forms | `KForm` / `.kform-circle/-square/-triangle` | homepage composition and index, label plate, case title, next-object footer |
| Catalogue intro | `.cat-intro`, `.cat-forms` | homepage |
| Catalogue index (main + minor rows) | `.cat-index`, `.cat-row`, `.cat-head` | homepage |
| Display case | `.cat-case`, `.cat-case-item` | homepage (≥1000px) |
| Phone plates and thumbnails | `.cat-plate`, `.cat-thumb` | homepage (<1000px) |
| Catalogue entry head | `.obj-head`, `.obj-title`, `.obj-standfirst`, `.obj-record` | every object page (case studies and compact entries) |
| Label plate | `LabelPlate` / `.label-plate` | every object page |
| Four-line summary | `.obj-summary` | every case study |
| Case body (named-lines grid) | `.case-body` | every case study |
| Fact-grid (Outcome/Learnings) | `FactGrid` / `.fact-grid` | every case study; DBAS also uses it inline for its research question |
| Pull-quote | `PullQuote` / `blockquote.pull` | every case study |
| Figure: default, diagram, plate | `Figure` / `.cap-plate` | every case study |
| Figure grid (+ `natural`) | `.figure-grid.cols-2/3` | Ericsson, EWP, DBAS |
| Supporting figure | `.figure-support` | DBAS |
| Breakout | `.breakout` | every case study |
| Hero image / video | `.hero-figure`, `.hero-video` | every case study; video on DBAS |
| Sub-records | `SubRecord` / `.sub-index`, `.sub-plate` | Ericsson |
| Ratings ledger (mean on a scale, n and scale always in the caption) | `Ratings` / `.ratings` | DBAS (pilot feedback forms) |
| Case body wide column | `.case-body > .wide` | Ericsson, DBAS, EWP (dense diagrams that are cramped at the reading measure) |
| Ericsson diagrams (scoped styles, drawn in code, NDA-safe) | `components/ericsson/`: `DeliveryBeforeAfter`, `SpecRule`, `AuditFramework`, `HandoffLoop`, `HandoutSheet`, `CardSystem`, `AssistantCanvas`, `SpecToCode` | Ericsson only |
| DBAS diagrams (scoped styles, drawn in code; museum red/blue kept for Röhsska/Mölndal) | `components/dbas/`: `DbasProcess`, `PilotRounds`, `ThemesLedger`, `LeafletEvolution`, `LensGrid`, `MuseumCompare`, `GhostWall`, `RotaryDial` (interactive: a working dial with the Swedish ringback tone, reduced-motion safe) | DBAS only |
| EWP diagrams (scoped styles, drawn in code; status swatches are the product's own colours, shown as a specimen) | `components/ewp/`: `ModuleMatrix`, `StatusSystem`, `OldNew` (real old-UI fragments at near-true size) | EWP only |
| Desktop + phone screen pair | `.figure-grid.ewp-screens` | EWP |
| Case marks (one per sub-record, derived from the object's form) | `CaseMark`, `.obj-summary-key`, `.obj-summary-cases`, `.sub-mark` | Ericsson (per-case summary, case index, case headings) |
| Interactive demo (plays once in view, hands over on first click, off under reduced motion) | `AssistantCanvas` | Ericsson 01c |
| Named section heading with its plain name | `.h-sub` | DBAS (Pick up / Dial / Wait / Talk / Hang up) |
| Section rail ("where am I": fixed in the spare column, folds to a strip under the header when a wide figure passes or below 1100px) | `SectionRail`, `rail` frontmatter: `cases` (Ericsson letters), `call` (DBAS: pick up → hang up, with a live state), `status` (EWP: `--ewp-done` / `--ewp-turn`, the product's own colours as specimen) | every case study |
| Column grid | `.col-grid.cols-3` | Ericsson |
| Museum pair / block | `.museum-pair`, `.museum-block` | DBAS |
| Ink-grid | `.ink-grid` | DBAS |
| Post-it board (five notes) / wall (more than five: smaller, `.wide`, left-aligned) | `PostitBoard` | DBAS |
| Next-object footer | `.obj-next` | every object page, in catalogue order 01 → 06 → 01 |
| Entry links | `.obj-links` | compact entries 04–06 (where a case study has its summary) |
| Embed (Figma prototype / YouTube) | `Embed` / `.embed`, `.embed-frame`, `.embed-label` | compact entries 04–06 |
| Photo cluster | `.photo-cluster` | About |
| CV entries | `.about-grid`, `.entry`, `.col-heading` | About |
| Buttons | `.btn`, `.btn-outline` | Contact |
| Form fields | `.form-field` | Contact |

### Named Rule: Diagrams drawn in code
A diagram is built in HTML, CSS and SVG, not exported as an image, whenever its content is structure, numbers or text: real text stays selectable and translatable, it is crisp at any width, it reflows on phones (a loop becomes a list, side-by-side panels stack), and every number comes from the sources in `reference/PROJECT-REFERENCE.md`. Diagrams use ink, hairlines and the object's own form colour (gold for Ericsson, blue for DBAS, red for EWP), sharp frames, and drawn marks, never text glyphs. Photographs stay photographs, and a photograph never carries a label or caption baked into its pixels: labels, arrows and version marks are drawn in code around it (DBAS's leaflet versions).

## Accessibility commitments

These are the checks run before any cutover:

- Any colour that carries text uses its `-ink` value (signal-red-ink for numbers and status, ultramarine-ink for interactive states). Bright gold never carries text.
- `lang="en"`, a skip link, one `<h1>` per page, no skipped heading levels. The index has a visually hidden "The collection" heading.
- Every meaningful image has real `alt` text. Images that repeat what a row already says (phone plates, thumbnails, display-case images) use `alt=""`. The forms and the display case are `aria-hidden`.
- A visible `:focus-visible` ring (2px ultramarine-ink, 3px offset) on every interactive element. Keyboard focus triggers every hover behaviour: display-case swap, form forward, nav underline, summary arrow.
- Form-field edges use muted for 3:1 UI contrast.
- `prefers-reduced-motion` disables all transitions, animations and view transitions.
- Works fully without JavaScript. The display case, disclosures and nav fallback are HTML and CSS only.

## Do's and Don'ts

### Do:
- **Do** give every object a number, a form and a status, and open every case study with the title, standfirst, label plate and four-line summary.
- **Do** keep the four section ids fixed (`problem`, `what-i-did`, `how-it-went`, `what-i-learned`) and open the last two with a fact-grid.
- **Do** set catalogue numbers in Jost with tabular numerals in signal-red-ink.
- **Do** keep colour to its job: red for catalogue marks, blue for interaction, gold only in the triangle and diagrams.
- **Do** separate sections with a hairline or ink rule on white.
- **Do** keep one accent cell per fact-grid (red for Outcome, ink for Learnings) and leave the other cells white.
- **Do** draw marks as SVG shapes, and give every hover behaviour a matching `:focus-visible` trigger.
- **Do** set background and text colour together on every interactive state.

### Don't:
- **Don't** band sections with a tinted background. Bg-alt is for a row hover or an image matte, never a section.
- **Don't** put a kicker, eyebrow or pill tag above a heading or on an index row. Uppercase tracked text is only a field name inside a record.
- **Don't** round the ledger. Index rows, plates, fact-grids and the display case keep sharp corners.
- **Don't** add shadows or blur to anything that is not a physical object.
- **Don't** use a text glyph (+, →, ↓, •) as an icon. Draw it.
- **Don't** use gold for text, links or UI, or a Kandinsky form for anything other than its object.
- **Don't** mark a card or quote with a thick coloured left border. The pull-quote's rule sits on top.
- **Don't** add more than two pull-quotes to a study.
- **Don't** reintroduce a two-column sticky-media reading layout or a floating in-page nav rail. Both were tried and retired.
- **Don't** set body copy in Inter or EB Garamond. Both were tried and retired for Source Serif 4.
