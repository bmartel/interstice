import { svg, css } from 'lit-element';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';
import AsyncElement from '@interstice/async';
/**
 * @element i-icon
 *
 * @cssprop --i-icon-color
 * @cssprop --i-icon-width
 * @cssprop --i-icon-height
 */

export default class Icon extends AsyncElement {
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
    return css`
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
    this.path = '';
    this.size = 20;
  }

  icon() {
    return this.path || `${this.cdn}/@interstice/icons-${this.icons}@${this.version}/dist-src/${this.name}.js`;
  }

  async importIcon() {
    const {
      default: svgContent
    } = await import(this.icon());
    return svgContent;
  }

  async asyncRender() {
    const svgContent = await this.importIcon();
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.size} ${this.size}">${unsafeSVG(svgContent)}</svg>
    `;
  }

}