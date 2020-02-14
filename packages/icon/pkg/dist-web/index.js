import { css, html } from 'lit-element';
import AsyncElement from '@interstice/async';

/**
 * @element i-icon
 *
 * @cssprop --i-icon-color
 * @cssprop --i-icon-width
 * @cssprop --i-icon-height
 */

class Icon extends AsyncElement {
  static get properties() {
    return {
      name: String,
      icons: String,
      cdn: String,
      version: String,
      url: String
    };
  }

  static get styles() {
    return css`
      svg {
        width: var(--i-icon-width, 20px);
        height: var(--i-icon-height, 20px);
        fill: var(--i-icon-color, currentColor);
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.icons = 'zondicons';
    this.cdn = 'https://unpkg.com';
    this.version = '0.0.3';
    this.url = '';
  }

  icon() {
    return this.url || `${this.cdn}/@interstice/icons-${this.icons}@${this.version}/dist-src/${this.name}.js`;
  }

  async asyncRender() {
    const svg = await import(this.icon());
    return html`
      <svg>${svg}</svg>
    `;
  }

}

export default Icon;
//# sourceMappingURL=index.js.map
