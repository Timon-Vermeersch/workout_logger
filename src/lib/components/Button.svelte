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
	class="flex justify-center rounded-lg border border-gray-700 bg-gray-800 px-2 py-1 text-white shadow transition hover:bg-gray-700 active:scale-95"
>
	<slot />
</div>