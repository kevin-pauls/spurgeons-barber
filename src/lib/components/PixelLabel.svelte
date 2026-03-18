<script lang="ts">
	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

<div class="pixel-label">
	<span class="pixel-dot" aria-hidden="true"></span>
	<span class="pixel-text">{text}</span>
</div>

<style>
	.pixel-label {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 16px;
	}

	.pixel-dot {
		width: 8px;
		height: 8px;
		background: var(--accent);
		flex-shrink: 0;
	}

	.pixel-text {
		font-family: var(--font-pixel);
		font-size: 10px;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
</style>
