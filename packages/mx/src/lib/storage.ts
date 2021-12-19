export const storage = new Map<any, any>();

export function routeStorage(data?: any) {
  if (data) {
    storage.set('route', data);
    return;
  }
  return storage.get('route');
}
