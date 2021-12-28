class EventTarget {
  addEventListener(event, cb) {
    console.log(event, cb);
    setTimeout(() => cb({}), 10);
  }
  removeEventListener(event, cb) {
    console.log(event, cb);
  }
}
class IDBTransaction extends EventTarget {
  constructor() {
    super();
    this.db = {};
    this.error = {};
    this.mode = "";
    this.objectStoreNames = [];
    this.onabort = () => {};
    this.oncomplete = () => {};
    this.onerror = () => {};
  }
  abort() {}
  objectStore(name) {
    console.log(name);
  }
}

class IDBRequest extends EventTarget {
  constructor() {
    super();
    this.result = {};
    this.onblocked = () => null;
    this.onupgradeneeded = () => null;
  }
}

class IDBDatabase extends EventTarget {
  constructor() {
    super();
    this.name = "";
    this.version = 1;
    this.objectStoreNames = [];
    this.onabort = () => {};
    this.onclose = () => {};
    this.onerror = () => {};
    this.onversionchange = () => {};
  }
  close() {}
  createObjectStore(name, optionalParameters) {
    return { name, ...(optionalParameters || {}) };
  }
  deleteObjectStore(name) {
    console.log(name);
  }
  transaction(storeNames, mode) {
    console.log(storeNames, mode);
    return {};
  }
}
class IDBObjectStore {
  constructor() {
    this.autoIncrement = true;
    this.indexNames = [];
    this.keyPath = "";
    this.name = "";
    this.transaction = null;
  }

  add(value, key) {
    console.log(value, key);
    return new IDBRequest();
  }

  clear() {
    return new IDBRequest();
  }

  count(key) {
    console.log(key);
    return new IDBRequest();
  }

  createIndex(name, keyPath, options) {
    console.log(name, keyPath, options);
    return {};
  }

  delete(key) {
    console.log(key);
    return new IDBRequest();
  }

  deleteIndex(name) {
    console.log(name);
  }

  get(query) {
    console.log(query);
    return new IDBRequest();
  }

  getAll(query, count) {
    console.log(query, count);
    return new IDBRequest();
  }

  getAllKeys(query, count) {
    console.log(query, count);
    return new IDBRequest();
  }

  getKey(query) {
    console.log(query);
    return new IDBRequest();
  }
  index(name) {
    console.log(name);
    return {};
  }
  openCursor(query, direction) {
    console.log(query, direction);
    return new IDBRequest();
  }

  openKeyCursor(query, direction) {
    console.log(query, direction);
    return new IDBRequest();
  }

  put(value, key) {
    console.log(value, key);
    return new IDBRequest();
  }
}

class IDBIndex {
  constructor() {
    this.keyPath = "";
    this.name = "";
    this.objectStore = [];
    this.unique = false;
    this.multiEntry = false;
  }
  count(key) {
    console.log(key);
    return new IDBRequest();
  }

  get(key) {
    console.log(key);
    return new IDBRequest();
  }
  getAll(query, count) {
    console.log(query, count);
    return new IDBRequest();
  }
  getAllKeys(query, count) {
    console.log(query, count);
    return new IDBRequest();
  }

  getKey(key) {
    console.log(key);
    return new IDBRequest();
  }

  openCursor(query, direction) {
    console.log(query, direction);
    return new IDBRequest();
  }

  openKeyCursor(query, direction) {
    console.log(query, direction);
    return new IDBRequest();
  }
}

class IDBCursor {
  constructor() {
    this.direction = "next";
    this.key = "";
    this.primaryKey = "";
    this.source = "";
  }

  advance(count) {
    console.log(count);
  }

  continue(key) {
    console.log(key);
  }

  continuePrimaryKey(key, primaryKey) {
    console.log(key, primaryKey);
  }

  delete() {
    return new IDBRequest();
  }

  update(value) {
    console.log(value);
    return new IDBRequest();
  }
}

class IndexedDB {
  constructor() {}

  cmp(first, second) {
    return Number(first) - Number(second);
  }

  deleteDatabase(name) {
    console.log(name);
    return new IDBRequest();
  }

  open(name, version) {
    console.log(name, version);
    return new IDBRequest();
  }
}

global.IDBCursor = IDBCursor;
global.IDBIndex = IDBIndex;
global.IDBObjectStore = IDBObjectStore;
global.IDBDatabase = IDBDatabase;
global.IDBRequest = IDBRequest;
global.IDBTransaction = IDBTransaction;
global.indexedDB = new IndexedDB();
