<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import PageHeader from '../lib/structure/pageheader.svelte';
  
	let { children } = $props();
	let { isMobile, type, ready } = $state({
	  isMobile: false,
	  type: 'desktop',
	  ready: false
	});
  
	const updateMobileStatus = () => {
	  isMobile = window.innerWidth <= 932;
	  type = isMobile ? 'mobile' : 'desktop';
	};

	onMount(() => {
	  updateMobileStatus();
	  ready = true;
	  window.addEventListener('resize', updateMobileStatus);
  
	  return () => {
		window.removeEventListener('resize', updateMobileStatus);
	  };
	});
  </script>



  <!-- Ready ? loadMobile : Loaddesktop -->
  {#if !ready}
	<div class="flex items-center justify-center min-h-screen">
	  <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-gray-500"></div>
	</div>
  {:else}
	{#if isMobile}
	  {@render children()}
	  <PageHeader {type}/>
	{:else}
	  <PageHeader {type}/>
	  {@render children()}
	{/if}
  {/if}
  