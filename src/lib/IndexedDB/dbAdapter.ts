const DB_NAME = "workout-db";
const STORE_NAME = "kv";
const VERSION = 1;

function openDb(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, VERSION);

		req.onupgradeneeded = () => {
			const db = req.result;

			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME);
			}
		};

		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}

export async function dbGet<T>(key: string): Promise<T | undefined> {
	const db = await openDb();

	return new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, "readonly");
		const store = tx.objectStore(STORE_NAME);

		const req = store.get(key);

		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}

export async function dbSet<T>(key: string, value: T) {
	const db = await openDb();

	return new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, "readwrite");
		const store = tx.objectStore(STORE_NAME);

		store.put(value, key);

		tx.oncomplete = () => resolve(undefined);
		tx.onerror = () => reject(tx.error);
	});
}