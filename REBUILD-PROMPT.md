# Handoff prompt

Paste everything below the line into a new chat opened in this repo.

---

I'm rebuilding my portfolio site on Astro. The planning is finished — every decision is
made and written down. Your job is to execute it session by session, not to re-plan it.

**Repo:** `/Users/nikolaossaoulidis/Claude/Projects/nikossaoulidis-portfolio`
**Work on the `astro-rebuild` branch.** It already exists and is where everything
happens. `main` holds the old hand-coded HTML site, frozen as a fallback — don't touch it.
Check you're on `astro-rebuild` before you start, and if there are uncommitted changes
sitting there from a previous session, stop and ask me before doing anything.

I'm Nikos, a product/UX designer in Gothenburg, currently job searching. I'm not an
experienced coder — I read and decide, I don't write the code.

**Already set up, don't re-do:** Node v20.8.0, npm 10.1.0, git, `gh` authenticated as
`saouling`, and a Vercel account created via "Continue with GitHub" so you can connect
the repo without extra auth. `.gitignore` already excludes `node_modules/`, `dist/`,
`.astro/` and `.vercel/`.

## Read these first, in this order

1. **`REBUILD-PLAN.md`** — the source of truth. Verified state of the world, seventeen
   locked decisions, the invariants, source-material paths, and nineteen numbered
   sessions across two tracks. Read all of it before doing anything.
2. **`DESIGN-SYSTEM.md`** — the visual system: colour tokens with WCAG reasoning, the
   Utopia fluid type scale at a 1.333 ratio, spacing, components, accessibility
   commitments. **Note it is partly out of date** — it documents `.two-col` /
   `.image-cluster` as the verified layout pattern, and that pattern has been retired in
   favour of single column. Session B6 fixes this.
3. **`css/styles.css`** — 1329 lines, 77 class selectors, 28 media queries. The whole
   design system in one file. This ports to Astro near-verbatim; do not redesign it.
4. **`README.md`** — how the current static site is structured and served.

Ignore **`NOTES-handoff.md`**. It predates every decision in `REBUILD-PLAN.md` and
contradicts it on the layout question. It is kept only for source-material paths, which
are already reproduced in the plan.

## How I want to work

- **You drive the building. I don't type the code.** But explain what you're building and
  why as you go — the concept, not just the diff. Each session in the plan has a
  `Concept` line; that's the thing to actually teach me. If a session ends and you
  haven't explained it, the session isn't done.
- **Ask before choosing assets.** Offer candidates and let me pick. Don't select photos
  or images unilaterally — this has gone wrong before.
- **Ask before writing narrative copy.** Offer structural options and ask questions
  first. Don't hand me a finished draft I didn't shape.
- **Tell me when I'm wrong.** If a decision in the plan looks mistaken once you're in the
  code, say so and ask. Don't quietly work around it, and don't silently follow it off a
  cliff either.
- **Use the Browser pane.** I want to see the site as it changes, not just read about it.
- **Show me the diff** at the end of a session and say in plain language what it touched.
- Work one session at a time. Stop at the end of each and tell me what the `Done when`
  check showed.

## Git rhythm — one commit per session

At the end of every session, without me having to ask:

1. Update §9, the progress log, at the bottom of `REBUILD-PLAN.md`.
2. Commit everything with the session id in the message, e.g.
   `B3: shared layout, retires nine hand-synced headers`.
3. Push.

One commit per session is deliberate — it's what makes "undo the last session" a clean
operation. Don't batch several sessions into one commit, and don't commit halfway
through a session unless I ask.

## Hard guardrails

- **Do not touch the live site.** `nikossaoulidis.xyz` is Readymag-hosted and carries my
  job search. Nothing in this repo is live. The domain moves only at session B15.
- **Do not start deferred work** — Storybook, a Figma→tokens pipeline, GitHub Actions CI.
  All three are explicitly postponed until after cutover.
- **Refuse scope additions by default.** The cut line is three deep case studies plus
  three homepage cards. If something new seems worth adding, flag it and let me decide
  rather than absorbing it.
- **No dark mode.** Light only, matching the current site.
- **No React, no Tailwind.** `.astro` components, plain CSS with the existing tokens.
- **Zero JavaScript by default.** The site must work fully with JS disabled. Don't use
  Astro's `ClientRouter` — cross-page transitions use the native CSS `@view-transition`
  rule already in `styles.css`.
- **No em dashes in my first-person copy.** It's the tell I notice first.
- **Every factual claim traces to a source.** `cv-master.md`, `story-bank.md`, or the
  thesis. Never carry a claim forward from the current site without checking it.

## What's in the repo

```
index.html, about.html, contact.html   top-level pages
work/*.html                            six case studies
css/styles.css                         the entire design system
js/menu.js                             mobile nav, smooth scroll, scroll-reveal
fonts/                                 self-hosted variable woff2 — Inter, Jost
images/<project>/                      jpg or png master + webp sibling
videos/rohsska-installation.mp4        17MB, already re-encoded 10-bit→8-bit, keep as is
assets/Nikos-Saoulidis-CV.pdf          linked directly from the homepage
dev-server.py + .claude/launch.json    local preview, `preview_start` name "portfolio-dev"
CNAME, sitemap.xml, robots.txt         all currently vestigial — nothing is deployed
```

Image counts: `dbas/` 68 files, `ericsson/` 20, `ewp/` 14, `about/` 6, `table/` 4,
`lighthouse/` 2, `synodia/` 2.

Case-study depth in words, so you know what you're working with:
Ericsson 1729 · Don't Be a Stranger 1649 · EWP 510 · Interactive Table 454 ·
LightHouse 329 · Synodia 261.

## Source material outside the repo

- **Thesis LaTeX + figures:**
  `~/Downloads/Nikos___DATX05_Master_s_Thesis___Name_of_Project/03 Don't be a Stranger Report/include/`
  Already read: `01_Introduction`, `04_Methodology`, `05_Design_Process` lines 1–356,
  `06_Results`, `07_Discussion`, `08_Conclusion`.
  Still unread: `02_Background`, `03_Theory`, `05_Design_Process` lines 357–821.
  Figures in `figure/05_Process/` and `figure/06_Results/`.
- **Raw photos and video:** `~/Downloads/*.HEIC` and `*.mov`, about 25 HEIC files.
  Good unlabelled shots exist for the Röhsska installation, the Mölndal red-armchair
  room, visitors mid-call, post-it feedback tables, and Rolodex card close-ups.
  Contact sheets: `sips -s format jpeg -Z 900` then a PIL montage.
- **EDC conference material:** `~/Downloads/analyze-dbas-and-edc-conference/edc/` —
  never reviewed, relevant to Ericsson Case 2.
- **Interview deck:** `~/Downloads/Magnet Presentation.pdf`, 68 pages. Structure only,
  not copy.
- **Job-search project:** `cv-master.md`, `story-bank.md`, `voice-guide.md` — the
  authority for any factual claim about me and for how I write.

`ffmpeg` is installed via brew if more video work comes up.

## Start here

Two tracks run in parallel. Track A is the long pole and is the thing that will make
this slip if it starts late.

**Begin with session B1** (scaffold Astro, connect Vercel, get a preview URL rendering —
nothing else). When that's done, tell me, and we'll decide whether to continue into B2
or start A1 in the same sitting.

Before anything else: read `REBUILD-PLAN.md` in full, then tell me in a few sentences
what you understand the plan to be and anything in it that looks wrong to you. I want to
know you've actually read it before you touch the repo.
