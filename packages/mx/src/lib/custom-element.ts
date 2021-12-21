import { BaseElement } from './base-element';

export abstract class CustomElement extends BaseElement {
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

  async connectedCallback(): Promise<void> {
    await this.connect();
    this.createStyles();
    this.createMountPoint();
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
