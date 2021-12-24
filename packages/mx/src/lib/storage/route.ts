import { MemoryStorage } from './memory';
import { StorageType } from '../types';

export class RouteStorage extends MemoryStorage {
  static type = 'route' as StorageType;

  getItem(key: string) {
    const route = super.getItem('route') || {};
    return route[key];
  }

  setItem(key: string, value: any) {
    const route = super.getItem('route') || {};
    super.setItem('route', {
      ...route,
      [key]: value,
    });
  }

  removeItem(key: string) {
    const route = super.getItem('route') || {};
    const removed = key in route;
    delete route[key];
    super.setItem('route', route);
    return removed;
  }
}
