import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Tier-1 case studies only (Ericsson, EWP Dashboard, Don't Be a Stranger —
// decision 10). Tier-2 projects (Interactive Table, LightHouse, Synodia) are
// homepage cards only, built in Session B10, and never enter this collection.
const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
	schema: z.object({
		title: z.string().min(1),
		description: z.string().min(1),
		// "Industry" / "School" / "School / Industry" — matches the homepage
		// row-eyebrow label for this project.
		eyebrow: z.string().min(1),
		tags: z.array(z.string()).min(1),
		heroImage: z.string().min(1),
		// Decision 11: every tier-1 study needs an explicit outcome and a
		// learnings section. Required here, not just a writing convention —
		// a study missing either fails the build.
		outcome: z.string().min(1, 'outcome is required (decision 11)'),
		learnings: z.string().min(1, 'learnings is required (decision 11)'),
	}),
});

export const collections = {
	'case-studies': caseStudies,
};
