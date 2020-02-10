
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import { Icon as BaseIcon } from './_base.js';

/**
 * @element z-icon-attachment
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

export class Icon extends BaseIcon {
  render() {
    return html`<svg fill="currentColor" ...=${spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 3H7a7 7 0 1 0 0 14h8v-2H7A5 5 0 0 1 7 5h8a3 3 0 0 1 0 6H7a1 1 0 0 1 0-2h8V7H7a3 3 0 1 0 0 6h8a5 5 0 0 0 0-10z"/></svg>`;
  }
}

customElements.define('z-icon-attachment', Icon);