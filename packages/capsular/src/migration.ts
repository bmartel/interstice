import { IDBPDatabase } from "./indexeddb";

export interface Migration<Schema = any> {
  (db: IDBPDatabase<Schema>, oldVersion: number): void;
}

export const migrations: Record<string, Record<number, Migration>> = {};
export function useMigrations<Schema = any>(
  dbname: string,
  _migrations: Record<number, Migration<Schema>> = {}
) {
  migrations[dbname] = _migrations;
}

export function migrate(db: IDBPDatabase, oldVersion: number) {
  const _dbmigrations = Object.entries(migrations[db.name] || {});
  if (_dbmigrations.length) {
    _dbmigrations.forEach(([version, migration]) => {
      const migrationVersion = Number(version);
      if (oldVersion < migrationVersion) {
        migration(db, oldVersion);
      }
    });
  }
}
