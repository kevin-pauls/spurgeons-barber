export interface Service {
	slug: string;
	title: string;
	description: string;
	price: string;
	duration: string;
	icon: string;
}

export const services: Service[] = [
	{
		slug: 'haircut',
		title: 'Haircut',
		description: 'Classic or modern cuts tailored to your style. Includes consultation, wash, and precision finish.',
		price: '$35+',
		duration: '30–45 min',
		icon: 'scissors'
	},
	{
		slug: 'beard-trim',
		title: 'Beard trim',
		description: 'Shape, line, and detail work to keep your beard looking sharp between full cuts.',
		price: '$20+',
		duration: '15–20 min',
		icon: 'razor'
	},
	{
		slug: 'curly-specialist',
		title: 'Curly hair specialist',
		description: 'Curl-by-curl cutting technique. Jordan is trained to work with every curl pattern — from loose waves to tight coils.',
		price: '$45+',
		duration: '45–60 min',
		icon: 'comb'
	},
	{
		slug: 'traditional',
		title: 'Traditional styles',
		description: 'Pompadours, flat tops, side parts, tapers. Old-school technique with modern precision.',
		price: '$35+',
		duration: '30–45 min',
		icon: 'barber-pole'
	},
	{
		slug: 'house-call',
		title: 'House call',
		description: 'Can not make it to the shop? DM on Instagram for availability and pricing on mobile cuts.',
		price: 'Custom',
		duration: 'Varies',
		icon: 'house'
	},
	{
		slug: 'hot-towel',
		title: 'Hot towel shave',
		description: 'Full straight-razor shave with hot towel prep, pre-shave oil, and aftershave balm.',
		price: '$30+',
		duration: '30 min',
		icon: 'towel'
	}
];
