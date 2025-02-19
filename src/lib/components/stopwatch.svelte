<script lang="ts">
    let timer = 0; 
    let interval: number | null = null;
    let startTime: number;

    function startTimer() {
      if (!interval) {
        startTime = Date.now() - timer;
        interval = setInterval(() => {
          timer = Date.now() - startTime;
        }, 10); // Update every 10ms
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

    function formatTime(milliseconds: number) {
      const totalSeconds = milliseconds / 1000;
      const m = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
      const s = String(Math.floor(totalSeconds % 60)).padStart(2, "0");
      const hundredths = String(Math.floor((totalSeconds % 1) * 100)).padStart(2, "0");
      return `${m}:${s}:${hundredths}`;
    }
</script>

<div class="bg-blue-100 p-4 rounded shadow-2xlrounded-lg shadow text-center m-4">
    <div class="text-3xl ">{formatTime(timer)}</div>
    <div class="flex justify-around mt-4">
      <button on:click={startTimer} class="bg-green-500 text-white py-2 px-4 rounded">Start</button>
      <button on:click={pauseTimer} class="bg-yellow-500 text-white py-2 px-4 rounded">Pause</button>
      <button on:click={resetTimer} class="bg-red-500 text-white py-2 px-4 rounded">Clear</button>
    </div>
</div>