# Chat / gen-UI concept — parked for after cutover

Brainstormed 2026-09-16, outside Track A/B. **Not a session in `REBUILD-PLAN.md`, not
scheduled, not started.** Exists so a future chat doesn't re-derive this from scratch.
Read `REBUILD-PLAN.md` first — it is still the entry point and the single source of
truth for everything that's actually being built right now.

## The idea

Add an AI chat interface to the portfolio — visitors ask questions about Nikos instead
of (or alongside) browsing the static case studies. Possibly extended to generative UI:
the model streams small UI pieces (a project card, a stat) as part of its answer, not
just text.

## Why this is explicitly *after* cutover, not parallel

Three of the rebuild's locked invariants are in real tension with it:

- **Zero JS by default, works fully with JS disabled** (§3 of the plan). A chat widget
  is inherently JS-dependent. Survivable as an isolated island that degrades to nothing
  when JS is off, but it's a deliberate, scoped exception — not something to blur into
  the rest of the static site.
- **No React** (decision 05). Proper generative UI (Vercel AI SDK's `streamUI`/RSC
  pattern) is React-only. Text-first chat doesn't need this; gen UI does.
- **"Refuse additions before cutover by default"** (§8, risk 1) — named in the plan as
  the exact failure mode that left the old hand-coded site finished and undeployed.
  DBAS is already the long pole. This is a second, independent subsystem — new
  dependencies, a backend, a cost surface, its own testing — and starting it now would
  repeat that risk on purpose.

What *does* line up well: Vercel is already the host, so a serverless/edge function for
an LLM call is a small addition, not new infrastructure. And the RAG corpus this would
need — `cv-master.md`, `story-bank.md`, fact-checked case-study MDX — already exists,
built to the same traceability standard (§3: "every factual claim traces to a source")
that a hallucination-prone chatbot needs anyway. Track A's whole A1/A2/A4 saga (the
"five guidelines" claim, caught once in copy and again baked into an image, and again in
`story-bank.md` five weeks later) is a direct argument for keeping this **strictly
RAG-grounded** — the discipline already exists, just reuse it.

## Decisions made in this brainstorm (2026-09-16)

| # | Decision |
|---|---|
| 1 | **Timing: after cutover (B15).** Its own track, not parallel with A/B. |
| 2 | **Placement: lead with it, with the classic portfolio always one click away.** Not a one-time gate — a persistent, non-buried toggle/link, available from the chat view at all times. Backed by real UX-pattern research: chat-first designs that hide the traditional-site option lose users who have a known, finite intent (e.g. "show me your work") better served by direct browsing than by typed conversation. |
| 3 | **Grounding: strict RAG over vetted docs only.** No freewheeling persona, no general-knowledge fallback for v1. If it's not in `cv-master.md` / `story-bank.md` / the case-study content, the bot says so rather than improvising. |
| 4 | **v1 scope: text chat only.** Gen UI (model streaming actual components) is an explicit v2, not a day-one requirement — avoids pulling React into an Astro-no-React codebase before it's proven worth it. |
| 5 | **Backend: Anthropic API directly**, called from a Vercel serverless/edge function. Not the Vercel AI SDK abstraction layer — matches the stack Nikos already knows from the Claude Code side. |

## Research pointers

- Chat-replaces-static-pages examples: [Abhik-Chakraborty/AI-portfolio](https://github.com/Abhik-Chakraborty/AI-portfolio) (first-person answers from resume, falls back to live web search with citations for out-of-scope questions), [10-aqib/My-Portfolio](https://github.com/10-aqib/My-Portfolio), [Suryansh0911/portfolio-chatbot](https://github.com/Suryansh0911/portfolio-chatbot).
- Generative UI proper: Vercel AI SDK's [`streamUI`/RSC pattern](https://vercel.com/templates/next.js/rsc-genui), [vercel-labs/ai-sdk-preview-rsc-genui](https://github.com/vercel-labs/ai-sdk-preview-rsc-genui), [vercel-labs/json-render](https://github.com/vercel-labs/json-render).
- Chat-first UX / fallback pattern: [Agent UX Patterns: Chat-First UX Fails](https://hatchworks.com/blog/ai-agents/agent-ux-patterns/) — the "traditional experience should be an always-visible click away" principle, and the warning that a known finite-choice task is worse served by a chat box than a direct link.

## Still open, unresolved — for whenever this actually starts

- Exact placement mechanic: does chat *replace* the homepage route (`/`) with the
  classic homepage moved to e.g. `/portfolio`, or does chat live at `/` alongside a
  toggle that swaps the page content client-side? First is simpler and more honest
  about "leading with it"; second avoids ever serving two different things at one URL.
- Abuse/cost surface: this is a public API key behind a public form. Needs rate
  limiting (per-IP or per-session) and probably a cheap/fast model tier before it's
  exposed, not after.
- Does it get its own privacy note, given decision 16 (privacy-friendly analytics,
  no cookie banner)? Chat transcripts are a different category of data than a
  pageview count.
- Conversation logging: does Nikos want to see what people ask (useful signal for a
  job-search portfolio — what are recruiters actually curious about), and if so,
  where does that data live and for how long?
- Does the RAG layer need its own "traceability" review pass the way DBAS content did,
  before this goes live — i.e. an explicit check that nothing in `cv-master.md` /
  `story-bank.md` is stale, the same class of bug A1/A2/A4 kept finding?
