import { StorageType } from '../types';

export interface StorageAdapter {
  new (): BaseStorageAdapter;
  type: StorageType;
}
export abstract class BaseStorageAdapter {
  public static type: StorageType;
  abstract getItem(key: string): any;
  abstract setItem(key: string, value: any, options?: Record<string, any>): any;
  abstract removeItem(key: string, options?: Record<string, any>): any;
}

// @ts-ignore
const adapters: Record<StorageType, BaseStorageAdapter> = {};

export function registerAdapter(Adapter: StorageAdapter) {
  if (!(Adapter.type in adapters)) {
    // @ts-ignore
    adapters[Adapter.type] = new Adapter();
  }
}

export function useAdapter(type: StorageType): BaseStorageAdapter {
  if (!(type in adapters)) {
    throw new Error(
      `missing storage adapter '${type}', did you register it? ex. registerAdapter(${type
        .charAt(0)
        .toUpperCase()}${type.substring(1)}Storage)`
    );
  }
  return adapters[type];
}
