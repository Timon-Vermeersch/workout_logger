<script lang="ts">
    let exercises = [
      {
        name: "Flat Bench Press",
        sets: [
          { previous: "10x10", current: "" },
          { previous: "10x12", current: "" },
          { previous: "16x8", current: "" },
          { previous: "18x8", current: "" },
          { previous: "22x8", current: "" }
        ]
      },
      {
        name: "Incline Dumbbell Press",
        sets: [
          { previous: "10x10", current: "" },
          { previous: "10x12", current: "" },
          { previous: "10x12", current: "" },
          { previous: "22x8", current: "" },
          { previous: "22x8", current: "" }
        ]
      }
    ];
  
    let timer = 0;
    let interval: number | null = null;
  
    function startTimer() {
      if (!interval) {
        interval = setInterval(() => {
          timer++;
        }, 1000);
      }
    }
  
    function pauseTimer() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
  
    function resetTimer() {
      timer = 0;
      pauseTimer();
    }
  
    function formatTime(seconds: number) {
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      return `${m}:${s}`;
    }
  </script>
<div class="min-h-[calc(100vh-64px)] bg-red-100">
    <div class="p-4 bg-pink-200 min-h-screen">
        <div class="text-center text-gray-700 font-bold mb-4">
          <div class="bg-gray-800 text-white py-2 rounded">woensdag 12 februari 2025</div>
        </div>
      
        {#each exercises as exercise}
          <div class="bg-gray-100 p-4 rounded-lg mb-4 shadow">
            <div class="flex justify-between items-center">
              <h2 class="font-semibold">{exercise.name}</h2>
              <button class="text-blue-500 hover:underline">⇆</button> <!-- Arrow for switching exercise -->
            </div>
            <div class="grid grid-cols-6 gap-2 mt-2">
              <div class="text-sm font-bold col-span-1">Set</div>
              {#each exercise.sets as set, i}
                <div class="col-span-1">
                  <div class="text-xs text-gray-500">Previous</div>
                  <input type="text" bind:value={set.previous} class="w-full text-sm bg-gray-200 rounded p-1" readonly />
                  <div class="text-xs text-gray-500 mt-1">Current</div>
                  <input type="text" bind:value={set.current} class="w-full text-sm bg-white rounded p-1" placeholder="Enter reps" />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      
        <div class="bg-white p-4 rounded-lg shadow text-center mt-4">
          <div class="text-3xl font-mono">{formatTime(timer)}</div>
          <div class="flex justify-around mt-4">
            <button on:click={startTimer} class="bg-green-500 text-white py-2 px-4 rounded">Start</button>
            <button on:click={pauseTimer} class="bg-yellow-500 text-white py-2 px-4 rounded">Pause</button>
            <button on:click={resetTimer} class="bg-red-500 text-white py-2 px-4 rounded">Clear</button>
          </div>
        </div>
      </div>
</div>