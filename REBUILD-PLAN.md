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
  failure this rule exists to catch (see Session A1).
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
│   ├── QuoteGrid.astro
│   └── ProjectCard.astro     ← tier-2 homepage cards
├── content/
│   ├── config.ts             ← schema; outcome + learnings are required fields
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

- **Thesis LaTeX**: `~/Downloads/Nikos___DATX05_Master_s_Thesis___Name_of_Project/03 Don't be a Stranger Report/include/`
  Read so far: `01_Introduction`, `04_Methodology`, `05_Design_Process` (lines 1–356),
  `06_Results`, `07_Discussion`, `08_Conclusion`.
  **Not yet read**: `02_Background`, `03_Theory`, and `05_Design_Process` lines 357–821
  (Pre-Pilot detail, Pilot, Museum Phase decisions).
- **Thesis figures**: same folder, `figure/05_Process/` and `figure/06_Results/`.
  The `06_Results/pre-pilot/` and `pilot/` charts have not been reviewed.
- **Raw photos/video**: `~/Downloads/*.HEIC` and `*.mov`, roughly 25 HEIC files.
  Confirmed good unlabelled shots exist for: Röhsska installation, Mölndal red-armchair
  room, visitors mid-call, post-it feedback tables, Rolodex card close-ups.
  Regenerate contact sheets with `sips -s format jpeg -Z 900` plus a PIL montage.
- **EDC conference material**: `~/Downloads/analyze-dbas-and-edc-conference/edc/`
  (`cheatsheet-page1.html`, `EDC EDUX 2026 (1).pdf`). Never reviewed. Relevant to
  Ericsson Case 2 if that section is revisited.
- **Interview deck**: `~/Downloads/Magnet Presentation.pdf`, 68 pages. Structural
  inspiration only, not copy.
- **Job-search project**: `cv-master.md`, `story-bank.md`, `voice-guide.md`.

`ffmpeg` is installed. The hero video was re-encoded from 10-bit HDR to 8-bit `yuv420p`
with `+faststart` to fix stutter — that fix is good, keep it.

---

## 7. Sessions

Two tracks. **Track A runs in parallel from day one** and does not block Track B.
Mark each session `[x]` when done and add a one-line note about what actually happened.

### Track A — Don't Be a Stranger content

The long pole. Prose and asset work, framework-independent. Starting it late is the main
way this plan slips.

- [ ] **A1 · Finish the thesis read.** Read `02_Background`, `03_Theory`, and
  `05_Design_Process` lines 357–821. Then resolve the guidelines problem: the current
  copy says "five transferable design guidelines" in one place and "drawn from five
  themes" in another. Establish what the thesis actually claims and write it down here.
  *Concept: why a portfolio claim that can't be traced to a source is a liability in an
  interview, not just an inaccuracy.*
  **Done when:** the real structure of the thesis output is stated in this file.

- [ ] **A2 · Contact sheets and asset review.** Regenerate thumbnails from the ~25 HEIC
  files, build a contact sheet, review it *with Nikos* and let him pick. Prioritise
  landscape for full-bleed.
  **Done when:** a chosen shortlist is copied into `images/dbas/` and listed here.

- [ ] **A3 · Narrative outline, built together.** Offer structural options and ask
  questions before writing any copy. Look at real museum storytelling for reference —
  Google Arts & Culture's story format was confirmed useful. Match the visual language of
  the thesis's own diagrams (`figure/04_Methodology/lab-field-showroom.png`).
  **Done when:** an agreed section-by-section outline exists, with an explicit outcome
  and learnings section per decision 11.

- [ ] **A4 · Write the copy.** Against the outline, in his voice, no em dashes, every
  claim traced.
  **Done when:** the draft is reviewed and approved. It lands in MDX at Session 11.

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

- [ ] **B4 · Home, About, Contact.** The three lowest-risk pages. Prove the pattern
  before touching a case study. Keep the homepage structure — headline, numbers, three
  CTAs, project rows with outcome lines.
  *Concept: file-based routing, and how a file path becomes a URL.*
  **Done when:** all three render correctly on a preview URL.

- [ ] **B5 · Content collections and the schema.** Define the case-study schema in
  `src/content/config.ts`. Make `outcome` and `learnings` **required fields** per
  decision 11.
  *Concept: schema validation — how making a field required turns an editorial standard
  into something the build enforces, so a study can't ship without an outcome.*
  **Done when:** a deliberately incomplete MDX file fails the build with a clear error.

- [ ] **B6 · The component set.** `Figure`, `AtAGlance`, `PullQuote`, `BreakBand`,
  `QuoteGrid`, `ProjectCard`. Built for single column only.
  *Concept: designing a prop interface — what varies, what stays fixed, and why one
  `Figure` makes the two-caption drift structurally impossible.*
  **Done when:** each renders correctly, and `DESIGN-SYSTEM.md` is updated to describe
  the single-column pattern instead of the retired `.two-col` one.

- [ ] **B7 · Migrate Ericsson.** 1729 words of existing copy into MDX, layout rebuilt
  from `.two-col.sticky-media` (used six times) to single column. Copy unchanged in this
  session.
  *Concept: MDX — how prose and components compose in one file, and why that beats
  hand-written HTML for content you'll revise.*
  **Done when:** `/ericsson/` renders at parity, single column, on a preview URL.

- [ ] **B8 · Ericsson content additions.** Three additions, per decision 15: an explicit
  **outcome** section, a **learnings** section, and an honest passage about the **NDA
  constraint** — what can't be shown, why the diagrams are redrawn abstractly, how the
  line was decided. Draft with Nikos, don't write it for him.
  **Done when:** all three sections exist and the schema validates.

- [ ] **B9 · Deepen EWP.** Currently 510 words with the best raw material in the
  portfolio and none of it written up: 2,700+ institutions, a webinar to over 1,000
  users, a design system, a research survey, four developers led. Same spine as Ericsson,
  including outcome and learnings.
  **Done when:** EWP reads as a tier-1 case study and the schema validates.

- [ ] **B10 · Tier-2 project cards.** Interactive Table, LightHouse and Synodia become
  homepage cards — image, one paragraph, outcome line, anchor id. No dedicated pages.
  **Done when:** all three appear on the homepage with working anchors.

- [ ] **B11 · Build the DBAS page.** Using Track A's approved copy and assets.
  **Done when:** `/dont-be-a-stranger/` renders on a preview URL and the schema validates.

- [ ] **B12 · Redirects, sitemap, 404.** Map every live Readymag URL to its new
  equivalent. The three demoted projects redirect to their homepage card anchors per
  decision 10. Regenerate the sitemap for the new URL shape. Build a real 404 page — the
  repo has never had one.
  *Concept: why a redirect map matters more than it looks — links already sent in
  applications, on LinkedIn and in the CV PDF all point at the old URLs.*
  **Done when:** every old URL is listed here with its destination, and each is tested
  against the preview deployment.

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
