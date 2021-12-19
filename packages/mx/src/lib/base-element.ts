import { createElement, VNode, DOMNode, patch } from 'million';

export abstract class BaseElement extends HTMLElement {
  protected _mountPoint: DOMNode | null = null;
  protected _styles: HTMLStyleElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  protected async connect() {}
  protected async disconnect() {}

  protected abstract render(): VNode;

  protected forceRender() {
    patch(this._mountPoint!, this.render());
  }

  protected createMountPoint() {
    this._mountPoint = createElement(this.render());
    this.shadowRoot && this.shadowRoot.appendChild(this._mountPoint);
  }

  private destroyMountPoint() {
    this.shadowRoot && this.shadowRoot.removeChild(this._mountPoint!);
    this._mountPoint = null;
  }

  async connectedCallback() {
    await this.connect();
    this.createMountPoint();
  }

  async disconnectedCallback() {
    await this.disconnect();
    this.destroyMountPoint();
  }
}
