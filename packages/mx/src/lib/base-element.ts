import { createElement, VNode, DOMNode, patch } from 'million';

export abstract class BaseElement extends HTMLElement {
  protected _mountPoint: DOMNode | null = null;
  protected _styles: HTMLStyleElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  protected async connected() {}

  protected abstract render(): VNode;

  protected mounted() {}

  protected async disconnected() {}

  protected unmounted() {}

  protected forceRender() {
    if (!this._mountPoint) return;
    patch(this._mountPoint, this.render());
  }

  protected createMountPoint() {
    if (this._mountPoint) return;
    this._mountPoint = createElement(this.render());
    this.shadowRoot && this.shadowRoot.appendChild(this._mountPoint);
  }

  protected destroyMountPoint() {
    if (!this._mountPoint) return;
    this.shadowRoot && this.shadowRoot.removeChild(this._mountPoint!);
    this._mountPoint = null;
  }

  async connectedCallback() {
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
