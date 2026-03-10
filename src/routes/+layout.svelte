<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import PageHeader from '../lib/structure/pageheader.svelte';
	import { Toaster } from 'svelte-5-french-toast';
	import { completedProgramDaysHistory } from '../lib/stores/data_store';
	import { pwaInfo } from 'virtual:pwa-info';

	let webManifestLink = $derived(pwaInfo ? pwaInfo.webManifest.linkTag : '');

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

let deferredPrompt: any = null;
let canInstall = $state(false);

onMount(() => {
	const onBeforeInstallPrompt = (e: Event) => {
		e.preventDefault();
		deferredPrompt = e;
		canInstall = true;
	};

	const onAppInstalled = () => {
		deferredPrompt = null;
		canInstall = false;
	};

	window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
	window.addEventListener('appinstalled', onAppInstalled);

	completedProgramDaysHistory.init();
	updateMobileStatus();

	ready = true;
	window.addEventListener('resize', updateMobileStatus);

	return () => {
		window.removeEventListener('resize', updateMobileStatus);
		window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
		window.removeEventListener('appinstalled', onAppInstalled);
	};
});
	async function installApp() {
		if (!deferredPrompt) return;

		await deferredPrompt.prompt();
		await deferredPrompt.userChoice;

		deferredPrompt = null;
		canInstall = false;
	}
</script>

<!-- Ready ? loadMobile : Loaddesktop -->
<Toaster />
{#if canInstall}
<div class='flex flex-col align-center justify-center'>
	<button onclick={installApp}>
		Install app
	</button>
</div>
{/if}
{#if !ready}
	<div class="flex min-h-screen items-center justify-center">
		<div class="h-8 w-8 animate-spin rounded-full border-t-2 border-gray-500"></div>
	</div>
{:else if isMobile}
	<div class="flex h-dvh flex-col">
		<div class="flex-1 overflow-auto">
			{@render children()}
		</div>
		<PageHeader {type} />
	</div>
{:else}
	<PageHeader {type} />
	{@render children()}
{/if}



<!-- <svelte:head>
	{@html webManifestLink}
</svelte:head> -->