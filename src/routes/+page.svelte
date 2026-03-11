<script>
	import Button from '$lib/components/Button.svelte';
	import HeaderTopBar from '$lib/components/HeaderTopBar.svelte';

	// export const prerender = true;
</script>

<HeaderTopBar>
	<div class="grid 3 grid-cols-[25%_50%_25%] items-center">
		<button>Load</button>

		<select >
			<option>Day 1</option>
		</select>

		<button>Edit</button>
	</div>
</HeaderTopBar>

<div class="min-h-[calc(100vh-64px)] bg-gray-700">
	<Button>Reset Data</Button>
	<Button>not even a button</Button>
</div>
