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
			<h1>Spurgeon's Barber</h1>
			<p class="hero-tagline">The geek with the sleek mullet<span class="pixel-cursor" aria-hidden="true"></span></p>
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
				<!-- Pixel art scissors — 24x24 grid, clearly recognizable -->
				<svg class="pixel-scissors" width="192" height="192" viewBox="0 0 24 24" shape-rendering="crispEdges">
					<!-- Left handle (ring) -->
					<rect x="1" y="15" width="1" height="1" fill="var(--brown)"/>
					<rect x="0" y="16" width="1" height="2" fill="var(--brown)"/>
					<rect x="1" y="18" width="1" height="1" fill="var(--brown)"/>
					<rect x="2" y="15" width="1" height="1" fill="var(--brown)"/>
					<rect x="3" y="16" width="1" height="2" fill="var(--brown)"/>
					<rect x="2" y="18" width="1" height="1" fill="var(--brown)"/>
					<!-- Left handle fill -->
					<rect x="1" y="16" width="2" height="2" fill="var(--accent-dim)"/>
					<!-- Left blade -->
					<rect x="3" y="14" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="4" y="13" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="5" y="12" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="6" y="11" width="2" height="1" fill="var(--text-primary)"/>
					<rect x="8" y="10" width="2" height="1" fill="var(--text-primary)"/>
					<rect x="10" y="9" width="1" height="1" fill="var(--text-primary)"/>
					<!-- Left blade edge highlight -->
					<rect x="4" y="14" width="1" height="1" fill="var(--accent-border)"/>
					<rect x="5" y="13" width="1" height="1" fill="var(--accent-border)"/>
					<rect x="6" y="12" width="2" height="1" fill="var(--accent-border)"/>
					<rect x="8" y="11" width="2" height="1" fill="var(--accent-border)"/>
					<rect x="10" y="10" width="1" height="1" fill="var(--accent-border)"/>
					<!-- Pivot screw -->
					<rect x="11" y="9" width="2" height="2" fill="var(--accent)"/>
					<!-- Right blade -->
					<rect x="13" y="9" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="14" y="10" width="2" height="1" fill="var(--text-primary)"/>
					<rect x="16" y="11" width="2" height="1" fill="var(--text-primary)"/>
					<rect x="18" y="12" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="19" y="13" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="20" y="14" width="1" height="1" fill="var(--text-primary)"/>
					<!-- Right blade edge highlight -->
					<rect x="13" y="10" width="1" height="1" fill="var(--accent-border)"/>
					<rect x="14" y="11" width="2" height="1" fill="var(--accent-border)"/>
					<rect x="16" y="12" width="2" height="1" fill="var(--accent-border)"/>
					<rect x="18" y="13" width="1" height="1" fill="var(--accent-border)"/>
					<rect x="19" y="14" width="1" height="1" fill="var(--accent-border)"/>
					<!-- Right handle (ring) -->
					<rect x="21" y="15" width="1" height="1" fill="var(--brown)"/>
					<rect x="22" y="16" width="2" height="2" fill="var(--brown)"/>
					<rect x="21" y="18" width="1" height="1" fill="var(--brown)"/>
					<rect x="20" y="15" width="1" height="1" fill="var(--brown)"/>
					<rect x="20" y="18" width="1" height="1" fill="var(--brown)"/>
					<!-- Right handle fill -->
					<rect x="21" y="16" width="1" height="2" fill="var(--accent-dim)"/>
					<!-- Blades top (V shape closing toward pivot) -->
					<rect x="10" y="8" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="9" y="7" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="8" y="6" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="7" y="5" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="13" y="8" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="14" y="7" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="15" y="6" width="1" height="1" fill="var(--text-primary)"/>
					<rect x="16" y="5" width="1" height="1" fill="var(--text-primary)"/>
					<!-- Blade tips -->
					<rect x="6" y="4" width="1" height="1" fill="var(--accent)"/>
					<rect x="17" y="4" width="1" height="1" fill="var(--accent)"/>
				</svg>
				<!-- Pixel art comb -->
				<svg class="pixel-comb" width="160" height="56" viewBox="0 0 20 7" shape-rendering="crispEdges">
					<!-- Spine -->
					<rect x="0" y="0" width="20" height="2" fill="var(--brown)"/>
					<rect x="0" y="2" width="20" height="1" fill="var(--accent-border)"/>
					<!-- Teeth (long) -->
					<rect x="1" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="3" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="5" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="7" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="9" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="11" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="13" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="15" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="17" y="3" width="1" height="4" fill="var(--accent)"/>
					<rect x="19" y="3" width="1" height="3" fill="var(--accent)"/>
					<!-- Teeth (short, between long) -->
					<rect x="2" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="4" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="6" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="8" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="10" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="12" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="14" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="16" y="3" width="1" height="2" fill="var(--accent-border)"/>
					<rect x="18" y="3" width="1" height="2" fill="var(--accent-border)"/>
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
		margin-bottom: 12px;
	}

	.hero-tagline {
		font-family: var(--font-display);
		font-size: clamp(20px, 3vw, 28px);
		color: var(--accent);
		margin-bottom: 24px;
		font-weight: 600;
	}

	.pixel-cursor {
		display: inline-block;
		width: 6px;
		height: 0.8em;
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
		animation: scissors-float 4s ease-in-out infinite;
		filter: drop-shadow(4px 4px 0 rgba(26, 17, 8, 0.4));
	}

	@keyframes scissors-float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-8px) rotate(3deg); }
	}

	.pixel-comb {
		animation: comb-float 5s ease-in-out infinite;
		filter: drop-shadow(4px 4px 0 rgba(26, 17, 8, 0.4));
	}

	@keyframes comb-float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-6px) rotate(-2deg); }
	}

	.sparkle {
		position: absolute;
		width: 6px;
		height: 6px;
		background: var(--accent);
		animation: sparkle-blink 2s ease-in-out infinite;
	}

	.s1 { top: 10px; right: 20px; animation-delay: 0s; }
	.s2 { bottom: 20px; left: 10px; animation-delay: 0.7s; }
	.s3 { top: 45%; right: 5px; animation-delay: 1.3s; }

	@keyframes sparkle-blink {
		0%, 100% { opacity: 0.2; transform: scale(1); }
		50% { opacity: 1; transform: scale(1.5); }
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
