
import { html } from 'lit-element';
import { spread } from '@open-wc/lit-helpers';
import { Icon as BaseIcon } from './_base.js';

/**
 * @element z-icon-border-horizontal
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

export class Icon extends BaseIcon {
  render() {
    return html`<svg fill="currentColor" ...=${spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h18v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 8h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>`;
  }
}

customElements.define('z-icon-border-horizontal', Icon);