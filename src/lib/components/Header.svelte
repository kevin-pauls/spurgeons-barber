<script lang="ts">
	import { page } from '$app/stores';
	import { navLinks } from '$lib/data/navigation';

	let mobileOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	$effect(() => {
		if (mobileOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	});

	function closeMobile() {
		mobileOpen = false;
	}

	function isActive(path: string) {
		if (path === '/') return $page.url.pathname === '/';
		return $page.url.pathname === path || $page.url.pathname.startsWith(path + '/');
	}
</script>

<header class:scrolled>
	<div class="container header-inner">
		<a href="/" class="logo" onclick={closeMobile}>
			<span class="logo-pixel" aria-hidden="true"></span>
			<span class="logo-text">SPURGEON'S</span>
		</a>

		<nav class="desktop-nav" aria-label="Main navigation">
			{#each navLinks as link}
				<a
					href={link.href}
					class="nav-link"
					class:active={isActive(link.href)}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="header-actions">
			<a href="/book" class="btn btn-primary btn-sm">Book a cut</a>
		</div>

		<button
			class="hamburger"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={mobileOpen}
			aria-controls="mobile-menu"
		>
			<span class="hamburger-line" class:open={mobileOpen}></span>
			<span class="hamburger-line" class:open={mobileOpen}></span>
			<span class="hamburger-line" class:open={mobileOpen}></span>
		</button>
	</div>
</header>

{#if mobileOpen}
	<div class="mobile-overlay" id="mobile-menu" role="dialog" aria-label="Mobile navigation" aria-modal="true">
		<nav class="mobile-nav" aria-label="Mobile navigation">
			{#each navLinks as link}
				<a
					href={link.href}
					class="mobile-nav-link"
					class:active={isActive(link.href)}
					onclick={closeMobile}
				>
					{link.label}
				</a>
			{/each}
			<div class="mobile-actions">
				<a href="/book" class="btn btn-primary" onclick={closeMobile}>Book a cut</a>
			</div>
		</nav>
	</div>
{/if}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		height: var(--header-height);
		background-color: var(--bg-primary);
		transition: border-bottom var(--transition-normal), box-shadow var(--transition-normal);
		border-bottom: 2px solid transparent;
	}

	header.scrolled {
		border-bottom-color: var(--border-default);
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
	}

	.header-inner {
		display: flex;
		align-items: center;
		height: 100%;
		gap: 32px;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		flex-shrink: 0;
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

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 4px;
		flex: 1;
	}

	.nav-link {
		padding: 8px 12px;
		font-size: 15px;
		font-weight: 500;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 4px;
		left: 12px;
		right: 12px;
		height: 2px;
		background: var(--accent);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.25s steps(4);
	}

	.nav-link:hover {
		color: var(--text-primary);
	}

	.nav-link:hover::after,
	.nav-link.active::after {
		transform: scaleX(1);
	}

	.nav-link.active {
		color: var(--accent);
	}

	.header-actions {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	:global(.btn-sm) {
		padding: 10px 20px;
		font-size: 13px;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px;
		flex-shrink: 0;
		margin-left: auto;
	}

	.hamburger:hover {
		background: var(--border-subtle);
	}

	.hamburger-line {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--text-primary);
		transition: transform 0.25s ease, opacity 0.25s ease;
		transform-origin: center;
	}

	.hamburger-line:nth-child(1).open {
		transform: translateY(7px) rotate(45deg);
	}

	.hamburger-line:nth-child(2).open {
		opacity: 0;
		transform: scaleX(0);
	}

	.hamburger-line:nth-child(3).open {
		transform: translateY(-7px) rotate(-45deg);
	}

	.mobile-overlay {
		display: none;
		position: fixed;
		inset: 0;
		top: var(--header-height);
		background: var(--bg-primary);
		z-index: 999;
		overflow-y: auto;
		animation: slide-down 0.25s ease;
	}

	@keyframes slide-down {
		from { opacity: 0; transform: translateY(-16px); }
		to { opacity: 1; transform: translateY(0); }
	}

	.mobile-nav {
		display: flex;
		flex-direction: column;
		padding: 24px var(--container-padding);
		gap: 4px;
	}

	.mobile-nav-link {
		display: block;
		padding: 14px 12px;
		font-size: 17px;
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
		font-family: var(--font-display);
		border-left: 3px solid transparent;
		transition: border-color var(--transition-fast), color var(--transition-fast);
	}

	.mobile-nav-link:hover,
	.mobile-nav-link.active {
		border-left-color: var(--accent);
		color: var(--accent);
	}

	.mobile-actions {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px 12px;
		margin-top: 16px;
		border-top: 2px solid var(--border-default);
	}

	.mobile-actions .btn {
		width: 100%;
		font-size: 16px;
		padding: 16px;
	}

	@media (max-width: 735px) {
		.desktop-nav,
		.header-actions {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.mobile-overlay {
			display: block;
		}
	}
</style>
