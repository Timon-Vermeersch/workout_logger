<script lang="ts">
    import { Exerciseslist } from '$lib/stores/data_store';
    import type { Exercise } from '../../lib/interfaces/exercise';
    import loop from '../../lib/svg/loop.svg';
  
    let exerciseFilterInput: string | null = null;
  
    function hello() {
      console.log('current filter is: ', exerciseFilterInput);
    }

    $: filteredExercises = $Exerciseslist.exercises.filter(ex =>
        exerciseFilterInput
    ? ex.name.toLowerCase().includes(exerciseFilterInput.toLowerCase()) 
        ||
      Array.from(ex.muscleGroups).some(muscle =>
        muscle.toLowerCase().includes(exerciseFilterInput.toLowerCase())
      )
    : true
    );
  </script>
  
 <!-- Page -->
  <div class=" sticky min-h-[100dvh] bg-gray-700">
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
  
      <!-- Header Buttons -->
      <button
        on:click={hello}
        class="bg-green-600 hover:bg-blue-700 text-white  font-semibold py-2 px-3 rounded whitespace-nowrap"
      >
        Add Exercise
      </button>
    </div>
    
   <!-- scrollable carrousel with muscleGroups to add to filter? -->
   <!-- also changing current view to preview if clicked -> full view with dynamic routing -->
   
    <!-- Body -->
    <div class="text-white p-4 space-y-2">
        {#each filteredExercises as exercise}
          <div class="flex flex-col bg-gray-800 p-4 rounded shadow">
            <div class="font-bold">
              {exercise.name}
            </div>
      
            <div>
                → {exercise.explanation}
            </div>
      
            <div class="flex flex-row flex-wrap gap-2 text-sm text-gray-700">
              {#each Array.from(exercise.muscleGroups) as workedMuscleGroup}
                <div class="bg-gray-400 hover:bg-amber-300 px-2 py-1 rounded">
                  {workedMuscleGroup}
                </div>
              {/each}
            </div>
      
            {#if exercise.exerciseGif}
              <div class="mt-2">
                <img
                  class="max-w-full h-auto rounded"
                  src={"data:image/gif;base64," + exercise.exerciseGif}
                  alt={exercise.name}
                />
              </div>
            {/if}
          </div>
        {/each} 
    </div>
  </div>