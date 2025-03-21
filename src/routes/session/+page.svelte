<script lang="ts">
  import Stopwatch from '../../lib/components/stopwatch.svelte';
  import more from '../../lib/svg/more.svg';
  import less from '../../lib/svg/less.svg';
  import Dialog from '../../lib/components/dialog.svelte';
  import { personalProgram, excercisesList } from '../../lib/stores/data_store';

  let dialog;
  let selectedExerciseIndex = null;
  let selectedSwapExercise = null;

  function swapExercise(index) {
    selectedExerciseIndex = index;
    dialog.showModal();
  }

  function confirmSwap() {
    if (selectedExerciseIndex !== null && selectedSwapExercise !== null) {
      personalProgram.update(program => {
        const updatedProgram = [...program];
        updatedProgram[selectedExerciseIndex] = selectedSwapExercise;
        return updatedProgram;
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

  function addSet(index) {
    personalProgram.update(program => {
      const updatedProgram = [...program];
      const newSet = { Previous: '', set: { set: '', rep: '' } };
      updatedProgram[index].sets.push(newSet);
      return updatedProgram;
    });
  }

  function removeSet(index) {
    personalProgram.update(program => {
      const updatedProgram = [...program];
      updatedProgram[index].sets.pop();
      return updatedProgram;
    });
  }
</script>

<div class="bg-gray-700">
  <div class="p-4 bg-gray-700">
    <div class="text-center text-gray-200 font-bold mb-4">
      <div class="bg-gray-800 text-white p-4 rounded overflow-visible">{formattedDate}</div>
    </div>

    <Stopwatch />



      <!-- personalProgram[x].sets[y].set.set -> to access the current set reps -->
      <!-- personalProgram[x].sets[y].set.rep -> to access the current set weight -->
    <div class="bg flex flex-col flex-auto space-y-4">
      {#each $personalProgram as exercise, index}
        <div class="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
          <div class="grid grid-cols-2 mb-2">
            <h2 class="Title flex flex-col flex-wrap font-semibold text-white">
              {index + 1}: {exercise.name}
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
                ⇆
              </button>
            </div>
          </div>

          <div class="mb-4">
            <div class="text-xs text-gray-400 mb-1">Previous Series:</div>
            <div class="flex flex-row overflow-x-auto">
              {#each exercise.sets as set}
               <!-- personalProgram[x].sets[y].Previous -> to access the previous set (format: 'reps x weight') -->
                <input bind:value={set.Previous} class="w-14 text-sm bg-gray-600 text-white rounded m-1" readonly />
              {/each}
            </div>
          </div>

          <div>
            <div class="text-xs text-gray-400 mb-1">Current Series:</div>
            <div class="flex flex-row overflow-x-auto">
                          {#each exercise.sets as set}
                            {#if set.set}
                              <div class="flex w-15 m-1 flex-col items-center">
                                <input
                                  bind:value={set.set.set}
                                  type="number"
                                  class="text-sm w-14 h-7 border-t border-l border-r bg-green-600 text-white"
                                  placeholder="Reps?" 
                                />
                                <input
                                  bind:value={set.set.rep}
                                  type="number"
                                  class="text-sm w-14 h-7 border-b border-l border-r bg-blue-600 text-white"
                                  placeholder="Kg?" 
                                />
                              </div>
                            {/if}
                        {/each}

            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<Dialog bind:dialog>
  <div class="p-6 bg-gray-800 text-white w-96 max-w-full ">
    <h2 class="text-xl font-bold mb-4">Choose your Pokemon</h2>

    <!-- Scrollable list with max height -->
    <div class="space-y-3 max-h-64 overflow-y-auto">
      {#each $excercisesList as exercise}
        <button
          class={`block w-full p-3 rounded ${selectedSwapExercise === exercise ? 'bg-green-700' : 'bg-gray-600'} hover:bg-gray-500`}
          on:click={() => selectedSwapExercise = exercise}
        >
          {exercise.name}
        </button>
      {/each}
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button class="p-3 bg-red-500 rounded text-white" on:click={() => dialog.close()}>Cancel</button>
      <button class="p-3 bg-green-500 rounded text-white" on:click={confirmSwap} disabled={selectedSwapExercise === null}>Confirm</button>
    </div>
  </div>
</Dialog>
