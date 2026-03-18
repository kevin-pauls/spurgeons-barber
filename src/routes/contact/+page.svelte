<script lang="ts">
	import PixelLabel from '$lib/components/PixelLabel.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
	<title>Contact — Spurgeon's Barber | Kelowna</title>
	<meta name="description" content="Get in touch with Spurgeon's Barber. Located at Good Vibes Barbershop, 2995 Pandosy St, Kelowna, BC. Open Mon-Fri 8am-4pm. Follow @spurgeons_barber on Instagram." />
	<meta property="og:title" content="Contact — Spurgeon's Barber" />
	<meta property="og:description" content="Good Vibes Barbershop, 2995 Pandosy St, Kelowna. Mon-Fri 8am-4pm." />
	<link rel="canonical" href="https://spurgeons-barber.pages.dev/contact" />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<PixelLabel text="Contact" />
		<h1>Get in touch</h1>
	</div>
</section>

<section class="section">
	<div class="container contact-grid">
		<div class="contact-cards">
			<ScrollReveal>
				<div class="contact-card">
					<div class="card-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
							<circle cx="12" cy="10" r="3"/>
						</svg>
					</div>
					<h3>Location</h3>
					<p class="contact-detail">Good Vibes Barbershop</p>
					<p class="contact-sub">2995 Pandosy St<br/>Kelowna, BC V1Y 1W1</p>
					<a
						href="https://www.google.com/maps/dir//Good+Vibes+Barbershop+2995+Pandosy+St+Kelowna+BC"
						target="_blank"
						rel="noopener noreferrer"
						class="card-link"
					>
						Get directions
					</a>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={100}>
				<div class="contact-card">
					<div class="card-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<path d="M12 6v6l4 2"/>
						</svg>
					</div>
					<h3>Hours</h3>
					<div class="hours-table">
						<div class="hours-row">
							<span class="day">MON</span><span class="time">8:00 AM – 4:00 PM</span>
						</div>
						<div class="hours-row">
							<span class="day">TUE</span><span class="time">8:00 AM – 4:00 PM</span>
						</div>
						<div class="hours-row">
							<span class="day">WED</span><span class="time">8:00 AM – 4:00 PM</span>
						</div>
						<div class="hours-row">
							<span class="day">THU</span><span class="time">8:00 AM – 4:00 PM</span>
						</div>
						<div class="hours-row">
							<span class="day">FRI</span><span class="time">8:00 AM – 4:00 PM</span>
						</div>
						<div class="hours-row closed">
							<span class="day">SAT</span><span class="time">CLOSED</span>
						</div>
						<div class="hours-row closed">
							<span class="day">SUN</span><span class="time">CLOSED</span>
						</div>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={200}>
				<div class="contact-card">
					<div class="card-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
							<rect x="2" y="9" width="4" height="12"/>
							<circle cx="4" cy="4" r="2"/>
						</svg>
					</div>
					<h3>Social</h3>
					<div class="social-list">
						<a href="https://www.instagram.com/spurgeons_barber/" target="_blank" rel="noopener noreferrer" class="social-item">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
							</svg>
							@spurgeons_barber
						</a>
						<a href="https://www.facebook.com/spurgeonsbarber/" target="_blank" rel="noopener noreferrer" class="social-item">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
							</svg>
							Spurgeon's Barber
						</a>
					</div>
				</div>
			</ScrollReveal>
		</div>

		<ScrollReveal delay={150}>
			<div class="map-container">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.4!2d-119.4876!3d49.8755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDUyJzMxLjgiTiAxMTnCsDI5JzE1LjQiVw!5e0!3m2!1sen!2sca!4v1"
					width="100%"
					height="100%"
					style="border:0; filter: grayscale(0.8) contrast(1.1); min-height: 500px;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Good Vibes Barbershop location"
				></iframe>
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

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 32px;
		align-items: start;
	}

	.contact-cards {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.contact-card {
		border: 2px solid var(--border-default);
		padding: 28px;
		background: var(--bg-secondary);
	}

	.card-icon {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid var(--accent-border);
		background: var(--accent-dim);
		color: var(--accent);
		margin-bottom: 16px;
	}

	.contact-card h3 {
		font-size: 18px;
		margin-bottom: 12px;
	}

	.contact-detail {
		font-weight: 600;
		font-size: 16px;
		margin-bottom: 4px;
	}

	.contact-sub {
		color: var(--text-secondary);
		font-size: 14px;
		line-height: 1.5;
		margin-bottom: 16px;
	}

	.card-link {
		font-family: var(--font-pixel);
		font-size: 10px;
		color: var(--accent);
		text-decoration: none;
		letter-spacing: 0.05em;
		transition: opacity var(--transition-fast);
	}

	.card-link:hover {
		opacity: 0.8;
	}

	.hours-table {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.hours-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 4px 0;
		border-bottom: 1px solid var(--border-subtle);
	}

	.hours-row:last-child {
		border-bottom: none;
	}

	.hours-row.closed .time {
		color: var(--text-tertiary);
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

	.social-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.social-item {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: 14px;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.social-item:hover {
		color: var(--accent);
	}

	.map-container {
		border: 3px solid var(--border-default);
		overflow: hidden;
		height: 100%;
		min-height: 400px;
	}

	@media (max-width: 735px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.map-container {
			min-height: 300px;
		}

		.page-hero {
			padding: 80px 0 32px;
		}
	}
</style>
