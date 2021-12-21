import Cookie from 'js-cookie';
import { StorageType } from './types';
import { parseProperty } from './utils';

export const memoryStorage = new Map<any, any>();

class MultiStorage {
  type: StorageType;
  constructor(type?: StorageType) {
    this.type = type || 'local';
  }

  setItem(key: string, value: any, expires?: string | number) {
    let _value: any;
    switch (this.type) {
      case 'memory':
        memoryStorage.set(key, value);
        break;
      case 'route':
        _value = memoryStorage.get('route') || {};
        memoryStorage.set(key, {
          ..._value,
          [key]: value,
        });
        break;
      case 'cookie':
        Cookie.set(key, value, {
          expires: !expires ? undefined : +expires,
          sameSite: 'strict',
        });
        break;
      case 'session':
        sessionStorage.setItem(key, JSON.stringify(value));
        break;
      case 'local':
      default:
        localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string): any {
    let value: any;
    switch (this.type) {
      case 'memory':
        value = memoryStorage.get(key);
        break;
      case 'route':
        value = memoryStorage.get('route');
        value = value && value[key];
        break;
      case 'cookie':
        value = Cookie.get(key);
        break;
      case 'session':
        value = parseProperty(sessionStorage.getItem(key));
        break;
      case 'local':
      default:
        value = parseProperty(localStorage.getItem(key));
    }
    return value;
  }
}
export function storage(storageType?: StorageType): MultiStorage {
  return new MultiStorage(storageType);
}
