<script lang="ts">
	// imports
	import book from '../svg/book.svg';
	import dumbbell from '../svg/dumbbell.svg';
	import fire from '../svg/Fire.svg';
	import graph from '../svg/graph.svg';
	import graph1 from '../svg/graph1.svg';
	import more from '../svg/more.svg';
	import { page } from '$app/state';
	// Variables
	let { type } = $props();
</script>

<!-- HTML -->
<!-- Header -->
{#if type === 'mobile'}
	<div
		class=" bg-grey-800 overflow-x-none flex h-14 items-center justify-around space-x-2 border border-t-2 border-b-0 border-black bg-white bg-clip-padding backdrop-filter"
	>
		<a href="/history">
			<div
				class="flex h-9 w-9 flex-col items-center justify-center rounded-xl border-2 transition-transform duration-300 hover:scale-110"
				class:bg-blue-300={page.url.pathname === '/nutrition'}
			>
				<img src={fire} alt="Nutrition" />
				<span class="text-md absolute bottom-[-3px] text-center font-medium"></span>
			</div>
		</a>

		<a class="" href="/session">
			<div
				class=" flex h-9 w-9 items-center justify-center rounded-xl border-2 transition-transform duration-300 hover:scale-110"
				class:bg-blue-300={page.url.pathname === '/session'}
			>
				<img class=" active:bg-gray-200" src={dumbbell} alt="Session" />
				<span class="text-md absolute bottom-[-3px] text-center font-medium"></span>
			</div>
		</a>
		<!-- middle -->
		<a href="/start">
			<div
				class="flex h-9 w-12 scale-110 items-center justify-center rounded-full border-1 bg-neutral-200 text-black shadow-lg"
			>
				O
			</div>
		</a>

		<a href="/builder">
			<div
				class="flex h-9 w-9 items-center justify-center rounded-xl border-2 transition-transform duration-300 hover:scale-110"
				class:bg-blue-300={page.url.pathname === '/builder'}
			>
				<img src={book} alt="builder" />
				<span class="text-md absolute bottom-[-3px] rounded-full text-center font-medium"></span>
			</div>
		</a>

		<a href="/exerciseList">
			<div
				class="flex h-9 w-9 items-center justify-center rounded-xl border-2 transition-transform duration-300 hover:scale-110"
				class:bg-blue-300={page.url.pathname === '/diavoorstellingxd'}
			>
				<img src={graph1} alt="Graph" />
				<span class="text-md absolute bottom-[-3px] text-center font-medium"></span>
			</div>
		</a>
	</div>
{:else}
	<div class="bg-green-300 p-4">DESKTOPPP</div>
{/if}
