
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import { Icon as BaseIcon } from './_base.js';

/**
 * @element z-icon-chart-bar
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

export class Icon extends BaseIcon {
  render() {
    return html`<svg fill="currentColor" ...=${spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z"/></svg>`;
  }
}

customElements.define('z-icon-chart-bar', Icon);