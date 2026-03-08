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
			manifest: {
				name: 'Workout Logger',
				short_name: 'Workout',
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