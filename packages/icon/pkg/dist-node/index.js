'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var litElement = require('lit-element');
var unsafeSvg = require('lit-html/directives/unsafe-svg');
var async = require('@interstice/async');

/**
 * @element i-icon
 *
 * @cssprop --i-icon-color
 * @cssprop --i-icon-width
 * @cssprop --i-icon-height
 */

class Icon extends async.AsyncElement {
  static get properties() {
    return {
      name: String,
      icons: String,
      cdn: String,
      version: String,
      path: String,
      size: Number
    };
  }

  static get styles() {
    return litElement.css`
      :host {
        display: inline-flex;
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
    this.path = '';
    this.size = 20;
    this.deps = ['name', 'path'];
  }

  icon() {
    return this.path || `${this.cdn}/@interstice/icons-${this.icons}@${this.version}/dist-src/${this.name}.js`;
  }

  async importIcon() {
    const {
      default: svgContent
    } = await Promise.resolve().then(() => require(`${this.icon()}`));
    return svgContent;
  }

  async asyncRender() {
    const svgContent = await this.importIcon();
    return litElement.svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.size} ${this.size}">${unsafeSvg.unsafeSVG(svgContent)}</svg>
    `;
  }

}
customElements.define('i-icon', Icon);

exports.Icon = Icon;
//# sourceMappingURL=index.js.map
