<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BarberShop",
		"name": "Spurgeon's Barber",
		"description": "Expert barber services in Kelowna, BC. Specializing in curly hair and traditional styles.",
		"url": "https://spurgeons-barber.pages.dev",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "2995 Pandosy St",
			"addressLocality": "Kelowna",
			"addressRegion": "BC",
			"postalCode": "V1Y 1W1",
			"addressCountry": "CA"
		},
		"geo": { "@type": "GeoCoordinates", "latitude": 49.8755, "longitude": -119.4876 },
		"openingHoursSpecification": [
			{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "16:00" }
		],
		"priceRange": "$$",
		"aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "50" },
		"founder": { "@type": "Person", "name": "Jordan Killam" },
		"slogan": "Stay Sharp",
		"areaServed": "Kelowna"
	})}</script>`}
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global(:root) {
		--bg-primary: #1a1a1a;
		--bg-secondary: #222222;
		--bg-tertiary: #2a2a2a;
		--bg-elevated: #333333;
		--bg-cream: #F5F0E8;
		--bg-cream-dark: #E8E0D4;

		--accent: #39FF14;
		--accent-dim: rgba(57, 255, 20, 0.15);
		--accent-border: rgba(57, 255, 20, 0.3);

		--text-primary: #F5F0E8;
		--text-secondary: #b8b0a4;
		--text-tertiary: #7a7168;
		--text-accent: var(--accent);
		--text-on-cream: #1a1a1a;

		--border-subtle: rgba(245, 240, 232, 0.08);
		--border-default: rgba(245, 240, 232, 0.15);
		--border-hover: rgba(245, 240, 232, 0.25);
		--border-accent: var(--accent-border);

		--font-display: 'Clash Display', 'Space Grotesk', system-ui, sans-serif;
		--font-primary: 'Space Grotesk', system-ui, sans-serif;
		--font-pixel: 'Press Start 2P', monospace;

		--section-padding: 100px;
		--section-padding-sm: 64px;
		--max-width: 1200px;
		--header-height: 72px;
		--container-padding: 24px;

		--radius-sm: 4px;
		--radius-md: 8px;

		--shadow-card: 4px 4px 0 rgba(245, 240, 232, 0.1);
		--shadow-card-hover: 6px 6px 0 var(--accent-dim);
		--shadow-brutal: 4px 4px 0 var(--accent);

		--transition-fast: 0.15s ease;
		--transition-normal: 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		--transition-slow: 0.5s cubic-bezier(0.16, 1, 0.3, 1);

		--pixel: 4px;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: var(--font-primary);
		font-size: 16px;
		line-height: 1.7;
		color: var(--text-primary);
		background: var(--bg-primary);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: var(--font-display);
		line-height: 1.15;
		margin: 0;
	}

	:global(h1) {
		font-size: clamp(38px, 6vw, 72px);
		font-weight: 700;
		letter-spacing: -0.03em;
	}

	:global(h2) {
		font-size: clamp(28px, 4vw, 48px);
		font-weight: 600;
		letter-spacing: -0.02em;
	}

	:global(h3) {
		font-size: clamp(20px, 2.5vw, 28px);
		font-weight: 600;
	}

	:global(p) {
		margin: 0;
	}

	:global(a) {
		color: inherit;
	}

	:global(img) {
		max-width: 100%;
		display: block;
	}

	:global(.container) {
		width: 100%;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
	}

	:global(.section) {
		padding: var(--section-padding) 0;
	}

	:global(.sr-only) {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	:global(.btn) {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 14px 28px;
		font-family: var(--font-primary);
		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		border: 2px solid;
		cursor: pointer;
		transition: all var(--transition-normal);
		position: relative;
	}

	:global(.btn-primary) {
		background: var(--accent);
		color: var(--bg-primary);
		border-color: var(--accent);
		box-shadow: var(--shadow-brutal);
	}

	:global(.btn-primary:hover) {
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 var(--accent);
	}

	:global(.btn-primary:active) {
		transform: translate(2px, 2px);
		box-shadow: 0 0 0 var(--accent);
	}

	:global(.btn-outline) {
		background: transparent;
		color: var(--text-primary);
		border-color: var(--text-primary);
		box-shadow: var(--shadow-card);
	}

	:global(.btn-outline:hover) {
		transform: translate(-2px, -2px);
		box-shadow: 6px 6px 0 rgba(245, 240, 232, 0.15);
		border-color: var(--accent);
		color: var(--accent);
	}

	:global(.btn-outline:active) {
		transform: translate(2px, 2px);
		box-shadow: none;
	}

	main {
		padding-top: var(--header-height);
		min-height: 100dvh;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(*, *::before, *::after) {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	@media (max-width: 735px) {
		:global(:root) {
			--section-padding: var(--section-padding-sm);
			--container-padding: 20px;
		}
	}
</style>
