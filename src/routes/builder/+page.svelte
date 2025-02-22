<script>
    import Dialog from '../../lib/components/dialog.svelte'
    import CollapsibleSection from '$lib/components/CollapsibleSection.svelte';
    import '../../../static/more.svg'
    import '../../../static/less.svg'

    let dialog;
    let selectedToBuildName = '';
    let selectedToBuild
    


    let availablePrograms = [
  {
    name: 'Hypertrophy', 
    days: {
      1: [
        { exercise: 'Bench Press', sets:{ 'set 1': 8, 'set 2': 8, 'set 3': 8,'set 4': 8, 'set 5': 8 }},
        { exercise: 'Incline Dumbbell Press', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
        { exercise: 'Incline Dumbbell Press', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
      ],
      2: [
        { exercise: 'Squats', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
        { exercise: 'Lunges', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
      ],
      3: [
        { exercise: 'Deadlifts', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
        { exercise: 'Pull-Ups', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
      ]
    }
  },
  {
    name: 'Strenghtofwoz', 
    days: {
      1: [
        { exercise: 'Squats', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
        { exercise: 'Lunges', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
      ],
      Wednesday: [
        { exercise: 'Squats', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }},
        { exercise: 'Lunges', sets:{ set1: 8, set2: 8, set3: 8, set4: 8, set5: 8 }}
      ],
      Friday: [
        { exercise: 'Deadlifts', sets: 5, reps: 5 },
        { exercise: 'Pull-Ups', sets: 4, reps: 10 }
      ],
      soemday: [
        { exercise: 'Deadlifts', sets: 5, reps: 5 },
        { exercise: 'Pull-Ups', sets: 4, reps: 10 }
      ],
      noday: [
        { exercise: 'Deadlifts', sets: 5, reps: 5 },
        { exercise: 'Pull-Ups', sets: 4, reps: 10 }
      ]
    }
  }
];
// let selectedToBuild = availablePrograms.find(program => program.name === selectedToBuildName);
selectedToBuildName = availablePrograms[0]?.name || '';
function setBuild() {
    selectedToBuild = availablePrograms.find(program => program.name === selectedToBuildName)  
}
function setBuildTemp() {
    selectedToBuild = availablePrograms.find(program => program.name === 'Hypertrophy')
}
setBuildTemp()
console.log(selectedToBuild)
</script>
<!-- title -->
<div class= 'div2 items-center grid 3 grid-cols-[25%_50%_25%] bg-gray-800 text-white min-h-12   '>
   
    <div class='flex justify-center'>Buildrrr!</div>

    <select bind:value={selectedToBuildName} on:change={setBuild} class="flex justify-center items-center bg-gray-800 text-white text-center">
        {#each availablePrograms as availableProgram}
            <option value="{availableProgram.name}">{availableProgram.name}</option>
        {/each}
    </select>
    
    <button  class='flex justify-center' on:click={() => dialog.showModal()}>Plus(+)</button>
    
</div>
<!-- body -->
<div class=" BODY min-h-[calc(100vh-56px)] text-black bg-gray-700">
    <div class="flex flex-col flex-auto space-y-4">
        <div class="">
        {#if selectedToBuild}
        <div>
            {#each Object.entries(selectedToBuild.days) as [day, exercises], index}
            <CollapsibleSection headerText={`Day ${index + 1}`}>
                <div class="bg-gray-800 p-3 rounded-lg shadow m-2 border border-gray-700">
                    <h2 class="text-lg font-semibold text-white">Upper Body</h2>
            
                    {#each exercises as exercise}
                        <div class="border border-gray-700 rounded-md my-2 p-2 bg-gray-700">
                            <div class="grid grid-cols-3 text-md font-bold text-white mb-1">
                                <div class="flex justify-center items-center">{exercise.exercise}</div>
                                <div class="flex justify-center items-center"><img class='w-5 h-5 filter invert brightness-0' src="less.svg" alt=""></div>
                                <div class="flex justify-center items-center"><img class='w-5 h-5 filter invert brightness-0' src="more.svg" alt=""></div>
                            </div>
                            
            
                            {#each Object.entries(exercise.sets) as [setName, reps]}
                                <div class="flex items-center space-around justify-center bg-gray-600 rounded-md p-1 mb-1">
                                    <span class="font-medium flex-start text-gray-200">{setName} :</span>
                                    <input 
                                        placeholder="{reps}" 
                                        class="border border-gray-500 rounded-md w-14 mx-1 p-1 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-700 text-white"
                                        type="number"
                                    />
                                    <span class="text-gray-300">reps</span>
                                </div>
                            {/each}
                        </div>
                    {/each}
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




<Dialog bind:dialog >
    <button on:click={() => dialog.close()} >halloi</button>
</Dialog>


