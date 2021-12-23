import { BaseElement } from './base-element';

export abstract class CustomElement extends BaseElement {
  private __removeListeners: Array<() => void> = [];
  private __elements: boolean = false

  protected async elements(): Promise<void> {}

  protected styles(): string {
    return `
      :host {
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
    `;
  }
  protected shouldUpdate(_previous: any, _next: any) {
    return true;
  }

  async connectedCallback() {
    await this.connect();
    if (!this.__elements) {
      await this.elements()
    }
    this.__elements = true;
    this.createStyles();
    this.createMountPoint();
  }

  async disconnectedCallback() {
    await this.disconnect();
    this.destroyMountPoint();
    this.removeEventListeners();
  }

  private removeEventListeners() {
    this.__removeListeners.forEach((f) => {
      f();
    });
    this.__removeListeners = [];
  }

  private createStyles() {
    const styles = this.styles();
    if (styles) {
      this._styles = document.createElement('style');
      this._styles.innerHTML = styles;
      this.shadowRoot && this.shadowRoot.appendChild(this._styles);
    }
  }
  protected updateStyles() {
    if (!this._styles) return;
    this._styles.innerHTML = this.styles();
  }

  maybeRender(oldValue: any, newValue: any) {
    if (this._mountPoint && this.shouldUpdate(oldValue, newValue)) {
      requestAnimationFrame(() => this.forceRender());
    }
  }

  attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
    (this as any)[name] = newValue;
  }
}
