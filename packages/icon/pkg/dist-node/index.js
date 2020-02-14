'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var litElement = require('lit-element');

/**
 * @element i-icon
 *
 * @cssprop --i-icon-color
 * @cssprop --i-icon-width
 * @cssprop --i-icon-height
 */

class Icon extends litElement.LitElement {
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
    return litElement.css`
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
    const svg = await Promise.resolve().then(() => require(`${this.icon()}`));
    return litElement.html`<svg>${svg}</svg>`;
  }

}

exports.default = Icon;
//# sourceMappingURL=index.js.map
