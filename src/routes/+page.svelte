<script lang="ts">
	import PixelLabel from '$lib/components/PixelLabel.svelte';
	import PixelDivider from '$lib/components/PixelDivider.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import GalleryFrame from '$lib/components/GalleryFrame.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import { services } from '$lib/data/services';
	import { galleryItems } from '$lib/data/gallery';

	const topServices = services.slice(0, 4);
	const previewGallery = galleryItems.slice(0, 4);
</script>

<svelte:head>
	<title>Spurgeon's Barber — Stay Sharp | Kelowna barber</title>
	<meta name="description" content="Spurgeon's Barber — Kelowna's geekiest barber. Jordan Killam specializes in curly hair and traditional styles at Good Vibes Barbershop. Book your cut today." />
	<meta property="og:title" content="Spurgeon's Barber — Stay Sharp" />
	<meta property="og:description" content="Kelowna's geekiest barber. Curly hair, traditional styles, house calls." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://spurgeons-barber.pages.dev" />
	<link rel="canonical" href="https://spurgeons-barber.pages.dev" />
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="hero-scanlines" aria-hidden="true"></div>
	<div class="container hero-inner">
		<div class="hero-content">
			<PixelLabel text="Kelowna barber" />
			<h1>
				The geek<br />with the sleek<span class="pixel-cursor" aria-hidden="true"></span>
			</h1>
			<p class="hero-sub">
				Precision cuts from a competition-trained barber who geeks out on craft. Curly hair specialist. Traditional styles expert. Based at Good Vibes Barbershop, Kelowna.
			</p>
			<div class="hero-actions">
				<a href="/book" class="btn btn-primary">Book a cut</a>
				<a href="/gallery" class="btn btn-outline">See my work</a>
			</div>
		</div>
		<div class="hero-art" aria-hidden="true">
			<div class="pixel-barber-pole">
				{#each Array(12) as _, i}
					<div class="pole-segment" style="--i: {i}"></div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Services Preview -->
<section class="section">
	<div class="container">
		<ScrollReveal>
			<PixelLabel text="Services" />
			<h2>What I do</h2>
			<p class="section-sub">Specializing in curly hair and traditional styles. Every cut is a craft.</p>
		</ScrollReveal>
		<div class="services-grid">
			{#each topServices as service, i}
				<ScrollReveal delay={i * 120}>
					<ServiceCard {service} index={i} />
				</ScrollReveal>
			{/each}
		</div>
		<div class="section-link">
			<a href="/services" class="btn btn-outline">All services &amp; pricing</a>
		</div>
	</div>
</section>

<!-- Stay Sharp Statement -->
<section class="stay-sharp">
	<div class="container stay-sharp-inner">
		<ScrollReveal pixel>
			<p class="stay-sharp-text">STAY SHARP</p>
		</ScrollReveal>
		<ScrollReveal>
			<p class="stay-sharp-desc">
				A good haircut is not just about looking right — it is about feeling like yourself. I bring competition-level technique, genuine care for your hair, and a space where everyone is welcome. No egos. Just craft.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- About Preview -->
<section class="section">
	<div class="container about-preview">
		<ScrollReveal>
			<div class="about-image">
				<div class="about-placeholder">
					<span class="placeholder-label">JORDAN</span>
				</div>
			</div>
		</ScrollReveal>
		<ScrollReveal delay={150}>
			<div class="about-text">
				<PixelLabel text="About" />
				<h2>The barber behind the brand</h2>
				<p>
					West coast roots. ABA Canada top-5 junior barber. Self-described geek. Jordan Killam moved from Ontario to Kelowna to build something personal — a barber brand that mixes precision craft with personality.
				</p>
				<p>
					When he is not behind the chair, you will find him burning wood art, shooting hoops, or deep in a retro game.
				</p>
				<a href="/about" class="btn btn-outline">Read my story</a>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- Gallery Preview -->
<section class="section gallery-section">
	<div class="container">
		<ScrollReveal>
			<PixelLabel text="Gallery" />
			<h2>The work</h2>
		</ScrollReveal>
		<div class="gallery-scroll">
			{#each previewGallery as item}
				<GalleryFrame {item} />
			{/each}
		</div>
		<div class="section-link">
			<a href="/gallery" class="btn btn-outline">See more work</a>
		</div>
	</div>
</section>

<!-- CTA -->
<CTA heading="Ready for a fresh cut?" text="Book through Instagram DM or walk in at Good Vibes Barbershop, Monday through Friday." />

<style>
	/* Hero */
	.hero {
		position: relative;
		padding: 120px 0 var(--section-padding);
		overflow: hidden;
		min-height: 85dvh;
		display: flex;
		align-items: center;
	}

	.hero-scanlines {
		position: absolute;
		inset: 0;
		background: repeating-linear-gradient(
			0deg,
			transparent,
			transparent 2px,
			rgba(0, 0, 0, 0.03) 2px,
			rgba(0, 0, 0, 0.03) 4px
		);
		pointer-events: none;
		z-index: 2;
	}

	.hero-inner {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 64px;
		align-items: center;
		position: relative;
		z-index: 3;
	}

	.hero-content h1 {
		margin-bottom: 24px;
	}

	.pixel-cursor {
		display: inline-block;
		width: 8px;
		height: 0.85em;
		background: var(--accent);
		margin-left: 4px;
		vertical-align: baseline;
		animation: blink 1s steps(1) infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	.hero-sub {
		font-size: 17px;
		color: var(--text-secondary);
		max-width: 520px;
		margin-bottom: 32px;
		line-height: 1.7;
	}

	.hero-actions {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
	}

	.hero-art {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pixel-barber-pole {
		display: flex;
		flex-direction: column;
		width: 80px;
		gap: 0;
		border: 3px solid var(--border-default);
		overflow: hidden;
		animation: pole-spin 4s linear infinite;
	}

	.pole-segment {
		height: 24px;
		background: var(--bg-tertiary);
	}

	.pole-segment:nth-child(3n+1) { background: var(--accent); }
	.pole-segment:nth-child(3n+2) { background: var(--bg-cream); }
	.pole-segment:nth-child(3n) { background: #e53e3e; }

	@keyframes pole-spin {
		from { transform: translateY(0); }
		to { transform: translateY(-72px); }
	}

	/* Services */
	.services-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-top: 40px;
	}

	.section-sub {
		color: var(--text-secondary);
		margin-top: 12px;
		max-width: 520px;
	}

	.section-link {
		margin-top: 40px;
		text-align: center;
	}

	/* Stay Sharp */
	.stay-sharp {
		background: var(--bg-cream);
		padding: var(--section-padding) 0;
		text-align: center;
	}

	.stay-sharp-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}

	.stay-sharp-text {
		font-family: var(--font-pixel);
		font-size: clamp(24px, 5vw, 48px);
		color: var(--text-on-cream);
		letter-spacing: 0.05em;
	}

	.stay-sharp-desc {
		font-size: 18px;
		color: var(--text-on-cream);
		max-width: 600px;
		line-height: 1.8;
		opacity: 0.8;
	}

	/* About Preview */
	.about-preview {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 64px;
		align-items: center;
	}

	.about-image {
		border: 3px solid var(--border-default);
	}

	.about-placeholder {
		aspect-ratio: 3 / 4;
		background: var(--bg-tertiary);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder-label {
		font-family: var(--font-pixel);
		font-size: 14px;
		color: rgba(245, 240, 232, 0.1);
		letter-spacing: 0.15em;
	}

	.about-text {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.about-text p {
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.about-text .btn {
		align-self: flex-start;
		margin-top: 8px;
	}

	/* Gallery Preview */
	.gallery-scroll {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		margin-top: 40px;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.hero-inner {
			grid-template-columns: 1fr;
			gap: 48px;
		}

		.hero-art {
			display: none;
		}

		.hero {
			min-height: auto;
			padding: 100px 0 64px;
		}
	}

	@media (max-width: 735px) {
		.services-grid {
			grid-template-columns: 1fr;
		}

		.about-preview {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.gallery-scroll {
			grid-template-columns: 1fr 1fr;
			gap: 12px;
		}
	}

	@media (max-width: 480px) {
		.gallery-scroll {
			grid-template-columns: 1fr;
		}
	}
</style>
