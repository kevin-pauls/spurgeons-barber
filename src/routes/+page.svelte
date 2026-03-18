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
	<title>Spurgeon's Barber — Get a Haircut | Kelowna barber</title>
	<meta name="description" content="Spurgeon's Barber — Kelowna's geekiest barber. Jordan Killam specializes in curly hair and traditional styles at Good Vibes Barbershop. Book your cut today." />
	<meta property="og:title" content="Spurgeon's Barber — Get a Haircut" />
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
				The geek<br />with the sleek mullet<span class="pixel-cursor" aria-hidden="true"></span>
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
			<div class="pixel-scene">
				<!-- Pixel art scissors -->
				<svg class="pixel-scissors" width="120" height="120" viewBox="0 0 16 16" shape-rendering="crispEdges">
					<!-- Handle left -->
					<rect x="1" y="10" width="2" height="2" fill="var(--accent)"/>
					<rect x="2" y="11" width="2" height="2" fill="var(--accent)"/>
					<rect x="3" y="12" width="2" height="2" fill="var(--accent)"/>
					<rect x="0" y="11" width="2" height="2" fill="var(--brown)"/>
					<rect x="1" y="12" width="2" height="1" fill="var(--brown)"/>
					<!-- Blade left -->
					<rect x="4" y="9" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="5" y="8" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="6" y="7" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="7" y="6" width="1" height="1" fill="var(--text-primary)"/>
					<!-- Pivot -->
					<rect x="7" y="7" width="2" height="2" fill="var(--accent)"/>
					<!-- Blade right -->
					<rect x="9" y="6" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="10" y="7" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="11" y="8" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="12" y="9" width="1" height="1" fill="var(--text-primary)"/>
					<!-- Handle right -->
					<rect x="13" y="10" width="2" height="2" fill="var(--accent)"/>
					<rect x="12" y="11" width="2" height="2" fill="var(--accent)"/>
					<rect x="14" y="11" width="2" height="2" fill="var(--brown)"/>
					<rect x="13" y="12" width="2" height="1" fill="var(--brown)"/>
				</svg>
				<!-- Pixel art comb -->
				<svg class="pixel-comb" width="100" height="60" viewBox="0 0 16 8" shape-rendering="crispEdges">
					<!-- Spine -->
					<rect x="1" y="0" width="14" height="2" fill="var(--brown)"/>
					<!-- Teeth -->
					<rect x="2" y="2" width="1" height="4" fill="var(--accent)"/>
					<rect x="4" y="2" width="1" height="4" fill="var(--accent)"/>
					<rect x="6" y="2" width="1" height="4" fill="var(--accent)"/>
					<rect x="8" y="2" width="1" height="4" fill="var(--accent)"/>
					<rect x="10" y="2" width="1" height="4" fill="var(--accent)"/>
					<rect x="12" y="2" width="1" height="4" fill="var(--accent)"/>
					<rect x="14" y="2" width="1" height="3" fill="var(--accent)"/>
					<!-- Short teeth -->
					<rect x="3" y="2" width="1" height="3" fill="var(--accent-border)"/>
					<rect x="5" y="2" width="1" height="3" fill="var(--accent-border)"/>
					<rect x="7" y="2" width="1" height="3" fill="var(--accent-border)"/>
					<rect x="9" y="2" width="1" height="3" fill="var(--accent-border)"/>
					<rect x="11" y="2" width="1" height="3" fill="var(--accent-border)"/>
					<rect x="13" y="2" width="1" height="3" fill="var(--accent-border)"/>
				</svg>
				<!-- Sparkle pixels -->
				<div class="sparkle s1"></div>
				<div class="sparkle s2"></div>
				<div class="sparkle s3"></div>
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

<!-- Get a Haircut Statement -->
<section class="tagline-band">
	<div class="container tagline-inner">
		<ScrollReveal pixel>
			<p class="tagline-text">GET A HAIRCUT</p>
		</ScrollReveal>
		<ScrollReveal>
			<p class="tagline-desc">
				A good haircut is not just about looking right — it is about feeling like yourself. I bring competition-level technique, genuine care for your hair, and a space where everyone is welcome. No egos. Just craft.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Reviews -->
<section class="section reviews-section">
	<div class="container">
		<ScrollReveal>
			<PixelLabel text="Reviews" />
			<h2>What clients say</h2>
		</ScrollReveal>
		<div class="reviews-grid">
			<ScrollReveal delay={0}>
				<div class="review-card featured">
					<div class="review-stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
					<blockquote>"Jordan is hands down the best barber. Extremely talented, very passionate — takes time to make you comfortable and gives expert styling advice."</blockquote>
					<cite>Google Review · Limitless Barbers, London ON</cite>
				</div>
			</ScrollReveal>
			<ScrollReveal delay={120}>
				<div class="review-card">
					<div class="review-stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
					<blockquote>"Precise cuts and incredible attention to detail. Modern, sharp styles every single time. I specifically ask for Jordan."</blockquote>
					<cite>Google Review · Man Made Barbershop, Kelowna BC</cite>
				</div>
			</ScrollReveal>
			<ScrollReveal delay={240}>
				<div class="review-card">
					<div class="review-stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
					<blockquote>"Top-notch quality — I could confidently say it is one of, if not my best haircut, ever."</blockquote>
					<cite>Blake Carstensen · Good Vibes Barbershop</cite>
				</div>
			</ScrollReveal>
		</div>
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

	.pixel-scene {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		position: relative;
		padding: 40px;
	}

	.pixel-scissors {
		animation: scissors-snip 2s steps(3) infinite;
		filter: drop-shadow(3px 3px 0 rgba(26, 17, 8, 0.5));
	}

	@keyframes scissors-snip {
		0%, 100% { transform: rotate(0deg); }
		25% { transform: rotate(-8deg); }
		50% { transform: rotate(0deg); }
		75% { transform: rotate(8deg); }
	}

	.pixel-comb {
		animation: comb-slide 3s steps(6) infinite;
		filter: drop-shadow(3px 3px 0 rgba(26, 17, 8, 0.5));
	}

	@keyframes comb-slide {
		0%, 100% { transform: translateX(0); }
		50% { transform: translateX(12px); }
	}

	.sparkle {
		position: absolute;
		width: 6px;
		height: 6px;
		background: var(--accent);
		animation: sparkle-blink 1.5s steps(1) infinite;
	}

	.s1 { top: 20px; right: 30px; animation-delay: 0s; }
	.s2 { bottom: 30px; left: 20px; animation-delay: 0.5s; }
	.s3 { top: 50%; right: 15px; animation-delay: 1s; }

	@keyframes sparkle-blink {
		0%, 40% { opacity: 1; }
		50%, 90% { opacity: 0; }
		100% { opacity: 1; }
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

	/* Tagline Band */
	.tagline-band {
		background: var(--bg-cream);
		padding: var(--section-padding) 0;
		text-align: center;
	}

	.tagline-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
	}

	.tagline-text {
		font-family: var(--font-pixel);
		font-size: clamp(24px, 5vw, 48px);
		color: var(--text-on-cream);
		letter-spacing: 0.05em;
	}

	.tagline-desc {
		font-size: 18px;
		color: var(--text-on-cream);
		max-width: 600px;
		line-height: 1.8;
		opacity: 0.8;
	}

	/* Reviews */
	.reviews-section {
		background: var(--bg-secondary);
		border-top: 2px solid var(--border-default);
		border-bottom: 2px solid var(--border-default);
	}

	.reviews-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 40px;
	}

	.review-card {
		border: 2px solid var(--border-default);
		padding: 32px;
		background: var(--bg-primary);
		transition: all var(--transition-normal);
	}

	.review-card.featured {
		border-color: var(--accent-border);
		background: var(--accent-dim);
	}

	.review-card:hover {
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-brutal);
		border-color: var(--accent-border);
	}

	.review-stars {
		color: var(--accent);
		font-size: 16px;
		letter-spacing: 2px;
		margin-bottom: 16px;
	}

	.review-card blockquote {
		font-size: 15px;
		color: var(--text-primary);
		line-height: 1.7;
		margin: 0 0 16px 0;
	}

	.review-card cite {
		font-family: var(--font-pixel);
		font-size: 8px;
		color: var(--text-tertiary);
		letter-spacing: 0.05em;
		font-style: normal;
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
		color: rgba(242, 224, 176, 0.1);
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

	@media (max-width: 900px) {
		.reviews-grid {
			grid-template-columns: 1fr;
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
