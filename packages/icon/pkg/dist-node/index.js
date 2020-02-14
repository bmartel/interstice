'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var litElement = require('lit-element');
var unsafeSvg = require('lit-html/directives/unsafe-svg');
var AsyncElement = _interopDefault(require('@interstice/async'));

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
      url: String,
      size: Number
    };
  }

  static get styles() {
    return litElement.css`
      :host {
        display: inline-block;
      }
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
    this.version = '0.0.7';
    this.url = '';
    this.size = 20;
  }

  icon() {
    return this.url || `${this.cdn}/@interstice/icons-${this.icons}@${this.version}/dist-src/${this.name}.js`;
  }

  async asyncRender() {
    const {
      default: svgContent
    } = await Promise.resolve().then(() => require(`${this.icon()}`));
    return litElement.svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.size} ${this.size}">${unsafeSvg.unsafeSVG(svgContent)}</svg>
    `;
  }

}

exports.default = Icon;
//# sourceMappingURL=index.js.map
