import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://spurgeons-barber.pages.dev';
	const pages = [
		{ path: '', priority: '1.0', changefreq: 'weekly' },
		{ path: '/services', priority: '0.9', changefreq: 'monthly' },
		{ path: '/about', priority: '0.7', changefreq: 'monthly' },
		{ path: '/gallery', priority: '0.7', changefreq: 'weekly' },
		{ path: '/book', priority: '0.9', changefreq: 'monthly' },
		{ path: '/contact', priority: '0.8', changefreq: 'monthly' }
	];

	const today = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};

export const prerender = true;
