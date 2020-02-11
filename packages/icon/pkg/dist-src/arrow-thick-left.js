import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import { Icon as BaseIcon } from './_base.js';
/**
 * @element z-icon-arrow-thick-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

export class Icon extends BaseIcon {
  render() {
    return html`<svg fill="currentColor" ...=${spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thick-left', Icon);