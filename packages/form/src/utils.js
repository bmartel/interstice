export const isObject = value =>
  value != null &&
  typeof value === 'object' &&
  Object.prototype.toString.call(value) === '[object Object]';
