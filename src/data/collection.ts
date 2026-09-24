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
	/** The object's catalogue page: a case study for 01 to 03, a compact entry for 04 to 06. */
	href: string;
	form?: Form;
	summary?: string;
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
			src: '/images/ewp/cover.jpg',
			webp: '/images/ewp/cover.webp',
			width: 1500,
			height: 1500,
			alt: 'The EWP Dashboard logo above the redesigned application screen on desktop, with the same record on a phone in front of a red square.',
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
		href: '/sound-mediating-table/',
		image: {
			src: '/images/table/cover.jpg',
			webp: '/images/table/cover.webp',
			width: 1500,
			height: 1500,
			alt: 'Illustration of the interactive table: two people touch the surface to close a circuit, an Arduino sends MIDI to a synthesizer, speakers play a melody and an LED strip lights up.',
		},
	},
	{
		no: '05',
		title: 'Synodia',
		year: '2024',
		medium: 'Concept device',
		status: 'Prototype',
		href: '/synodia/',
		image: {
			src: '/images/synodia/cover.jpg',
			webp: '/images/synodia/cover.webp',
			width: 1500,
			height: 1500,
			alt: 'Synodia, a white portable music player with a turntable-like disc and one record button, beside its orange box, two song receipts and early sketches.',
		},
	},
	{
		no: '06',
		title: 'LightHouse',
		year: '2024',
		medium: 'App concept',
		status: 'Prototype',
		href: '/lighthouse/',
		image: {
			src: '/images/lighthouse/cover.jpg',
			webp: '/images/lighthouse/cover.webp',
			width: 1500,
			height: 1500,
			alt: 'The LightHouse logo, the dark stage-lighting interface with its 3D stage preview, and a moving-head light with pan and tilt dials.',
		},
	},
];

export const allObjects = [...mainObjects, ...minorObjects];

/** The object after this one in catalogue order, wrapping from 06 back to 01. */
export function nextObject(href: string): CollectionObject {
	const i = allObjects.findIndex((o) => o.href === href);
	return allObjects[(i + 1) % allObjects.length];
}
