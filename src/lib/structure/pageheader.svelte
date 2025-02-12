<script lang="ts">
  import '../../../static/dumbell.svg';
  import '../../../static/Fire.svg';
  import '../../../static/graph.svg';
  import '../../../static/graph1.svg';
  import '../../../static/book.svg';
  import { page } from '$app/stores'; // Import the `page` store
  
  let { type } = $props();
</script>

{#if type === 'mobile'}
  <div class="fixed bottom-0 left-0 right-0 h-16 bg-white flex items-center justify-around space-x-2 overflow-x-auto shadow-lg">
    
    <a href="/nutrition">
      <div class="flex justify-center items-center h-12 w-12 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300={$page.url.pathname === '/nutrition'}>
        <img src="Fire.svg" alt="Nutrition">
      </div>
    </a>

    <a href="/session">
      <div class="flex justify-center items-center h-12 w-12 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300={$page.url.pathname === '/session'}>
        <img src="dumbell.svg" alt="Session">
      </div>
    </a>

    <a href="/start">
      <div class="flex justify-center items-center h-12 w-12 bg-red-500 text-white rounded-full shadow-lg scale-110">
        Start
      </div>
    </a>

    <a href="/stats">
      <div class="flex justify-center items-center h-12 w-12 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300={$page.url.pathname === '/stats'}>
        <img src="book.svg" alt="Stats">
      </div>
    </a>

    <a href="/diavoorstellingxd">
      <div class="flex justify-center items-center h-12 w-12 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300={$page.url.pathname === '/diavoorstellingxd'}>
        <img src="graph1.svg" alt="Graph">
      </div>
    </a>

  </div>
{:else}
  <div class="bg-green-300 p-4">DESKTOPPP</div>
{/if}