<script lang="ts">
	import PixelLabel from '$lib/components/PixelLabel.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import PixelDivider from '$lib/components/PixelDivider.svelte';
	import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
	<title>About Jordan Killam — Spurgeon's Barber | Kelowna</title>
	<meta name="description" content="Meet Jordan Killam — ABA Canada top-5 junior barber, curly hair specialist, and self-described geek. From the west coast to Kelowna, building a barber brand rooted in craft." />
	<meta property="og:title" content="About Jordan — Spurgeon's Barber" />
	<meta property="og:description" content="Competition barber. Curly hair specialist. The geek with the sleek mullet." />
	<link rel="canonical" href="https://spurgeons-barber.pages.dev/about" />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<PixelLabel text="About" />
		<h1>The geek with the sleek mullet</h1>
	</div>
</section>

<section class="section">
	<div class="container story-grid">
		<ScrollReveal>
			<div class="story-image">
				<div class="story-placeholder">
					<span class="placeholder-label">PORTRAIT</span>
				</div>
			</div>
		</ScrollReveal>
		<div class="story-text">
			<ScrollReveal>
				<h2>How I got here</h2>
				<p>
					I am a west coast kid who found barbering through a love of working with my hands. Before Kelowna, I was cutting at Limitless Barbers in London, Ontario — learning the fundamentals, building my speed, and figuring out what kind of barber I wanted to be.
				</p>
			</ScrollReveal>
			<ScrollReveal>
				<p>
					Then came the ABA Canada Barber Challenge. Five junior barbers from across the country, competing head to head. I finished in the top five — and that experience confirmed everything. This is not a job. It is what I am built for.
				</p>
			</ScrollReveal>
			<ScrollReveal>
				<p>
					I moved to Kelowna to start something new. Now I am at Good Vibes Barbershop on Pandosy Street, doing what I love: precision cuts, curly hair work, and making sure every person who sits in my chair leaves feeling like the best version of themselves.
				</p>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- Credentials -->
<section class="section credentials-section">
	<div class="container">
		<ScrollReveal>
			<PixelLabel text="Credentials" />
		</ScrollReveal>
		<div class="credentials-grid">
			<ScrollReveal delay={0}>
				<div class="credential-card">
					<span class="credential-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
						</svg>
					</span>
					<h3>ABA Canada top 5</h3>
					<p>National junior barber competition finalist. Tested against the best young barbers in the country.</p>
				</div>
			</ScrollReveal>
			<ScrollReveal delay={120}>
				<div class="credential-card">
					<span class="credential-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
						</svg>
					</span>
					<h3>Curly hair specialist</h3>
					<p>Trained in curl-by-curl technique for every pattern — from loose waves to tight coils. Your curls are safe here.</p>
				</div>
			</ScrollReveal>
			<ScrollReveal delay={240}>
				<div class="credential-card">
					<span class="credential-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18"/>
						</svg>
					</span>
					<h3>Traditional styles expert</h3>
					<p>Pompadours, flat tops, classic tapers, side parts. Old-school technique executed with modern precision.</p>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- Pyrography / Craft -->
<section class="section craft-section">
	<div class="container craft-inner">
		<ScrollReveal>
			<PixelLabel text="Beyond the chair" />
			<h2>Craft runs deeper than hair</h2>
		</ScrollReveal>
		<ScrollReveal>
			<div class="craft-content">
				<p>
					When I am not behind the chair, I am probably burning wood. Pyrography — wood burning art — gives me the same focused energy as barbering. The same patience. The same attention to detail. You block out the world and just make something.
				</p>
				<p>
					Basketball is the opposite. All energy, all instinct. Between the precision of cutting and burning and the chaos of the court, I stay balanced.
				</p>
				<p>
					And yeah — the "geek" part is real. Video games, retro consoles, pixel art. The 8-bit aesthetic you see on this site is not just a design choice. It is who I am.
				</p>
			</div>
		</ScrollReveal>
	</div>
</section>

<CTA heading="Ready to experience the craft?" text="Book a cut and see the difference precision makes." />

<style>
	.page-hero {
		padding: 100px 0 48px;
	}

	.page-hero h1 {
		margin-top: 8px;
		max-width: 700px;
	}

	.story-grid {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 64px;
		align-items: start;
	}

	.story-image {
		border: 3px solid var(--border-default);
		position: sticky;
		top: calc(var(--header-height) + 24px);
	}

	.story-placeholder {
		aspect-ratio: 3 / 4;
		background: var(--bg-tertiary);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder-label {
		font-family: var(--font-pixel);
		font-size: 12px;
		color: rgba(245, 240, 232, 0.1);
		letter-spacing: 0.15em;
	}

	.story-text {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.story-text h2 {
		margin-bottom: 8px;
	}

	.story-text p {
		color: var(--text-secondary);
		line-height: 1.8;
	}

	/* Credentials */
	.credentials-section {
		background: var(--bg-secondary);
		border-top: 2px solid var(--border-default);
		border-bottom: 2px solid var(--border-default);
	}

	.credentials-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 32px;
	}

	.credential-card {
		border: 2px solid var(--border-default);
		padding: 32px;
		transition: all var(--transition-normal);
	}

	.credential-card:hover {
		border-color: var(--accent-border);
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-brutal);
	}

	.credential-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border: 2px solid var(--accent-border);
		background: var(--accent-dim);
		color: var(--accent);
		margin-bottom: 20px;
	}

	.credential-card h3 {
		font-size: 18px;
		margin-bottom: 8px;
	}

	.credential-card p {
		font-size: 14px;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	/* Craft */
	.craft-section {
		position: relative;
	}

	.craft-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: repeating-linear-gradient(
			87deg,
			transparent,
			transparent 30px,
			rgba(139, 90, 43, 0.03) 30px,
			rgba(139, 90, 43, 0.03) 31px
		);
		pointer-events: none;
	}

	.craft-inner {
		position: relative;
		z-index: 1;
	}

	.craft-content {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 700px;
		margin-top: 24px;
	}

	.craft-content p {
		color: var(--text-secondary);
		line-height: 1.8;
	}

	@media (max-width: 735px) {
		.story-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.story-image {
			position: static;
		}

		.credentials-grid {
			grid-template-columns: 1fr;
		}

		.page-hero {
			padding: 80px 0 32px;
		}
	}
</style>
