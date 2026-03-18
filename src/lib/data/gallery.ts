export interface GalleryItem {
	id: string;
	title: string;
	aspect: 'portrait' | 'landscape' | 'square';
	color: string;
}

export const galleryItems: GalleryItem[] = [
	{ id: 'g1', title: 'Fresh fade', aspect: 'portrait', color: '#2a4a3a' },
	{ id: 'g2', title: 'Curly masterpiece', aspect: 'square', color: '#3a2a4a' },
	{ id: 'g3', title: 'Classic taper', aspect: 'landscape', color: '#4a3a2a' },
	{ id: 'g4', title: 'Textured crop', aspect: 'portrait', color: '#2a3a4a' },
	{ id: 'g5', title: 'Pompadour', aspect: 'square', color: '#4a4a2a' },
	{ id: 'g6', title: 'Beard sculpt', aspect: 'landscape', color: '#3a4a3a' },
	{ id: 'g7', title: 'Skin fade', aspect: 'portrait', color: '#4a2a3a' },
	{ id: 'g8', title: 'Mullet revival', aspect: 'square', color: '#2a4a4a' }
];
