import { IDBPDatabase, StoreKey, StoreNames } from "idb";
import { open } from "./connection";
import {
  CacheKey,
  CachedRequestInit,
  StoreConnection,
  StoreSubscription,
  TransactionCreator,
  TransactionInstance,
  TransactionType,
  ConnectedStoreRecord,
  StoreID,
  StoreUpdate,
  StoreData,
} from "./types";

export const createIdFromKey = (key: CacheKey) =>
  key.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)).join(":");

export class KeyID implements StoreID {
  public id: string;
  constructor(key: CacheKey) {
    this.id = createIdFromKey(key);
  }
  toString() {
    return this.id;
  }
}

export class Store<Schema = any> {
  private _workerFile: string;
  private _worker: Worker | null;
  private _channels: Map<string, Array<StoreSubscription>>;
  private _connections: WeakMap<StoreConnection, IDBPDatabase<Schema>>;
  private _transactions: WeakMap<StoreConnection, TransactionCreator<Schema>>;
  private _active: StoreConnection;

  constructor(active: StoreConnection, workerFile = "worker.js") {
    this._workerFile = workerFile;
    this._active = active;
    this._worker = null;
    this._channels = new Map();
    this._connections = new WeakMap();
    this._transactions = new WeakMap();
    this.handleWorker = this.handleWorker.bind(this);
    this.connect(active).then(() => {});
  }

  async connect(
    store: StoreConnection | null = null
  ): Promise<IDBPDatabase<Schema>> {
    const target = store || this._active;
    const connection = this._connections.get(target);
    if (!connection) {
      const { db, tx } = await open<Schema>(target.db, target.version);
      this._connections.set(target, db);
      this._transactions.set(target, tx);
      return db;
    }
    return connection as IDBPDatabase<Schema>;
  }

  close(store: StoreConnection | null = null) {
    const target = store || this._active;
    const connection = this._connections.get(target);
    if (connection) {
      connection.close();
      this._connections.delete(target);
      this._transactions.delete(target);
    }
  }

  async transaction(
    name: string | Array<string>,
    type?: TransactionType,
    store: StoreConnection | null = null
  ): Promise<TransactionInstance<Schema>> {
    const target = store || this._active;
    const transaction = this._transactions.get(target);

    if (!transaction) {
      await this.connect(store);
      return this._transactions.get(target)!(name, type);
    }

    return transaction(name, type);
  }

  get worker(): Worker {
    this.registerWorker();

    return this._worker!;
  }

  async switchConnection(store: StoreConnection) {
    this.close();
    this._active = store;
    await this.connect();
  }

  switchWorker(workerFile: string) {
    this.closeWorker();
    this._workerFile = workerFile;
    this.registerWorker();
  }

  registerWorker() {
    if (!this._worker) {
      this._worker = new Worker(this._workerFile);
      this._worker.onmessage = this.handleWorker;
    }
  }

  handleWorker(ev: MessageEvent) {
    const { error, success, ...data } = ev.data;
    if (success) {
      this.notify(data.id, data);
    } else {
      this.notify(data.id, null, error);
    }
  }

  closeWorker() {
    if (this._worker) {
      this._worker.terminate();
    }
    this._worker = null;
  }

  subscribe(
    id: string,
    resolve: (params: any) => any,
    reject: (params: any) => any,
    persist?: boolean
  ) {
    let channel = this._channels.get(id);
    if (!channel) {
      channel = [];
    }
    const subscription = { resolve, reject, persist };
    channel.push(subscription);
    this._channels.set(id, channel);

    // unsubscribe
    return () => {
      const channel = this._channels.get(id);
      if (channel) {
        const remaining = channel.filter((sub) => sub !== subscription);
        if (remaining.length) {
          this._channels.set(id, remaining);
        } else {
          this._channels.delete(id);
        }
      }
    };
  }

  notify(id: string, data: any, error?: Error | string) {
    const subscriptions = this._channels.get(id);
    if (subscriptions && subscriptions.length) {
      // process all active subscriptions
      const remaining = subscriptions.filter((sub) => {
        if (error) {
          sub.reject(error);
        }
        sub.resolve(data);
        return !!sub.persist;
      });
      if (remaining.length) {
        // remove non persistent subscriptions from channel
        this._channels.set(id, remaining);
      } else {
        // or remove channel entirely
        this._channels.delete(id);
      }
    }
  }

  waitFor(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.subscribe(id, resolve, reject);
    });
  }

  async createFetch(info: ConnectedStoreRecord) {
    return async () =>
      (await this.connect(info.store || this._active)).get(
        (info.collection || "offline") as StoreNames<Schema>,
        info.key.id as StoreKey<Schema, StoreNames<Schema>>
      );
  }

  backgroundFetch(
    info: ConnectedStoreRecord,
    input: RequestInfo,
    init?: CachedRequestInit
  ) {
    const { store, ...rest } = info;
    (this.worker as any).postMessage({
      info: { store: store || this._active, ...rest },
      input,
      init,
    });
  }

  async offlineFetch(
    info: ConnectedStoreRecord,
    input: RequestInfo,
    init?: CachedRequestInit
  ) {
    const { cacheFor = 0, background = false } = init || {};
    const queryStore = await this.createFetch(info);
    const results = (await queryStore()) as StoreData;

    // if there was a result that did not cache expire return it
    if (results && Date.now() - cacheFor * 1000 <= results.fetchedAt) {
      if (background) {
        this.notify(info.key.id, results);
        return;
      }
      return results;
    }

    // otherwise get it in a worker
    this.backgroundFetch(info, input, init);

    if (background) {
      return;
    }
    // TODO: fix this so it doesnt clear existing persistent subscriptions
    // waitFor results to be fetched
    await this.waitFor(info.key.id);

    // query indexeddb for the updated result
    return await queryStore();
  }

  async update(operation: StoreUpdate<Schema>) {
    const { name, type } = operation.definition;
    const transaction = await this.transaction(name, type);
    const [ids] = await transaction.exec(operation.local);

    // refetch subscriptions
    if (Array.isArray(ids)) {
      const notify = (id: string) => this.notify(id, {});
      ids.map(notify);
    }
    // update remotes by calling backgroundFetch in the promise
    if (operation.remote) {
      await operation.remote(this);
    }
  }
}
