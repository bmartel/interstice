import { BaseElement } from './base-element';

const defaultStyles = `
  :host {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export abstract class CustomElement extends BaseElement {
  private __removeListeners: Array<() => void> = [];
  private __scoped: any = {};
  private __elements: boolean = false;

  protected async elements(): Promise<void> {}

  protected styles(): string {
    return defaultStyles;
  }
  protected loadingStyles(): string {
    return defaultStyles;
  }
  protected shouldUpdate(_previous: any, _next: any) {
    return true;
  }

  resetScoped() {
    Object.entries(this.__scoped).forEach(
      ([key, { propertyType, defaultValue }]: [string, any]) => {
        // reset to the default for that propertyType
        (this as any).__proxy[key][propertyType] = defaultValue;
        // retrigger the getter
        // @ts-ignore
        (this as any)[key]; // eslint-disable
      }
    );
  }

  async loadElements() {
    if (!this.__elements) {
      await this.elements();
    }
    this.__elements = true;
  }

  async connectedCallback() {
    this.createLoadingStyles();
    await this.connected();
    await this.loadElements();
    this.createStyles();
    this.createMountPoint();
    this.mounted();
  }

  async disconnectedCallback() {
    await this.disconnected();
    this.removeEventListeners();
    this.destroyMountPoint();
    this.destroyStyles();
    this.__scoped = {};
    this.unmounted();
  }

  private removeEventListeners() {
    this.__removeListeners.forEach((f) => {
      f();
    });
    this.__removeListeners = [];
  }

  private createLoadingStyles() {
    const styles = this._mountedLoading && this.loadingStyles();
    if (this._styles || !styles) return;
    this._styles = document.createElement('style');
    this._styles.innerHTML = styles;
    this.shadowRoot && this.shadowRoot.appendChild(this._styles);
  }

  private createStyles() {
    if (this._styles) {
      this.updateStyles();
      return;
    }
    const styles = this.styles();
    if (styles) {
      this._styles = document.createElement('style');
      this._styles.innerHTML = styles;
      this.shadowRoot && this.shadowRoot.appendChild(this._styles);
    }
  }

  protected destroyStyles() {
    if (!this._styles) return;
    this.shadowRoot && this.shadowRoot.removeChild(this._styles!);
    this._styles = null;
  }

  protected updateStyles() {
    if (!this._styles) return;
    this._styles.innerHTML = this.styles();
  }

  maybeRender(oldValue: any, newValue: any) {
    if (this._mountPoint && this.shouldUpdate(oldValue, newValue)) {
      requestAnimationFrame(this.forceRender);
    }
  }

  attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
    (this as any)[name] = newValue;
  }
}
