<script lang="ts">
	import PixelDivider from './PixelDivider.svelte';

	interface Props {
		heading: string;
		text?: string;
		href?: string;
		label?: string;
	}

	let { heading, text = '', href = '/book', label = 'Book a cut' }: Props = $props();
</script>

<section class="cta-section section">
	<PixelDivider />
	<div class="container cta-inner">
		<h2 class="cta-heading">{heading}</h2>
		{#if text}
			<p class="cta-text">{text}</p>
		{/if}
		<a {href} class="btn btn-primary btn-lg">{label}</a>
	</div>
</section>

<style>
	.cta-section {
		text-align: center;
	}

	.cta-inner {
		padding-top: 64px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.cta-heading {
		font-size: clamp(28px, 4vw, 48px);
		max-width: 600px;
	}

	.cta-text {
		font-size: 16px;
		color: var(--text-secondary);
		max-width: 480px;
		line-height: 1.7;
	}

	:global(.btn-lg) {
		padding: 18px 36px;
		font-size: 16px;
	}
</style>
