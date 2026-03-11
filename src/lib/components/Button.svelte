<div
	role="button"
	tabindex="0"
	on:click
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			e.currentTarget.click();
		}
	}}
	class="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white shadow transition hover:bg-gray-700 active:scale-95"
>
	<slot />
</div>