import { LitElement, html } from 'lit-element';

class AsyncElement extends LitElement {
  firstUpdated() {
    this.setup();
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
    this._loadedPromise
      .then(data => {
        this._loaded = () => data;
        this.requestUpdate();
        return data;
      })
      .catch(err => {
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
    return html``;
  } 

  loading() {
    return html``;
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
export default AsyncElement;
