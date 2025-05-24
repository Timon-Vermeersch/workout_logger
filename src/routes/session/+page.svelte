<script lang="ts">
  import Stopwatch from '../../lib/components/stopwatch.svelte';
  import more from '../../lib/svg/more.svg';
  import less from '../../lib/svg/less.svg';
  import next from '../../lib/svg/next.svg';
  import replace from '../../lib/svg/switch.svg';
  import Dialog from '../../lib/components/dialog.svelte';
  import { personalProgram, Exerciseslist,CurrentActiveBuiltProgram,builtPrograms, exerciseHistory} from '../../lib/stores/data_store';
  import type { PlannedExercise } from '$lib/interfaces/plannedExercise';
	import { onMount } from 'svelte';
	// import { get } from 'svelte/store';


  let dialog:Dialog;
  let selectedExerciseIndex:number|null = null;
  let selectedSwapExercise:PlannedExercise|null = null;
  let currentActiveBuiltProgramName:string|null
  let currentActiveBuiltProgramDayNumber:number|null
  let currentDayLabel:string | undefined;

onMount(() => {
	setupDay();
});

function setupDay() {
	currentActiveBuiltProgramName = $CurrentActiveBuiltProgram.name;
	currentActiveBuiltProgramDayNumber = $CurrentActiveBuiltProgram.currentDay;

	const allPrograms = $builtPrograms;
	const selectedProgram = allPrograms.find(p => p.name === currentActiveBuiltProgramName);
	if (!selectedProgram) return;

	const day = selectedProgram.days.find(d => d.dayNumber === currentActiveBuiltProgramDayNumber);
	if (!day) return;

	currentDayLabel = day.label;
	personalProgram.set({ ...day });
}

  function knop(){
    console.log(currentActiveBuiltProgramName)
  }

  function swapExercise(plannedExerciseIndex:number) {
    selectedExerciseIndex = plannedExerciseIndex;
    dialog.showModal();
  }

  function confirmSwap() {
    if ( selectedExerciseIndex !== null  &&  selectedSwapExercise) {
      personalProgram.update(program => {
      const copyProgram = {...program};
      const currentPlannedExecise = copyProgram.exercises[selectedExerciseIndex];
      currentPlannedExecise.exercise = selectedSwapExercise;
      currentPlannedExecise.sets = [];
      return copyProgram;
    });
      dialog.close();
      selectedExerciseIndex = null;
      selectedSwapExercise = null;
    }
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "CET",
  };
  
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(new Date());

  function addSet(index:number):void {
    personalProgram.update(program => {
      const copyProgram = {...program};
      const currentExercise = copyProgram.exercises[index];
      const newSet = { setNumber: currentExercise.sets.length + 1 };
      currentExercise.sets.push(newSet);
      return copyProgram;
    });
  }

  function removeSet(index:number):void {
    personalProgram.update(program => {
      const copyProgram = {...program};
      const currentExercise = copyProgram.exercises[index];
      currentExercise.sets.pop();
      return copyProgram;
    });
  }
  function flushSessionToHistory() {

  }
  function goToNextDay() {
    flushSessionToHistory();
    CurrentActiveBuiltProgram.update(program => {
      const nextDay = program.currentDay + 1;
      const wrappedDay = nextDay > program.daysAmount ? 1 : nextDay;
      return { ...program, currentDay: wrappedDay };
  });

  setupDay(); 
}

function goToNextDayTest(){
  let todaysExercises = $personalProgram.exercises
  let destinationOfTodaysExercises = $exerciseHistory

  // let finalObjectToPush:
  console.log('today:', todaysExercises)
  
  console.log(destinationOfTodaysExercises)     
}

                                         
</script>

<div class="bg-gray-700">
  <div class="p-4 bg-gray-700">
    <div class="bg-gray-800 text-white p-4 rounded grid [grid-template-columns:35%_30%_35%] items-center">
      <div class='text-center'>Current: {currentActiveBuiltProgramName}</div>
      <button class="font-bold text-center">{currentDayLabel}</button>
      <div class="text-center">{formattedDate}</div>
    </div>

    <Stopwatch />



<!-- start -->
    <div class="bg min-h-dvh flex flex-col flex-auto space-y-4">
      {#each $personalProgram.exercises as plannedExercise, index}
        <div class="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
          <div class="grid grid-cols-2 mb-2">
            <h2 class="Title flex flex-col flex-wrap font-semibold text-white">
              {index + 1}: {plannedExercise.exercise.name}
              <div class="text-xs text-gray-400 mb-1">4 Sets : 12 Reps</div>
            </h2>

            <div class="Buttons flex align-center justify-end space-x-2 h-12 items-center m-1">
              <button on:click={() => addSet(index)} class="rounded-lg bg-gray-600 text-white p-2 hover:bg-gray-500 active:scale-90">
                <img class="w-5 h-5 filter invert brightness-0" src={more} alt="Add Set" />
              </button>

              <button on:click={() => removeSet(index)} class="rounded-lg bg-gray-600 text-white p-2 hover:bg-gray-500 active:scale-90">
                <img class="w-5 h-5 filter invert brightness-0" src={less} alt="Remove Set" />
              </button>

              <button on:click={() => swapExercise(index)} class="rounded-lg bg-gray-600 text-white p-2 hover:bg-gray-500 active:scale-90">
                <img class="w-5 h-5 filter invert brightness-0" src={replace} alt="Remove Set" />
              </button>
            </div>
          </div>
<!-- Prev series -->
          <div class="mb-4">
            <div class="text-xs text-gray-400 mb-1">Previous Series:</div>
            <div class="flex flex-row overflow-x-auto">
              {#each plannedExercise.sets as set}
                <input bind:value={set.previous} class="w-14 text-sm bg-gray-600 text-white rounded m-1" readonly />
              {/each}
            </div>
          </div>
<!-- Current series -->
          <div>
            <div class="text-xs text-gray-400 mb-1">Current Series:</div>
            <div class="flex flex-row overflow-x-auto">
                          {#each plannedExercise.sets as set}
                            {#if set}
                              <div class="flex w-15 m-1 flex-col items-center">
                                <input
                                  bind:value={set.weight}
                                  type="number"
                                  class="text-sm w-14 h-7 border-t border-l border-r bg-green-600 text-white"
                                  placeholder="KG?" 
                                />
                                <input
                                  bind:value={set.reps}
                                  type="number"
                                  class="text-sm w-14 h-7 border-b border-l border-r bg-blue-600 text-white"
                                  placeholder="Reps?" 
                                />
                              </div>
                            {/if}
                        {/each}

            </div>
          </div>
        </div>
      {/each}
      
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        on:click={goToNextDay}
        class="bg-gray-800 p-4 rounded-lg shadow border border-gray-700 hover:bg-gray-700 cursor-pointer transition active:scale-95">
        <div class="grid grid-cols-2 mb-2">
          <h2 class="Title flex flex-col flex-wrap font-semibold text-white">
            ➕ End Day
            <div class="text-xs text-gray-400 mb-1">Go to the next workout day</div>
          </h2>
          <div class="flex justify-end items-center">
            <img src={next} alt="Next Day" class="w-6 h-6 filter invert brightness-0" />
          </div>
        </div>
      </div>

      <div
        on:click={goToNextDayTest}
        class="bg-gray-800 p-4 text-white rounded-lg shadow border border-gray-700 hover:bg-gray-700 cursor-pointer transition active:scale-95">
hallo ik knop
      </div>

    </div> 
  </div>
</div>

<Dialog bind:dialog>
  <div class="p-6 bg-gray-800 text-white w-96 max-w-full ">
    <h2 class="text-xl font-bold mb-4">Choose your Pokemon</h2>

    <!-- Scrollable list with max height -->
    <div class="space-y-3 max-h-64 overflow-y-auto">
      {#each $Exerciseslist.exercises as exercise}
        <button
          class={`block w-full p-3 rounded ${selectedSwapExercise === exercise ? 'bg-green-600' : 'bg-gray-600'} hover:bg-gray-500`}
          on:click={() => selectedSwapExercise = exercise}
        >
          {exercise.name}
        </button>
      {/each}
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button class="p-3 bg-red-500 rounded text-white" on:click={() => {dialog.close(); selectedSwapExercise = null ; console.log("cancelled", selectedSwapExercise);}}>Cancel</button>
      <button class="p-3 bg-green-500 rounded text-white disabled:bg-gray-400" on:click={confirmSwap} disabled={selectedSwapExercise === null}>Confirm</button>
    </div>
  </div>
</Dialog>
