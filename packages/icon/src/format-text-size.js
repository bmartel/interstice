
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import { Icon as BaseIcon } from './_base.js';

/**
 * @element z-icon-format-text-size
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

export class Icon extends BaseIcon {
  render() {
    return html`<svg fill="currentColor" ...=${spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z"/></svg>`;
  }
}

customElements.define('z-icon-format-text-size', Icon);