import { createElement, VNode, DOMNode, patch } from 'million';

export abstract class BaseElement extends HTMLElement {
  protected _mountPoint: DOMNode | null = null;
  protected _loadingMountPoint: DOMNode | null = null;
  protected _styles: HTMLStyleElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  protected async connected() {}

  protected abstract render(): VNode;
  protected loading(): VNode | null {
    return null;
  }

  protected mounted() {}

  protected async disconnected() {}

  protected unmounted() {}

  protected forceRender = () => {
    if (!this._mountPoint) return;
    patch(this._mountPoint, this.render());
  };

  protected forceLoading = () => {
    if (!this._loadingMountPoint || !this.loading()) return;
    patch(this._loadingMountPoint, this.loading()!);
  };

  protected createLoadingMountPoint() {
    const loading = this.loading();
    if (this._loadingMountPoint || !loading) return;
    this._loadingMountPoint = createElement(loading);
    this.shadowRoot && this.shadowRoot.appendChild(this._loadingMountPoint);
  }

  protected destroyLoadingMountPoint() {
    if (this._loadingMountPoint) {
      this.shadowRoot && this.shadowRoot.removeChild(this._loadingMountPoint!);
      this._loadingMountPoint = null;
    }
  }

  protected createMountPoint() {
    if (!this._mountPoint) {
      this._mountPoint = createElement(this.render());
      this.shadowRoot && this.shadowRoot.appendChild(this._mountPoint);
    }
  }

  protected destroyMountPoint() {
    if (this._mountPoint) {
      this.shadowRoot && this.shadowRoot.removeChild(this._mountPoint!);
      this._mountPoint = null;
    }
  }

  async connectedCallback() {
    this.createLoadingMountPoint();
    await this.connected();
    this.createMountPoint();
    this.mounted();
  }

  async disconnectedCallback() {
    await this.disconnected();
    this.destroyMountPoint();
    this.destroyLoadingMountPoint();
    this.unmounted();
  }
}
