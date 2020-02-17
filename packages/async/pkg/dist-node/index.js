'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var litHtml = require('lit-html');
var litElement = require('lit-element');

const PENDING_EVENT = 'pending';
const pending = promise => new CustomEvent(PENDING_EVENT, {
  composed: true,
  bubbles: true,
  detail: {
    promise
  }
});

const resolved = new WeakSet();
const lazy = litHtml.directive((importPromise, value) => part => {
  if (!resolved.has(part)) {
    importPromise.then(() => resolved.add(part));
    part.startNode.parentNode.dispatchEvent(pending(importPromise));
  }

  part.setValue(value);
});

const AsyncBoundary = base => class extends base {
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

class AsyncElement extends litElement.LitElement {
  constructor() {
    super();
    this.deps = [];
  }

  firstUpdated() {
    this.setup();
  }

  update(changedProps) {
    if (this.deps.some(k => changedProps.has(k))) {
      this.reload();
    }

    return super.update(changedProps);
  }

  setup() {
    if (!this._loadedPromise) {
      this.reload();
    }
  }

  loader() {
    this._loaded = null;
    this._errored = null;
    this._loadedPromise = new Promise((resolve, reject) => {
      this._resolveLoaded = resolve;
      this._rejectLoaded = reject;
    });
    pending(this._loadedPromise);

    this._loadedPromise.then(data => {
      this._loaded = () => data;

      this.requestUpdate();
      return data;
    }).catch(err => {
      this._errored = err;
      this.requestUpdate();
    });
  }

  reload() {
    this.loader();
    this.resolve();
  }

  loaded() {
    return this._loaded;
  }

  errored() {
    if (this._errored) {
      return this.erroring(this._errored);
    }

    return null;
  }

  async resolve() {
    try {
      const data = await this.asyncRender();

      this._resolveLoaded(data);

      return data;
    } catch (err) {
      this._rejectLoaded(err);

      return null;
    }
  }

  erroring(err) {
    return litElement.html``;
  }

  loading() {
    return litElement.html``;
  }

  asyncRender() {
    return Promise.reject('Must implement asyncRender() in child components');
  }

  render() {
    const loaded = this.loaded();

    if (loaded) {
      return loaded();
    }

    const errored = this.errored();

    if (errored) {
      return errored;
    }

    return this.loading();
  }

}

exports.AsyncBoundary = AsyncBoundary;
exports.AsyncElement = AsyncElement;
exports.PENDING_EVENT = PENDING_EVENT;
exports.lazy = lazy;
exports.pending = pending;
//# sourceMappingURL=index.js.map
