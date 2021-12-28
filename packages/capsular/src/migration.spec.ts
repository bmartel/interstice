import test from "ava";

import { useMigrations, migrate, migrations } from "./migration";

class Database extends IDBDatabase {
  add(storeName: string, value: any, key?: any): Promise<any> {
    console.log(storeName, value, key);
    return Promise.resolve(null);
  }
  clear(name: string): Promise<void> {
    console.log(name);
    return Promise.resolve();
  }
  count(storeName: string, key: any): Promise<number> {
    console.log(storeName, key);
    return Promise.resolve(Math.floor(Math.random() * 1000));
  }
  get(storeName: string, query: any): Promise<any> {
    console.log(storeName, query);
    return Promise.resolve({} as any);
  }
  getFromIndex(storeName: string, indexName: any, query: any): Promise<any> {
    console.log(storeName, indexName, query);
    return Promise.resolve({} as any);
  }
  getAll(storeName: string, query?: any, count?: number): Promise<any> {
    console.log(storeName, query, count);
    return Promise.resolve([{}] as any);
  }
  getAllFromIndex(
    storeName: string,
    indexName: any,
    query?: any,
    count?: number
  ): Promise<any> {
    console.log(storeName, indexName, query, count);
    return Promise.resolve([{}] as any);
  }
  getAllKeys(storeName: string, query?: any, count?: number): Promise<any> {
    console.log(storeName, query, count);
    return Promise.resolve([] as any);
  }
  getAllKeysFromIndex(
    storeName: string,
    indexName: any,
    query?: any,
    count?: number
  ): Promise<any> {
    console.log(storeName, indexName, query, count);
    return Promise.resolve([] as any);
  }
  getKey(storeName: string, query?: any): Promise<any> {
    console.log(storeName, query);
    return Promise.resolve("" as any);
  }
  getKeyFromIndex(
    storeName: string,
    indexName: any,
    query?: any
  ): Promise<any> {
    console.log(storeName, indexName, query);
    return Promise.resolve("" as any);
  }
  countFromIndex(
    storeName: string,
    indexName: string,
    key: any
  ): Promise<number> {
    console.log(storeName, indexName, key);
    return Promise.resolve(Math.floor(Math.random() * 1000));
  }
  delete(storeName: string, key: any) {
    console.log(storeName, key);
    return Promise.resolve();
  }
  put(storeName: string, value: any, key?: any): Promise<any> {
    console.log(storeName, value, key);
    return Promise.resolve({});
  }
}
const dbname = "test";

test.beforeEach(() => {
  migrations[dbname] = {};
});

test("useMigrations defines migrations by db", (t) => {
  useMigrations(dbname, { "-1": function () {} });
  t.is(Object.keys(migrations[dbname]).length, 1);
});

test("migrate uses defined migrations by db", (t) => {
  let called = 0;

  useMigrations(dbname, {
    0: function () {
      called++;
    },
    1: function () {
      called++;
    },
    2: function () {
      called++;
    },
  });

  const db = new Database() as any;
  db.name = dbname;

  migrate(db, 1);

  t.is(called, 1);
});

test("migrate does not call other db defined migrations", (t) => {
  let called1 = 0;
  let called2 = 0;

  useMigrations(dbname, {
    0: function () {
      called1++;
    },
    1: function () {
      called1++;
    },
    2: function () {
      called1++;
    },
  });

  useMigrations("test2", {
    0: function () {
      called2++;
    },
    1: function () {
      called2++;
    },
    2: function () {
      called2++;
    },
  });

  const db = new Database() as any;
  db.name = dbname;

  migrate(db, 1);

  t.is(called1, 1);
  t.is(called2, 0);
});

test("migrate only calls migrations which are older than the current version", (t) => {
  let called1 = 0;
  let called2 = 0;
  let called3 = 0;

  useMigrations(dbname, {
    1: function () {
      called1++;
    },
    2: function () {
      called2++;
    },
    3: function () {
      called3++;
    },
  });

  const db = new Database() as any;
  db.name = dbname;

  migrate(db, 2);

  t.is(called1, 0);
  t.is(called2, 0);
  t.is(called3, 1);
});
