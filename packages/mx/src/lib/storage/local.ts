import { BaseStorageAdapter } from './adapter';
import { parseProperty } from '../utils';
import { StorageType } from '../types';

export class LocalStorage implements BaseStorageAdapter {
  static type = 'local' as StorageType;
  protected _storage = localStorage;

  getItem(key: string) {
    return parseProperty(this._storage.getItem(key));
  }

  setItem(key: string, value: any) {
    this._storage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {
    return this._storage.removeItem(key);
  }
}
