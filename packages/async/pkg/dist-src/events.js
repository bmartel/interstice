export const PENDING_EVENT = 'pending';
export const pending = promise => new CustomEvent(PENDING_EVENT, {
  composed: true,
  bubbles: true,
  detail: {
    promise
  }
});