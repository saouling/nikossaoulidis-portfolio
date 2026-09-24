import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shape for the Outcome/Learnings .fact-grid (Session B8/B9): one headline
// stat or short phrase, plus exactly two short supporting facts. Exactly
// two, not "up to three" — the CSS grid's accent cell spans two rows
// assuming three total cells; a variable count would silently break the
// layout instead of failing the build, so the schema pins the number the
// CSS actually depends on.
const summaryLine = z.union([
	z.string().min(1),
	z.array(z.object({ case: z.enum(['a', 'b', 'c']), text: z.string().min(1) })).min(1),
]);

const factGrid = z.object({
	stat: z.string().min(1),
	statLabel: z.string().min(1),
	facts: z.array(z.string().min(1)).length(2),
});

// Tier-1 case studies only (Ericsson, EWP Dashboard, Don't Be a Stranger —
// decision 10). Tier-2 projects (Interactive Table, LightHouse, Synodia) are
// homepage cards only, built in Session B10, and never enter this collection.
const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
	schema: z.object({
		// Full string for <title>/OG — e.g. "Ericsson — AI-Ready Design
		// Delivery — Nikos Saoulidis". Distinct from `heading` below because
		// every existing page's <h1> is shorter than its <title>.
		title: z.string().min(1),
		// Short on-page <h1> — e.g. "Ericsson". Added in Session B7 once a
		// real case study showed title and heading are genuinely different
		// strings, not the same value used twice.
		heading: z.string().min(1),
		// The standfirst paragraph directly under <h1>. Distinct from
		// `description` (meta/OG) — on every existing page these are two
		// different pieces of copy, not one reused twice.
		standfirst: z.string().min(1),
		description: z.string().min(1),
		// "Industry" / "School" / "School / Industry" — matches the homepage
		// row-eyebrow label for this project.
		// Retired in the catalogue rebuild (the label plate carries year and
		// medium instead); optional until every study drops them.
		eyebrow: z.string().min(1).optional(),
		tags: z.array(z.string()).optional(),
		// The catalogue summary: one sentence per fixed section, shown beside
		// the label plate and linking to #problem, #what-i-did, #how-it-went
		// and #what-i-learned. Required: it is every study's skim layer.
		// An object with sub-records (Ericsson) may give one line per case
		// instead, each tagged with its case mark (see CaseMark).
		summary: z.object({
			problem: summaryLine,
			did: summaryLine,
			went: summaryLine,
			learned: summaryLine,
		}),
		// Names for the case marks, shown as a key above a per-case summary.
		// The "where am I" rail (SectionRail): which sections to track and in
		// which object's language.
		rail: z.object({
			style: z.enum(['cases', 'call', 'status']),
			items: z.array(z.object({
				id: z.string(),
				label: z.string(),
				mark: z.enum(['a', 'b', 'c']).optional(),
				no: z.string().optional(),
				state: z.string().optional(),
			})),
		}).optional(),
		cases: z.array(z.object({ case: z.enum(['a', 'b', 'c']), no: z.string(), name: z.string() })).optional(),
		heroImage: z.object({
			src: z.string().min(1),
			width: z.number(),
			height: z.number(),
			alt: z.string().min(1),
		}),
		// Session B11 (Don't Be a Stranger): optional looping video hero,
		// additive to heroImage rather than replacing it. heroImage keeps
		// doing exactly what it already does for every page — poster frame,
		// OG image, width/height, and the <img> fallback for browsers that
		// can't render <video> — so Ericsson and EWP are untouched. Only
		// [slug].astro branches on whether heroVideo is present.
		heroVideo: z.string().min(1).optional(),
		heroVideoCaption: z.string().min(1).optional(),
		atAGlance: z
			.array(z.object({ label: z.string().min(1), value: z.string().min(1) }))
			.min(1),
		// Decision 11: every tier-1 study needs an explicit outcome and a
		// learnings section. Required here, not just a writing convention —
		// a study missing either fails the build.
		//
		// Shaped for the .fact-grid component (Session B8, refined same
		// session): one headline stat/short-phrase plus up to three short
		// supporting facts, not a paragraph. Originally a plain string —
		// changed after Nikos found long prose unreadable on the actual page.
		// Colour is fixed sitewide (red for outcome, blue for learnings), not
		// per-entry, so it's not part of this shape.
		outcome: factGrid,
		learnings: factGrid,
	}),
});

// Compact catalogue entries for the smaller objects (04 to 06): the same
// label plate as a case study, but a short body, no four-section summary
// and no fact-grids. Catalogue fields (number, year, medium, status) come
// from src/data/collection.ts, like the case studies.
const entries = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/entries' }),
	schema: z.object({
		title: z.string().min(1),
		heading: z.string().min(1),
		standfirst: z.string().min(1),
		description: z.string().min(1),
		heroImage: z.object({
			src: z.string().min(1),
			width: z.number(),
			height: z.number(),
			alt: z.string().min(1),
		}),
		atAGlance: z.array(z.object({ label: z.string().min(1), value: z.string().min(1) })).min(1),
		// A short record beside the label plate (what it is, what was tested),
		// in the same ruled style as a case study's summary, but not links.
		record: z.array(z.object({ label: z.string().min(1), text: z.string().min(1) })).default([]),
		// Outbound links shown under the record (the paper, a prototype).
		links: z.array(z.object({ label: z.string().min(1), href: z.string().url() })).default([]),
	}),
});

export const collections = {
	'case-studies': caseStudies,
	entries,
};
