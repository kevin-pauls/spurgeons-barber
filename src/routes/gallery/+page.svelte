<script lang="ts">
	import PixelLabel from '$lib/components/PixelLabel.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import GalleryFrame from '$lib/components/GalleryFrame.svelte';
	import { galleryItems } from '$lib/data/gallery';
</script>

<svelte:head>
	<title>Gallery — Spurgeon's Barber | Kelowna</title>
	<meta name="description" content="Browse Jordan Killam's work — fresh fades, curly masterpieces, classic tapers, and more. Precision barber cuts from Kelowna's geekiest barber." />
	<meta property="og:title" content="Gallery — Spurgeon's Barber" />
	<meta property="og:description" content="Fresh fades, curly work, classic styles. See the craft." />
	<link rel="canonical" href="https://spurgeons-barber.pages.dev/gallery" />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<PixelLabel text="Gallery" />
		<h1>The work</h1>
		<p class="hero-sub">
			Every cut tells a story. Here is a sample — follow me on Instagram for the full portfolio.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="gallery-grid">
			{#each galleryItems as item, i}
				<ScrollReveal delay={i * 80}>
					<GalleryFrame {item} />
				</ScrollReveal>
			{/each}
		</div>

		<div class="instagram-cta">
			<ScrollReveal>
				<div class="insta-box">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
					</svg>
					<div class="insta-text">
						<h3>See more on Instagram</h3>
						<p>Fresh work, behind the chair content, and the occasional retro game clip.</p>
					</div>
					<a href="https://www.instagram.com/spurgeons_barber/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
						@spurgeons_barber
					</a>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<style>
	.page-hero {
		padding: 100px 0 48px;
	}

	.page-hero h1 {
		margin-top: 8px;
	}

	.hero-sub {
		color: var(--text-secondary);
		max-width: 480px;
		margin-top: 16px;
		font-size: 17px;
		line-height: 1.7;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	.gallery-grid > :global(:nth-child(3)) {
		grid-column: span 2;
	}

	.instagram-cta {
		margin-top: 64px;
	}

	.insta-box {
		display: flex;
		align-items: center;
		gap: 24px;
		padding: 32px;
		border: 2px solid var(--border-default);
		background: var(--bg-secondary);
	}

	.insta-box svg {
		color: var(--accent);
		flex-shrink: 0;
	}

	.insta-text {
		flex: 1;
	}

	.insta-text h3 {
		font-size: 18px;
		margin-bottom: 4px;
	}

	.insta-text p {
		font-size: 14px;
		color: var(--text-secondary);
	}

	@media (max-width: 735px) {
		.gallery-grid {
			grid-template-columns: 1fr;
		}

		.gallery-grid > :global(:nth-child(3)) {
			grid-column: span 1;
		}

		.insta-box {
			flex-direction: column;
			text-align: center;
			gap: 16px;
		}

		.page-hero {
			padding: 80px 0 32px;
		}
	}
</style>
