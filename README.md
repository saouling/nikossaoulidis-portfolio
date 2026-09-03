# nikossaoulidis.xyz

Hand-coded static site. Plain HTML5 + CSS, one shared stylesheet driven by design
tokens, minimal JS, no framework, no build step.

## Run it locally

```bash
cd nikossaoulidis-portfolio
python3 -m http.server 8000
```

Open `http://localhost:8000`. Every internal link uses a root-absolute path
(`/about.html`, `/work/ericsson.html`, `/images/...`), so it only resolves correctly
when served from a local server, not by double-clicking the files in Finder.

## Structure

```
index.html, about.html, contact.html   top-level pages
work/*.html                            one file per case study
css/styles.css                         the whole design system: tokens + components
js/menu.js                             mobile nav toggle, smooth-scroll, scroll-reveal
fonts/                                 self-hosted variable woff2 (Inter, Jost)
images/<project>/                      per-project images, .jpg or .png master + .webp sibling
assets/Nikos-Saoulidis-CV.pdf          the CV, linked directly
```

See [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) for the full colour/type/component
reference before making visual changes.

## Editing content

Every page is a plain HTML file, there's no templating at runtime. Open the file,
edit the text or swap an image `src`, save, refresh.

The header and footer are byte-identical across all 9 pages (look for the
`<!-- SHARED: header -->` / `<!-- SHARED: footer -->` comments), with one
deliberate exception: `aria-current="page"` on the current nav link, which
also drives the solid-vs-dotted underline (see DESIGN-SYSTEM.md's Motion
section). `index.html`/`about.html`/`contact.html` each mark their own link;
every `work/*.html` page keeps none marked. If you change anything else in
the nav or footer, copy the exact same block into every page. There's no
build step enforcing this, it's a manual discipline call from the brief, to
keep the site framework-free.

## Adding a new case study

1. Copy the closest existing page in `work/` as a starting point (`ericsson.html` for
   a multi-part case, `dont-be-a-stranger.html` for a single narrative with a strong
   photo story).
2. Follow the one template: hero, at-a-glance, the problem, what I did, key decisions,
   outcome, reflection. Don't skip heading levels, one `<h1>` per page.
3. Drop images in `images/<new-project>/`, export at roughly 2x display size, then
   convert to webp:
   ```bash
   cwebp -q 82 image.jpg -o image.webp
   ```
   Reference both via `<picture>` with a `.webp` `<source>` and the `.jpg`/`.png` as
   the `<img>` fallback. Always set explicit `width`/`height` (use `sips -g pixelWidth
   -g pixelHeight file.jpg` to read them) and `loading="lazy"` below the fold.
4. Add the page to `nav`... actually the nav only links to Work/About/Contact, so add
   a project card to the `#work` grid in `index.html` instead, plus a new `<url>` in
   `sitemap.xml`.

## Design tokens

Everything (colour, type, spacing) is a CSS custom property in `css/styles.css`
under `:root`. Change a value there and it updates everywhere.

Colour is a **three-colour system**, sampled directly from the live Readymag
site's own CSS: `--red` (#BE1E2D), `--blue` (#21409A), `--gold` (#C9A227). Each
has a darker `-ink` sibling (`--red-ink`, `--blue-ink`, `--gold-ink`) for use as
text, since the bright versions, especially gold, fail WCAG AA contrast at body
size. Use the bright versions only for large decorative use (borders, fills,
big numerals), never for text people need to read. The semantic mapping:
blue for project titles and inline prose links, red for tags/eyebrows/pull-quote
bars, gold for the small "Industry / School / Research" eyebrow labels on the
homepage rows.

Display font is **Jost**, a free geometric sans built as a Futura homage
(Nikos's own reference), replacing the current live site's Adobe Typekit font,
which can't be legally self-hosted. Body font stays **Inter**.

## Motion

- **Cross-page transitions** are the native CSS View Transitions API
  (`@view-transition { navigation: auto; }` near the top of `styles.css`).
  Zero JS, zero build step: supporting browsers (Chromium-based, at time of
  writing) cross-fade between page navigations automatically; everywhere else,
  including with JS disabled, navigation is just instant, which is the correct
  fallback.
- **Scroll reveal** (`.reveal` class + `js/menu.js`): sections fade/rise in as
  they enter the viewport via `IntersectionObserver`. Progressive enhancement,
  content is fully visible without it. Respects `prefers-reduced-motion`.
- The homepage Work section deliberately mirrors the live site's row layout
  (image and text side by side, alternating), restyled with the tokens above
  instead of Readymag's five-plus ad hoc colours.

## Version control

Git is already set up locally with one initial commit on `main`. To connect it to
your GitHub account and start tracking progress there:

```bash
cd nikossaoulidis-portfolio

# check these match an email on your GitHub account, or commits won't
# show up on your contribution graph — fix if needed before pushing:
git config user.name
git config user.email
# git config user.name "Your Name"
# git config user.email "the-email-on-your-github-account@example.com"

# create the empty repo on GitHub (needs the gh CLI, already logged in),
# or create it manually at github.com/new and skip this line
gh repo create nikossaoulidis-portfolio --private --source=. --remote=origin

# push
git push -u origin main
```

Every future change becomes `git add -A && git commit -m "..." && git push`,
and that history is what shows up as your commit activity on GitHub. The
"Deploying" section below reuses this same repo, so pushing and going live
end up being the same step once Pages is turned on.

## Deploying (GitHub Pages)

```bash
cd nikossaoulidis-portfolio
git init
git add .
git commit -m "Initial static rebuild"
gh repo create nikossaoulidis-portfolio --public --source=. --push
```

Then, in the repo on GitHub: **Settings → Pages → Build and deployment → Deploy from
a branch → main / (root)**. The `CNAME` file already in the repo root tells GitHub
Pages to serve it on `nikossaoulidis.xyz`.

At your domain registrar, point the domain at GitHub Pages:

- Apex domain (`nikossaoulidis.xyz`): four `A` records to
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` subdomain, if you want `www.nikossaoulidis.xyz` too: a `CNAME` record
  pointing to `<your-github-username>.github.io`

Enable "Enforce HTTPS" in the Pages settings once the DNS has propagated (can take
up to 24 hours, usually much less). Keep the current Readymag site live until you've
checked the new one over the real domain, or at least on the `.github.io` URL first.

**Alternative: Netlify.** Drag-and-drop the folder at app.netlify.com, or connect the
GitHub repo for git-based deploys. Slightly faster DNS propagation and free
deploy previews per branch, at the cost of one more account to manage. GitHub Pages
is enough for a static site this size.

## What's still open

All nine pages now carry real copy and real images or embeds, pulled directly
from the live Readymag CDN (EWP, Interactive Table, Synodia and LightHouse
were rebuilt from their actual live-page text; Interactive Table also embeds
the two real YouTube videos and links the real ACM paper; Synodia and
LightHouse embed their real Figma prototypes).

Still open:
- **Don't Be a Stranger** is missing the five design guidelines from the
  thesis (placeholder note in that section) and has no video yet, it works
  fully as photography in the meantime. A close-up of the Ericofon, the
  original booth concept drawings, and campus pilot photos would strengthen
  it further if you can dig them out.
- **Ericsson Case 2** still leans on conference photos; the
  `build-better-together-handout.png` export (see the source doc) would be a
  stronger lead image, and is worth a quick consent check with Frida first.
- Lighthouse (the auditing tool, not the project) hasn't been run, there's no
  bundled devtools here. Run it from Chrome devtools or PageSpeed Insights
  once this is live on a URL.
- The Adobe Typekit font is currently substituted with Jost (a free Futura
  homage); if you find the real typeface name in your Adobe Fonts account and
  want it instead, send it over.
