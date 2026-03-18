<script lang="ts">
	import type { GalleryItem } from '$lib/data/gallery';

	interface Props {
		item: GalleryItem;
	}

	let { item }: Props = $props();

	const aspectMap = {
		portrait: '3 / 4',
		landscape: '4 / 3',
		square: '1 / 1'
	};
</script>

<div class="gallery-frame">
	<div class="frame-titlebar">
		<div class="titlebar-dots" aria-hidden="true">
			<span class="dot dot-red"></span>
			<span class="dot dot-yellow"></span>
			<span class="dot dot-green"></span>
		</div>
		<span class="titlebar-text">{item.title.toUpperCase()}</span>
	</div>
	<div
		class="frame-content"
		style="aspect-ratio: {aspectMap[item.aspect]}; background-color: {item.color};"
	>
		<span class="placeholder-text" aria-hidden="true">IMG</span>
	</div>
</div>

<style>
	.gallery-frame {
		border: 3px solid var(--border-default);
		overflow: hidden;
		transition: all var(--transition-normal);
		background: var(--bg-secondary);
	}

	.gallery-frame:hover {
		border-color: var(--accent-border);
		transform: translate(-2px, -2px);
		box-shadow: var(--shadow-brutal);
	}

	.frame-titlebar {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 8px 12px;
		background: var(--bg-tertiary);
		border-bottom: 2px solid var(--border-default);
	}

	.titlebar-dots {
		display: flex;
		gap: 4px;
	}

	.dot {
		width: 8px;
		height: 8px;
	}

	.dot-red { background: var(--brown); }
	.dot-yellow { background: var(--accent); }
	.dot-green { background: var(--bg-cream); }

	.titlebar-text {
		font-family: var(--font-pixel);
		font-size: 8px;
		color: var(--text-secondary);
		letter-spacing: 0.05em;
	}

	.frame-content {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.placeholder-text {
		font-family: var(--font-pixel);
		font-size: 12px;
		color: rgba(255, 255, 255, 0.15);
		letter-spacing: 0.15em;
	}
</style>
