import type { CookiesStatic, CookieAttributes } from 'js-cookie';
import { BaseStorageAdapter } from './adapter';
import { StorageType } from '../types';

export class CookieStorage implements BaseStorageAdapter {
  static type = 'cookie' as StorageType;
  protected _storage: CookiesStatic | undefined = undefined;

  constructor() {
    import('js-cookie').then((Cookie) => {
      this._storage = Cookie;
    });
  }

  getItem(key: string) {
    if (!this._storage) return;
    return this._storage.get(key);
  }

  setItem(key: string, value: any, options?: CookieAttributes) {
    if (!this._storage) return;
    this._storage.set(key, value, {
      expires: options && options.expires ? +options.expires : undefined,
      sameSite: 'strict',
      ...options,
    });
  }

  removeItem(key: string, options?: CookieAttributes) {
    if (!this._storage) return;
    return this._storage.remove(key, options);
  }
}
