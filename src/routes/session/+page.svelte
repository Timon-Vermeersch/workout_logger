<script lang="ts">
  import Stopwatch from '../../lib/components/stopwatch.svelte' 
  import more from '../../lib/svg/more.svg'
  import less from  '../../lib/svg/less.svg'
  import {personalProgram} from '../../lib/stores/data_store.ts'

  // let w = window.innerWidth;
  // let h = window.innerHeight;

  const options : Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "CET",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(new Date());


 

 

    
  </script>
    
    <div class=" bg-gray-700">
      <div class="p-4 bg-gray-700 min-h-screen">
        <div class="text-center text-gray-200 font-bold mb-4">
          <div class="bg-gray-800 text-white p-4 rounded overflow-visible">{formattedDate}</div>
        </div>
    
        <!-- Abegin -->
        <Stopwatch></Stopwatch>
    
        <div  class="  bg flex flex-col flex-auto space-y-4 mb-16">
          {#each $personalProgram as exercise, index}
            <div class="bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
              <div class="grid grid-cols-2 mb-2">
                <!-- Title -->
                <h2 class="Title flex flex-col flex-wrap font-semibold text-white">{index+1}: {exercise.name}
                  <div class="text-xs text-gray-400 mb-1">4 Sets : 12 Reps</div>
                </h2>
                <!-- Buttons -->
                <div class="Buttons flex align-center justify-end space-x-2 h-12 items-center m-1">
                  <button class="rounded-lg bg-gray-600 text-white p-2 hover:bg-gray-500 active:scale-90">
                    <img class='w-5 h-5 filter invert brightness-0' src={less} alt="">
                  </button>
                  <button class="rounded-lg bg-gray-600 text-white p-2 hover:bg-gray-500 active:scale-90">
                    <img class='w-5 h-5 filter invert brightness-0' src={more} alt="">
                  </button>
                  <button class="rounded-lg bg-gray-600 text-white p-2 hover:bg-gray-500 active:scale-90">⇆</button>
                </div>
              </div>
              
              <div class="mb-4">
                <div class="text-xs text-gray-400 mb-1">Previous Series:</div>
                <div class="flex flex-row overflow-x-auto">
                  {#each exercise.sets as set}
                    <input bind:value={set.Previous} class='w-14 text-sm bg-gray-600 text-white rounded m-1' readonly />
                  {/each}
                </div>
              </div>
    
              <div>
                <div class="text-xs text-gray-400 mb-1">Current Series:</div>
                <div class="flex flex-row overflow-x-auto">
                  {#each exercise.sets as set, index}
                <div class="flex w-15 m-1 flex-col items-center">
                  <input bind:value={set.set.set} type="number" class="text-sm w-14 h-7 border-t border-l border-r bg-green-600 text-white" placeholder="Reps?" />
                  <input bind:value={set.set.rep} type="number" class="text-sm w-14 h-7 border-b border-l border-r  bg-blue-600 text-white" placeholder="Kg?" />
                </div>
              {/each}

                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  