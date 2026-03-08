import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';


export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			workbox:{
				navigateFallback: '/session'
			},
			manifest: {
				name: 'Better Workout Logger',
				short_name: 'BWL',
				start_url: '/',
				scope: '/',
				display: 'standalone',
				background_color: '#000000',
				theme_color: '#000000',
				icons: [
		{
			src: '/test192.png',
			sizes: '192x192',
			type: 'image/png'
		},
		{
			src: '/test512.png',
			sizes: '512x512',
			type: 'image/png'
		}
	]
			}
		})
	]
});