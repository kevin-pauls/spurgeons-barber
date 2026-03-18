<script lang="ts">
	interface Props {
		animated?: boolean;
	}

	let { animated = true }: Props = $props();
</script>

<div class="pixel-divider" class:animated aria-hidden="true">
	<div class="stripe"></div>
</div>

<style>
	.pixel-divider {
		width: 100%;
		height: 8px;
		overflow: hidden;
		margin: 0 auto;
	}

	.stripe {
		width: 100%;
		height: 100%;
		background: repeating-linear-gradient(
			-45deg,
			var(--accent) 0 4px,
			var(--bg-cream) 4px 8px,
			#e53e3e 8px 12px,
			var(--bg-cream) 12px 16px
		);
		background-size: 22.63px 100%;
	}

	.animated .stripe {
		animation: barber-pole 3s linear infinite;
	}

	@keyframes barber-pole {
		from { background-position: 0 0; }
		to { background-position: 22.63px 0; }
	}
</style>
