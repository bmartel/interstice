import { PENDING_EVENT } from './events.js';
export const AsyncBoundary = base => class extends base {
  static get properties() {
    return {
      _error: Boolean,
      _pending: Boolean,
      _pendingCount: Number
    };
  }

  constructor() {
    super();
    this._pending = false;
    this._pendingCount = 0;
    this.addEventListener(PENDING_EVENT, async e => {
      this._pending = true;
      this._pendingCount++; //eslint-disable-line

      try {
        await e.detail.promise;
      } catch (err) {
        this._error = true;
        this.error(err, e);
      }

      this._pendingCount--; //eslint-disable-line

      this._pending = this._pendingCount !== 0;
    });
  }

};