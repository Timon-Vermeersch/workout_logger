<script lang="ts">
    import { onMount } from 'svelte';
    import { Exerciseslist } from '$lib/stores/data_store';
    import { page } from '$app/state';
    import type { Exercise } from '../../../lib/interfaces/exercise';
    import { goto } from '$app/navigation';
  
    const exerciseId = $derived(page.params.exerciseId);
    let selectedExercise = $state<Exercise | undefined>(undefined);
    function goBack() {
        if (history.length > 1) {
            history.back();
        } else {
    goto('/exerciseList'); 
  }
}
    onMount(() => {
      const unsubscribe = Exerciseslist.subscribe(value => {
        selectedExercise = value.exercises.find(ex => ex.id === Number(exerciseId));
      });
      return unsubscribe;
    });
  </script>
  
  <div class="sticky min-h-[100dvh] bg-gray-700 text-white">
    <!-- Header -->
    <div class="relative flex items-center justify-center bg-gray-800 text-white text-lg font-semibold min-h-12 px-4">
        <button on:click={goBack} class="absolute left-4">
          ← Back
        </button>
      
        <div class="truncate">
          {selectedExercise?.name}
        </div>
      </div>
  
    <!-- Content -->
    <div class="p-6 space-y-6">
        
      <div class="text-sm text-gray-300">

        Exercise ID: <span class="font-mono">{exerciseId}</span>
      </div>
  
      {#if selectedExercise?.explanation}
        <div>
          <h2 class="text-base font-semibold mb-1">Explanation</h2>
          <p class="text-gray-200 leading-relaxed">{selectedExercise.explanation}</p>
        </div>
      {/if}
  
      {#if selectedExercise?.exerciseGif}
        <div class="flex justify-center">
          <img
            src={selectedExercise.exerciseGif}
            alt={selectedExercise.name}
            class="rounded-xl shadow-lg max-w-full h-auto border border-gray-600"
          />
        </div>
      {/if}
  
      {#if selectedExercise?.muscleGroups?.size}
        <div>
          <h2 class="text-base font-semibold mb-1">Muscle Groups</h2>
          <ul class="list-disc list-inside text-gray-200">
            {#each Array.from(selectedExercise.muscleGroups) as muscle}
              <li>{muscle}</li>
            {/each}
          </ul>
        </div>
      {/if}
  
      {#if selectedExercise?.equipmentUsed?.size}
        <div>
          <h2 class="text-base font-semibold mb-1">Equipment Used</h2>
          <ul class="list-disc list-inside text-gray-200">
            {#each Array.from(selectedExercise.equipmentUsed) as equipment}
              <li>{equipment}</li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
  