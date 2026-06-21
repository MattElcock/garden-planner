import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('garden.db');

export const initDatabase = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS gardens (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      units TEXT NOT NULL,
      width REAL NOT NULL,
      length REAL NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
};

export default db;
