<script>
  import { onMount } from 'svelte';
  import Dialog from '../../lib/components/dialog.svelte';
  import CollapsibleSection from '$lib/components/CollapsibleSection.svelte';
  import more from '../../lib/svg/more.svg';
  import less from '../../lib/svg/less.svg';
  import { builtPrograms } from '../../lib/stores/data_store';

  let dialog;
  let selectedToBuildName = '';
  let selectedToBuild;

  // Initialize in onMount to avoid accessing store before it's ready
  onMount(() => {
      selectedToBuildName = $builtPrograms[0]?.name || '';
      setBuild();
  });

  function setBuild() {
      selectedToBuild = $builtPrograms.find(program => program.name === selectedToBuildName);  
  }

  function setBuildTemp() {
      selectedToBuild = $builtPrograms.find(program => program.name === 'Hypertrophy');
  }

  function addSet(index) {
      builtPrograms.update(program => {
          const updatedProgram = [...program];
          const newSet = { Previous: '', set: { set: '', rep: '' } };
          updatedProgram[index].sets.push(newSet);
          return updatedProgram;
      });
  }

  function removeSet(index) {
      builtPrograms.update(program => {
          const updatedProgram = [...program];
          updatedProgram[index].sets.pop();
          return updatedProgram;
      });
  }

  setBuildTemp();
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
                  {#each Object.entries(selectedToBuild.days) as [day, exercises], index}
                      <CollapsibleSection headerText={`Day ${index + 1}`}>
                          <div class="bg-gray-800 p-3 rounded-lg shadow m-2 border border-gray-700">
                              <h2 class="text-lg font-semibold text-white">Hardcoded Test</h2>

                              {#each exercises as exercise}
                              
                                  <div class="border border-gray-700 rounded-md my-2 p-2 bg-gray-700">
                                      <div class="grid grid-cols-3 text-md font-bold text-white mb-1">
                                          <div class="flex justify-center items-center">{exercise.exercise}</div>
                                          <div class="flex justify-center items-center"><img class='w-5 h-5 filter invert brightness-0' src={less} alt=""></div>
                                          <div class="flex justify-center items-center"><img class='w-5 h-5 filter invert brightness-0' src={more} alt=""></div>
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

<Dialog bind:dialog on:close={() => console.log('closed')}>
         <img src="https://open.lib.umn.edu/app/uploads/sites/208/2019/02/uterus-left-300x208.png" alt="">
         press escape to close
</Dialog>