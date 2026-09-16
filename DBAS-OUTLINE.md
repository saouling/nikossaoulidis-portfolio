# Don't Be a Stranger — agreed section outline

Produced in **Session A3** and agreed with Nikos. This is the document Session A4 writes
copy against, and Session B11 builds the page from. `REBUILD-PLAN.md` remains the single
source of truth for decisions; this file is a work product under it.

**Target length: ~1,880 words of body copy.** Nikos chose ~1,800; the budgets below sum to
1,880, which is close enough to tune in the writing. For reference: Ericsson is 2,164 words,
EWP Dashboard 923, the current hand-coded DBAS page 1,649.

---

## Constraints this outline already obeys

**From Session A1 (the thesis read):**
- The thesis output is **four lenses**, presented as "practical guidelines" per Nikos's own
  deck. The five RTA themes are an *input* to the museum phase, not an output, and must not
  be presented as the thesis's findings. Never restate "five transferable design
  guidelines" in any form.
- The deck's **four film questions** are used as section openers. **No film stills** —
  rights, and the questions carry it alone.
- **Personal register stays in**, including the tattoo.
- **"Five to twenty minutes" on the phone is cut.** Unsourced; it appears to be the
  pre-pilot *interview* length that drifted onto call duration.
- **"A year and three months" is not used.** Unverified. Nikos chose "Still running" with no
  number for the Outcome stat.

**From Session A2 (the assets):** 61 images in `images/dbas/`, mirrored to
`public/images/dbas/`. Two diagrams are quarantined in `images/dbas/_quarantine/` and must
not be used — `dbas-process-detailed.png` asserts the disproved guidelines claim in its own
artwork, and `dbas-process.png` has Lab and Field swapped against the thesis's own CDR
mapping. Both need redrawing; `50-lab-field-showroom` is the thesis's correct version and
can replace the second one directly.

**From the template (`src/pages/[slug].astro`):**
- **Outcome and Learnings render after the MDX body**, in a `.section-alt`, as two
  `.fact-grid` blocks. Their position is fixed; the narrative cannot end after them.
- Each fact-grid takes one `stat`, one `statLabel`, and **exactly two** `facts` — pinned in
  the schema because the CSS accent cell spans two rows assuming three total cells.
- **The hero is hardcoded as `<picture>`/`<img>`.** Nikos wants a looping video hero, as on
  the current Readymag site. **This needs a schema + template change in B11** — see Open
  items below.

**Invariants:** single column, zero JavaScript by default, landscape for full-bleed,
no em dashes in first-person copy, every factual claim traceable.

---

## Structure

Narrative spine with the four lenses as the payoff, then the professional translation, then
the personal close. Chosen from four options offered in A3.

### Frontmatter

| Field | Value |
|---|---|
| `heading` | Don't Be a Stranger |
| `eyebrow` | School |
| `title` | Don't Be a Stranger — Defamiliarizing Communication through Rotary Phones — Nikos Saoulidis |
| `standfirst` | Keep the existing line, which is good: a permanent museum installation where two strangers pick up old rotary phones and talk to each other, live, across two museums in Gothenburg. |
| `heroImage` | `hero-video-poster.jpg` as the poster; the video is `videos/rohsska-installation.mp4` |
| `atAGlance` | Role · Timeframe · Partners (Röhsska, Mölndals stadsmuseum) · Methods (RtD, co-design, reflexive thematic analysis) · Output |

---

### 1 · The idea — ~180 words

Phone booths first, not museums. The Greek village, the saved prepaid cards, the
great-grandmother's rotary phone. The pitch to telecom companies across Sweden and
Scandinavia, and why it died: infrastructure, cost, safety, potential misuse. Then the
Röhsska visit where the Kobra was already sitting behind glass, and the reframe that made
the project possible.

- **Source:** `05_Design_Process` §Discover and §Ideate; `02_Background` positionality; deck "why?"
- **Images:** `22-phonebooth-concept`, `48-red-phone-and-cable`

### 2 · The question — ~120 words

The research question verbatim. Museums ask you to observe, not touch. Critically, the
don't-touch instinct is presented as **documented fact, not assertion** — he photographed it
across four Gothenburg museums before designing anything.

- **Source:** `01_Introduction` §Research Question; `05_Design_Process` §Museum Visits
- **Images:** `do-not-touch-icons`, `07`/`08`/`09-do-not-touch-*`

### 3 · Two museums, two installations — ~280 words

The contrast section, and the strongest design-thinking evidence in the project. Same
concept, two institutions, two genuinely different designs.

- **Röhsska:** Innovation room inside *Design Stories*, the Ericofon/Kobra, a post-it
  surface, conceptual tone, placed near the Kobra phones already behind glass so tour guides
  could use the contrast.
- **Mölndal:** *Öppna magasinet*, the Ericsson Dialog, wooden table and red armchair,
  a guestbook, domestic tone, electronics hidden inside a vintage box from the collection.
- Say **why** each choice: the Dialog over the Kobra because a city museum reads domestic
  and the Kobra reads design-object; the guestbook over post-its because a post-it wall would
  have broken the room's quiet.

- **Source:** `05_Design_Process` §Museum Phase; `06_Results` §The final exhibitions
- **Images:** `26-rohsska-annotated` + `27-molndal-annotated` paired, `28-postit-vs-guestbook`, `47-molndal-armchair-wide`

### 4 · How I worked — ~280 words

Research through design, three iterations, condensed.

- **Lab:** finding nine phones across Tradera, Facebook Marketplace and Gothenburg thrift
  shops; repairing them without the knowledge to do it; Bluetooth adapters into the cell
  network because Sweden has no working landline infrastructure; laser-cut casings.
- **Field:** the campus pilot in three versions across Kokboken, Patricia and Jupiter.
- **Showroom:** the two museums.
- **The wall of ghosting** — months of unanswered emails to museums and companies across
  Sweden and Denmark, and the fact that Jessica's personal introduction achieved in one
  conversation what the outreach had not in five months.
- Reflexive thematic analysis run across all three phases together rather than phase by
  phase.

- **Source:** `04_Methodology`; `05_Design_Process` iterations I–III
- **Images:** `50-lab-field-showroom`, `30-finding-the-phones`, `29-repairing-the-phones`, `31`/`32`/`33-pilot-iteration-*`, `23-wall-of-ghosting`

### 5 · What I decided — ~220 words

The hard calls, each with the alternative that was rejected.

- Voice only. No screens, no caller ID, no visual feedback.
- No AI, no recorded voices, no answering machine.
- Keep the friction, fix the breakage: the dial stays slow, the sound quality gets fixed.
  Single-digit speed-dial shortcuts were considered and deliberately rejected.
- Don't over-promise a live connection. *"You might connect. You might not. But the moment
  is yours."* Came from the curators, not from him.
- Feedback as reflection rather than data, after Röhsska said the structured forms
  "felt like [they were] trying to steer the replies in certain directions."

- **Source:** `05_Design_Process` §Museum Phase co-design and §Materializing Reflection; `07_Discussion`
- **Images:** `38`/`39-dissonance-dial-*`, `40-making-the-rolodex-cards`, `35`/`36-instruction-leaflet`, `37-molndal-posters-full`

### 6 · It went live — ~180 words

What actually happened, from his own observation notes.

- Visitors arriving in groups and watching before joining; the snowball effect once one
  person wrote a post-it.
- Younger visitors more likely to pick up; older visitors recognising the Kobra.
- Real post-it quotes — "Satisfying to dial. The dial tone is eerie.", "Social media is the
  death of sincerity.", "It was so unexpected and fun!"
- **Jessica Andersson Sjögerén's email, quoted and dated 3 June 2025.** Independent
  third-party validation in a curator's own words; almost nothing else in the portfolio has
  an equivalent.

- **Source:** `06_Results` §Preliminary Observations at Röhsska; the curator email
- **Images:** `25-cover-photo`, `44-postit-wall-full`, `42`/`43-rohsska-visitors-*`, `51`/`52-observation-*`

### 7 · What I'd tell you — ~260 words

The four lenses, each opened by its film question from the deck, each carrying two or three
concrete practical guidelines. **This block replaces the incorrect "Five guidelines"
section on the current page.**

1. *What does the voice carry that a text never could?* → **Voice-based communication and
   emotional presence**
2. *How does it feel to hold a phone that doesn't fit in your pocket?* → **Tactility,
   materiality and embodied interaction**
3. *Would you pick up a ringing phone in a public space?* → **Invitation and participation
   in public space**
4. *What happens when something you know suddenly behaves a little bit strange?* →
   **Defamiliarisation as reflective strategy**

**Note for A4:** 260 words across four lenses is roughly 65 each, so two or three short
guidelines per lens — not the full seventeen in `06_Results`. Choosing which survive is a
real editorial cut, not a summarisation.

- **Source:** `06_Results` §Addressing the Research Question; `07_Discussion` §7.1; the deck's lens slides, which carry the "practical guidelines" label
- **Images:** `14-prompt-card`, `46-hand-holding-prompt-card`

### 8 · What this project says about how I work — ~200 words

Added at Nikos's request in A3: the section that translates a museum project into terms a
UX or product hiring manager reads. The argument is that this was a museum installation but
the *work* was product work. Evidence, not assertion:

- **It shipped.** Two public installations, two institutions, still up. Not a concept.
- **Stakeholders across four disciplines** — five named people plus technicians, reception
  and guides. Curators, a graphic designer, a communicator, a pedagogy lead. None of them
  reported to him.
- **He worked inside someone else's design system** — Röhsska's visual identity, using their
  graphic designer's templates, not his own aesthetic.
- **He designed the failure state.** "You might connect. You might not." is empty-state
  copy, written because curators warned that promising a live call would produce
  disappointment. The whole framing was redesigned around the call *not* happening.
- **Evidence over instinct.** Three pilot rounds, 25 participants, thematic analysis; he can
  name which design changes came from which finding.
- **Onboarding, iterated** — the instruction leaflet went through annotated co-creation with
  students and three revisions.
- **Bilingual microcopy**, co-written with a communications team.
- **Privacy by design** — data minimisation, GDPR-referenced consent, no recordings, by
  deliberate choice rather than omission.

- **Images:** `34-cocreating-with-students`, `18-curator-meeting-notes` or `10-collaborative-documents`

### 9 · Reflection and moments — ~160 words

The personal close, the differentiator. Baudrillard introduced to him on a phone call. Why
he still prefers calling. Then the moments: the first pilot pickup, reading the post-its for
the first time, calling from the Dialog in Mölndal and reaching a stranger at Röhsska, and
**the Ericofon tattoo** (model confirmed by Nikos in A3). Ends on accessibility as the first
thing he would fix.

- **Source:** `02_Background` §Positionality; deck "some (life) lessons i learned" and "moments that stayed with me"
- **Images:** `02-person-on-the-phone`, `53-ericofon-tattoo`

---

## Outcome and Learnings (frontmatter, renders after the body)

```yaml
outcome:
  stat: "Still running"
  statLabel: "in both museums, no end date set"
  facts:
    - "Röhsska's curator asked to keep it up through the summer; staff kept moving notes aside to make room for more."
    - "Co-designed with five named museum staff across two institutions."

learnings:
  stat: "Design the situation, not just the object"
  statLabel: "Placement and permission did as much work as the artefact"
  facts:
    - "What delights me can intimidate someone else, so I designed for their comfort rather than my own."
    - "Accessibility is the first thing I would fix. It leans hard on sound and touch, and that leaves people out."
```

Both drawn from existing approved copy and the deck's own lessons slide. Wording is
provisional; the shape is fixed by the schema.

---

## Open items

1. **The video hero needs a schema and template change (B11).** `heroImage` is required and
   typed as an image; `[slug].astro` hardcodes `<picture>`/`<img>`. Options: add an optional
   `heroVideo` field and branch in the template, keeping `heroImage` as the poster frame.
   Decide in B11, not before.
2. **The hero video is 17 MB** (1920×1080, h264, `yuv420p`, 28s). The encode itself is the
   good one `REBUILD-PLAN.md` says to keep, but 17 MB autoplaying on first paint is heavy.
   Revisit at B13/B14.
3. **The two quarantined diagrams need redrawing** now that the four-lens framing is settled.
   See `images/dbas/_quarantine/README.md`.
4. **`ericofon-catalogue` and `dialog-catalogue`** are Ericsson's own catalogue and Review
   Journal images, not Nikos's photographs — the same rights category as the related-work
   images excluded in A2. Still undecided.
5. **`11-tower-of-babel`** appears nowhere in the thesis; its relevance is unexplained.
   Decide whether it earns a place or gets dropped.
6. **Section 7 is a real editorial cut**, not a summary. Seventeen considerations into
   roughly eight.
