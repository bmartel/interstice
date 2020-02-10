import { LitElement, css } from 'lit-element';

/**
 * @element z-icon
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */
export class Icon extends LitElement {
  static get styles() {
    return css`
      svg {
        width: var(--z-icon-width, 20px);
        height: var(--z-icon-height, 20px);
        fill: var(--z-icon-color, currentColor);
      }
    `;
  }

  iconProps() {// eslint-disable-line
    return {}; // eslint-disable-line
  }
}
