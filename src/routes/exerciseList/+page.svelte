<script lang="ts">
  import { Exerciseslist } from '$lib/stores/data_store';
  import type { Exercise } from '../../lib/interfaces/exercise';
  import {muscleGroups} from '../../lib/interfaces/exercise'
  import loop from '../../lib/svg/loop.svg';
  import { goto } from '$app/navigation';
  



  let exerciseFilterInput: string | null = null;

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
<div class="sticky min-h-[100dvh] bg-gray-700">
  <!-- Header -->
  <div class="flex items-center justify-between bg-gray-800 text-white min-h-12 px-4 space-x-4">
    <!-- Search Input -->
    
    <div class="flex-grow flex items-center bg-gray-900 px-3 py-2 rounded-lg">
      <img src={loop} alt="Search" class="w-5 h-5 invert" />
      <input
        bind:value={exerciseFilterInput}
        class="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        aria-label="Search"
        autocomplete="off"
        inputmode="search"
        placeholder="Search"
        type="search"
      />
    </div>

    <!-- Header Button -->
    <button
      on:click={hello}
      class="bg-green-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded whitespace-nowrap"
    >
      Add Exercise
    </button>
  </div>

  <!-- Filter Carousel -->
  <div class="overflow-x-auto whitespace-nowrap px-4 py-2 space-x-2 flex border-y border-gray-600 bg-gray-800/50">
    {#each filterOptions as option}
      <button
        on:click={() => {
          exerciseFilterInput = exerciseFilterInput === option ? null : option;
        }}
        class="px-4 py-2 rounded-full border whitespace-nowrap transition-colors 
          {(exerciseFilterInput === option || (option === 'All' && exerciseFilterInput === null)) 
            ? 'bg-blue-500/20 text-white border-blue-400' 
            : 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600'}">
      {option}
    </button>
    {/each}
  </div>

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