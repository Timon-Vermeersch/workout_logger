<script lang="ts">
	import { exerciseHistory, Exerciseslist } from '$lib/stores/data_store';
	import { writable } from 'svelte/store';
	import { completedProgramDaysHistory } from '$lib/stores/data_store';
	import { lookupExerciseById } from './../../lib/utils/exercise-selector.ts';
	import CollapsibleSection from '$lib/components/CollapsibleSection.svelte';

	const selectedExerciseId = writable<number | null>(null);
	let jup;
	//     function getExerciseName(id: number): string {
	//   return $Exerciseslist.exercises.find(e => e.id === id)?.name ?? `Exercise ${id}`;
	// }
</script>

<div class="sticky top-0   3 grid min-h-12 grid-cols-[25%_50%_25%] items-center bg-gray-800 text-white">
	<div class="flex justify-center rounded-4xl hover:bg-gray-700">
		<button
			on:click={(e) => {
				console.log(e.currentTarget);
			}}
		>
			Load! or smth
		</button>
	</div>

	<select
		bind:value={jup}
		on:change={(e) => {
			console.log(e.currentTarget);
		}}
		class="flex items-center justify-center rounded-4xl bg-gray-800 text-center text-white hover:bg-gray-700"
	>
		<option value="DaySelect">SelectDay</option>
		<option value="DaySelect">SelectSecondDay</option>
	</select>

	<button
		class="flex justify-center rounded-4xl hover:bg-gray-700"
		on:click={(e) => {
			console.log(e.currentTarget);
		}}>EditMode!?</button
	>
</div>

<div class="BODY min-h-[calc(100vh-56px)] bg-gray-700 text-white">
	<div class="">
		{#each $completedProgramDaysHistory as aDay}
			<CollapsibleSection headerText={`${aDay.dayNumber} - ${aDay.date}`}>
				<div class="bg flex min-h-dvh flex-auto flex-col space-y-4">
					

						<div class="bg flex min-h-dvh flex-auto flex-col space-y-6 p-4">
							{#each aDay.exercises as exerciseHistory, index}
								{@const exercise = lookupExerciseById(exerciseHistory.exerciseId)}

								<div class="rounded-xl border border-gray-700 bg-gray-800 p-5 shadow-sm">
									<!-- Title -->
									<div class="mb-4">
										<h2 class="text-base font-semibold text-white">
											{index + 1}. {exercise?.name || 'Unknown exercise'}
										</h2>

										<div class="mt-1 text-xs text-gray-400">
											{exerciseHistory.sets.length} sets completed
										</div>
									</div>

									<!-- Sets -->
									<div class="flex flex-wrap gap-3">
										{#each exerciseHistory.sets as set}
											<div
												class="flex min-w-[60px] flex-col items-center rounded-md bg-gray-700 px-3 py-2"
											>
												<div class="text-sm font-semibold text-white">
													{set.weight}kg
												</div>

												<div class="text-xs text-gray-400">
													{set.reps} reps
												</div>
											</div>
										{/each}
									</div>
								</div>
							{/each}
						</div>
				</div>
			</CollapsibleSection>
		{/each}
	</div>

	<!-- Exercise List -->
	<!-- <div class="space-y-2">
    <h2 class="text-lg font-semibold">Exercises</h2>
    {#each $Exerciseslist.exercises as ex}
      <button
        class="block w-full text-left bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded"
        on:click={() => selectedExerciseId.set(ex.id)}
      >
        {ex.name}
      </button>
    {/each}
  </div> -->

	<!-- Selected Exercise History -->
	<!-- {#if $selectedExerciseId !== null}
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
  {/if} -->
	<div class="space-y-4">
		<!-- <h2 class="text-sm font-bold">Completed Program Days</h2> -->

		<!-- {#each $completedProgramDaysHistory as day}
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
    {/each} -->
	</div>
</div>
