import { directive } from 'lit-html';

export const isObject = value =>
  value != null &&
  typeof value === 'object' &&
  Object.prototype.toString.call(value) === '[object Object]';

export const elementDirtyCheck = directive(value => part => {
  const { name, element } = part.committer;
  if (value !== element[name]) {
    part.setValue(value);
  }
});
