import {LitElement, html} from "lit-element";

export class AsyncElement extends LitElement {

  static _loaded = new WeakMap();

  static get deps() {
    return [];
  }

  constructor() {
    super();
    this.setup();
  }

  get _loader() {
    return {
      loader: this.load,
      deps: this.deps.map(p => ({ p: this[p] })),
    }
  }

  _load(changedProps = undefined) {
    this.loader();
    this.resolve(changedProps);
  }

  setup() {
    if (!this.hasOwnProperty('_loadedPromise')) {
      this._load();
    }
  }

  loader() {
    this._loadedPromise = new Promise((resolve, reject) => {
      this._resolveLoaded = resolve;
      this._rejectLoaded = reject;
    });
    this._loadedPromise.then(data => {
      this._loaded.set(this._loader, data);
      this.requestUpdate();
      return data;
    })
    .catch(err => {
      console.log(err); // eslint-disable-line
    });
  }

  load() { return Promise.reject('Must implement load() in child components');  } //eslint-disable-line

  unload() {
    this._loaded.delete(this._loader);
  }

  reload() {
    this.unload();
    this._load();
  }

  loaded() {
    if (this._loaded.has(this._loader)) {
      return this._loaded.get(this._loader);
    }
    return null;
  }
  
  async resolve(changedProps = undefined) {
    try {
      const loaded = this.loaded();
      if (loaded) {
        return loaded;
      }

      const data = await this.load(changedProps);
      this._resolveLoaded(data);
      return data;
    } catch(err) {
      this._rejectLoaded(err);
      return null;
    }
  }

  loading() { return html``; } // eslint-disable-line

  update(changedProps) {
    if (changedProps.keys().some(k => this.deps.some(k))) {
      this._load(changedProps);
    }
    return super.update(changedProps);
  }

  render() {
    const loaded = this.loaded();
    if(loaded) {
      return loaded();
    }
    return this.loading();
  }
};
