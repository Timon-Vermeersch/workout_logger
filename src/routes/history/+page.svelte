<script lang="ts">
  import { exerciseHistory, Exerciseslist } from '$lib/stores/data_store';
  import { writable } from 'svelte/store';
  import { completedProgramDaysHistory } from '$lib/stores/data_store';

  const selectedExerciseId = writable<number | null>(null);
    function getExerciseName(id: number): string {
  return $Exerciseslist.exercises.find(e => e.id === id)?.name ?? `Exercise ${id}`;
}
</script>

<div class="bg-gray-700 min-h-dvh p-4 text-white space-y-4">
  <h1 class="text-2xl font-bold">Workout History</h1>

  <!-- Exercise List -->
  <div class="space-y-2">
    <h2 class="text-lg font-semibold">Exercises</h2>
    {#each $Exerciseslist.exercises as ex}
      <button
        class="block w-full text-left bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded"
        on:click={() => selectedExerciseId.set(ex.id)}
      >
        {ex.name}
      </button>
    {/each}
  </div>

  <!-- Selected Exercise History -->
  {#if $selectedExerciseId !== null}
    {#each $exerciseHistory.filter(eh => eh.exerciseId === $selectedExerciseId) as history}
      <div class="mt-6 space-y-2">
        <h2 class="text-xl font-semibold">
          {$Exerciseslist.exercises.find(e => e.id === history.exerciseId)?.name ?? 'Unknown Exercise'}
        </h2>

        {#each history.historyArray as entry}
          <div class="border border-gray-500 p-3 rounded">
            <div class="font-bold">{entry.date}</div>
            <ul class="ml-4 mt-1 list-disc">
              {#each entry.sets as set, i}
                <li>
                  Set {set.setNumber ?? i + 1}: {set.reps ?? '-'} reps @ {set.weight ?? '-'}kg
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    {/each}
  {/if}
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Completed Program Days</h2>
  
    {#each $completedProgramDaysHistory as day}
      <div class="border border-gray-500 p-4 rounded">
        <h3 class="text-lg font-semibold">Day {day.dayNumber} – {day.date}</h3>
  
        {#each day.exercises as ex}
          <div class="mt-2">
            <p class="font-semibold">{getExerciseName(ex.exerciseId)}</p>
            <ul class="ml-4 list-disc">
              {#each ex.sets as set, i}
                <li>
                  Set {set.setNumber ?? i + 1}: 
                  {set.reps ?? '-'} reps @ {set.weight ?? '-'}kg
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
