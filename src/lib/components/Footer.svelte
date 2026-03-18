<script lang="ts">
	const quickLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Services', href: '/services' },
		{ label: 'About', href: '/about' },
		{ label: 'Gallery', href: '/gallery' },
		{ label: 'Book a cut', href: '/book' },
		{ label: 'Contact', href: '/contact' }
	];

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="footer-grid">
			<div class="footer-col brand-col">
				<a href="/" class="footer-logo">
					<span class="logo-pixel" aria-hidden="true"></span>
					<span class="logo-text">SPURGEON'S</span>
				</a>
				<p class="tagline">Get a Haircut</p>
				<p class="brand-desc">
					Kelowna barber specializing in curly hair and traditional styles. The geek with the sleek mullet — crafting precision cuts at Good Vibes Barbershop.
				</p>
				<div class="social-links">
					<a href="https://www.instagram.com/spurgeons_barber/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Follow on Instagram">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
						</svg>
					</a>
					<a href="https://www.tiktok.com/@spurgeons_barber" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Follow on TikTok">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
						</svg>
					</a>
					<a href="https://www.facebook.com/spurgeonsbarber/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Follow on Facebook">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.991 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
					</a>
				</div>
			</div>

			<div class="footer-col">
				<h4 class="footer-heading">Quick links</h4>
				<ul class="footer-links">
					{#each quickLinks as link}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</div>

			<div class="footer-col">
				<h4 class="footer-heading">Contact</h4>
				<ul class="footer-contact-list">
					<li>
						<span class="contact-item">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<path d="M8 1.5a4.5 4.5 0 014.5 4.5c0 2.5-2 5-4.5 8.5C5.5 11 3.5 8.5 3.5 6A4.5 4.5 0 018 1.5z" stroke="currentColor" stroke-width="1.3"/>
								<circle cx="8" cy="6" r="1.5" stroke="currentColor" stroke-width="1.3"/>
							</svg>
							<span>2995 Pandosy St<br/>Kelowna, BC V1Y 1W1</span>
						</span>
					</li>
					<li>
						<span class="contact-item">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.3"/>
								<path d="M8 4v4l3 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
							</svg>
							Mon–Fri: 8am – 4pm
						</span>
					</li>
					<li>
						<a href="tel:2262013911" class="contact-item">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<path d="M14.5 11.3v2a1.3 1.3 0 01-1.4 1.3A13 13 0 012 3.4 1.3 1.3 0 013.3 2h2a1.3 1.3 0 011.3 1.1c.1.6.2 1.2.4 1.8a1.3 1.3 0 01-.3 1.4l-.8.8a10.4 10.4 0 004.6 4.6l.8-.8a1.3 1.3 0 011.4-.3c.6.2 1.2.3 1.8.4a1.3 1.3 0 011 1.3z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							226-201-3911
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/spurgeons_barber/" target="_blank" rel="noopener noreferrer" class="contact-item">
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
								<rect x="2" y="2" width="12" height="12" rx="3" stroke="currentColor" stroke-width="1.3"/>
								<circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.3"/>
								<circle cx="12" cy="4" r="0.8" fill="currentColor"/>
							</svg>
							@spurgeons_barber
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="container footer-bottom-inner">
			<p class="copyright">&copy; {year} Spurgeon's Barber. All rights reserved.</p>
			<p class="location">Kelowna, BC</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--bg-secondary);
		padding: 80px 0 0;
		border-top: 2px solid var(--border-default);
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1.2fr;
		gap: 48px;
		padding-bottom: 64px;
	}

	.footer-col {
		display: flex;
		flex-direction: column;
	}

	.footer-logo {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		margin-bottom: 8px;
	}

	.logo-pixel {
		width: 10px;
		height: 10px;
		background: var(--accent);
		display: block;
	}

	.logo-text {
		font-family: var(--font-pixel);
		font-size: 12px;
		color: var(--text-primary);
		letter-spacing: 0.05em;
	}

	.tagline {
		font-family: var(--font-pixel);
		font-size: 10px;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin: 0 0 16px 0;
	}

	.brand-desc {
		font-size: 14px;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0 0 24px 0;
		max-width: 300px;
	}

	.social-links {
		display: flex;
		gap: 10px;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: var(--border-subtle);
		color: var(--text-secondary);
		border: 2px solid var(--border-default);
		transition: all var(--transition-fast);
	}

	.social-link:hover {
		color: var(--accent);
		border-color: var(--accent-border);
		background: var(--accent-dim);
		transform: translate(-2px, -2px);
		box-shadow: 2px 2px 0 var(--accent);
	}

	.footer-heading {
		font-family: var(--font-pixel);
		font-size: 10px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-primary);
		margin: 0 0 20px 0;
	}

	.footer-links {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-links a {
		font-size: 14px;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.footer-links a:hover {
		color: var(--accent);
	}

	.footer-contact-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.contact-item {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 14px;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
		line-height: 1.5;
	}

	.contact-item svg {
		flex-shrink: 0;
		margin-top: 2px;
		opacity: 0.7;
	}

	a.contact-item:hover {
		color: var(--accent);
	}

	.footer-bottom {
		border-top: 2px solid var(--border-default);
		padding: 24px 0;
	}

	.footer-bottom-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.copyright,
	.location {
		font-size: 13px;
		color: var(--text-tertiary);
		margin: 0;
	}

	@media (max-width: 735px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 32px;
			padding-bottom: 48px;
		}

		footer {
			padding-top: 56px;
		}

		.brand-desc {
			max-width: 100%;
		}

		.footer-bottom-inner {
			flex-direction: column;
			align-items: flex-start;
			gap: 6px;
		}
	}
</style>
