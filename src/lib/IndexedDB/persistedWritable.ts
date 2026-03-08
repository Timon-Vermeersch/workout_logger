import { writable } from "svelte/store";
import { dbGet, dbSet } from "../IndexedDB/dbAdapter";

export function persistedWritable<T>(key: string, defaultValue: T) {

	const store = writable<T>(defaultValue);

	let loaded = false;

	async function init() {
		const saved = await dbGet<T>(key);

		if (saved !== undefined) {
			store.set(saved);
		}

		loaded = true;
	}

	store.subscribe((value) => {

		if (!loaded) return;

		dbSet(key, value);
	});

	return {
		subscribe: store.subscribe,
		set: store.set,
		update: store.update,
		init
	};
}