import { IDBPTransaction } from "idb";

export enum TransactionType {
  Read = "readonly",
  ReadWrite = "readwrite",
  Version = "versionchange",
}

export interface TransactionOperation<Schema, Result = any> {
  (tx: IDBPTransaction<Schema>): Promise<Result>;
}

export interface TransactionCreator<Schema = any> {
  (
    name: string | Array<string>,
    type?: TransactionType
  ): TransactionInstance<Schema>;
}

export interface TransactionDefinition {
  name: string | Array<string>;
  type?: TransactionType;
}

export interface TransactionInstance<Schema> extends TransactionDefinition {
  exec: (transaction: TransactionOperation<Schema>) => Promise<any>;
}

export type CacheKey = Array<string | number>;

export type CachedRequestInit = RequestInit & {
  cacheFor?: number;
  refetchInterval?: number;
  background?: boolean;
};

export interface StoreConnection {
  db: string;
  version: number;
}

export interface StoreID {
  key?: CacheKey;
  id: string;
}

export interface StoreRecord {
  store: StoreConnection;
  key: StoreID;
  collection?: string | "offline";
}

export interface StoreData<T = any> {
  id: string;
  data: T;
  fetchedAt: number;
}

export type ConnectedStoreRecord = Omit<StoreRecord, "store"> & {
  store?: StoreConnection;
};

export interface StoreSubscription {
  resolve: (params: any) => any;
  reject: (params: any) => any;
  persist?: boolean;
}

export interface StoreUpdate<Schema = any> {
  definition: TransactionDefinition;
  local: TransactionOperation<Schema>;
  remote?: (store: any) => Promise<void>;
}
