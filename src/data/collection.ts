// The collection: every project as a catalogue object. One source for the
// homepage index, the display case and (for the three case studies) the
// label plate and the "next object" footer, so a number, year or status
// can never disagree between pages.
//
// Forms follow Kandinsky's 1923 Bauhaus questionnaire (blue circle, red
// square, yellow triangle), each mapped to something true about the work:
// the circle is DBAS's rotary dial, the square is EWP's data tables and
// design system, the triangle is Ericsson's direction-setting work.

export type Form = 'circle' | 'square' | 'triangle';

export interface CollectionObject {
	no: string;
	title: string;
	year: string;
	medium: string;
	status: string;
	/** Case-study slug for the three main objects; external link for the rest. */
	href: string;
	external?: boolean;
	form?: Form;
	summary?: string;
	linkLabel?: string;
	image: { src: string; webp?: string; width: number; height: number; alt: string; position?: string; contain?: boolean };
}

export const mainObjects: CollectionObject[] = [
	{
		no: '01',
		title: 'Ericsson',
		year: '2025–26',
		medium: 'Enterprise software, private 5G',
		status: 'Adopted team-wide',
		href: '/ericsson/',
		form: 'triangle',
		summary: 'UX Designer on dense private-5G software, making complex, technical tools clear for expert users.',
		image: {
			src: '/images/ericsson/hero.jpg',
			webp: '/images/ericsson/hero.webp',
			width: 1600,
			height: 1066,
			alt: 'Nikos presenting at the Ericsson Developer Conference.',
			position: '60% 40%',
		},
	},
	{
		no: '02',
		title: "Don't Be a Stranger",
		year: '2025',
		medium: 'Museum installation, MSc thesis',
		status: 'Still running, two museums',
		href: '/dont-be-a-stranger/',
		form: 'circle',
		summary: 'Two strangers pick up old rotary phones and talk to each other, live, across two Gothenburg museums.',
		image: {
			src: '/images/dbas/25-cover-photo.jpg',
			webp: '/images/dbas/25-cover-photo.webp',
			width: 2000,
			height: 1094,
			alt: 'A visitor at Röhsska holds the white Ericofon receiver while two others look on.',
			position: '30% 50%',
		},
	},
	{
		no: '03',
		title: 'EWP Dashboard',
		year: '2022–23',
		medium: 'Web platform and design system',
		status: 'Live at 2,700+ institutions',
		href: '/ewp-dashboard/',
		form: 'square',
		summary: 'Redesigned the tool European universities use to manage Erasmus+ mobility students.',
		image: {
			src: '/images/ewp/hero.jpg',
			webp: '/images/ewp/hero.webp',
			width: 1833,
			height: 952,
			alt: 'The EWP Dashboard logo and a screenshot of its document-settings table.',
			contain: true,
		},
	},
];

export const minorObjects: CollectionObject[] = [
	{
		no: '04',
		title: 'Interactive Sound-Mediating Table',
		year: '2024',
		medium: 'Tangible interaction',
		status: 'Published, ACM DIS 2024',
		href: 'https://dl.acm.org/doi/10.1145/3656156.3665424',
		external: true,
		linkLabel: 'Read the paper',
		image: {
			src: '/images/table/diagram.jpg',
			webp: '/images/table/diagram.webp',
			width: 1500,
			height: 1468,
			alt: 'Diagram of the interactive table: touch closes a circuit, an Arduino sends MIDI to a synthesizer, speakers play a melody and an LED strip lights up.',
			contain: true,
		},
	},
	{
		no: '05',
		title: 'Synodia',
		year: '2024',
		medium: 'Concept device',
		status: 'Prototype',
		href: 'https://www.figma.com/proto/YerdDKO4Un9AvaYCk8PxS2/Individual-Project?page-id=0%3A1&node-id=502-16762&node-type=canvas&viewport=1345%2C40%2C0.03&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=502%3A16754',
		external: true,
		linkLabel: 'View the prototype',
		image: {
			src: '/images/synodia/device.jpg',
			webp: '/images/synodia/device.webp',
			width: 1000,
			height: 1866,
			alt: 'Synodia, a round white portable music device with a speaker grille and a single record button.',
			position: '50% 40%',
		},
	},
	{
		no: '06',
		title: 'LightHouse',
		year: '2024',
		medium: 'App concept',
		status: 'Prototype',
		href: 'https://www.figma.com/proto/1fmZ5tjfIh1WemV0oGJ6nq/LightRig-GUI-Individual-Project?page-id=2680%3A19242&node-id=2680-19247&viewport=430%2C592%2C0.02&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2680%3A19247',
		external: true,
		linkLabel: 'View the prototype',
		image: {
			src: '/images/lighthouse/hero.jpg',
			webp: '/images/lighthouse/hero.webp',
			width: 1472,
			height: 952,
			alt: 'The LightHouse app: a dark-mode interface for grouping stage lights, building scenes and sequences, with a 3D stage preview.',
			contain: true,
		},
	},
];

export const allObjects = [...mainObjects, ...minorObjects];

/** The object after this one among the three case studies, wrapping around. */
export function nextMainObject(href: string): CollectionObject {
	const i = mainObjects.findIndex((o) => o.href === href);
	return mainObjects[(i + 1) % mainObjects.length];
}
