import { StorageType } from './types';
import {
  BaseStorageAdapter,
  registerAdapter,
  useAdapter,
} from './storage/adapter';
import { MemoryStorage } from './storage/memory';
import { RouteStorage } from './storage/route';
import { LocalStorage } from './storage/local';
import { SessionStorage } from './storage/session';
import { CookieStorage } from './storage/cookie';

// default Storage Adapters
registerAdapter(MemoryStorage);
registerAdapter(RouteStorage);
registerAdapter(LocalStorage);
registerAdapter(SessionStorage);
registerAdapter(CookieStorage);

class MultiStorage extends BaseStorageAdapter {
  type: StorageType;
  adapter: BaseStorageAdapter;

  constructor(type?: StorageType) {
    super();
    this.type = type || 'local';
    this.adapter = useAdapter(this.type);
  }

  getItem(key: string) {
    return this.adapter.getItem(key);
  }

  setItem(key: string, value: any, options?: any) {
    this.adapter.setItem(key, value, options);
  }

  removeItem(key: string, value: any, options?: any) {
    this.adapter.setItem(key, value, options);
  }
}
export function storage(storageType?: StorageType): MultiStorage {
  return new MultiStorage(storageType);
}
