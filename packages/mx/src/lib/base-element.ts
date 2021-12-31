import { createElement, VNode, DOMNode, patch } from 'million';

export abstract class BaseElement extends HTMLElement {
  protected _mountPoint: DOMNode | null = null;
  protected _mountedLoading: VNode | null = null;
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

  protected createLoadingMountPoint() {
    this._mountedLoading = this._mountedLoading || this.loading();
    if (this._mountPoint || !this._mountedLoading) return;
    this._mountPoint = createElement(this._mountedLoading);
    this.shadowRoot && this.shadowRoot.appendChild(this._mountPoint);
  }

  protected createMountPoint() {
    if (this._mountPoint) {
      this.removeMountPoint();
    }
    this._mountPoint = createElement(this.render());
    this.shadowRoot && this.shadowRoot.appendChild(this._mountPoint);
  }

  protected removeMountPoint() {
    if (!this._mountPoint) return;
    this.shadowRoot && this.shadowRoot.removeChild(this._mountPoint!);
    this._mountPoint = null;
  }

  protected destroyMountPoint() {
    this.removeMountPoint();
    this._mountedLoading = null;
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
    this.unmounted();
  }
}
