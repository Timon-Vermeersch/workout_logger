<script>
	import { onMount } from 'svelte';

	let lastScrollY = 0;
	let visible = true;
	const threshold = 10;

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const diff = currentScrollY - lastScrollY;

			if (Math.abs(diff) < threshold) return;

			if (diff > 0) {
				visible = false; // scrolling down
			} else {
				visible = true; // scrolling up
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div
	class="fixed top-0 left-0 right-0 z-50 grid min-h-12 grid-cols-[25%_50%_25%] items-center bg-gray-800 text-white transition-transform duration-300"
	class:translate-y-0={visible}
	class:-translate-y-full={!visible}
>
	<div class="flex justify-center rounded-4xl hover:bg-gray-700">
		<button
			on:click={(e) => {
				console.log(e.currentTarget);
			}}
		>
			Load! or smth
		</button>
	</div>
</div>