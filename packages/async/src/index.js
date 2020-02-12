import { LitElement, html } from 'lit-element';

export class AsyncElement extends LitElement {
  static get deps() {
    return [];
  }

  constructor() {
    super();
    this.setup();
  }

  _load(changedProps = undefined) {
    this.loader();
    this.resolve(changedProps);
  }

  setup() {
    if (!this._loadedPromise) {
      this._load();
    }
  }

  loader() {
    this._loaded = null;
    this._errored = null;
    this._loadedPromise = new Promise((resolve, reject) => {
      this._resolveLoaded = resolve;
      this._rejectLoaded = reject;
    });
    this._loadedPromise
      .then(data => {
        this._loaded = data;
        this.requestUpdate();
        return data;
      })
      .catch(err => {
        this._errored = err;
        this.requestUpdate();
      });
  }

  load() {
    return Promise.reject('Must implement load() in child components');
  } //eslint-disable-line

  unload() {
    AsyncElement._loaded.delete(this._loader);
  }

  reload() {
    this.unload();
    this._load();
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

  async resolve(changedProps = undefined) {
    try {
      const data = await this.load(changedProps);
      this._resolveLoaded(data);
      return data;
    } catch (err) {
      this._rejectLoaded(err);
      return null;
    }
  }

  erroring(err) {
    return html``;
  } // eslint-disable-line
  loading() {
    return html``;
  } // eslint-disable-line

  update(changedProps) {
    if (AsyncElement.deps.some(k => changedProps.has(k))) {
      this._load(changedProps);
    }
    return super.update(changedProps);
  }

  render() {
    const loaded = this.loaded();
    if (loaded) {
      return loaded;
    }

    const errored = this.errored();
    if (errored) {
      return errored;
    }

    return this.loading();
  }
}
