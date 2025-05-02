<script lang='ts'>
  import { Exerciseslist } from '../../lib/stores/data_store';
  import type {builtProgram} from '../../lib/interfaces/builtProgram'
  import type {ProgramDay } from '../../lib/interfaces/programDay'
  import { onMount } from 'svelte';
  import Dialog from '../../lib/components/dialog.svelte';
  import CollapsibleSection from '$lib/components/CollapsibleSection.svelte';
  import more from '../../lib/svg/more.svg';
  import less from '../../lib/svg/less.svg';
  import { builtPrograms } from '../../lib/stores/data_store';
  import type { PlannedExercise } from '$lib/interfaces/plannedExercise';

  
  let selectedExerciseIndex:number|null = null;
  let selectedAddExercise:Exer|null = null;

  let days:Record<string, ProgramDay>
  let dialog:any;
  let selectedToBuildName = '';
  let selectedToBuild: builtProgram | null = null;

$: selectedToBuild = $builtPrograms.find(program => program.name === selectedToBuildName) || null;

/**
 * this function sets the selected exerciseIndex before opening dialog, and opens dialog
 * @param dayIndex index of which day in the program were at
 */
function addExercise(dayIndex:number) {
    selectedExerciseIndex = dayIndex;
    dialog.showModal();
  }

function confirmAdd():void {
  console.log('clicked')
  if ( selectedAddExercise !== null  &&  selectedExerciseIndex !== null) {
    builtPrograms.update((programs:Array<builtProgram>) => {
      const updated = [...programs]
      const selectedProgram:builtProgram | undefined = updated.find((program)=>{ return program.name === selectedToBuildName})
      if (!selectedProgram) {
        return [] 
      }
      const selectedProgramDay:ProgramDay = selectedProgram?.days[selectedExerciseIndex]
      console.log('desze', selectedAddExercise)
      const convertedSelectedExercise:PlannedExercise = {
        exercise : selectedAddExercise, 
        date: '',
        sets: []
      }
      selectedProgramDay.exercises.push(convertedSelectedExercise)
      console.log(updated)
      return updated
    })
    dialog.close();
    selectedExerciseIndex = null;
    selectedAddExercise = null;
  }
}



  onMount(() => {
    selectedToBuildName = $builtPrograms[0]?.name || '';
    
  });

  function addSet(dayIndex, exerciseIndex) {
    builtPrograms.update(programs => {
      const updated = [...programs];

      const programIndex = updated.findIndex(p => p.name === selectedToBuildName);
      if (programIndex === -1) return programs;

      const day = { ...updated[programIndex].days[dayIndex] };
      const exercise = { ...day.exercises[exerciseIndex] };

      const sets = [...exercise.sets, { setNumber: exercise.sets.length + 1, reps: 10 }];

      exercise.sets = sets;
      day.exercises = [...day.exercises];
      day.exercises[exerciseIndex] = exercise;
      updated[programIndex].days = [...updated[programIndex].days];
      updated[programIndex].days[dayIndex] = day;
      
      return updated;
    });
  }

  function setBuild() {
      selectedToBuild = $builtPrograms.find(program => program.name === selectedToBuildName);  
      console.log(selectedToBuild)
  }

  function setBuildTemp() {
      selectedToBuild = $builtPrograms.find(program => program.name === 'Hypertrophy');
  }

  function removeSet(dayIndex, exerciseIndex) {
  builtPrograms.update(programs => {
    const updated = [...programs];

    const programIndex = updated.findIndex(p => p.name === selectedToBuildName);
    if (programIndex === -1) return programs;

    const day = { ...updated[programIndex].days[dayIndex] };
    const exercise = { ...day.exercises[exerciseIndex] };

    const sets = [...exercise.sets];
    sets.pop();

    exercise.sets = sets;
    day.exercises = [...day.exercises];
    day.exercises[exerciseIndex] = exercise;
    updated[programIndex].days = [...updated[programIndex].days];
    updated[programIndex].days[dayIndex] = day;

    return updated;
  });
}



setBuildTemp();
console.log(selectedToBuild)
</script>

<!-- title -->
<div class='div2 items-center grid 3 grid-cols-[25%_50%_25%] bg-gray-800 text-white min-h-12'>
  <div class='flex justify-center'>Buildrrr!</div>

  <select bind:value={selectedToBuildName} on:change={setBuild} class="flex justify-center items-center bg-gray-800 text-white text-center">
      {#each $builtPrograms as availableProgram}
          <option value="{availableProgram.name}">{availableProgram.name}</option>
      {/each}
  </select>

  <button class='flex justify-center' on:click={() => dialog.showModal()}>Plus(+)</button>
</div>

<!--body -->
<div class="BODY min-h-[calc(100vh-56px)] text-black bg-gray-700">
  <div class="flex flex-col flex-auto space-y-4">
      <div>
          {#if selectedToBuild}
              <div>
                {#each selectedToBuild.days as day, dayIndex}
                <CollapsibleSection headerText={`${day.dayNumber}. ${day.label}`}>
                  {dayIndex}
                    <div class="bg-gray-800 p-3 rounded-lg shadow m-2 border border-gray-700">
                        {#each day.exercises as { exercise, sets }, exerciseIndex}
                        <div class="border border-gray-700 rounded-md my-2 p-2 bg-gray-700">
                          <div class="grid grid-cols-2 text-md font-bold text-white mb-1">
                            <div class="flex justify-center items-center">{exercise.name}</div>
                           
                            <div class= 'flex gap-8 justify-center'>
                              <div class="flex  items-center">
                                  <button on:click={() => removeSet(dayIndex, exerciseIndex)}>
                                    <img class="w-5 h-5 filter invert brightness-0" src={less} alt="less" />
                                  </button>
                                </div>
                            
                                <div class="flex justify-center items-center">
                                  <button on:click={() => addSet(dayIndex, exerciseIndex)}>
                                    <img class="w-5 h-5 filter invert brightness-0" src={more} alt="more" />
                                  </button>
                                </div>
                            </div>
                          </div>
                  
                          {#each sets as set}
                            <div class="flex items-center space-around justify-center bg-gray-600 rounded-md p-1 mb-1">
                              <span class="font-medium flex-start text-gray-200">Set {set.setNumber}:</span>
                              <input 
                                placeholder={set.reps ?? ''} 
                                class="border border-gray-500 rounded-md w-14 mx-1 p-1 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
                                type="number"
                              />
                              <span class="text-gray-300">reps</span>
                            </div>
                          {/each}

                        </div>
                      {/each}
                      <button on:click={() => addExercise(dayIndex)} class="w-full flex items-center space-around justify-center bg-gray-600 rounded-md p-1 mb-1">
                          <img class="w-5 h-5 filter invert brightness-0" src="{more}" alt=""> 
                      </button>
                    </div>
                  </CollapsibleSection>
                  
                  {/each}
              </div>
          {:else}
              Please select a program at the top!
          {/if}
      </div>
  </div>
</div> 

<Dialog bind:dialog on:close={() => console.log('closed')}>
         <img src="https://open.lib.umn.edu/app/uploads/sites/208/2019/02/uterus-left-300x208.png" alt="">
         press escape to close
</Dialog>

<Dialog bind:dialog>
  <div class="p-6 bg-gray-800 text-white w-96 max-w-full ">
    <h2 class="text-xl font-bold mb-4">Choose your Pokemon</h2>

    <div class="space-y-3 max-h-64 overflow-y-auto">
      {#each $Exerciseslist.exercises as exercise}
        <button
          class={`block w-full p-3 rounded ${selectedAddExercise === exercise ? 'bg-green-600' : 'bg-gray-600'} hover:bg-gray-500`}
          on:click={() => {selectedAddExercise = exercise; }}
        >
          {exercise.name}
        </button>
      {/each}
    </div>

    <div class="flex justify-end space-x-3 mt-6">
      <button class="p-3 bg-red-500 rounded text-white" on:click={() => {dialog.close(); selectedAddExercise = null ;}}>Cancel</button>
      <button class="p-3 bg-green-500 rounded text-white disabled:bg-gray-400" on:click={() => {confirmAdd()}} disabled={selectedAddExercise === null}>Confirm</button>
    </div>
  </div>
</Dialog>