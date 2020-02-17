import { directive } from 'lit-html';
import { pending } from './events.js';

const resolved = new WeakSet();

export const lazy = directive((importPromise, value) => part => {
  if (!resolved.has(part)) {
    importPromise.then(() => resolved.add(part));
    part.startNode.parentNode.dispatchEvent(pending(importPromise));
  }
  part.setValue(value);
});
