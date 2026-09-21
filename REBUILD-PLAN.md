# Portfolio rebuild — working plan

**Point a new chat at this file first.** It is the entry point and the single source of
truth for the Astro rebuild. It supersedes `NOTES-handoff.md` for anything about
planning or decisions; that file is kept only for the source-material paths, which are
reproduced in §6 below.

Read §1–§4 before doing anything. Then find the first session in §7 that isn't marked
done, and do that one. One session is roughly one sitting.

**How Nikos wants to work:** Claude drives the building. Nikos does not type the code.
But every session explains what is being built and why, in running commentary — the
concept, not just the diff. The `Concept` line in each session is the thing to actually
teach, not a label to skip past. If a session finishes without that having been
explained, the session isn't done.

---

## 0. How this is run

**Environment.** Claude Code desktop app, in this repo. Node v20.8.0, npm 10.1.0, git
2.37.3, `gh` authenticated as `saouling`. A Vercel account exists, created via
"Continue with GitHub", so the repo can be connected without extra auth steps.

**Branches.**

```
main            the old hand-coded HTML site, frozen. Permanent fallback. Do not touch.
astro-rebuild   every session below happens here.
```

Confirm you are on `astro-rebuild` before starting any session. If the working tree has
uncommitted changes from a previous session, stop and ask before proceeding.

**One chat per pair of sessions**, roughly. This file is the memory between them — a
fresh chat reads it and knows everything that matters, which is why the decisions live
here and not in a conversation. Suggested grouping: B1+B2 · B3+B4 · B5+B6 · B7+B8 · B9 ·
A1 · A2+A3 · A4 · B10+B11 · B12+B13 · B14+B15.

**Git rhythm — one commit per session.**

- Commit at the end of each session, message prefixed with the session id:
  `B3: shared layout, retires nine hand-synced headers`.
- Push after every commit. That is the backup.
- Then update §9, the progress log, in the same commit.
- One commit per session is what makes "undo the last session" a clean operation. Do not
  batch several sessions into one commit.
- Never commit `node_modules/`, `dist/`, `.astro/` or `.vercel/` — `.gitignore` already
  covers these.

**Nikos does not type code.** He reads, watches and decides. So:

- Explain as you build. The `Concept` line in each session is the thing to teach.
- Use the Browser pane so he can see the site as it changes, not just read about it.
- Show him the diff at the end of a session and say what it touched.
- If he says something looks wrong, believe him. He is a designer and his eye is the
  most reliable instrument in this project, whether or not he can name the CSS property.

**The only irreversible step is B15**, the DNS cutover. Everything before it is
reversible, and nothing before it can affect the live Readymag site.

---

## 1. Where things actually stand

Verified 15 Sep 2026 against the repo, the live domain and the GitHub API. Do not
trust older notes on any of this.

- **`nikossaoulidis.xyz` is Readymag**, not this repo. DNS `A 54.194.41.141`, Caddy/nginx,
  assets from `rmcdn.net`. It carries the job search and stays live until cutover.
- **This repo has never been deployed anywhere.** GitHub Pages was never enabled
  (`gh api repos/saouling/nikossaoulidis-portfolio/pages` → 404, `saouling.github.io` → 404).
  The `CNAME` file is aspirational. Nothing here has ever been public.
- **Live URL shape is `/ericsson/`**, not `/work/ericsson.html`. The new site keeps the
  live shape so links already sent in applications survive.
- **Live homepage links five projects**: ericsson, ewp-dashboard, interactive-table,
  synodia, lighthouse. Don't Be a Stranger is absent from the live work grid.
- **`/dont-be-a-stranger/` on Readymag is a mis-assembled page**, not a blank one. A
  correct DBAS hero sits above a body that is entirely EWP Dashboard copy. Title still
  reads "Page 5". Nothing links to it, but it is in the submitted sitemap. Decision:
  left alone until cutover, then unpublished. Revisit only if Nikos raises it.
- **Repo content depth**, words of page copy:
  Ericsson 1729 · DBAS 1649 · EWP 510 · Interactive Table 454 · LightHouse 329 · Synodia 261.

---

## 2. Locked decisions

Do not re-open these. If one seems wrong, say so and ask — don't quietly work around it.

| # | Decision | Notes |
|---|---|---|
| 01 | **Astro**, static output | Checked against Next.js and re-confirmed. Next.js is more hireable but worse for a nine-page document site. |
| 02 | **Incremental, in parallel** | Readymag stays live and carries the job search throughout. |
| 03 | **Vercel**, per-branch previews | Chosen on skill transferability. Netlify equivalent for the site itself. |
| 04 | **MDX content, authored in-repo** | No CMS. |
| 05 | **`.astro` components, no React** | Storybook and Code Connect deferred, so `.tsx` buys nothing today. |
| 06 | **Plain CSS + existing tokens** | No Tailwind. Tokens port near-verbatim. |
| 07 | **Light mode only** | Matches the current site. Do not add a dark theme. |
| 08 | **Single-column layout everywhere** | `.wrap.col` + `.breakout`. `.two-col.sticky-media` is **retired**. `DESIGN-SYSTEM.md` still documents the old pattern and must be corrected. |
| 09 | **URLs keep the live shape** | `/ericsson/`, not `/work/ericsson.html`. |
| 10 | **Two content tiers** | Tier 1 full pages: Ericsson, DBAS, EWP. Tier 2 homepage cards only: Interactive Table, LightHouse, Synodia. |
| 11 | **Every tier-1 study needs an explicit outcome and a learnings section** | Enforced in the content schema so a study without them fails the build. |
| 12 | **EWP gets deepened before cutover** | Promoted to tier 1; 510 words is too thin to lead with. |
| 13 | **DBAS rebuilt from thesis source**, not migrated from the current HTML | And it is **on the cut line**, not after it. |
| 14 | **DBAS content work runs in parallel from day one** | Track A below. It is the long pole. |
| 15 | **Ericsson: layout rebuild, copy kept** | Plus three additions — outcome, learnings, and an explicit NDA-constraint passage. |
| 16 | **Privacy-friendly analytics before cutover** | Plausible or Umami. |
| 17 | **Deferred until after cutover** | Storybook, Figma→tokens pipeline, GitHub Actions CI. Do not start these. |

**The cut line:** the domain does not move until tier 1 is three real case studies
(Ericsson, EWP, DBAS), tier 2 is three homepage cards, and §7's pre-cutover session
passes. There is deliberately no date. The constraint is scope: **refuse additions
before cutover by default.**

---

## 3. Invariants

These hold for every session. Breaking one is a bug, not a judgement call.

- **Zero JavaScript by default.** Progressive enhancement only. The site must work fully
  with JS disabled. No Astro `ClientRouter` — cross-page transitions use the native CSS
  `@view-transition` rule already in `styles.css`.
- **Single column.** `.wrap.col` for text, `.breakout` / `.full-bleed` for images.
  Never reintroduce `.two-col.sticky-media`.
- **One caption convention.** The repo currently has four bare `<figcaption>` and two
  `.diagram-caption`. The `Figure` component resolves this to one. There is no
  `.media-caption`, despite what older notes claim.
- **Accessibility commitments from `DESIGN-SYSTEM.md` carry over unchanged**: one `<h1>`
  per page, no skipped heading levels, real `alt` text, visible `:focus-visible` states,
  `prefers-reduced-motion` honoured, skip link.
- **No em dashes in first-person copy.** Nikos notices them first. Applies to all
  case-study body text, not just cover letters.
- **Every factual claim traces to a source** — `cv-master.md`, `story-bank.md`, or the
  thesis. Never carry a claim forward from the current site without checking it. The
  "five transferable design guidelines" line in the current DBAS copy is exactly the
  failure this rule exists to catch — **now resolved, see the finding box under Session A1.**
  A second instance was caught in the same session: the live outcome line's "five to twenty
  minutes" on the phone traces to nothing, and appears to be the pre-pilot *interview*
  length wearing a different hat.
- **Landscape images for full-bleed moments.** Where only portraits exist, pair two side
  by side rather than blowing one up.
- **Asset selection is collaborative.** Offer candidates, let Nikos choose. Do not pick
  unilaterally — this has been raised before.

---

## 4. What the research says the content has to do

From a survey of 74 UX recruiters plus the current consensus on portfolio structure.
This is why §2 decisions 10–12 and 15 exist.

- Recruiters spend **three to five minutes**, scanning selectively.
- **Three to five projects, explained in depth.** "I'd rather see one project explained
  really well than five explained quickly." This is the basis for the two-tier split.
- They want **process, iterations and impact** — the messy middle, not polished finals.
- **"Show us your vector of growth."** Honesty about lessons and what you'd improve is
  explicitly asked for. Hence the mandatory learnings section.
- **Explaining what you couldn't do, and why, is often more revealing than what you did.**
  This is why Ericsson's NDA constraint becomes content rather than a limitation.
- The first 0–3 seconds go to the opening case study title and its first visual.

**What the current site already does right — don't break it.** The homepage headline
states who and what; the intro carries concrete numbers; there are three clear CTAs; and
every project row already ends with an outcome line. That structure is better than most.
The rebuild keeps it.

---

## 5. Target structure

```
src/
├── layouts/
│   └── Layout.astro          ← the one nav/footer, replacing nine copies
├── components/
│   ├── Figure.astro          ← one caption convention
│   ├── AtAGlance.astro
│   ├── PullQuote.astro
│   ├── BreakBand.astro
│   ├── PostitBoard.astro     ← named "QuoteGrid" below at first; renamed in B6
│                                to match the real .postit-board CSS (there is
│                                no .quote-grid/.quote-lg anywhere in the site)
│   └── ProjectCard.astro     ← tier-2 homepage cards
├── content.config.ts          ← schema; outcome + learnings are required fields
│                                (Astro 7's Content Layer API moved this out of
│                                content/ itself — see progress log, Session B5)
├── content/
│   └── case-studies/
│       ├── ericsson.mdx
│       ├── ewp-dashboard.mdx
│       └── dont-be-a-stranger.mdx
├── styles/
│   └── global.css            ← current styles.css, ported near-verbatim
└── pages/
    ├── index.astro
    ├── about.astro
    ├── contact.astro
    ├── 404.astro
    └── [slug].astro          ← one template, three studies, at /ericsson/ etc.
```

Note `[slug].astro` sits at the root, not under `/work/`, per decision 09.

---

## 6. Source material (outside the repo)

**Primary, as of Session B8**: `~/Documents/portfolio-content-assets/` — Nikos consolidated
source material here per-project; check this folder first before falling back to anything
below. Structure:
- `general/Portfolio Presentation.pdf` (57 pages) — the interview deck covering Don't Be a
  Stranger, Ericsson (all three cases, with concrete numbers not on the current site — e.g.
  the AI-readiness audit's 2.4→9.5-out-of-10 score) and EWP Dashboard. Read in full for
  Ericsson in Session B8; **not yet read for Don't Be a Stranger or EWP** despite appearing
  earlier in the deck — re-read those sections when those sessions come up.
- `general/CV-Nikolaos-Saoulidis-2026.pdf` — not yet read.
- `ericsson/edc-build-better-together/` — `EDC EDUX 2026 (1).pdf` and
  `cheatsheet-page1.html`. Replaces the old `~/Downloads/analyze-dbas-and-edc-conference/`
  path. Still not reviewed; relevant if Ericsson Case 2 is revisited.
- `dont-be-a-stranger/report-thesis-latex-and-assets/03 Don't be a Stranger Report/` —
  replaces the old `~/Downloads/Nikos___DATX05...` thesis path. **Fully read as of Session
  A1** — all eight chapters plus `Dump.tex`, nothing outstanding. (`Dump.tex` is cut
  material: an early ethics chapter now living in Appendix C, a superseded pilot-results
  section, and two earlier phrasings of the research question. Nothing in it is quotable as
  current.) Appendices A–I have **not** been read; they hold the full prompt lists, the
  rejected ideas, the visual identity and the detailed statistics, and are worth a look in
  A3 if the outline needs them.
- `dont-be-a-stranger/dont-be-a-stranger-presentation.pdf` — 169 pages, Nikos's own thesis
  defence deck (3 June 2025), distinct from `general/Portfolio Presentation.pdf`. **Read in
  full in Session A1.** This is where his preferred narrative shape lives: the 20-word
  summary, the four lenses framed by film stills and questions, the "practical guidelines"
  label, the "bonus question" on talking with strangers with the rawest feedback quotes
  ("Nude", "a little vulnerable… exciting but also risk of rejection"), the "some (life)
  lessons i learned" slide, and "moments that stayed with me". Page count is inflated by
  build animations, so many pages are near-duplicates.
- `dont-be-a-stranger/some-assets/` — a handful of real photos/logos/video
  (`compressed-rohsska.mov`, `Mask group.png`, `Logo-white.png`, `Logo 1.png`,
  `Ericsson-banner.png`, two presenting photos). Check against the `~/Downloads/*.HEIC`
  set below before Session A2 — may already cover some of what that session needs.
- `sound-mediating-table/sound-mediating-table.pdf`, `synodia/synodia.pdf` — source decks
  for the two tier-2 projects, relevant to Session B10. Not yet read.

**Still only in `~/Downloads/`, not yet consolidated**:
- **Thesis figures**: `~/Downloads/Nikos___DATX05_Master_s_Thesis___Name_of_Project/figure/05_Process/`
  and `figure/06_Results/`. The `06_Results/pre-pilot/` and `pilot/` charts unreviewed.
- **Raw photos/video**: `~/Downloads/*.HEIC` and `*.mov`, roughly 25 HEIC files. Confirmed
  good unlabelled shots exist for: Röhsska installation, Mölndal red-armchair room,
  visitors mid-call, post-it feedback tables, Rolodex card close-ups. Regenerate contact
  sheets with `sips -s format jpeg -Z 900` plus a PIL montage.
- **Interview deck**: `~/Downloads/Magnet Presentation.pdf`, 68 pages. Structural
  inspiration only, not copy. Likely an older draft of `general/Portfolio Presentation.pdf`
  above — check before using, the newer one is probably sufficient on its own.

**Job-search project**: `~/Claude/Projects/Job applications/reference/` —
`cv-master.md`, `story-bank.md`, `voice-guide.md`.

`ffmpeg` is installed. The hero video was re-encoded from 10-bit HDR to 8-bit `yuv420p`
with `+faststart` to fix stutter — that fix is good, keep it.

---

## 7. Sessions

Two tracks. **Track A runs in parallel from day one** and does not block Track B.
Mark each session `[x]` when done and add a one-line note about what actually happened.

### Track A — Don't Be a Stranger content

The long pole. Prose and asset work, framework-independent. Starting it late is the main
way this plan slips.

- [x] **A1 · Finish the thesis read.** Scope widened at Nikos's instruction: read *every*
  chapter in full, not only the ones marked unread, plus `Dump.tex` and the 169-page
  `dont-be-a-stranger-presentation.pdf`. Guidelines problem resolved — see the box below,
  which is the canonical statement this session existed to produce.
  *Concept: why a portfolio claim that can't be traced to a source is a liability in an
  interview, not just an inaccuracy.*
  **Done when:** the real structure of the thesis output is stated in this file. ✔

#### A1's finding — the real structure of the thesis output

**Do not restate the "five guidelines" claim in any form. It is wrong three ways.**

The thesis has two separate numbered sets, and the current site fused them:

1. **Four research lenses — this is the thesis's answer to the research question, and the
   thing a portfolio should present.** *Voice-Based Communication and Emotional Presence ·
   Tactility, Materiality and Embodied Interaction · Invitation and Participation in Public
   Space · Defamiliarization as Reflective Strategy.* Set up in `01_Introduction`, answered
   as bullet lists in `06_Results` §"Addressing the Research Question" (roughly 17 concrete
   considerations across the four), argued again in `07_Discussion` §7.1, restated in
   `08_Conclusion`. The abstract's "four key experiential qualities" is the same four.
   **Nikos's own deck labels these bullets "practical guidelines"** in the corner of each
   lens slide. That is where the word "guidelines" legitimately comes from.

2. **Five cross-phase RTA themes — an input, not an output.** *Emotional Presence Through
   Analog Voice · Friction and Vulnerability as Invitations · Defamiliarization and
   Playfulness · Social Norms and Spatial Hesitation · Material Memory and Nostalgia.*
   Synthesised in `06_Results` §"Synthesizing RTA Pre-pilot and Pilot Results" from the
   pre-pilot and campus pilot **only** — before either museum existed. Their stated job is
   to guide iteration three: they "operated as design guides" for the museum phase. They
   are Nikos's own design brief, not a transferable finding. Each carries one **Design
   Implication**, so "five themes, each with a design implication" is accurate if it is ever
   needed.

Why the live claim fails: the five are themes, not guidelines; they are not transferable;
and `07_Discussion` §"Limitations & Future Work" states in writing that the project produced
"hands-on, practical recommendations, **without producing broad design guidelines**", with
generalizable recommendations named as future work. The likely origin of the error is the
deck: the word "guidelines" sits on the four-lens slides, but the five themes are the more
card-shaped thing, so the label slid across.

**Known contradictions inside the thesis itself** (expect these in an interview, don't
"fix" them silently): `07_Discussion` §7.1 says "the **four** overarching themes from the
RTA" when there are five; the Discussion names three themes that appear nowhere in Results
("Friction and Slowness as Meaningful", "Playful Curiosity and Strange Familiarity",
"Navigating Uncertainty and Social Space"); and theme 3 is "Defamiliarization and
**Playfulness**" in the Results synthesis but "…and **Improvisation**" elsewhere in Results
and on the deck's lens slides. Both spellings are in the source.

**Decisions taken with Nikos in this session:**
- Present the **four lenses as "practical guidelines"**, matching his deck. The five themes
  are demoted or cut; they do not lead the page.
- **Cut "five to twenty minutes" on the phone.** Unsourced. The thesis never measures call
  duration and calls it deliberately unmeasured; the only "10 to 20 minutes" in the thesis
  is how long the *pre-pilot interviews* ran. Treated as a number that drifted from
  interview length to call length.
- **Use the deck's four framing questions** as section openers ("what does the voice carry
  that a text never could?", "how does it feel to hold a phone that doesn't fit in your
  pocket?", "would you pick up a ringing phone in a public space?", "what happens when
  something you know suddenly behaves a little bit strange?"). **No film stills** — the
  questions carry it without the rights problem.
- **Keep a fair amount of the personal register** from the deck (positionality, the "life
  lessons" slide, "moments that stayed with me"). It is the differentiator, and §4's
  "vector of growth" research supports it. **The Ericofon tattoo stays in** — raised
  separately and confirmed by Nikos, so A4 should not re-litigate it.

**Still unverified, needs Nikos in A3/A4:** "Running permanently in both museums for a year
and three months" — the thesis (June 2025) says no fixed end date and that continuation
"depends on how long each museum wishes to host it". "Permanently" is stronger than the
source supports and the duration is his knowledge, not the thesis's.

- [x] **A2 · Contact sheets and asset review.** Four contact sheets built and reviewed with
  Nikos; he chose. **Done when:** a chosen shortlist is copied into `images/dbas/` and
  listed here. ✔ — see the box below.

#### A2's result — the DBAS asset shortlist

**`images/dbas/` now holds 60 images (38 landscape / 22 portrait), mirrored into
`public/images/dbas/` as JPEG+WebP pairs (120 files, 25 MB).** 26 are ≥1600px wide and so
usable full-bleed. All 120 verified to decode cleanly.

**The plan's picture of this session was wrong in three ways, all found at the start:**

1. **`images/dbas/` was not empty.** It already held a curated 34-image shortlist from the
   old hand-coded site — semantically named, JPEG+WebP pairs, including four custom
   diagrams drawn for the website rather than exported from the thesis. A2 was therefore a
   *gap-filling* job, not a from-scratch selection. Only 1 of the 34 had been ported to
   `public/`; all are now.
2. **The source pools are bigger than stated.** 46 HEIC, not ~25 (deduped to 40: one
   zero-byte file, one exact duplicate, four holiday shots from Aug 2023 unrelated to the
   project). 23 `.mov`, deduping to 17. And the thesis `figure/` tree holds ~90 images,
   which the plan never mentioned as an asset source at all — it is the richest pool and
   the most curated.
3. **`sips` silently ignores EXIF rotation on these HEIC files.** The first contact sheet
   came out with half the frames sideways and, worse, counted rotated portraits as
   landscapes — 38 landscape when the true figure was 19. Regenerated through `qlmanage`,
   which reads orientation correctly. **Any future session converting these files must use
   `qlmanage -t`, not `sips`.** The plan's own suggested `sips -s format jpeg -Z 900`
   recipe produces wrong output here.

**Nikos's decisions this session:** he has permission for the visitor photos, so faces can
be used (worth a line in the copy saying consent was obtained — it turns the tension with
the project's own privacy-by-design ethics into evidence he thought about it). Hero is the
**looping video**, as on the current Readymag site, already in the repo at
`videos/rohsska-installation.mp4`. Register: **thesis figures preferred over raw photos**
("they're more curated"), raw only where it fills a real gap; **poster and leaflet design
prominently**; **video including the observation footage**.

**Rights triage — these were deliberately excluded and must stay excluded:** the
related-work project photos (Undertable, Portals, Megaphonebooth, Metaphone, Talk to God,
Hello Machine); Röhsska's and Mölndal's own press photos credited to their staff
photographers (Kristin Lidell, Camilla Eliasson); the Tharp & Tharp book figures; the
Futura and Volkswagen advertising references; and `auxiliary/in-the-mood-for-love.png`.
**Still in the set and still questionable:** `ericofon-catalogue` and `dialog-catalogue`
(E31/E28) are Ericsson's official catalogue and Review Journal images, not Nikos's
photographs — same category as the excluded ones. Flagged to him, left in, undecided.
`11-tower-of-babel` is a Bruegel painting from 1563, so public domain and safe, but it
appears nowhere in the thesis and its relevance should be re-checked in A3.

**Two factual errors found baked into image assets, now quarantined** in
`images/dbas/_quarantine/` with a README explaining each. This is the important find of the
session: fixing A1's guidelines error in the MDX copy alone would **not** have been enough,
because the wrong claim also lives inside a picture.
- `dbas-process-detailed.png` ends, in gold, with *"Output: five transferable design
  guidelines, not just the installation."* — the exact claim A1 disproved.
- `dbas-process.png` maps Constructive Design Research with **Lab and Field swapped**
  (it puts the campus pilots in Lab and the museums in Field; the thesis puts prototyping
  in the Lab and names the campus pilot as one of two Field contexts). Lab–Field–Showroom
  is a framework Nikos cites, so being wrong on it in his own diagram is worse than
  omitting it. The thesis's own correct version is now in the set as
  `50-lab-field-showroom`.
Both need redrawing in A3/A4 once the four-lens framing is settled. Their non-broken parts
are worth keeping — see the quarantine README.

**Also fixed:** `24-prototyping-desk.jpg` was 3.6 MB at 1600px, a real performance defect
inherited from the old site. Re-encoded to 817 KB. No file in the folder now exceeds 1 MB.

**Open for later:** the hero video is 17 MB (1920×1080, h264, `yuv420p`, 28s). The
re-encode itself is the good one the plan says to keep, but 17 MB autoplaying on first
paint is heavy — revisit at B13/B14, not before. `phonebooth-concept-crop` is only
320×450, so it can be an inline element but never full-bleed.

- [x] **A3 · Narrative outline, built together.** Four structures offered and questions
  asked before any copy was written. Nikos chose the narrative spine with the four lenses as
  the payoff, ~1,800 words, the two museums contrasted as their own section, and "Still
  running" as the Outcome stat. He then asked for one addition the plan had not anticipated
  — a section translating the project into UX/product terms for recruiters — which is now
  section 8.
  **Done when:** an agreed section-by-section outline exists, with an explicit outcome
  and learnings section per decision 11. ✔

  **The outline lives in [`DBAS-OUTLINE.md`](DBAS-OUTLINE.md)**, not inline here — it runs
  to nine sections with word budgets, per-section source citations and image assignments,
  which would bloat this file. That document is what A4 writes against and B11 builds from;
  this plan stays the decision record above it. It also carries six open items, including
  the video-hero schema change B11 must make.

- [x] **A4 · Write the copy.** Written against the outline in
  [`DBAS-DRAFT.md`](DBAS-DRAFT.md): 1,855 words of prose plus 192 of quoted material, zero em
  dashes (checked by grep, not by ear), sources cited under every section.
  **Done when:** the draft is reviewed and approved. It lands in MDX at Session 11. ✔ —
  reviewed by Nikos, one change requested and made, approved.

  **Track A is complete.** B11 builds the page from `DBAS-DRAFT.md` and `DBAS-OUTLINE.md`.
  The outline's six open items still stand, the video-hero schema change being the first.

  **Nikos's one correction:** the prank-calls story was cut. He said it "didn't really happen
  like that." Replaced with a documented production incident from `07_Discussion` §Challenges,
  a lapsed payment on the phone's cellular subscription that cut service for nearly two hours
  during the exhibition with museum staff in front of visitors while it was down. Same point
  about operating in a room you do not control, and this one traces.

  **Two facts resolved rather than left flagged.** The current page captions
  `17-placement-proposal-doc` as a Mölndal document; it is titled "Installation placement in
  Design Stories", which is Röhsska's exhibition, so the caption is wrong and must not carry
  into B11. The same document proposed the **Belonging** room while the installation went into
  **Innovation**, so his placement proposal was overruled through co-design. That is now a
  line in section 3.

### Track B — the build

- [x] **B1 · Scaffold and first deploy.** `npm create astro`, static output, connect the
  repo to Vercel, get a preview URL rendering. Nothing else.
  *Concept: what a build step actually is, why `package.json` matters, and how a preview
  deployment differs from the `python3 dev-server.py` setup used until now. This session
  closes the "never deployed anything" gap, which is the real defect in the old repo.*
  **Done when:** a Vercel preview URL loads a default Astro page. Domain untouched.

- [x] **B2 · Port the design tokens and global CSS.** Move `css/styles.css` (1329 lines,
  77 class selectors, 28 media queries) and both self-hosted variable fonts across
  near-verbatim. Do not redesign anything.
  *Concept: why Vite's content-hashed filenames retire the `?v=N` ritual permanently —
  eighteen hand edits per CSS change, gone.*
  **Done when:** a test page renders with correct fonts, colours and type scale.

- [x] **B3 · `Layout.astro`.** One nav and footer for every page. Handle the
  `aria-current="page"` difference via a prop rather than nine hand-synced copies.
  *Concept: components, props, and slots — the single idea that retires the biggest
  maintenance problem in the old repo.*
  **Done when:** two pages share one layout and the nav marks the correct current page.

- [x] **B4 · Home, About, Contact.** The three lowest-risk pages. Prove the pattern
  before touching a case study. Keep the homepage structure — headline, numbers, three
  CTAs, project rows with outcome lines.
  *Concept: file-based routing, and how a file path becomes a URL.*
  **Done when:** all three render correctly on a preview URL.

- [x] **B5 · Content collections and the schema.** Define the case-study schema in
  `src/content/config.ts`. Make `outcome` and `learnings` **required fields** per
  decision 11.
  *Concept: schema validation — how making a field required turns an editorial standard
  into something the build enforces, so a study can't ship without an outcome.*
  **Done when:** a deliberately incomplete MDX file fails the build with a clear error.

- [x] **B6 · The component set.** `Figure`, `AtAGlance`, `PullQuote`, `BreakBand`,
  `PostitBoard` (named `QuoteGrid` in this plan originally — corrected, see progress
  log), `ProjectCard`. Built for single column only.
  *Concept: designing a prop interface — what varies, what stays fixed, and why one
  `Figure` makes the two-caption drift structurally impossible.*
  **Done when:** each renders correctly, and `DESIGN-SYSTEM.md` is updated to describe
  the single-column pattern instead of the retired `.two-col` one.

- [x] **B7 · Migrate Ericsson.** 1729 words of existing copy into MDX, layout rebuilt
  from `.two-col.sticky-media` (used six times) to single column. Copy unchanged in this
  session.
  *Concept: MDX — how prose and components compose in one file, and why that beats
  hand-written HTML for content you'll revise.*
  **Done when:** `/ericsson/` renders at parity, single column, on a preview URL.

- [x] **B8 · Ericsson content additions.** Three additions, per decision 15: an explicit
  **outcome** section, a **learnings** section, and an honest passage about the **NDA
  constraint** — what can't be shown, why the diagrams are redrawn abstractly, how the
  line was decided. Draft with Nikos, don't write it for him.
  **Done when:** all three sections exist and the schema validates.

- [x] **B9 · Deepen EWP.** Currently 510 words with the best raw material in the
  portfolio and none of it written up: 2,700+ institutions, a webinar to over 1,000
  users, a design system, a research survey, four developers led. Same spine as Ericsson,
  including outcome and learnings.
  **Done when:** EWP reads as a tier-1 case study and the schema validates.

- [x] **B10 · Tier-2 project cards.** Interactive Table, LightHouse and Synodia become
  homepage cards — image, one paragraph, outcome line, anchor id. No dedicated pages.
  **Done when:** all three appear on the homepage with working anchors.

- [ ] **B11 · Build the DBAS page.** Using Track A's approved copy and assets.
  **Done when:** `/dont-be-a-stranger/` renders on a preview URL and the schema validates.

- [ ] **B12 · Redirects, sitemap, 404, agent-readability.** Map every live Readymag URL
  to its new equivalent. The three demoted projects redirect to their homepage card
  anchors per decision 10. Regenerate the sitemap for the new URL shape. Build a real
  404 page — the repo has never had one. **Also, discoverability for AI agents/crawlers,
  decided in a brainstorm 2026-09-16** (see `CHAT-CONCEPT.md` for the related, separately
  deferred chat-interface idea — this is not that, this is metadata on the site being
  built right now): a `public/llms.txt` markdown index pointing at the case-study pages;
  JSON-LD `Person` schema (name, `jobTitle`, `alumniOf`, `knowsAbout`, `sameAs` →
  LinkedIn) on home/about, `CreativeWork` schema per case study; `robots.txt` explicitly
  allowing AI crawlers, **including training bots** (GPTBot, ClaudeBot, etc.) — decided
  deliberately rather than defaulting to the general 2026 "block training, allow search"
  posture, since there's no proprietary content here and being in training data plausibly
  helps a candidate get surfaced when someone asks an AI about him.
  *Concept: why a redirect map matters more than it looks — links already sent in
  applications, on LinkedIn and in the CV PDF all point at the old URLs. Also: the same
  zero-JS, single-`<h1>`, real-alt-text invariants that make this site accessible already
  make it close to ideal for an agent to read — this session is metadata on top of that,
  not new structure.*
  **Done when:** every old URL is listed here with its destination and tested against the
  preview deployment; `llms.txt`, JSON-LD, and `robots.txt` are live and validated.

- [ ] **B13 · Analytics.** Plausible or Umami. One script, no cookie banner.
  **Done when:** the preview deployment reports a pageview.

- [ ] **B14 · Pre-cutover audit.** Re-read every case study for stale facts — dates, role
  status, the guidelines claim. Run the accessibility checks from `DESIGN-SYSTEM.md`.
  Confirm the site works with JS disabled. Check every image has real `alt` text.
  **Done when:** the list of findings here is empty or consciously accepted.

- [ ] **B15 · Cutover.** Point the A record at Vercel. Keep the Readymag subscription
  live across propagation as a rollback. Verify every old URL resolves. Then unpublish
  the Readymag DBAS orphan — which is also the moment it leaves the sitemap.
  **Done when:** `nikossaoulidis.xyz` serves the Astro site and no old link 404s.

---

## 8. Known risks

Recorded so they can be checked against rather than rediscovered.

1. **No date, and the scope grew.** The cut line is now three deep case studies, two of
   which need writing from scratch. This combination — parallel rebuild, no deadline,
   growing scope — is exactly what left the hand-coded site finished and undeployed.
   Nothing structural prevents a repeat; only scope discipline does. **Refuse additions
   before cutover by default.**
2. **DBAS is the long pole and the cutover date is the DBAS date.** If Track A stalls,
   cutting over without it should be a conscious decision, not a drift.
3. **The Readymag orphan stays crawler-reachable until cutover.** Accepted. Unpublishing
   is a toggle if that ever stops feeling acceptable.
4. **`DESIGN-SYSTEM.md` currently documents a retired pattern.** Fixed in Session B6;
   until then it actively misleads.
5. **`NOTES-handoff.md` is stale** and predates every decision here. Superseded by this
   file.
6. **A chat/gen-UI feature was brainstormed 2026-09-16 and explicitly parked for after
   B15** — see [`CHAT-CONCEPT.md`](CHAT-CONCEPT.md). Not a session, not scheduled. Do
   not start it before cutover; noted here only so it isn't mistaken for in-scope work.

---

## 9. Progress log

Append one line per completed session: date, session id, what actually happened,
anything that changed a decision above.

<!-- e.g. 2026-09-20 · B1 · Astro 5 scaffold, Vercel preview live at <url>. No surprises. -->

2026-09-15 · B1 · Node upgraded 20.8.0 → 26.8.2 via Homebrew (latest Astro tooling now
requires ≥22.12; done with Nikos's sign-off, see risk note below). Astro 7.3.2 scaffolded
(minimal template) into the repo root alongside the existing static site — old
`index.html`/`css/`/`images/` etc. left untouched, will be ported in later sessions.
Vercel project created via GitHub import (Nikos completed the GitHub OAuth/app-install
steps himself since Claude can't enter credentials); repo scoped to this one project only.
Production environment tracks `main` (harmless — serves the old static HTML as-is, not
the real domain), Preview environment auto-tracks every other branch, so `astro-rebuild`
gets its own preview URL on every push with no extra config. Confirmed locally: `npm run
dev` renders the default Astro page, `npm run build` produces static output in `dist/`.
No surprises in the plan itself — the only gap was the Node version assumption.

2026-09-15 · B2 · `css/styles.css` copied verbatim to `src/styles/global.css` (no CSS
edits — only two `@font-face` urls in the whole file, both already absolute `/fonts/...`
paths, so nothing needed rewriting). Fonts copied to `public/fonts/`, served as-is at the
same URLs the CSS expects. `src/pages/index.astro` (temporary test page, not final
content) imports the CSS and exercises headings, body text, the pull-quote, tags,
buttons, at-a-glance grid and all six colour tokens. Confirmed in the browser: both
variable fonts report `loaded` via `document.fonts`, colours and the fluid type scale
match the design system doc. `npm run build` output shows `_astro/index.C3oOCaFj.css` —
the content-hashed filename Session B2's concept line was about. No surprises.

2026-09-15 · B3 · `src/layouts/Layout.astro` built: one shared `<html>` shell (head
meta/OG/twitter tags, skip link, header/nav, `<slot />`, footer, `menu.js`) replacing
what was nine hand-synced copies. `currentPage` prop (`'work' | 'about' | 'contact'`,
omitted on case-study pages) drives `aria-current="page"` — verified server-rendered HTML
and in-browser that `/` marks Work and `/about` marks About, nothing else. `js/menu.js`
copied unchanged to `public/js/`; mobile menu toggle confirmed working. Nav hrefs updated
from the old `.html` paths (`/index.html`, `/about.html`) to Astro's real routes (`/`,
`/about`, `/contact`) since the old extensions no longer exist. Added `site:
'https://nikossaoulidis.xyz'` to `astro.config.mjs` so canonical/OG URLs generate
correctly; confirmed the build output is directory-style (`/about/`), which already
matches decision 09's `/ericsson/`-style shape — no extra config needed there. Two stub
pages (`/` and `/about`, both marked not-final-content) exist only to prove the pattern;
their real content is B4's job. No surprises.

2026-09-15 · B4 · Home, About and Contact rebuilt with real content, ported unchanged
from `index.html`/`about.html`/`contact.html` — copy untouched, only markup/href updates
(old `.html` paths → real Astro routes; homepage work-row links point at the final
`/ericsson/`-style slugs from decision 09, which will 404 until B7/B9/B11 build those
pages — expected, site isn't live). Homepage keeps all six project rows exactly as the
live site has them; decision 10's tier-1/tier-2 split (three full rows vs. three lighter
cards) is B10's job, not retroactively applied here. Copied the exact images each page
needs into `public/images/` (12 files for the six homepage rows, 6 for About's photo
cluster) plus the CV PDF — not the full `images/` folder, the rest arrives per-case-study
in later sessions. Verified in-browser at mobile and desktop widths: all images load
(checked `naturalWidth`/`complete`, not just visually), mobile menu toggle works, About's
photo-cluster collage stacks correctly on mobile, Contact's form renders with working
labels/hints. `npm run build` produces all three pages with zero errors. No surprises,
though the Browser pane's own screenshot tool intermittently froze mid-session (stale
frames after a scroll) — unrelated to the site itself, worked around by reloading.

2026-09-15 · B5 · `@astrojs/mdx` installed via `astro add mdx` (auto-wired into
`astro.config.mjs`). Case-study schema defined — `title`, `description`, `eyebrow`,
`tags`, `heroImage`, plus `outcome` and `learnings` both required and non-empty per
decision 11. **Correction to §5's target structure**: Astro 7's Content Layer API puts
this file at `src/content.config.ts` (project src root), not `src/content/config.ts` as
originally diagrammed — the framework moved this in a version after the plan's structure
was sketched. Fixed in §5 above; not a decision change, just Astro's own convention.
Proved the enforcement both directions: a test MDX file missing `outcome`/`learnings`
failed the build with `InvalidContentEntryDataError`, naming both fields, the file, and
a docs link; the same file with all fields present built cleanly. Test file removed
after — no real case-study content in this session, that's Track A/B7/B9/B11's job. The
collection is currently empty (0 files), which builds fine (an informational warning
only). No surprises beyond the path correction above.

2026-09-15 · B6 · Six components built in `src/components/`: `Figure` (one `caption` prop,
`default`/`diagram` variants, optional single image or slotted composite content — covers
both the old bare-`<figcaption>` and loose-`.diagram-caption` patterns), `AtAGlance`,
`PullQuote` (owns the em-dash before an attribution so it's never typed inconsistently),
`BreakBand` (`wide` prop for the one instance that isn't a narrow single blockquote),
`PostitBoard`, `ProjectCard` (CSS already existed but was unused anywhere in the current
site — built from `DESIGN-SYSTEM.md`'s description, real usage is B10). Every prop shape
was checked against actual markup in `work/*.html` before writing the component, not
guessed. **Two corrections found and fixed while doing that:**
1. **`DESIGN-SYSTEM.md`'s Components table named this component's classes
   `.quote-grid`/`.quote-lg`** — neither exists anywhere in `styles.css` or the site. The
   real mechanism is `.postit-board`/`.postit` (Don't Be a Stranger's visitor-quote
   board). Component built and named to match reality (`PostitBoard.astro`); table fixed;
   §5's file tree above corrected too.
2. **The plan's own invariant claim "there is no `.media-caption`" is wrong** —
   `.media-caption`/`.media-caption-center` are real, used twice in `dont-be-a-stranger.html`
   (a video credit line, a photo-credit line), just not as part of the figcaption pattern
   `Figure` unifies — they caption things that aren't `<figure>` elements at all. Left
   alone; flagged to Nikos rather than silently edited, since it's a plan-text claim, not
   a bug in the code. No schema/decision changed.

`DESIGN-SYSTEM.md`'s "Case-study image placement" section rewritten: the retired
`.two-col.sticky-media`/`.image-cluster` pattern replaced with `Figure`/`.figure-grid`
guidance. Verified the retirement's actual scope by grep, not assumption — Ericsson has 6
`.two-col.sticky-media` instances to migrate in B7, EWP Dashboard has 3 more for B9, Don't
Be a Stranger has zero (rebuilt from thesis source, decision 13, never had the pattern).
`.two-col` itself is not retired — About's text-beside-photo-cluster split still uses it;
only the `.sticky-media` case-study variant is gone.

All six components verified on a temporary `/b6-check` page (real assets, not lorem
ipsum) — diagram-caption variant's centred/italic styling confirmed via computed style,
not just eyeballed. Page deleted after verification. `npm run build` clean throughout.
No surprises beyond the two corrections above.

2026-09-15 · B7 · `src/pages/[slug].astro` built — the one template for all three tier-1
studies (decision 09), rendering the schema-driven structural pieces (hero, tags,
at-a-glance, outcome, learnings) around free-form MDX body content. `ericsson.mdx`
created with all 1729 words of existing copy, unchanged. The six `.two-col.sticky-media`
instances became single-column: text in `.wrap.col`, each figure following in its own
`.breakout`, per the invariant and Session B6's `DESIGN-SYSTEM.md` fix. Case 2's
two-photo cluster became `Figure` × 2 inside `.figure-grid.cols-2`. Verified at both
mobile and desktop widths — the before/after diagram that used to be squeezed into half
a two-col split now reads clearly at full breakout width, and the two-photo grid
correctly goes side-by-side at desktop, stacked at mobile.

**Schema extended against real content, not guessed in the abstract.** B5's original
four fields (`title`, `description`, `eyebrow`, `tags`, `heroImage`, `outcome`,
`learnings`) turned out incomplete the moment real copy met them: the page's `<h1>`
("Ericsson") and its `<title>` tag ("Ericsson — AI-Ready Design Delivery — Nikos
Saoulidis") are genuinely different strings, as are the standfirst paragraph and the meta
description — three separate pieces of existing copy, not one reused three times. Added
`heading`, `standfirst`; turned `heroImage` into an object (needs width/height like every
other image on the site) and added `atAGlance` as a structured field. This is expected
schema iteration, not a first-draft mistake — B5 built a reasonable schema before any
real content existed to check it against.

**The outcome/learnings coupling, surfaced rather than papered over.** Decision 15
(Session B8) adds an explicit outcome section, a learnings section and an NDA passage —
meaning neither `outcome` nor `learnings` has real content to migrate in B7; nothing
resembling a page-level "learnings" section exists anywhere in the current site. Writing
that content myself would break the "ask before writing narrative copy" rule, so both
fields hold a clearly-labelled placeholder string, and `[slug].astro` renders them inside
`.todo` blocks (the exact pattern that CSS class already existed for) — visibly marked as
unfinished on the page itself, not silently passing the schema behind the scenes.
B7 and B8 are explicitly paired as one sitting in §0's suggested grouping, which is
exactly why: B7 alone cannot produce a fully real page under decision 11's own schema
enforcement. Flagged to Nikos at the end of this session to decide whether to continue
straight into B8 or pick it up later.

Homepage's `/ericsson/` link (pointing at this URL since Session B4, before the page
existed) now resolves end-to-end — confirmed by clicking through, not just checking the
URL. `npm run build` produces all four pages cleanly. No surprises beyond the schema
extension and the outcome/learnings placeholder, both expected and explained above.

2026-09-15 · B8 · Outcome, learnings and an expanded NDA note drafted for Ericsson, per
decision 15. Did not write these unprompted — asked Nikos structural questions first (one
unified outcome paragraph vs. per-case; expand the NDA note in place vs. a new section),
then he pointed to `~/Documents/portfolio-content-assets/general/Portfolio Presentation.pdf`
(57 pages, read in full for the Ericsson section) as the source rather than have me invent
reflective content. Concrete facts pulled from there and traceable to it: the AI-readiness
audit's 2.4→9.5-out-of-10 score after the delivery-for-ai skill ran, that it was adopted as
a team-wide standard, the Build Better Together handout still being on people's desks, and
Case 3's prototype being picked up by a real developer and a US back-end team. Drafted in
Nikos's voice per `voice-guide.md` (no em dashes, no AI-tell constructions) and shown to him
before touching any file. **Explicitly marked as draft, not final**: he said to put it in
now and review later, so `[slug].astro`'s `.todo` labels read "Draft — pending Nikos's
review" instead of the B7 placeholder's "TODO — Session B8" — the schema now validates with
real content, but nothing here should be treated as approved copy yet. §6 above rewritten to
point future sessions (B9, B11) at the new `portfolio-content-assets` folder Nikos
consolidated, which supersedes several of the old scattered `~/Downloads` paths.

2026-09-15 · B8 (continued) · Nikos reviewed the `.todo`-styled Outcome/Learnings and asked
for two changes: the prose was too long to actually read, and he didn't want the yellowish
`.todo` dashed-box treatment for real content. Rather than pick a direction myself, showed
him three concrete visual options (a Bauhaus numeral-card grid, a Mondrian-style colour-block
grid, a single-line Rams-style minimal cut) rendered against his real tokens, all built from
patterns already in `styles.css` rather than a new aesthetic. He picked the Mondrian
direction but called the first pass "messy" — it filled every grid cell with a different
colour, which is the opposite of how Mondrian actually composed (mostly white canvas, one or
two colour accents). Rebuilt on that correction: new `.fact-grid` pattern in
`src/styles/global.css`, one accent-coloured cell (red for Outcome, blue for Learnings) plus
plain white cells, thin ink gaps between. Content condensed from long paragraphs to one stat
plus two short facts per section, addressing the readability complaint at the same time.
Verified via the DOM (computed styles, grid column widths at both mobile and desktop
breakpoints) since the Browser pane was hidden and its screenshot tool returned blank the
whole session — not a rendering bug, confirmed via `tabs_context`. Nikos approved the visual
direction; the specific wording in each cell is still explicitly provisional and will be
revisited. Documented in `DESIGN-SYSTEM.md`'s Components table.

2026-09-15 · B9 · EWP Dashboard deepened from 510 words with nothing written up to a full
tier-1 case study at `/ewp-dashboard/`, same spine as Ericsson. Resolved a real factual
conflict before writing anything: the current site's homepage row says "2,700+
institutions" with no qualifier, while `story-bank.md` has an explicit house rule that this
number is the platform's *current, platform-wide* scale, not his-era — his portfolio wording
for his own era should be "hundreds of institutions." The EWP page itself already got this
right in one place (its own outcome line) but the homepage row didn't. Fixed by grounding
the new page's Outcome fact-grid explicitly in the platform-now framing, per Nikos's
confirmed choice.

Asked two structural questions before drafting (whether to lead with "there was no UX role,
I created one" — story-bank flags this as unused, strong material — and how prominent to
make the platform-scale numbers); he confirmed both recommended options, then this was
drafted from `story-bank.md`'s already-fact-checked EWP section (§7, STAR-structured) rather
than the deck alone, surfacing detail not on the current site at all: the 17-question,
~1,000-participant survey with quoted real complaints, the Jacob's-Law/recognition-over-
recall reasoning behind the colour-coding, and the app being centre stage at the EAIE
Conference, Gothenburg, September 2025. The existing reflection-slide content (what he'd do
differently now) mapped directly onto the Learnings fact-grid with barely any rewriting —
it was already specific and honest.

**Schema/template fix, found while starting this session**: Ericsson's fact-grid content
from B8 turned out to be hardcoded directly in the shared `[slug].astro` template, not
driven by `entry.data` at all — so EWP would have silently rendered Ericsson's outcome/
learnings instead of its own. Fixed properly: `outcome`/`learnings` are now a structured
`{ stat, statLabel, facts: [exactly 2] }` shape in the schema (not a plain string), the
template renders generically from whichever entry it's given, and Ericsson's frontmatter was
converted to match. `facts` is pinned to exactly 2, not "up to 3", because the CSS grid's
accent cell spans two rows assuming exactly three total cells — a variable count would have
broken the layout silently instead of failing the build. Also fixed a real markup mistake
while building EWP's image cluster: used `.image-cluster`'s `cluster-lg` class inside a
`.figure-grid`, which doesn't have that modifier — corrected to a standalone full-width
`Figure` plus a proper `.figure-grid.cols-3` below it.

Verified thoroughly, including one genuine rabbit hole: four EWP images briefly reported
`naturalWidth: 0` / `complete: false` in the DOM despite correct markup and a 200 response.
Chased it to ground rather than assume a real bug — confirmed via `fetch()` +
`createImageBitmap()` that the actual bytes are valid, correctly-sized images (matches the
same family of Browser-pane rendering glitches as this session's blank screenshots and stale
network/console history, not a site bug). Homepage → `/ewp-dashboard/` link confirmed
end-to-end by clicking through. `npm run build` produces all five pages cleanly.

2026-09-16 · B10 · Interactive Table, Synodia and LightHouse demoted from full `.project-row`
entries to the `ProjectCard.astro` component built (but unused) in B6, closing decision 10's
tier-1/tier-2 split — homepage now shows 3 full rows and 3 lighter cards, matching the count
exactly. Each card links out to a real existing artifact rather than nothing or an invented
page: Interactive Table to its actual ACM DIS 2024 paper, Synodia and LightHouse to their
real Figma prototypes, all still live at the URLs already embedded in the old (unlinked)
`work/*.html` files. Decision 10 forbids a dedicated page per tier-2 project, not an outbound
link to something that already exists, so this isn't scope creep, it's using material that
was sitting unused. Copy is unchanged from the homepage rows it replaced. Verified: all three
anchors (`#interactive-table`, `#synodia`, `#lighthouse`) resolve, all three hrefs and
`target="_blank"` confirmed via the DOM, `npm run build` clean. Also decided B10 should run
before Track A starts rather than after all of B, so Track A's slower, Nikos-dependent steps
(picking photos, shaping a narrative) can start as early as possible rather than queuing
behind B12–B15 — discussed and agreed in conversation, not a plan text change.

2026-09-16 · A1 · Thesis read in full at Nikos's instruction, wider than the plan's scope:
every chapter rather than only the three marked unread, since this is the content-writing
session and the "read" marks came from a scoping pass. That paid off — the decisive evidence
was split across chapters previously marked done. Also read `Dump.tex` and all 169 pages of
`dont-be-a-stranger-presentation.pdf`, his own defence deck, which had never been opened.

**Guidelines problem resolved; canonical statement is in the finding box under Session A1
above.** Short version: the thesis answers its research question through **four lenses**
(~17 concrete considerations), and separately synthesises **five RTA themes** that are an
*input* to the museum phase, not an output. The site fused them and called the result "five
transferable design guidelines" — wrong on all three words. `07_Discussion`'s Limitations
section explicitly disclaims producing design guidelines at all. The deck explains the
origin of the error: **Nikos's own slides stamp "practical guidelines" on the four-lens
slides**, and the label slid across to the five themes, which are the more card-shaped
thing. So the framing is his; only the attachment point was wrong. Decision: present the
four lenses as practical guidelines, matching the deck.

**Second traceability failure found unprompted**: the live outcome line's "People stay on
the phone with a stranger for five to twenty minutes" has no source. The thesis never
measures call duration and calls it deliberately unmeasured; the only "10 to 20 minutes" in
it is how long the pre-pilot *interviews* ran. Nikos confirmed it is wrong and to cut it.
"Running permanently... for a year and three months" is still unverified and parked for A3.

Also logged: three real contradictions inside the thesis itself (Discussion says "four"
overarching RTA themes when there are five; names three themes that appear nowhere in
Results; "Defamiliarization and Playfulness" vs "…and Improvisation" both in the source),
recorded so a future session doesn't "fix" one silently, and so they don't ambush him in an
interview. Deck's Lens 3 and Lens 4 "connection with theory" slides carry identical bullets,
a copy-paste that survived to the presented deck.

Per the session brief, **no copy and no outline were written** — this session was scoped to
understanding the material well enough to ask good questions. Four structural questions put
to Nikos, all answered and recorded as decisions in the A1 box: four lenses over five themes;
cut the five-to-twenty-minutes claim; keep the deck's four framing questions but drop the
film stills (rights, and the questions carry it alone); keep a fair amount of the personal
register, which §4's "vector of growth" research supports. A3 inherits these as constraints
rather than open questions. Appendices A–I remain unread and are the only DBAS source
material left; flagged in §6 as optional for A3.

2026-09-16 · A2 · Four contact sheets built and reviewed with Nikos (camera roll 40, thesis
figures 46, video 17, plus the 34 already sitting in `images/dbas/`); he chose. Shortlist is
now 60 images, 38 landscape, mirrored into `public/images/dbas/`. Full detail in the A2 box
under Session A2 above.

Three corrections to the plan's own description of this session, all found before any
selection happened: `images/dbas/` was **not** empty but already held a curated 34-image
shortlist from the old site, making A2 a gap-filling job; the source pools are roughly
double what §6 said (46 HEIC not ~25, 23 movs, plus ~90 thesis figures that §6 never listed
as an asset source at all); and **`sips` silently ignores EXIF rotation on these HEIC
files**, so the plan's own suggested recipe produced a sheet with half the frames sideways
and counted rotated portraits as landscapes — 38 landscape reported when the truth was 19.
Rebuilt via `qlmanage -t`, which is correct. Noted in the A2 box so a future session doesn't
repeat it.

**The find that matters: A1's error was also baked into an image.** `dbas-process-detailed.png`
ends in gold with "Output: five transferable design guidelines, not just the installation."
Fixing the MDX copy alone would have left the disproved claim asserted in a picture, as the
punchline of the process graphic. A second asset, `dbas-process.png`, has Lab and Field
swapped relative to the thesis's own Constructive Design Research mapping. Both quarantined
to `images/dbas/_quarantine/` with a README explaining the error and what to keep on redraw;
Nikos chose quarantine-now-redraw-later rather than a rushed fix, since the redraw depends on
A3 settling the four-lens framing. The thesis's correct Lab–Field–Showroom diagram is now in
the set as `50-lab-field-showroom` and can replace the bad one.

Rights triage done and recorded: excluded every related-work project photo, both museums'
credited press photos, the Tharp & Tharp book figures and the film still. Two Ericsson
catalogue images inherited from the old site (`ericofon-catalogue`, `dialog-catalogue`) are
the same category — flagged to Nikos, left in place, undecided. Also re-encoded
`24-prototyping-desk.jpg` from 3.6 MB to 817 KB; nothing in the folder now exceeds 1 MB.

Nikos's decisions: he has permission for the visitor photos so faces are usable (A4 should
add a line saying consent was obtained, which converts the tension with the project's own
privacy-by-design ethics into evidence rather than a liability); hero is the looping video as
on the current site; thesis figures preferred over raw photos because they are already
curated, with raw used only to fill real gaps; poster and leaflet design to feature
prominently; observation footage in scope. A3 inherits a working set, not a running order —
60 images is deliberately more than the page will use.

2026-09-16 · A3 · Four structural options offered and questions asked before any copy was
written, per the session's own rule. Nikos chose the narrative spine with the four lenses as
the payoff (option C), ~1,800 words, the two museums contrasted as their own section, and
"Still running" with no number as the Outcome stat — declining the unverified "a year and
three months" rather than shipping it. Agreed outline written to `DBAS-OUTLINE.md`: nine
sections with word budgets summing to ~1,880, per-section source citations, and image
assignments drawn from A2's shortlist.

**One addition the plan had not anticipated.** After seeing the outline Nikos asked for a
section answering "what does this project and what I did say for me, and to potential
recruiters?" — the translation from museum installation into UX/product terms. This is a
real gap the plan's own §4 research implies but never states: a discursive-design thesis
about rotary phones can read as art-school work to a product hiring manager unless the
transferable skills are made explicit. Added as section 8, positioned after the four lenses
and before the personal close, so it lands where a scanning reader's attention returns. It
argues from evidence rather than assertion: it shipped and is still up; five named
stakeholders across four disciplines, none reporting to him; he worked inside Röhsska's
design system rather than his own; "You might connect. You might not." is empty-state copy
written after curator feedback; three pilot rounds with 25 participants where he can name
which change came from which finding; iterated onboarding; bilingual microcopy; privacy by
design. Word budgets elsewhere trimmed to absorb it.

**Third asset gap closed:** Nikos supplied a photo of the Ericofon tattoo, which nothing in
A2's 60-image shortlist covered. Instagram UI chrome cropped out, added as
`53-ericofon-tattoo` (portrait), shortlist now 61. Note for future sessions: the filename
carried a U+202F narrow no-break space, so `ls` on a pasted path failed while `find` matched
— worth remembering when Nikos pastes a macOS screenshot path.

Also surfaced while checking the template rather than assuming it: **Outcome and Learnings
are structurally locked to the end of the page** by `[slug].astro`, so no outline can place
them mid-narrative, and **the video hero Nikos chose in A2 is not supported** — `heroImage`
is a required image object and the template hardcodes `<picture>`/`<img>`. Recorded as
B11's first open item rather than quietly changed now.

2026-09-16 · A4 · Copy drafted to `DBAS-DRAFT.md` against A3's outline: 1,855 words of prose
plus 192 of quoted material, sources cited under every section, zero em dashes verified by
grep rather than by ear, and checked against `voice-guide.md`'s AI-tell list (no puffed
vocabulary, no "not X but Y" antithesis, no connector-word padding). Reviewed by Nikos and
approved with one change. **Track A is complete.**

**Nikos cut the prank-calls story**: "it didn't really happen like that." That story was the
emotional centre of section 8 and also a full STAR entry in `story-bank.md` §3, so this was a
real finding, not a copy tweak. Replaced with an incident that is documented in
`07_Discussion` §Challenges: a lapsed payment on the phone's cellular subscription cut service
for nearly two hours during the museum exhibition, with staff facing visitors while it was
down. It makes the same point about running in a room you do not control, and it traces.

**Resolved rather than flagged:** the current page captions `17-placement-proposal-doc` as a
Mölndal document. It is titled "Installation placement in Design Stories", which is Röhsska's
exhibition, so the caption is wrong and must not carry into B11. The same document proposed
the *Belonging* room while the installation went into *Innovation*, meaning his own placement
proposal was overruled through co-design. Better fact than the one it replaced, now in
section 3.

**The error propagated further than the repo.** Writing the copy required checking every claim,
which surfaced the same disproved claims sitting in `~/Claude/Projects/Job applications/
reference/story-bank.md`, the file his cover letters and interview prep are built from. Fixed
there in a separate commit (`41415c3` in that repo), with Nikos's approval. Three corrections:
the "five transferable design guidelines" line, the unsourced "5-20 minutes on a call", and
the "1 year 3 months" duration. **The instructive part:** a guardrail retracting the guidelines
claim had already been written in that file on 7 August 2026 and was correct, but it lived
only in the guardrails section while the STAR story 100 lines below still asserted the wrong
version. Five weeks of a correction that was recorded and never propagated. Same failure shape
as A2's finding that fixing the MDX would have left the claim alive inside a diagram. Also
flagged there, not fixed, since only Nikos can: story §3 "The museum children" needs his own
rewrite and should not be told in an interview until then.
