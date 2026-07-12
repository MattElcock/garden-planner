import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';

// Open a synchronous Expo SQLite database with change listeners enabled
export const nativeDb = openDatabaseSync('garden.db', { enableChangeListener: true });

// Create a Drizzle client backed by Expo SQLite
export const db = drizzle(nativeDb);

export default db;
