<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		threshold?: number;
		pixel?: boolean;
		delay?: number;
		children: Snippet;
	}

	let { threshold = 0.15, pixel = false, delay = 0, children }: Props = $props();

	let visible = $state(false);
	let el: HTMLDivElement;

	onMount(() => {
		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReduced) {
			visible = true;
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					observer.unobserve(el);
				}
			},
			{ threshold }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div
	bind:this={el}
	class="scroll-reveal"
	class:visible
	class:pixel
	style:animation-delay="{delay}ms"
>
	{@render children()}
</div>

<style>
	.scroll-reveal {
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: inherit;
	}

	.scroll-reveal.pixel {
		transition-timing-function: steps(6);
	}

	.scroll-reveal.visible {
		opacity: 1;
		transform: translateY(0);
	}
</style>
