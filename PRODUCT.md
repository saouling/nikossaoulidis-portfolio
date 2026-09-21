# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: UX/product-design recruiters and hiring managers doing a fast first pass —
roughly 90 seconds to 2 minutes, in a specific skim pattern (headline → first case
study → skim structure → jump to outcomes). Secondary: AI tools/agents (ChatGPT,
Claude, Perplexity, ATS/recruiting software) that may read, summarize, or represent
Nikos Saoulidis when someone asks about him or pastes the site URL. Both audiences
need to come away with an accurate, complete picture, optimized differently rather
than compromised equally.

## Product Purpose

A personal portfolio site for Nikos Saoulidis, a UX/product designer, supporting an
active job search (no hard deadline). It exists to make a fast, credible case that he
can do real, rigorous design and research work — not just to display finished screens.

## Positioning

Distinguishes itself from a typical UX portfolio by grounding every claim in
verifiable primary sources (an MSc thesis, a published ACM paper, internal talks)
rather than resume language, and by showing one project that actually shipped and is
still running in public (a permanent museum installation), not just student or concept
work. The "came into design sideways, from engineering" background plus demonstrated
research-through-design rigor is the mechanism a generic portfolio couldn't copy.

## Operating Context

Content is authored in Astro content collections (typed MDX with a schema), deployed
on Vercel, git-versioned. Case-study copy is checked against two external guardrail
files in a separate repo (`story-bank.md` for factual claims, `voice-guide.md` for
tone) before shipping — every factual claim is expected to trace to a primary source.
Two real factual errors have already been caught and corrected this way (a wrong
"five guidelines" claim, a wrong institution count), so this discipline is proven, not
aspirational.

## Capabilities and Constraints

- Zero-JS-by-default, progressive enhancement only (native CSS View Transitions, no
  client router, no framework runtime). Deliberate and kept, not a limitation to lift.
- The Ericsson case study is under NDA: only abstracted diagrams and method
  descriptions are shown, never real product screens.
- Single-column case-study layout only (a two-column sticky-media pattern was tried
  and explicitly retired).
- The content schema enforces exactly 2 facts each in Outcome/Learnings fact-grids —
  the grid CSS depends on this, and it replaced a prior bug where one case study's
  data was hardcoded into the shared template.
- Target reading model for every page: works for a 90-second skim first; deeper
  reading (up to ~5 minutes) is supported but never required to get an accurate
  impression.

## Brand Commitments

- Personal identity: Bauhaus / Dieter Rams influence, a three-brand-color system
  (red / blue / gold, each with a darker "-ink" variant for text-size contrast), Jost
  for display/titles.
- Body font: Source Serif 4, paired with Jost — decided this session, replacing Inter. (EB Garamond was tried first and retired the same session — too thin at body size.)
- The visual language that came out of the Don't Be a Stranger case study (Mondrian-
  style ink fact-grids, ink-bordered "label plate" captions, card-stack galleries) is
  native to the material (drawn from Nikos's own thesis artifacts) and is being
  formalized into the shared design system rather than treated as a one-off.
- Voice: no em-dashes, no AI-writing tells (puffed vocabulary, "not X but Y"
  antithesis, rule-of-three, mid-letter bullet lists, compulsive summarizing), long
  comma-heavy prose, bullets reserved for closing TL;DRs.

## Evidence on Hand

- Three tier-1 case studies with approved, sourced copy: Ericsson (private-5G UX +
  DesignOps work), EWP Dashboard (Erasmus+ mobility platform redesign, now used across
  2,700+ institutions), Don't Be a Stranger (MSc thesis → permanent museum
  installation, live since May 2025 in two Gothenburg museums).
- Three tier-2 projects linking to real external artifacts: a published ACM DIS 2024
  demo paper (Sound-Mediating Table), a Figma prototype (LightHouse), a concept deck
  (Synodia).
- Primary source material for all of the above lives in
  `/Users/nikolaossaoulidis/Documents/portfolio-content-assets/` (thesis LaTeX +
  defence deck, conference-talk deck, the ACM paper, concept decks) — richer than
  what's currently mined onto the site; future work should pull from these rather
  than inventing detail.
- DBAS's own stated limitation (from the thesis itself): the installation leans on
  sound and touch and isn't accessible to everyone. This is disclosed on the case
  study, not hidden.

## Product Principles

- Every factual claim traces to a primary source; nothing is asserted that can't be
  checked against the thesis, a paper, or a deck.
- Optimize for the 90-second skim as the default reading mode; anything that only
  works for a 5-minute reader is incomplete.
- Prefer structural fixes (what's included, what order, what's skimmable) over
  decorative ones when a page "doesn't feel right." Decoration is not a proxy for
  information architecture.
- Keep portfolio scope to 3 deep case studies; resist adding depth elsewhere even when
  the underlying material is strong (e.g. Synodia), to protect scanability.
- Design for two audiences deliberately and differently: human skimmers get scannable
  structure; machine readers (AI tools, ATS) get schema.org structured data — not the
  same treatment stretched to cover both.

## Accessibility & Inclusion

DBAS itself is sound/touch-heavy and not fully accessible; this is a known, disclosed
limitation of that specific installation, not of the site. The site itself should meet
ordinary WCAG AA expectations — the existing color system already has contrast-safe
"-ink" text variants for exactly this reason.
