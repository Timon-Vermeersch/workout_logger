<script lang="ts">
  import Stopwatch from '../../lib/components/stopwatch.svelte' 
  import '../../../static/less.svg' 
  import '../../../static/more.svg' 
    let exercises = [
      {
        name: "Flat Bench Press",
        sets: [
          { previous: "10x10", current: "" },
          { previous: "10x12", current: "" },
          { previous: "16x8", current: "" },
          { previous: "18x8", current: "" },
          { previous: "22x8", current: "" },
          { previous: "18x8", current: "" },
        ]
      },
      {
        name: "Incline Dumbbell Press",
        sets: [
          { previous: "10x10", current: "" },
          { previous: "10x12", current: "" },
          { previous: "10x12", current: "" },
          { previous: "22x8", current: "" },
          { previous: "18x8", current: "" },
          { previous: "18x8", current: "" },
        ]
      },
      {
        name: "Incline Dumbbell Press",
        sets: [
          { previous: "10x10", current: "" },
          { previous: "10x12", current: "" },
          { previous: "10x12", current: "" },
          { previous: "22x8", current: "" },
          { previous: "18x8", current: "" },
          { previous: "18x8", current: "" },
        ]
      },
      
    ];
  
    
      let exercises2 = [
        {
          name: "Flat Bench Press" , 
          sets: [
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            {Previous: '10x10' , set:{set: '' , rep: ''}},
            
      ]},
    ]
    
  
    
  
  </script>
  
<div class="min-h-[calc(100vh-64px)]">
    <div class="p-4 bg-pink-200 min-h-screen">
        <div class="text-center text-gray-700 font-bold mb-4">
          <div class="bg-gray-800 text-white py-2 rounded">woensdag 12 februari 2025</div>
        </div>

<!-- Abegin -->
        <div class="bg-gray-100 flex-col p-4 rounded-lg mb-4 shadow">
          <div class="flex justify-between items-center">
            <h2 class="font-semibold">Flat Bench Press</h2>
            <div>
              <button class=" rounded-lg bg-blue-100 text-blue-500 px-4 hover:underline active:scale-90 active:bg-gray-200 "><img class='w-5 h-5' src="less.svg" alt=""></button>
              <button class="rounded-lg bg-red-100 text-blue-500 px-4 hover:underline active:scale-90 active:bg-gray-200"><img class='w-5 h-5' src="more.svg" alt=""></button>
              <button class="rounded-lg bg-red-100 text-blue-500 px-4 hover:underline active:scale-90 active:bg-gray-200">⇆</button>
            </div>
          </div>
          
          <div class='text-xs text-gray-500'>Previous Series:</div>
            <div class='flex flex-row overflow-x-auto'>
              {#each exercises2 as exercise}
                {#each exercise.sets as set}
                  <input bind:value={set.Previous} class= 'w-14 text-sm bg-gray-200 rounded m-1' readonly/>
                {/each}
              {/each}
            </div>
            <div class='text-xs text-gray-500'>Current Series:</div>

            <div class='flex flex-row overflow-x-auto  '>
              {#each exercises2 as exercise}
                {#each exercise.sets as set ,index}
                  <div class='flex w-15 m-1 flex-col items-center'>
                     
                    <input bind:value={set.set.set} type=number class='text-sm w-14 h-7 border-t border-l border-r bg-green-200' placeholder="Reps?" />
                    <input bind:value={set.set.rep} type=number class='text-sm w-14 h-7 border-b border-l border-r bg-blue-200  ' placeholder="Kg?" />
                  </div>
                {/each}
                
              {/each}
            </div>


            
        </div>     
<!-- end -->      
        <!-- {#each exercises as exercise}
          <div class="bg-gray-100 p-4 rounded-lg mb-4 shadow">
            <div class="flex justify-between items-center">
              <h2 class="font-semibold">{exercise.name}</h2>
              <button class="text-blue-500 hover:underline">⇆</button> 
            </div>
            <div class="grid grid-cols-6 gap-2 mt-2">
              
              {#each exercise.sets as set, i}
                <div class="col-span-1">
                  <div class="text-xs text-gray-500">Previous</div>
                  <input type="text" bind:value={set.previous} class="w-full text-sm bg-gray-200 rounded p-1" readonly />
                  <div class="text-xs text-gray-500 mt-1">Current</div>
                  <div class='flex-row border-1'>
                    <input type="text" bind:value={set.current} class="w-full text-sm bg-green-200 rounded p-1" placeholder="x?" />
                    <input type="text" bind:value={set.current} class="w-full text-sm bg-blue-200 rounded p-1" placeholder="x?" />
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each} -->
        <Stopwatch></Stopwatch>
      </div>
      
</div>