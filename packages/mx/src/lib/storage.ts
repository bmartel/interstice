export const memoryStorage = new Map<any, any>();

export function routeStorage(data?: any) {
  if (data) {
    memoryStorage.set('route', data);
    return;
  }
  return memoryStorage.get('route');
}

export function storage(session?: boolean): Storage {
  if (session) return sessionStorage;
  return localStorage;
}
