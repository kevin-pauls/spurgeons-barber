<script lang="ts">
	import type { Service } from '$lib/data/services';

	interface Props {
		service: Service;
		index?: number;
	}

	let { service, index = 0 }: Props = $props();

	const iconPaths: Record<string, string> = {
		scissors: 'M6 9a3 3 0 100-6 3 3 0 000 6zm0 0l6 6m-6 0a3 3 0 100 6 3 3 0 000-6zm0 0l6-6m0 0l6 6m-6-6l6-6',
		razor: 'M3 21l9-9m0 0l3-3m-3 3l-3-3m6 0l3-3M6 18l3-3',
		comb: 'M4 4v16m4-16v16m4-16v16m4-16v16M2 8h20M2 16h20',
		'barber-pole': 'M12 2v20m-4-18l8 16m-8 0l8-16',
		house: 'M3 12l9-8 9 8M5 10v10h14V10',
		towel: 'M3 6h18v4a6 6 0 01-6 6H9a6 6 0 01-6-6V6zm6 10v4m6-4v4'
	};
</script>

<article class="service-card" style="--index: {index}">
	<div class="card-icon" aria-hidden="true">
		<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
			<path d={iconPaths[service.icon] ?? iconPaths.scissors} />
		</svg>
	</div>
	<h3 class="card-title">{service.title}</h3>
	<p class="card-desc">{service.description}</p>
	<div class="card-meta">
		<span class="card-price">{service.price}</span>
		<span class="card-duration">{service.duration}</span>
	</div>
</article>

<style>
	.service-card {
		border: 2px solid var(--border-default);
		padding: 32px;
		transition: all var(--transition-normal);
		position: relative;
		background: var(--bg-secondary);
	}

	.service-card:hover {
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-brutal);
		border-color: var(--accent-border);
	}

	.service-card:active {
		transform: translate(2px, 2px);
		box-shadow: none;
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
		margin-bottom: 20px;
	}

	.card-title {
		font-family: var(--font-display);
		font-size: 20px;
		font-weight: 600;
		color: var(--text-primary);
		margin-bottom: 8px;
	}

	.card-desc {
		font-size: 14px;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 20px;
	}

	.card-meta {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 12px;
		padding-top: 16px;
		border-top: 1px solid var(--border-subtle);
	}

	.card-price {
		font-family: var(--font-pixel);
		font-size: 11px;
		color: var(--accent);
	}

	.card-duration {
		font-size: 13px;
		color: var(--text-tertiary);
	}
</style>
