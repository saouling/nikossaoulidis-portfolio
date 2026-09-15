> **SUPERSEDED — do not plan from this file.**
>
> Kept only as a record of the DBAS session that produced it. Every decision here has
> been replaced by `REBUILD-PLAN.md`, which is the single source of truth. This file
> contradicts the current plan on the layout question: it records `.two-col.sticky-media`
> being rejected, which is now a settled decision, but `DESIGN-SYSTEM.md` still documents
> the old pattern. The source-material paths below are reproduced in `REBUILD-PLAN.md` §6.

# Handoff notes — portfolio rebuild, DBAS round

Not part of the site. Working notes so a fresh Claude session can pick up without
re-deriving everything. Point a new chat at this file first.

## Where things stand (uncommitted!)

`git status` shows uncommitted work:
- `work/dont-be-a-stranger.html` — rewritten to a single-column narrative structure
  (see "What's confirmed good" below). **Content/assets need revision per feedback
  below — don't treat this file as final.**
- `videos/rohsska-installation.mp4` — re-encoded, this fix IS good, keep it (see
  "Video fix" below).
- `images/dbas/22-phonebooth-concept.*`, `23-wall-of-ghosting.*`,
  `24-prototyping-desk.*` — new, untracked. 23 (Wall of Ghosting) is being dropped
  per feedback below; 22 and 24 are probably fine but weren't picked collaboratively.

Nothing here is committed. Decide with the user whether to discard the current
`dont-be-a-stranger.html` rewrite and start the content fresh, or keep its structure
and just swap assets/sections.

## What's confirmed good (keep doing this)

- **Single-column narrative pattern**: `.wrap.col` (measured text column, ~720px) with
  `.breakout`/`.full-bleed` (existing full-width image technique) alternating
  sequentially — no side-by-side text+image. Confirmed by the user as reading better
  than the old `.two-col.sticky-media` pattern. **User now wants this applied to the
  Ericsson case study too** (previously scoped as DBAS-only; that scope has changed).
  No new CSS needed — both primitives already exist in `css/styles.css`.
- **Video fix**: `videos/rohsska-installation.mp4` was 10-bit HDR/Dolby Vision
  (`yuv420p10le`, H.264 High 10 profile) — browsers mostly can't hardware-decode that,
  causing the stutter. Re-encoded to standard 8-bit `yuv420p`, High profile,
  `+faststart`, confirmed smooth (3/612 dropped frames in a live test). `ffmpeg` is
  now installed via brew if more video work is needed.
- **Ericsson diagrams v3** (already committed, `f8b6781`): user said "keep it for now,
  improve later" — don't touch unless asked.

## Next session: start here

User's explicit direction for the restart (asked after this file was first written):

- **Scrap the current DBAS content entirely** — keep only the confirmed-good
  single-column CSS pattern (`.wrap.col` + `.breakout`, no `.two-col.sticky-media`).
  Do not reuse the current prose/section choices.
- **Match the visual language of the thesis's own diagrams** — check the
  Methodology chapter (`04_Methodology.tex`) and its figures (the Lab/Field/Showroom
  diagram, `figure/04_Methodology/lab-field-showroom.png`) — and the Ericsson
  project's visual language on the live site. The new DBAS page should feel visually
  consistent with both.
- **Build the narrative WITH the user, not for them**: ask questions and offer options
  *before* writing copy — don't draft a full narrative unilaterally again.
- **Asset review**: rebuild photo contact sheets (cheap — `sips` thumbnails + a PIL
  montage, see "Source material" below for the raw file locations) and go through them
  together before picking anything.
- **Get inspiration from real museum examples** — this session found Google Arts &
  Culture's story format genuinely useful (strictly sequential full-bleed image → plain
  text paragraph → next image, confirmed by visiting
  `artsandculture.google.com/story/5-unmissable-paintings-at-the-rijksmuseum/...`
  directly) — more real examples like that are worth checking, not just written advice.
- Apply the same rebuilt pattern to **Ericsson** too once DBAS is settled (user
  confirmed wanting this now, not deferred).

## Earlier feedback (still applies once content restarts)

1. **Asset selection should be collaborative**, not Claude picking unilaterally.
   Review candidates with the user before finalizing.
2. **Drop the "Wall of Ghosting" section** from the DBAS narrative — user says it's
   "too much."
3. **Image orientation**: prioritize landscape images for full-bleed `.breakout`
   moments. Where only portrait/mixed-orientation photos exist, pair multiple
   portraits side by side rather than blowing up one tall image to full breakout
   width (this was likely part of "not the best assets").
4. **Research todo**: look online for common/famous portfolio-site failure patterns,
   audit this site against them specifically, alongside continued best-practice
   research (this was requested but not yet done this session).

## Source material (external to the repo — not derivable by reading code)

- **Thesis LaTeX chapters**: `/Users/nikolaossaoulidis/Downloads/Nikos___DATX05_Master_s_Thesis___Name_of_Project/03 Don't be a Stranger Report/include/`
  — `01_Introduction.tex`, `04_Methodology.tex`, `05_Design_Process.tex`,
  `06_Results.tex`, `07_Discussion.tex`, `08_Conclusion.tex` all read in full this
  session. **`02_Background.tex` and `03_Theory.tex` NOT read yet.**
  `05_Design_Process.tex` is 821 lines; only lines 1–356 (Discover, Define, Ideate)
  were read — **lines 357–821 (Pre-Pilot detail, Pilot, Museum Phase design
  decisions) not yet read.**
- **Thesis figures**: same folder's `figure/05_Process/` (Discover, Define,
  Ideate, iteration-1/2/3, discursive-design subfolders) and `figure/06_Results/`
  (museum installation composites, pre-pilot/pilot analysis charts). Most of
  `05_Process/` has been viewed; `06_Results/pre-pilot/` and `pilot/` chart images
  (sentiment analysis, word clouds) have not.
- **Interview deck**: `/Users/nikolaossaoulidis/Downloads/Magnet Presentation.pdf` —
  really 68 pages (its file metadata claims 1424; ignore that, `pymupdf` confirms 68).
  Covers all 3 projects (DBAS, EWP Dashboard, Ericsson) in recruiter-facing form.
  Used for structural inspiration only (Themes→Decisions table format, named
  Challenges/Decisions cards), not copy — content is thesis-led per earlier decision.
  Rendered pages cached at `/tmp/magnet-pages/page-NN.png` for pages already
  reviewed (roughly 04–14, 19–20, 26–29, 33–35, 39–53, 55) — that cache is
  session-scoped and won't survive; re-render via `pymupdf` if needed
  (`pip3 install pymupdf`, ~5 lines, see any earlier turn this session for the exact
  snippet).
- **Raw photo/video library**: `/Users/nikolaossaoulidis/Downloads/*.HEIC` and
  `*.mov` (~25 HEIC files, several .mov clips, one `compressed-rohsska.mp4` already
  copied into the repo as the hero video). Only ~20 HEIC files have been reviewed (via
  a contact sheet, session-scoped, not saved anywhere persistent — regenerate with
  `sips -s format jpeg -Z 900` per file + a PIL contact-sheet montage, cheap to redo).
  Confirmed genuinely good, unlabelled shots exist for: Röhsska installation (multiple
  angles), Mölndal installation (red armchair room), visitors mid-call (candid),
  dense post-it feedback tables, Rolodex card close-ups. **Not all ~25 files have been
  individually reviewed at full detail** — worth a fresh pass, ideally with the user
  picking favourites rather than Claude choosing alone (see feedback #1 above).
- **EDC conference material**: `/Users/nikolaossaoulidis/Downloads/analyze-dbas-and-edc-conference/edc/`
  (`cheatsheet-page1.html`, `EDC EDUX 2026 (1).pdf`) — **not reviewed at all this
  session.** Likely relevant to Ericsson Case 2 ("Build better together") if that
  page gets revisited.
- **Second DBAS PDF**: `/Users/nikolaossaoulidis/Downloads/(Final) Don't be a Stranger.pdf`
  (783 pages) — never opened. Probably the same thesis content already covered by the
  `.tex` source above; likely not needed, but flagging it exists.

## Site conventions worth knowing before editing

- **Cache-busting**: `css/styles.css` and `js/menu.js` are referenced from all 9 HTML
  pages as `styles.css?v=N` / `menu.js?v=N` (currently `v=8`). **Bump N on every CSS/JS
  edit and update all 9 pages** (a `sed` one-liner across the file list — see git log
  for the exact command pattern) or you'll hit real stale-cache bugs; this cost a lot
  of debugging earlier this session. The dev server (`dev-server.py`, via
  `.claude/launch.json`) already sends `Cache-Control: no-store`, but that only helps
  requests made *after* the fix — already-cached browser entries need the version bump
  to force a genuinely new URL.
- **`.hero` vs `.hero-home`**: the homepage hero (ambient shapes, custom cursor,
  poster-scale type) is scoped to a `.hero-home` class specifically *because* making
  `.hero` itself a flex container broke `.breakout` full-bleed images on every
  case-study page (they need `.hero` to stay plain `display:block`). Don't remove that
  scoping.
- **Dev server**: `preview_start` with name `portfolio-static` (`autoPort: true`,
  currently lands on some port — check `.claude/launch.json` / just re-run
  `preview_start`, it'll tell you the port). If it's not running, that's normal —
  restart it.
- Design-skill diagram workflow (used for Ericsson diagrams, twice) and the
  headless-Chrome screenshot workaround (Browser-pane screenshots are unreliable and
  sometimes get stuck; local Chrome at
  `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --headless
  --disable-gpu --window-size=W,H --screenshot=out.png URL` is the reliable fallback
  used throughout this session) are both established, working patterns — reuse rather
  than reinvent.
