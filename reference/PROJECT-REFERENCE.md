# Project reference

A distilled record of everything in `~/Documents/portfolio-content-assets/`, so future
sessions don't have to reread 100,000 words of decks, thesis and papers. Compiled on
2026-09-23 from a full pass over all 148 files.

**Two rules for using this file:**

1. **This repo is public.** This file only holds facts at the level the site already
   publishes, or that come from published sources (the thesis, the ACM paper). The
   Ericsson developer-conference deck is marked *Ericsson Internal*, so it is summarised
   here only as far as the live site already describes it. Personal data (phone
   number, references) is left out on purpose.
2. **Raw text extracts live in `reference/sources/`, which is git-ignored.** Search
   there when you need a verbatim line. It holds the portfolio deck, the CV (redacted),
   the Ericsson talk and handout, the DBAS thesis and defence deck, the Synodia deck and
   the table paper. If the folder is missing, regenerate it with `pdftotext -layout`
   from the originals.

---

## Sources at a glance

| Source | What it is | Size | Best for |
|---|---|---|---|
| `general/Portfolio Presentation.pdf` | Nikos's compact deck of the three big projects | 57 slides | The skim version of Ericsson, DBAS and EWP, with the numbers |
| `general/CV-Nikolaos-Saoulidis-2026.pdf` | CV | 1 page | Dates, titles, publications |
| `ericsson/edc-build-better-together/EDC EDUX 2026 (1).pdf` | Ericsson Developer Conference talk, with Frida Edstam | 30 slides | Case 01b (internal, see rule 1) |
| `ericsson/edc-build-better-together/cheatsheet-page1.html` | The one-page handout from the talk | 1 page | The co-creation methods and habits |
| `dont-be-a-stranger/Chalmers-MSc-thesis-…pdf` | The MSc thesis | 229 pages | Every DBAS fact; the final authority on DBAS |
| `dont-be-a-stranger/dont-be-a-stranger-presentation.pdf` | Thesis defence deck | 169 slides | Quotes, themes, the red/blue/black visual language |
| `dont-be-a-stranger/report-thesis-latex-and-assets/` | LaTeX source and 96 thesis figures | — | Figures (mostly already mined into `public/images/dbas/`) |
| `dont-be-a-stranger/some-assets/` | Logos, banner, Röhsska video, two presenting photos | 7 files | Hero video (already used) |
| `synodia/synodia.pdf` | Concept-Driven Interaction Design course deck | 114 slides | Synodia |
| `sound-mediating-table/sound-mediating-table.pdf` | ACM DIS 2024 demo paper | 5 pages | The table |

---

## 01 · Ericsson

**Role:** UX Designer and Scrum Master, Ericsson Enterprise Wireless Solutions (BEWS),
Gothenburg, June 2025 to July 2026. One of twelve designers. Products (from the CV):
NetCloud Manager and the Network Management Portal, private-5G configuration for B2B
industrial customers. The work is under NDA: show method and abstract diagrams, never
real screens.

### 01a · AI-ready Figma deliveries
- **Pain point:** developers generated UI code from the UX team's Figma files through a
  five-step flow (Jira ticket with a Figma link, screenshot the polish page, feed it to
  an AI agent with component-mapping docs, the AI generates code, the developer fixes
  it). Step 2 breaks it, because the screenshot holds everything. A developer said:
  "Annotations confuse the AI."
- **Audit framework (Nikos's own, not an industry standard):** five dimensions, each
  scored 0, 1 or 2, for a maximum of 10:
  1. Structural separation
  2. Naming convention (for example a `handoff/` prefix)
  3. Component semantics (no "Frame 47")
  4. Interaction data (machine-readable, not trapped in arrows)
  5. Noise ratio (annotations vs real UI)
  
  They audited 5 real polish files from 4 designers, and the average was 2.4/10.
  **Nikos's instruction: don't lead with this score** (it is his own framework). It is
  fine in the body, framed as his.
- **Before:** 27 screens and 148 annotations on one flat canvas: sticky notes over
  screens, coloured change overlays, flow arrows (the AI treats them as UI), outdated
  theme screens, internal tracking components.
- **After (the Kiro skill "delivery-for-ai"):** 17 clean screens in feature sections
  (e.g. "Radio Details", "Edit Form", "Cell View"), all `handoff/` annotations removed,
  and 3 structured [SPEC] frames on the right: Interaction Behaviour, Style Tokens and
  Changes Summary.
- **The rule:** screens show what it looks like, specs say how it behaves. Mixing them
  makes the AI hallucinate UI.
- **Process:** 20 case studies (Atlassian, Spotify, Miro, Figma and academic papers), 2
  real developer workflows documented, a Slack channel for two-way feedback, 4
  iterations with developers.
- **Industry findings used:** structured input gives better output (Miro: 70–80% fewer
  developer support questions after fixing metadata). Spotify moved to "docs for humans
  AND machines" and built an MCP server. Handoff is becoming continuous. Human judgement
  stays central.
- **Result:** adopted as the team-wide standard. Developer quote on the final version:
  "this is pretty good, the issues are on my side now."

### 01b · Build Better Together (Ericsson Developer Conference 2026, with Frida Edstam)
- **Date:** the deck is dated 2026-04-15/16 (R&D site Kista), which matches the About
  page ("Apr 2026"). **Confirmed by Nikos: April 2026.** The CV's "Mar 2026" is wrong.
- **Thesis of the talk:** the best features shipped last year had one thing in common:
  someone early enough invited someone else to shape it together.
- **The handoff trap:** a loop of Product Mgmt (feature idea) → Design study → Lo-fi
  design → Hi-fi design → Develop (front-end, back-end) → Test → Release → Iterate. Each
  role reacts to the one before it. The answer is co-ownership.
- **What each role sees:** PM sees the why, priorities and trade-offs. The designer sees
  user flows, patterns and feel. Front-end sees platform constraints, performance and
  edge cases. Back-end sees data feasibility and API reality. Others (QA, docs, support,
  architects) see what the rest miss.
- **Early involvement vs late validation:** late means decisions are already made and
  the developer rubber-stamps them or triggers rework. Early means shared understanding
  and ownership.
- **The cell list story:** "one brainstorming session shaped a feature". Only the title
  and a screenshot are in the deck. **Ask Nikos for the story before using it.**
- **The handout ("Build better together", EDC 2026, page 1 of 2):**
  - **Five co-creation methods:**
    - Brainwriting (ideation; 15–20 min; 3–8 people)
    - UX + front-end pairing (review; 15–30 min; 1 designer + 1 dev; "95% of developers
      enjoy pairing more, with 15% fewer defects")
    - UX bug bash (quality; 30–60 min; 2–5 people; behaviour, copy, states, edge cases)
    - Design Studio (ideation; 60–90 min; 4–8 people)
    - Crazy Eights (ideation; 15 min; any size)
  - **Four daily habits:**
    - Public channels ("About the product? Shared channel.")
    - Mid-sprint demos ("Show early. Fix cheap.")
    - One-person invite ("One person, one step earlier.")
    - UX improvements channel ("Anyone posts · triage · backlog.")
  - The handout's own ending is "The one simple ask": invite one person from another
    discipline one step earlier than usual, and try one small co-creation method.
- **Also:** an AI design-review forum with Jakob Kitzing and Mats Kullerstrand.

### 01c · Generative UI for data-dense dashboards (a Tweak Week team project)
- **Team:** Nikos with three other designers and a front-end developer. Nikos did the
  card component, specs, prototype and proposal.
- **Static card:** specific widths and a fixed height, breaks in dynamic layouts,
  limited in what data it shows. **Dynamic card:** responds to any grid width, height
  follows content, one component for everything.
- **Research:**
  - Stanford/Georgia Tech 2025, "Generative Interfaces for Language Models": users
    prefer dynamic card UIs over chat, 72%.
  - Google Research 2025, "LLMs are Effective UI Generators": about 50% match with
    expert designs, and constrained catalogs beat free-form generation.
  - IEEE TVCG 2025, "Drillboards": dashboards should adapt to user expertise.
- **Industry patterns:** outcomes over screens, consistent containers, AI suggests and
  humans approve, show data source and freshness on every card. Sources: Google A2UI,
  NN/g, IBM Carbon for AI, Microsoft Copilot, Google PAIR.
- **Proposal:** an assistant (about 30%, steering panel) plus a canvas of cards (about
  70%). It assembles whole layouts. Cards are pre-filled, editable, pinnable and
  dismissible. You steer by talking or by moving cards.
- **Built:** a Figma card component, markdown specs versioned in GitLab, an HTML
  prototype generated from the specs, a front-end developer adapting the real
  component, and a US back-end team using it with live data.
- **Lessons:** from designing screens to designing systems of rules; writing for two
  audiences (humans and AI agents); version control and specs entering the UX toolkit;
  the designer's value shifting to defining constraints and curating output.

---

## 02 · Don't Be a Stranger (DBAS)

**What:** a permanent installation where two strangers talk live on rotary phones
across two Gothenburg museums. MSc thesis, Interaction Design & Technologies,
Chalmers, 2023–2025, on an Onassis Foundation scholarship. Opened May 2025. Still
running, with no end date: the museums keep it as long as they choose.

**Authority:** the thesis. The abstract names the theory: McLuhan ("the medium is the
message") and Baudrillard's critique of hypercommunication (*The Ecstasy of
Communication*). Methodology: Research through Design with Constructive Design Research
and co-design, through a Discursive Design lens, with defamiliarization as the
strategy.

### The four lenses (the thesis's conceptual lenses; results chapter 6.2)
1. **Voice-based communication and emotional presence:** no screens, LEDs or caller
   info; a semi-private placement with the voice directed at a wall; invitation text
   co-written with communicators; clear but minimal supporting material.
2. **Tactility, materiality and embodied interaction:** keep the weight, dial friction
   and ring ("useful"/"desired" friction); choose artifacts with curators; analog
   supporting material (a leaflet, a Rolodex).
3. **Invitation and participation in public space:** permission through the room and
   the signage; seed post-its before opening.
4. **Defamiliarisation as reflective strategy:** put the object inside the exhibition's
   story; no screens or apps; prompts that open conversation.

**The thesis produced considerations, not guidelines.** In its own words it
"generated hands-on, practical recommendations, without producing broad design
guidelines". **The portfolio deck's "5 concrete, transferable design guidelines" is
wrong.** Four lenses is correct.

### Themes (reflexive thematic analysis)
There were five themes each at several levels:
- **Pilot feedback forms:**
  1. The Ritual of Voice Telecommunication
  2. Embodied Memory & Nostalgia
  3. Desired Friction in Telecommunication
  4. Museum Social Codes & Permissions to Interact
  5. Emotions through Voice
- **The defence deck's synthesis:**
  - A: Emotional Presence through Analog Voice
  - B: Friction & Vulnerability as Invitations
  - C: Defamiliarization & Playfulness
  - D: Social Norms & Spatial Hesitation
  - E: Material Memory & Nostalgia

"5 themes" is correct.

### Process and numbers
- **Discover:** a phone-booth concept first (leaflets; telecoms in Sweden and Denmark,
  Ericsson first; all said no), then documenting do-not-touch in Gothenburg museums,
  then the pivot to museums.
- **Lab:** the IxD studio. The rotary dial is paired with a Bluetooth adapter and a
  smartphone with a SIM card. Nine second-hand phones were tested.
- **Pre-pilot:** 6 interviews with IxD students, who hand-annotated the instruction
  sheet.
- **Pilots:** three rounds on the Lindholmen campus (House Patricia and Kokboken; then
  revised materials in the same spots; then House Jupiter and Kokboken. Round 2 was
  NOT outdoors: the thesis and photos show the same indoor spots). 25 people in total. The pilot feedback
  form, n = 15, used four 5-point Likert items:
  - ease of use: 4.0
  - medium distinctiveness: 4.4 (the highest)
  - prompt engagement: 4.1
  - social comfort with a stranger: 4.3
  - SD between 0.8 and 1.1

  There were also 4 pilot interviews.
- **The museum search:** about five months of emails, LinkedIn messages and tailored
  proposals. Jessica at Röhsska connected Nikos to Mölndal.
- **Operations:** a lapsed payment on the cellular subscription cut service for nearly
  two hours during the exhibition.

### The two installations
- **Röhsska (a design museum):** the Innovation room of *Design Stories*, near a case of
  Ericofons in every colour. An Ericsson Kobra (Ericofon) phone, a Rolodex of prompts,
  four bilingual posters, a post-it surface. Nikos proposed the Belonging room; the
  curators moved it.
- **Mölndals stadsmuseum (a city museum):** *Öppna Magasinet* (Open Storage), where
  visitors handle 10,000+ objects. A beige Ericsson Dialog on a wooden table beside a
  vintage armchair, electronics hidden in a vintage box from the collection, a Rolodex,
  a guestbook.
- **The poster line:** "You might connect. You might not. But the moment is yours."
  (the draft said "the experience is yours").

### People (named in the published thesis)
Supervisor Mafalda Samuelsson-Gamboa; examiner Michael Heron. At Röhsska:
- Jessica Andersson Sjögerén (exhibition producer, curator of Design Stories)
- Emma Kristensson (graphic designer)
- Louise Brännström (curator of pedagogy)

At Mölndal: Malin Broby (museum educator and coordinator). The acknowledgements also
thank Clara Vollrathson.

### Quotes
**Museum post-its and guestbook:**
- "I became happy :)"
- "I felt scared to talk on the phone, maybe reminded me of talking on house phone when
  I was a kid."
- "It was so unexpected and fun! Very surprising to find this phone here."
- "Satisfying to dial. The dial tone is eerie."
- "Social media is the death of sincerity."
- "I am grateful for the ability to connect and also weary of being constantly
  connected."
- "I don't want my mobile phone, I rarely get any pleasure from it. Give me a horse and
  a Kobra phone and I'll be happy."
- "I remember all the three landline telephone numbers I've had."
- "I had forgotten how the phone signal sounded before putting in the number!"
- "I like this tactile experience."

**Pilot interviews and forms:**
- "Talking on this phone gives me a different vibe, it lets me be myself without
  putting too much effort." (P4)
- "The experience requires a little bit of vulnerability (not knowing what to expect,
  if someone will answer or not)." (P2)
- "When you talk with someone [...] having the voice makes it more personal." (P3)
- "A bit strange but fun; it's nothing I thought I would do today." (P1)
- "I liked it. Always good to talk with a stranger. I don't feel judged." (P6)
- "A little vulnerable… exciting but also risk of rejection." (P11)
- "Conversation with strangers are sometimes more liberating than others." (P14)

**Pre-pilot:**
- "It feels the same as listening to vinyl; it's more complex, takes more time, takes
  away the easiness, the experience becomes a thing of itself." (P2)
- "The old phone is more material, tangible and enjoyable to hold, compared with a new
  smartphone." (P4)

**Röhsska staff (portfolio deck):** "One of the most talked-about pieces!"

### Limits Nikos states himself
Accessibility (it leans on sound and touch). Evaluation focused on immediate
reactions, not long-term impact. No recordings, for privacy, so feedback was indirect.

---

## 03 · EWP Dashboard

**Role:** Lead UI/UX Designer (the first UX role on the team), Aristotle University
IT Center, Thessaloniki, with the European University Foundation. Redesign 2022–2023;
a UI designer and web developer intern there from December 2019 to July 2022.

**Numbers:** confirmed by Nikos on 2026-09-23 that the site's figures are right:
2,700+ institutions in 31 countries; a survey with close to 1,000 institution
responses. The portfolio deck's "hundreds" undersells it. The platform is EC-funded
and used by 217 of the 220 top-performing institutions. The redesign is the version
still running, centre stage at the EAIE Conference, Gothenburg, September 2025.

**What he did:**
- a 17-question survey
- findings presented at a European University Foundation webinar to 1,000+ users and
  stakeholders
- status-to-colour mapping (Jacob's Law, recognition over recall)
- a Bootstrap-based design system (type scale, a button system with every state, one
  icon set)
- a new visual identity and logo
- Figma prototypes, overseeing the build
- leading 4 developers

**Symptoms vs system:** inconsistent components across modules, no shared visual
language, every team solving the same problem differently.

**His own reflection (portfolio deck), "what I'd do differently now":**
- test with users, not just survey them
- accessibility from day one, and never status by colour alone
- design tokens and a documented component library instead of Bootstrap overrides
- define success metrics up front
- bring developers in earlier (learned at Ericsson)

**Talk:** "Erasmus Goes Digital", a European University Foundation webinar,
co-presented with Ghent University and DG EAC. **Date:** December 2022 (confirmed by Nikos; the CV's
Aug 2022 is wrong). **Still open:** the About page says Aug 2022 to **Jun** 2023, the CV
says to **Jul** 2023.

---

## 04 · Interactive Sound-Mediating Table

**Paper:** "Prototyping Playful Touch with a Sound-Mediating Table", DIS Companion '24,
IT University of Copenhagen, July 2024. Authors: David Hagberg, Nikolaos Saoulidis,
Mafalda Gamboa and Sjoerd Hendriks. DOI 10.1145/3656156.3665424, CC BY 4.0.

**Design:** a spin-off of Hendriks & Gamboa's *Undertable*. Hobye & Löwgren's
"bare-skin touch" gives strangers a playful excuse to touch. Three touch points (green,
red, blue) sit on each side. Touching a point and each other closes a circuit, giving
7 states from the colour combinations. An Arduino Uno sends MIDI to a KORG Volca Keys,
with speakers and an LED strip in the touched colour. Inspirations: Crdl (touch-sound
instrument for people with dementia), Tarr et al. on synchrony, Alvarsson et al. on
natural sounds.

**Study:** 13 couples in a student environment, 5 uninterrupted minutes each, video,
and semi-structured interviews. Understanding took 5 to 45 seconds. Contacts included
fingers, hands, ankle to ankle and forehead to forehead. Some moved to the beat or tried
to compose a song.

**Quotes:**
- "How does it understand we are touching, let's try again, oh my god."
- "Should we like, we touch ears, you wanna try? ear to ear? (laughs) it worked!"
- "Blue feels a bit spooky. […] Green feels Japanese, like sitting and drinking tea."

Activating it alone was possible but called "boring", a sign it needed two people.

**Media:** two YouTube videos, `d99zzlIpXJk` (in use) and `e0et8bGytBw` (demo). The
paper's Figure 2 (six prototyping stages) is exported to
`public/images/table/prototyping-stages.*`.

---

## 05 · Synodia

**Course:** Concept-Driven Interaction Design, Chalmers, individual project, May 2024.
It is a portable music device that plays one song for about a day. The four
principles: slow, collective (synced friends, no algorithms), touch and memorable.
Positionality: he is tired of screens, against the "tiktokification" of listening, and
for accessibility and collective experience.

**Name:** from Greek συνοδία (σύν "together" + ὁδός "way"; sounds like ᾠδή "song"),
meaning "a music journey in company".

**Influences:**
- Dieter Rams for Braun (T-31, TP-1 and RT20; "less, but better")
- Teenage Engineering (OP-1, TP-7; physical knobs)
- OLO radio and Olly

**Methods:**
- interaction relabelling (Djajadiningrat et al. 2000)
- sketching
- physical prototypes carved by hand ("this feels nice!")
- a love letter to the artefact (Hanington & Martin)
- concept portraits
- peer ideation, which moved it from a small screen to **printed song receipts**
  (album cover, song, artist, album and year, date received)

**Interaction:**
1. Sync friends into a **loop** with cables (SYNC IN/OUT).
2. **Record** a song you hear during the day (the record button).
3. At the end of the listening interval everyone **receives** a song, plus a receipt.
4. Listen.

There are left- and right-handed versions ("around 10% of the world population are
left-handed"), a spark wheel, aluminium, and packaging (orange and light-blue boxes,
"one day is barely enough time to listen to a song").

**Test (honest and small):** 3 close friends in a Messenger group emulating the loop,
over 3 listening intervals of 28, 20 and 28 hours. All 3 sent songs in intervals 1–2,
and 2 of 3 in interval 3 ("sign for a high drop-out rate?"). Results: fun and
interesting but "a little bit underwhelming" as a chat. Everyone agreed it would be
more fun with a tangible artefact. Late-night and early-morning requests showed the
off-24-hour rhythm as a feature. Genres stayed similar. **Next time:** friends with
more diverse taste, strangers, and a Synodia profile.

**Theory:** slow technology, algorithm fatigue, agential realism ("Synodia through the
prism of agential realism"), "Synodia in the wild".

**Figma prototype:** `https://www.figma.com/proto/YerdDKO4Un9AvaYCk8PxS2/Individual-Project?...`
(the embed version is in `work/synodia.html` on the old site). **Images** exported to
`public/images/synodia/`: `render`, `prototypes`, `loop`, `receipt`,
`left-right-handed`, `packaging`, plus `device`.

---

## 06 · LightHouse

**Course:** Graphical Computer Interfaces, Chalmers, individual project, 2024. A
stage-lighting control app for professionals and beginners in smaller venues. It groups
lights, builds and manages sequences, and adjusts colour, intensity and movement live.
It has a timeline programming mode and a live control mode, with a 3D stage preview.
Market research into existing lighting control found gaps. Designed for low light and
loud environments, with a modular workspace and quick actions. Includes its own visual
identity and logo.

**Figma prototype:** `https://www.figma.com/proto/1fmZ5tjfIh1WemV0oGJ6nq/LightRig-GUI-Individual-Project?...`
(the embed is in `work/lighthouse.html`). **Image:** only `public/images/lighthouse/hero.*`.
The source folder has no deck for it, so ask Nikos if more material exists.

---

## Decisions and answers from Nikos (2026-09-24)

- **The Ericsson Developer Conference talk was in April 2026.** The CV's "Mar 2026" is
  wrong. The About page is right; fix the CV PDF when it is next edited.
- **Erasmus Goes Digital was in December 2022.** The CV's "Aug 2022" is wrong; the About
  page is right.
- **LightHouse:** there is no more material than the Figma prototype and one image.
  Kept as object 06 on Claude's recommendation (the only pure interface piece; it costs
  nothing at the end of the index).
- **The deck's "5 concrete, transferable design guidelines":** Nikos does not want to
  pursue it. Four lenses stays correct on the site.
- **Still open:** the EWP role's end month (June 2023 on the About page, July 2023 on
  the CV), and the "cell list story" from the Ericsson talk.

---

## Deep notes: Don't Be a Stranger (from the full thesis read, 2026-09-24)

### Timeline
- **November 2024:** Röhsska approached, months before the thesis officially started. It
  was the first museum to say yes.
- **November 2024 to mid-April 2025:** searching for a second partner. Museum of World
  Culture, Universeum, Gothenburg Art Museum, design companies and cultural centres across
  Sweden and Denmark. Mostly no reply: the thesis's "wall of ghosting" figure. Plan B was
  both phones in two rooms of Röhsska.
- **Mid-April 2025:** Mölndals stadsmuseum agreed, through Jessica Andersson Sjögerén's
  personal relationship with its staff ("much more immediate and effective than endless
  emails").
- **May 2025:** opening in both museums.

### Phases (the thesis uses Discover, Define, Ideate, then three iterations)
- **Discover:**
  - background research
  - museum visits documenting "do not touch" (Maritime Museum motion alarms,
    Röhsska's hand icons and queue-ticket sign, Museum of World Culture, Mölndal's
    touchable Open Storage)
  - a video essay of film scenes with rotary phones and live voice, edited in CapCut
    (references include *Paris, Texas* and *In the Mood for Love*)
- **Define:** conceptual brainstorming with the supervisor, stakeholder engagement, and
  technical feasibility. Internet calling was rejected because it loses the tactile and
  aural authenticity. The final setup is Bluetooth adapter + smartphone + SIM, because
  Sweden has no landline network.
- **Why rotary phones:** deliberate physical engagement per digit, McLuhan's "cool
  media" (participation) and Baudrillard's hypercommunication. The Ericofon (1950s,
  one-piece) is the principal artifact. Rotary phones bridge generations: nostalgia for
  older visitors, novelty for younger ones.
- **Ideate:**
  - the pivot from urban phone booths, which were over-romanticised (safety, cost,
    ethics), to museums (slower rhythm, curated narrative, groups, controlled sound)
  - Crazy 8s alone, sketching, peer co-design, and mapping modalities with the
    supervisor (tactile, sonic, interpretive)
  - AI, scripted media and asynchronous voice messages rejected on purpose ("Voice here
    is not just sound, but also vulnerability")
- **Iteration I, pre-pilot (IxD studio, Kuggen):**
  - two phones calling each other, printed instructions, and 6 unstructured interviews
    with IxD students (10 to 20 minutes), who hand-annotated the instructions
  - problems found: misdials when the dial wasn't let fully return; some needed more
    guidance; hesitation about being allowed to touch
  - fixes: instructions explain letting the dial return, and signage says the phones
    are for use; the focus moved from technical feasibility to real conversations
    between strangers
  - phones sourced from Tradera, Facebook Marketplace, Myrorna (Hisingen and Järntorget),
    Björk & Frihet and Lundby Second Hand, plus friends; nine devices tested; faults in
    ringers, dials and speakers
- **Iteration II, pilot (Lindholmen campus), three mini-iterations:**
  - v1: Ericofon in the Patricia building's ground-floor corridor, Dialog in the
    Kokboken café
  - v2: a new logo poster, a redesigned prompt booklet, a simplified feedback form,
    clearer instructions
  - v3: Ericofon moved to Kokboken, Dialog to the Jupiter building corridor (more
    traffic)
  - **Conflict:** the round-3 photos (Figma frames) show the Ericofon at Jupiter and the
    Dialog at Kokboken, the opposite of the thesis prose. The site names no phone per
    spot for round 3; ask Nikos if it matters.
  - laser-cut wooden casings, colour-matched, hide the electronics
  - placement criteria: close to the studio, observable from a hidden spot, high
    traffic, noise, light
  - data: 15 feedback forms (four Likert items, results under Process and numbers
    above; three open questions), 4 semi-structured interviews, observations
  - automated sentiment and topic modelling in Python played only a supporting role;
    reflexive thematic analysis led
- **Iteration III, museums:** situated co-creation, not ideate/prototype/test. Details
  below.

### Themes at every level (reflexive thematic analysis)
- **Pre-pilot interviews (6):** The Ritual of Voice Telecommunication; Embodied Memory &
  Nostalgia; Desired Friction in Telecommunication; Museum Social Codes & Permissions to
  Interact; Emotions Through Voice (Between Voice & Text).
- **Pilot interviews (4):** Voice Telecommunication & Intimate Anonymity; Playfulness &
  Connection; Vulnerability, Excitement and the Unexpected; Technical Issues & Undesired
  Friction; Emotional Connection through Voice.
- **Pilot feedback forms (15):** Curiosity and Surprise (Disrupting the Everyday); The
  Liberation of Telecommunicating with Strangers; The Positive & Emotional Friction of
  Analog Telecommunication; Undesired Friction (Sensory & Spatial); Material Memories and
  Nostalgia.
- **Cross-phase synthesis (these carried into the museum phase):**
  1. Emotional Presence through Analog Voice
  2. Friction & Vulnerability as Invitations
  3. Defamiliarization & Playfulness
  4. Social Norms & Spatial Hesitation
  5. Material Memory & Nostalgia

### The museum phase: co-design decisions
- **At Röhsska:** co-designed with Jessica Andersson Sjögerén (curator), Louise
  Brännström (curator of pedagogy / communicator) and Emma Kristensson (graphic
  designer).
  - **Expectation management:** "talk to a stranger" became "You might connect. You
    might not. But the moment is yours." The framing moved from the call to the phone
    itself.
  - **Spatial framing:** the Innovation room of *Design Stories*, near the exhibited
    Kobra phones, so it became part of the guided tours.
  - **Visual integration:** the museum's templates, with tactile imperatives ("Pick up
    the phone", "Try its dial").
- **At Mölndal (Öppna magasinet):** co-designed with Malin Broby (museum educator and
  coordinator).
  - The Dialog was chosen over the Kobra: a common home phone fits a city museum, while
    the Kobra is a design object.
  - A wooden table with a shelf and an armchair make a domestic setting.
  - A vintage box from the collection hides the electronics; no casing, no big signage;
    "discovery over direction".
- **Kept unoptimised on purpose:** long phone numbers were not shortened to one digit.
- **The Rolodex:**
  - chosen with the curators: browsable one-handed while holding the phone, slow like
    dialling, holds Swedish and English on one sleeve, fits both rooms
  - observed as a visitor favourite
  - prompts co-authored in four categories: voice and the phone; touch and senses;
    innovation (Röhsska) or memory and everyday life (Mölndal); poetic or reflective
    provocations
- **Feedback as reflection, not data:** structured forms were dropped at the museums.
  Röhsska staff said the form "felt like it was trying to steer the replies in certain
  directions". The replacements were a post-it surface at Röhsska and a guestbook at
  Mölndal.
- **Observations at Röhsska:**
  - visitors came in groups, watched first, then a snowball effect: once one post-it
    went up, others followed
  - teens and young adults dialled; older visitors recognised the Kobra
  - many calls to Mölndal went unanswered, but dialling, listening and the Rolodex
    mattered anyway
  - individual moments: an older man tried it, then called his partner over; British
    tourists; school boys "decoding" the dial

### The four lenses and their considerations (thesis section 6.2, verbatim in spirit)
1. **Voice-based communication and emotional presence:**
   - no screens, LEDs or caller info
   - a semi-private spot with the voice towards a wall (full exposure gives stage
     fright, full privacy invites misuse)
   - invitation text co-written with communicators; don't over-promise
   - clear but minimal supporting material
2. **Tactility, materiality and embodied interaction:**
   - keep the weight, dial friction and ring ("useful"/"desired" friction)
   - choose the artifacts with curators to fit the institution
   - analog supporting material (leaflet, Rolodex)
   - encourage mechanical gestures
3. **Invitation and participation in public space:** permission through the room and
   the signage; seed post-its before opening.
4. **Defamiliarisation as reflective strategy:** the object inside the exhibition's
   story; no screens or apps; prompts that open a conversation.

## Deep notes: EWP Dashboard (live Readymag page and portfolio deck)

- **The status colour system:**
  - General statuses:
    - gold = action must be taken by the user
    - blue = action taken / waiting for response
    - green = completed / successful
    - red = rejected / unsuccessful
    - light blue = waiting list (nominations only)
    - grey = draft (IIAs only)
  - The OLA (Online Learning Agreement) legend for outgoing and incoming students runs
    unsigned → signed by student → signed by student/sending → signed by
    student/sending/receiving, plus the "changes" versions of each state.
- **Identity:** the old "E+ Dashboard β" (a blue circle, a pill-button set) became the
  "EWP Dashboard" logo with a teal ring and a six-colour status palette (blue, magenta,
  green, red, gold, teal-grey), with buttons such as waiting list, reject and delete.
- **Components on the live page:**
  - an icon-states matrix: accept, reject, delete, edit, add new, download files, each
    active / on hover / on click / disabled
  - the button system (a 4678×6200 original)
  - the type scale in Raleway (body 16px up to h1)
  - form fields, dropdowns, the sidebar before and after
  - a mobile frame and a laptop frame
  - app screens (application record with documents, the settings page)
- **Modules named in the deck:** My University, OLA, Short Term, Applications (Outgoing
  Students, Incoming Students, Requirements), IIA, Erasmus+ App.

---

## Asset index (everything extracted, kept outside the public repo)

All extracted assets live in
`~/Documents/portfolio-content-assets/_extracted/` (beside the sources, not in git).
Regenerate slides with `pdftoppm -scale-to-x 1920 -png`, embedded images with
`pdfimages -png`.

| Folder | What |
|---|---|
| `general/portfolio-presentation/slides/` | All 57 slides of the Portfolio Presentation at 1920px |
| `general/portfolio-presentation/images/` | Every embedded image from that deck (≥200px), original resolution |
| `ericsson/edc-talk/slides/`, `images/` | The Build Better Together talk (30 slides) and its images. **Ericsson Internal: never publish these** |
| `ericsson/edc-handout/handout-page1.png` | The one-page handout rendered |
| `dbas/defence-deck/slides/`, `images/` | The thesis defence deck (169 slides at 1600px) and its embedded images |
| `dbas/thesis-pdf-images/` | Every embedded image in the thesis PDF (≥200px) |
| `dbas/figma-thesis-designs/<frame>/` | From Figma file `rwHjzUt84EH8azgN2oqYHb` (page "Process", node 143:14). Each folder holds `frame-export.png` (the composed figure) and `photo-NN.png`, the **original photos without any labels or captions**. Frames downloaded: Museum-Röhsska-Final-Installation, Museum-Mölndal-Final-Installation, Museum-rolodex, Museum-reflection-mechanisms, Museum-Prototyping-casing-design, Museum-choosing-a-space-and-building, Pilot-1/2/3-exhibition, Pilot-Prototyping_Cases (20 of more), Pre-pilot-Finding_the_phones, Pre-pilot-Repairing_the_phones, the-phones, Discover-Röhsska_dont_touch, Ideation-Original_concept_Phonebooths, wall-of-ghosting (20 of more). `_figma-metadata-Process-page.json` lists every frame and node id on the page, for later downloads (the Figma Starter plan rate-limits the MCP) |
| `dbas/…` thesis LaTeX | `dont-be-a-stranger/report-thesis-latex-and-assets/03 Don't be a Stranger Report/figure/` holds all 96 thesis figures as separate files, no captions (LaTeX adds those) |
| `dont-be-a-stranger/some-assets/` | Logos, the Ericsson banner, the Röhsska video, presenting photos (source folder) |
| `synodia/slides/`, `images/` | All 114 Synodia slides at 1600px and its embedded images |
| `sound-mediating-table/pages/`, `images/` | The paper's 5 pages at 200dpi and its figures |
| `readymag-live-site/ewp-dashboard/` | 19 full-resolution originals from the live EWP page (status legends, OLA legend, identity before/after, button system, icon states, type scale, forms, sidebar, device frames) |
| `readymag-live-site/ericsson/` | 4 originals from the live Ericsson page |

The site's own images live in `public/images/<project>/` (web-sized jpg + webp).

### Web-ready DBAS images parked outside the repo
Caption-free web crops not used on the site yet (Dialog and Ericofon product shots, the
phone booth, the Rolodex, the two museum table close-ups):
`~/Documents/portfolio-content-assets/_extracted/dbas/clean-web-unused/`.
