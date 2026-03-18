<script lang="ts">
	import PixelLabel from '$lib/components/PixelLabel.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
	<title>Book a cut — Spurgeon's Barber | Kelowna</title>
	<meta name="description" content="Book a haircut with Jordan Killam at Good Vibes Barbershop, 2995 Pandosy St, Kelowna. DM on Instagram, walk in Mon-Fri 8am-4pm, or ask about house calls." />
	<meta property="og:title" content="Book a Cut — Spurgeon's Barber" />
	<meta property="og:description" content="DM, walk in, or request a house call. Mon-Fri 8am-4pm at Good Vibes Barbershop." />
	<link rel="canonical" href="https://spurgeons-barber.pages.dev/book" />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<PixelLabel text="Book" />
		<h1>Book your cut</h1>
		<p class="hero-sub">
			Three ways to get in the chair. Pick whatever works for you.
		</p>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="booking-grid">
			<ScrollReveal delay={0}>
				<a href="https://www.instagram.com/spurgeons_barber/" target="_blank" rel="noopener noreferrer" class="booking-card">
					<div class="card-icon" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="2" width="20" height="20" rx="5"/>
							<circle cx="12" cy="12" r="5"/>
							<circle cx="18" cy="6" r="1.2" fill="currentColor" stroke="none"/>
						</svg>
					</div>
					<h3>DM on Instagram</h3>
					<p>Send a message to @spurgeons_barber with your preferred date and time. I will confirm within a few hours.</p>
					<span class="card-action">Open Instagram</span>
				</a>
			</ScrollReveal>

			<ScrollReveal delay={120}>
				<div class="booking-card">
					<div class="card-icon" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
							<circle cx="12" cy="7" r="4"/>
						</svg>
					</div>
					<h3>Walk in</h3>
					<p>No appointment needed. Show up at Good Vibes Barbershop during my hours and I will fit you in on a first-come basis.</p>
					<div class="walk-in-hours">
						<div class="hours-row">
							<span class="day">MON–FRI</span>
							<span class="time">8:00 AM – 4:00 PM</span>
						</div>
						<div class="hours-row">
							<span class="day">SAT–SUN</span>
							<span class="time">CLOSED</span>
						</div>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={240}>
				<div class="booking-card">
					<div class="card-icon" aria-hidden="true">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
							<polyline points="9 22 9 12 15 12 15 22"/>
						</svg>
					</div>
					<h3>House call</h3>
					<p>Can not make it to the shop? I offer mobile cuts on select days. DM me on Instagram to check availability and get a quote.</p>
					<span class="card-note">Pricing varies by location</span>
				</div>
			</ScrollReveal>
		</div>

		<ScrollReveal>
			<div class="location-box">
				<h3>Where to find me</h3>
				<div class="location-details">
					<div class="location-info">
						<p class="location-name">Good Vibes Barbershop</p>
						<p class="location-address">2995 Pandosy St, Kelowna, BC V1Y 1W1</p>
						<a
							href="https://www.google.com/maps/dir//Good+Vibes+Barbershop+2995+Pandosy+St+Kelowna+BC"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-outline"
						>
							Get directions
						</a>
					</div>
					<div class="location-map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.4!2d-119.4876!3d49.8755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUyJzMxLjgiTiAxMTnCsDI5JzE1LjQiVw!5e0!3m2!1sen!2sca!4v1"
							width="100%"
							height="300"
							style="border:0; filter: grayscale(0.8) contrast(1.1);"
							allowfullscreen
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="Good Vibes Barbershop location"
						></iframe>
					</div>
				</div>
			</div>
		</ScrollReveal>
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

	.booking-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.booking-card {
		border: 2px solid var(--border-default);
		padding: 32px;
		background: var(--bg-secondary);
		transition: all var(--transition-normal);
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: inherit;
		height: 100%;
	}

	a.booking-card:hover {
		border-color: var(--accent-border);
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-brutal);
	}

	.card-icon {
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--accent-border);
		background: var(--accent-dim);
		color: var(--accent);
		margin-bottom: 20px;
	}

	.booking-card h3 {
		font-size: 20px;
		margin-bottom: 12px;
	}

	.booking-card p {
		font-size: 14px;
		color: var(--text-secondary);
		line-height: 1.7;
	}

	.card-action {
		display: inline-block;
		margin-top: auto;
		padding-top: 20px;
		font-family: var(--font-pixel);
		font-size: 10px;
		color: var(--accent);
		letter-spacing: 0.05em;
	}

	.card-note {
		display: block;
		margin-top: auto;
		padding-top: 20px;
		font-size: 13px;
		color: var(--text-tertiary);
		font-style: italic;
	}

	.walk-in-hours {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.hours-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	.day {
		font-family: var(--font-pixel);
		font-size: 9px;
		color: var(--text-primary);
		letter-spacing: 0.05em;
	}

	.time {
		font-size: 13px;
		color: var(--text-secondary);
	}

	/* Location */
	.location-box {
		margin-top: 64px;
		border: 2px solid var(--border-default);
		padding: 40px;
		background: var(--bg-secondary);
	}

	.location-box h3 {
		font-size: 24px;
		margin-bottom: 24px;
	}

	.location-details {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 40px;
		align-items: start;
	}

	.location-name {
		font-weight: 600;
		font-size: 17px;
		margin-bottom: 4px;
	}

	.location-address {
		color: var(--text-secondary);
		margin-bottom: 20px;
		line-height: 1.5;
	}

	.location-map {
		border: 2px solid var(--border-default);
		overflow: hidden;
	}

	@media (max-width: 900px) {
		.booking-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 735px) {
		.location-details {
			grid-template-columns: 1fr;
		}

		.location-box {
			padding: 24px;
		}

		.page-hero {
			padding: 80px 0 32px;
		}
	}
</style>
