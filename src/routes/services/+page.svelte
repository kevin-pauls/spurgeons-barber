<script lang="ts">
	import PixelLabel from '$lib/components/PixelLabel.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import CTA from '$lib/components/CTA.svelte';
	import { services } from '$lib/data/services';
</script>

<svelte:head>
	<title>Services &amp; pricing — Spurgeon's Barber | Kelowna</title>
	<meta name="description" content="Haircuts, beard trims, curly hair specialist services, traditional styles, house calls, and hot towel shaves. Pricing starts at $20. Book with Jordan at Good Vibes Barbershop, Kelowna." />
	<meta property="og:title" content="Services & Pricing — Spurgeon's Barber" />
	<meta property="og:description" content="Precision cuts, curly hair specialist, traditional styles, and more. See full pricing." />
	<link rel="canonical" href="https://spurgeons-barber.pages.dev/services" />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<PixelLabel text="Services & pricing" />
		<h1>What I offer</h1>
		<p class="hero-sub">
			Every cut is personal. Whether you have tight curls, want a classic taper, or need something completely different — I will work with you to find the right style.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="services-grid">
			{#each services as service, i}
				<ScrollReveal delay={i * 100}>
					<ServiceCard {service} index={i} />
				</ScrollReveal>
			{/each}
		</div>

		<div class="pricing-note">
			<ScrollReveal>
				<div class="note-box">
					<h3>A note on pricing</h3>
					<p>
						Prices are starting points. The final cost depends on hair length, complexity, and time. I will always discuss pricing before we start so there are no surprises. Consultations are free.
					</p>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<CTA heading="Ready to book?" text="Slide into my DMs on Instagram or walk in at Good Vibes Barbershop." />

<style>
	.page-hero {
		padding: 100px 0 48px;
	}

	.page-hero h1 {
		margin-top: 8px;
	}

	.hero-sub {
		color: var(--text-secondary);
		max-width: 560px;
		margin-top: 16px;
		font-size: 17px;
		line-height: 1.7;
	}

	.services-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	.pricing-note {
		margin-top: 64px;
	}

	.note-box {
		border: 2px solid var(--border-default);
		border-left: 4px solid var(--accent);
		padding: 32px;
		background: var(--bg-secondary);
	}

	.note-box h3 {
		margin-bottom: 12px;
	}

	.note-box p {
		color: var(--text-secondary);
		line-height: 1.7;
		max-width: 600px;
	}

	@media (max-width: 735px) {
		.services-grid {
			grid-template-columns: 1fr;
		}

		.page-hero {
			padding: 80px 0 32px;
		}
	}
</style>
