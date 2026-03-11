<script lang="ts">
  import { Exerciseslist } from '$lib/stores/data_store';
  import type { Exercise } from '../../lib/interfaces/exercise';
  import {muscleGroups} from '../../lib/interfaces/exercise'
  import loop from '../../lib/svg/loop.svg';
  import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
  
  let exerciseFilterInput: string | null = null;
  let showSearch = false
  const filterOptions = ['All', ...muscleGroups.map(m => m.charAt(0).toUpperCase() + m.slice(1))];

  function hello() {
    console.log('current filter is:', exerciseFilterInput);
  }

  $: filteredExercises = $Exerciseslist.exercises.filter(ex =>
    exerciseFilterInput
      ? ex.name.toLowerCase().includes(exerciseFilterInput.toLowerCase()) ||
        Array.from(ex.muscleGroups).some(muscle =>
          muscle.toLowerCase().includes(exerciseFilterInput.toLowerCase())
        )
      : true
  );

</script>

<!-- Page -->
<div class=" min-h-[100dvh] bg-gray-700">

 {#if showSearch}
	<div class="sticky top-0 flex min-h-12 items-center gap-2 border-y border-gray-700 bg-gray-800/60 px-4 py-2 text-white">
		<Button on:click={() => (showSearch = !showSearch)}>
			Quick
		</Button>

		<div class="flex flex-1 items-center rounded-lg border border-gray-700 bg-gray-900 px-3 py-2">
			<img src={loop} alt="Search" class="h-5 w-5 opacity-80" />
			<input
				bind:value={exerciseFilterInput}
				class="flex-1 bg-transparent px-2 text-white outline-none placeholder-gray-400"
				aria-label="Search"
				autocomplete="off"
				inputmode="search"
				placeholder="Search"
				type="search"
			/>
		</div>

		<Button on:click={hello}>
			Add Exercise
		</Button>
	</div>
{:else}
	<div class="sticky top-0 flex min-h-12 items-center gap-2 overflow-x-auto border-y border-gray-700 bg-gray-800/60 px-4 py-2 whitespace-nowrap text-white">
		<Button on:click={() => (showSearch = !showSearch)}>
			Search
		</Button>

		{#each filterOptions as option}
			<button
				on:click={() => {
					exerciseFilterInput = exerciseFilterInput === option ? null : option;
				}}
				class={`rounded-lg border px-4 py-2 whitespace-nowrap transition-colors ${
					exerciseFilterInput === option || (option === 'All' && exerciseFilterInput === null)
						? 'border-blue-400 bg-blue-500/20 text-white'
						: 'border-gray-700 bg-gray-800 text-white hover:bg-gray-700'
				}`}
			>
				{option}
			</button>
		{/each}
	</div>
{/if}
  <!-- Header -->


  <!-- Filter Carousel -->


  <!-- Exercise List -->
  <div class="text-white p-4 space-y-4">
    {#each filteredExercises as exercise}
      <a href={`/exerciseList/${exercise.id}`} class="block transition hover:scale-[1.01]">
        <div class="flex flex-col bg-gray-800 p-4 rounded shadow-md border border-gray-700">
          <div class="font-bold text-lg">{exercise.name}</div>
          {#if exercise.exerciseGif}
            <img
              class="h-24 mt-3 rounded object-cover"
              src={exercise.exerciseGif}
              alt={exercise.name}
            />
          {/if}
        </div>
      </a>
    {/each}
  </div>
</div>