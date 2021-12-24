import { LocalStorage } from './local';
import { StorageType } from '../types';

export class SessionStorage extends LocalStorage {
  static type = 'session' as StorageType;
  protected _storage = sessionStorage;
}
