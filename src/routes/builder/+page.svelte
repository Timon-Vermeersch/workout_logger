<script lang='ts'>
  import { Exerciseslist } from '../../lib/stores/data_store';
  import { builtPrograms } from '../../lib/stores/data_store';
  import { toast } from 'svelte-5-french-toast';

  import type {builtProgram} from '../../lib/interfaces/builtProgram'
  import type {ProgramDay } from '../../lib/interfaces/programDay'
  import type { PlannedExercise } from '$lib/interfaces/plannedExercise';
	import type { Exercise } from '$lib/interfaces/exercise';
  import type {SwipeDetail} from '../../lib/interfaces/swipeDetail'
  import { onMount } from 'svelte';

  import Dialog from '../../lib/components/dialog.svelte';
  import CollapsibleSection from '$lib/components/CollapsibleSection.svelte';
  import more from '../../lib/svg/more.svg';
  import less from '../../lib/svg/less.svg';
  import edit from '../../lib/svg/edit.svg';

  let selectedExerciseIndex:number|null = null;
  let selectedAddExercise:Exercise|null = null;

  let days:Record<string, ProgramDay>
  let dialog:Dialog;
  let dialogAddExercise:Dialog;
  let dialogChangeDayLabel:Dialog
  let dialogDeleteProgramDayConfirmation:Dialog
  let selectedToBuildName:string = '';
  let selectedToBuild: builtProgram | null = null;
  let enterName:string = '';
  let enterDayName:string = '';
  let newLabelInput = '';
  let activeIndex:number;


$: selectedToBuild = $builtPrograms.find(program => program.name === selectedToBuildName) || null;

import { swipe, type SwipeCustomEvent } from 'svelte-gestures';

let direction:string | null;
let target;
let pointerType;

function changeDayLabel(index:number, newLabel:string){
  if(!selectedToBuild){return};
  const programCopy:builtProgram = {...selectedToBuild}
  programCopy.days[index].label = newLabel
  selectedToBuild = programCopy
  console.log('testChangeDay')
}
function deleteDay(index) {
  console.log(selectedToBuild)
  if(!selectedToBuild){return}
  const programCopy:builtProgram = {...selectedToBuild}
  programCopy.days?.splice(index , 1)
  selectedToBuild = {...programCopy} 
}
function handler(event:SwipeCustomEvent, index:number) {
  console.log(index)
  direction = event.detail.direction;
  target = event.detail.target;
  pointerType = event.detail.pointerType;
  // const {direction} = event.detail also possible
  if(direction === 'right'){
    newLabelInput = '';
    activeIndex = index
    dialogChangeDayLabel.showModal()
    
  }
  if(direction === 'left'){
    console.log(selectedToBuild?.days[index].label)
    activeIndex = index
    dialogDeleteProgramDayConfirmation.showModal()
  }
}
/**
 * this function sets the selected exerciseIndex before opening dialog, and opens dialog
 * @param dayIndex index of which day in the program were at
 */
function addExercise(dayIndex:number) {
    selectedExerciseIndex = dayIndex;
    dialogAddExercise.showModal();
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
      const convertedSelectedExercise:PlannedExercise = {
        exercise : selectedAddExercise, 
        date: '',
        sets: []
      }
      selectedProgramDay.exercises.push(convertedSelectedExercise)
      console.log(updated)
      return updated
    })
    dialogAddExercise.close();
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

function handleAddProgram() {
  if (enterName != ''){
    const newProgram: builtProgram = {
    name: enterName,
    days: []};

    builtPrograms.update((programs:Array<builtProgram>) => [...programs , newProgram])
    dialog.close()
    enterName = ''
  }
}

function AddDay(){
 let daysInProgram = selectedToBuild?.days.length
console.log(daysInProgram)
const newDay = {
  dayNumber : daysInProgram + 1,
  label:'NewDay added',
  exercises: []
}
const programCopy:builtProgram = {...selectedToBuild!}
programCopy.days?.push(newDay)
console.log(programCopy)
selectedToBuild = {...programCopy}

setTimeout(() => {
  const lastDay = document.querySelector(`[data-day-index="${daysInProgram}"]`);
  lastDay?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, 0);
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

<div class="BODY min-h-[calc(100vh-56px)] text-black bg-gray-700">
  <div class="flex flex-col flex-auto space-y-4">
      <div>
          {#if selectedToBuild}
              <div>
                {#if selectedToBuild.days.length === 0}
                    <div class="text-center text-gray-400 my-4">Click the plus to add a day</div>
                {/if} 
                {#each selectedToBuild.days as day, dayIndex}
                <div use:swipe={()=>({ timeframe: 300, minSwipeDistance: 60 })} 
                  on:swipe={(event:SwipeCustomEvent) => handler(event, dayIndex)}
                  data-day-index={dayIndex}>
                  <CollapsibleSection headerText={`${day.dayNumber}. ${day.label}`}>
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
                </div>
                  
                  {/each}
                  <span class='flex justify-center' >
                    <button class='m-4' on:click={()=> {AddDay(); toast.success('Day Added!')}} >
                      <img  class= 'w-6 h-6 invert'src="{more}" alt="">
                    </button>
                  </span>
              </div>
          {:else}
              Please select a program at the top!
          {/if}
      </div>
  </div>
  <!-- {direction} -->
</div> 




<Dialog bind:dialog={dialogChangeDayLabel}>
  <div class="p-6 bg-gray-800 text-white w-80">
    <h2 class="text-xl font-bold mb-4 text-center">Change Day Label</h2>
    <form
      class="flex flex-col space-y-4"
      on:submit|preventDefault={() => {
        changeDayLabel(activeIndex, newLabelInput);
        dialogChangeDayLabel.close();
      }}
    >
      <input
        class="border p-2 bg-gray-700 text-white focus:ring-purple-500"
        bind:value={newLabelInput}
        type="text"
        placeholder="Enter new label"
      />
      <button
        class="bg-purple-600 hover:bg-purple-500 text-white font-semibold p-2 rounded transition"
        type="submit"
      >
        Confirm
      </button>
      <button
        type="button"
        class="text-sm text-gray-400 hover:text-white"
        on:click={() => dialogChangeDayLabel.close()}
      >
        Cancel
      </button>
    </form>
  </div>
</Dialog>


<Dialog bind:dialog={dialogAddExercise}>
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
      <button class="p-3 bg-red-500 rounded text-white" on:click={() => {dialogAddExercise.close(); selectedAddExercise = null ;}}>Cancel</button>
      <button class="p-3 bg-green-500 rounded text-white disabled:bg-gray-400" on:click={() => {confirmAdd()}} disabled={selectedAddExercise === null}>Confirm</button>
    </div>
  </div>
</Dialog>

<Dialog bind:dialog={dialogDeleteProgramDayConfirmation}>
  <div class="p-6 bg-gray-800 text-white w-80">
    <h2 class="text-xl font-bold mb-4 text-center">Confirm Deletion</h2>
    <p class="text-center text-gray-300 font-semibold text-white">
      Are you sure you want to delete
      <span class="italic mx-1">
        {selectedToBuild?.days[activeIndex]?.label || 'this day'}
      </span>
      ?
    </p>
      <form
        on:submit|preventDefault={() => {
          deleteDay(activeIndex);
          toast.success('Day deleted');
          dialogDeleteProgramDayConfirmation.close();
        }}
        method="dialog"
        class="flex flex-col space-y-4 mt-4"
      >
      <button
        type="submit"
        class="bg-red-600 hover:bg-red-500 text-white font-semibold p-2 rounded transition"
      >
        Delete
      </button>
      <button
        type="button"
        class="text-sm text-gray-400 hover:text-white"
        on:click={() => dialogDeleteProgramDayConfirmation.close()}
      >
        Cancel
      </button>
    </form>
  </div>
</Dialog>

<Dialog bind:dialog={dialog} on:close={() => console.log('closed')}>
  <div class="p-6 bg-gray-800 text-white w-80">
    <h2 class="text-xl font-bold mb-4 text-center">Add Program</h2>
    <form
      on:submit|preventDefault={handleAddProgram}
      class="flex flex-col space-y-4"
    >
      <input
        bind:value={enterName}
        type="text"
        placeholder="Program name"
        class="border p-2 bg-gray-700 text-white focus:ring-blue-500"
      />
      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 rounded transition"
      >
        Add New Program
      </button>
      <button
        type="button"
        class="text-sm text-gray-400 hover:text-white"
        on:click={() => dialog.close()}
      >
        Cancel
      </button>
    </form>
  </div>
</Dialog>