<script lang="ts">
  // imports
  import book from '../svg/book.svg'
  import dumbell from '../svg/dumbell.svg'
  import fire from '../svg/Fire.svg'
  import graph from '../svg/graph.svg'
  import graph1 from '../svg/graph1.svg'
  import more from '../svg/more.svg'
  import { page } from '$app/state';
  // Variables
  let { type } = $props();
</script>
<!-- HTML -->
<!-- Header -->
{#if type === 'mobile'}
  <div class=" bg-white  bg-clip-padding backdrop-filter border border-black h-14 border-t-2 border-b-0 bg-grey-800 flex items-center justify-around space-x-2 overflow-x-none">
    
    <a href="/nutrition">
      <div class="flex flex-col justify-center border-2 items-center h-9 w-9 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300={page.url.pathname === '/nutrition'}>
        <img src={fire} alt="Nutrition">
        <span class="absolute bottom-[-3px] text-md font-medium text-center"></span>
      </div>
    </a>

    <a class='' href="/session">
      <div class=" flex justify-center border-2 items-center h-9 w-9 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300={page.url.pathname === '/session'}>
        <img class=' active:bg-gray-200'src={dumbell} alt="Session">
        <span class="absolute bottom-[-3px] text-md font-medium text-center"></span>
      </div>
    </a>
<!-- middle -->
    <a href="/start">
      <div class="flex justify-center border-1 text-black items-center h-9 w-12 bg-neutral-200  rounded-full shadow-lg scale-110">
        O
      </div>
    </a>

    <a href="/builder">
      <div class="flex justify-center border-2 items-center h-9 w-9 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300={page.url.pathname === '/builder'}>
        <img src={book} alt="builder">
        <span class="absolute bottom-[-3px] rounded-full text-md font-medium text-center"></span>
      </div>
    </a>

    <a href="/exerciseList">
      <div class="flex justify-center items-center border-2 h-9 w-9 rounded-xl hover:scale-110 transition-transform duration-300" class:bg-blue-300 ={page.url.pathname === '/diavoorstellingxd'}>
        <img src={graph1} alt="Graph">
        <span class="absolute bottom-[-3px] text-md font-medium text-center"></span>
      </div>
    </a>

  </div>
{:else}
  <div class="bg-green-300 p-4">DESKTOPPP</div>
{/if}