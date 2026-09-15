import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shape for the Outcome/Learnings .fact-grid (Session B8/B9): one headline
// stat or short phrase, plus exactly two short supporting facts. Exactly
// two, not "up to three" — the CSS grid's accent cell spans two rows
// assuming three total cells; a variable count would silently break the
// layout instead of failing the build, so the schema pins the number the
// CSS actually depends on.
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
		eyebrow: z.string().min(1),
		tags: z.array(z.string()).min(1),
		heroImage: z.object({
			src: z.string().min(1),
			width: z.number(),
			height: z.number(),
			alt: z.string().min(1),
		}),
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

export const collections = {
	'case-studies': caseStudies,
};
