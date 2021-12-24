import { BaseStorageAdapter } from './adapter';
import { StorageType } from '../types';

export class MemoryStorage extends BaseStorageAdapter {
  static type = 'memory' as StorageType;
  protected static _storage = new Map<any, any>();

  getItem(key: string) {
    return MemoryStorage._storage.get(key);
  }

  setItem(key: string, value: any) {
    MemoryStorage._storage.set(key, value);
  }

  removeItem(key: string) {
    return MemoryStorage._storage.delete(key);
  }
}
