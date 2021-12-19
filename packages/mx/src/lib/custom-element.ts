import { defaultParseProperty } from './utils';
import { BaseElement } from './base-element';

export abstract class CustomElement extends BaseElement {
  constructor() {
    super();
    this.createStyles();
  }

  protected styles(): string {
    return '';
  }
  protected shouldUpdate(_previous: any, _next: any) {
    return true;
  }

  private createStyles() {
    const styles = this.styles();
    if (styles) {
      this._styles = document.createElement('style');
      this._styles.innerHTML = styles;
      this.shadowRoot && this.shadowRoot.appendChild(this._styles);
    }
  }

  parseProperty(newValue: any): any {
    return defaultParseProperty(newValue);
  }

  maybeRender(oldValue: any, newValue: any) {
    if (this._mountPoint && this.shouldUpdate(oldValue, newValue)) {
      this.forceRender();
    }
  }

  attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
    (this as any)[name] = newValue;
  }
}
