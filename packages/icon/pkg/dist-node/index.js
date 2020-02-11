'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var litElement = require('lit-element');
var litHelpers = require('@open-wc/lit-helpers');

/**
 * @element z-icon
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon extends litElement.LitElement {
  static get styles() {
    return litElement.css`
      svg {
        width: var(--z-icon-width, 20px);
        height: var(--z-icon-height, 20px);
        fill: var(--z-icon-color, currentColor);
      }
    `;
  }

  iconProps() {
    // eslint-disable-line
    return {}; // eslint-disable-line
  }

}

/**
 * @element z-icon-add-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/></svg>`;
  }

}
customElements.define('z-icon-add-outline', Icon$1);

/**
 * @element z-icon-add-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>`;
  }

}
customElements.define('z-icon-add-solid', Icon$2);

/**
 * @element z-icon-adjust
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2v16a8 8 0 1 0 0-16zm0 18a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>`;
  }

}
customElements.define('z-icon-adjust', Icon$3);

/**
 * @element z-icon-airplane
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6l2.4-8z"/></svg>`;
  }

}
customElements.define('z-icon-airplane', Icon$4);

/**
 * @element z-icon-album
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$5 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0h20v20H0V0zm10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-album', Icon$5);

/**
 * @element z-icon-align-center
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$6 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM4 5h12v2H4V5zm0 8h12v2H4v-2z"/></svg>`;
  }

}
customElements.define('z-icon-align-center', Icon$6);

/**
 * @element z-icon-align-justified
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$7 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h18v2H1V5zm0 8h18v2H1v-2z"/></svg>`;
  }

}
customElements.define('z-icon-align-justified', Icon$7);

/**
 * @element z-icon-align-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$8 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h12v2H1V5zm0 8h12v2H1v-2z"/></svg>`;
  }

}
customElements.define('z-icon-align-left', Icon$8);

/**
 * @element z-icon-align-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$9 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2z"/></svg>`;
  }

}
customElements.define('z-icon-align-right', Icon$9);

/**
 * @element z-icon-anchor
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$a extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.34 15.66A7.97 7.97 0 0 0 9 17.94V10H5V8h4V5.83a3 3 0 1 1 2 0V8h4v2h-4v7.94a7.97 7.97 0 0 0 4.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 0 1-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-anchor', Icon$a);

/**
 * @element z-icon-announcement
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$b extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/></svg>`;
  }

}
customElements.define('z-icon-announcement', Icon$b);

/**
 * @element z-icon-apparel
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$c extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0z"/></svg>`;
  }

}
customElements.define('z-icon-apparel', Icon$c);

/**
 * @element z-icon-arrow-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$d extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="9 16.172 2.929 10.101 1.515 11.515 10 20 10.707 19.293 18.485 11.515 17.071 10.101 11 16.172 11 0 9 0"/></svg>`;
  }

}
customElements.define('z-icon-arrow-down', Icon$d);

/**
 * @element z-icon-arrow-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$e extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485 18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9"/></svg>`;
  }

}
customElements.define('z-icon-arrow-left', Icon$e);

/**
 * @element z-icon-arrow-outline-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$f extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-8V5h4v5h3l-5 5-5-5h3z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-outline-down', Icon$f);

/**
 * @element z-icon-arrow-outline-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$g extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-outline-left', Icon$g);

/**
 * @element z-icon-arrow-outline-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$h extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-outline-right', Icon$h);

/**
 * @element z-icon-arrow-outline-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$i extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 8v5H8v-5H5l5-5 5 5h-3z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-outline-up', Icon$i);

/**
 * @element z-icon-arrow-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$j extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>`;
  }

}
customElements.define('z-icon-arrow-right', Icon$j);

/**
 * @element z-icon-arrow-thick-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$k extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10V2h6v8h5l-8 8-8-8h5z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thick-down', Icon$k);

/**
 * @element z-icon-arrow-thick-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$l extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 13h8V7h-8V2l-8 8 8 8v-5z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thick-left', Icon$l);

/**
 * @element z-icon-arrow-thick-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$m extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thick-right', Icon$m);

/**
 * @element z-icon-arrow-thick-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$n extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10v8h6v-8h5l-8-8-8 8h5z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thick-up', Icon$n);

/**
 * @element z-icon-arrow-thin-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$o extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thin-down', Icon$o);

/**
 * @element z-icon-arrow-thin-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$p extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thin-left', Icon$p);

/**
 * @element z-icon-arrow-thin-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thin-right', Icon$q);

/**
 * @element z-icon-arrow-thin-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$r extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z"/></svg>`;
  }

}
customElements.define('z-icon-arrow-thin-up', Icon$r);

/**
 * @element z-icon-arrow-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$s extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="9 3.828 2.929 9.899 1.515 8.485 10 0 10.707 .707 18.485 8.485 17.071 9.899 11 3.828 11 20 9 20 9 3.828"/></svg>`;
  }

}
customElements.define('z-icon-arrow-up', Icon$s);

/**
 * @element z-icon-artist
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$t extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"/></svg>`;
  }

}
customElements.define('z-icon-artist', Icon$t);

/**
 * @element z-icon-at-symbol
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$u extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.6 13.47A4.99 4.99 0 0 1 5 10a5 5 0 0 1 8-4V5h2v6.5a1.5 1.5 0 0 0 3 0V10a8 8 0 1 0-4.42 7.16l.9 1.79A10 10 0 1 1 20 10h-.18.17v1.5a3.5 3.5 0 0 1-6.4 1.97zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-at-symbol', Icon$u);

/**
 * @element z-icon-attachment
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$v extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 3H7a7 7 0 1 0 0 14h8v-2H7A5 5 0 0 1 7 5h8a3 3 0 0 1 0 6H7a1 1 0 0 1 0-2h8V7H7a3 3 0 1 0 0 6h8a5 5 0 0 0 0-10z"/></svg>`;
  }

}
customElements.define('z-icon-attachment', Icon$v);

/**
 * @element z-icon-backspace
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$w extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 10l7-7h13v14H7l-7-7zm14.41 0l2.13-2.12-1.42-1.42L13 8.6l-2.12-2.13-1.42 1.42L11.6 10l-2.13 2.12 1.42 1.42L13 11.4l2.12 2.13 1.42-1.42L14.4 10z"/></svg>`;
  }

}
customElements.define('z-icon-backspace', Icon$w);

/**
 * @element z-icon-backward-step
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$x extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>`;
  }

}
customElements.define('z-icon-backward-step', Icon$x);

/**
 * @element z-icon-backward
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z"/></svg>`;
  }

}
customElements.define('z-icon-backward', Icon$y);

/**
 * @element z-icon-badge
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 0 0 8 0z"/></svg>`;
  }

}
customElements.define('z-icon-badge', Icon$z);

/**
 * @element z-icon-battery-full
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$A extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7zm5 0h4v6h-4V7z"/></svg>`;
  }

}
customElements.define('z-icon-battery-full', Icon$A);

/**
 * @element z-icon-battery-half
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$B extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z"/></svg>`;
  }

}
customElements.define('z-icon-battery-half', Icon$B);

/**
 * @element z-icon-battery-low
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$C extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7z"/></svg>`;
  }

}
customElements.define('z-icon-battery-low', Icon$C);

/**
 * @element z-icon-beverage
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$D extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-beverage', Icon$D);

/**
 * @element z-icon-block
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$E extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z"/></svg>`;
  }

}
customElements.define('z-icon-block', Icon$E);

/**
 * @element z-icon-bluetooth
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$F extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.41 0l6 6-4 4 4 4-6 6H9v-7.59l-3.3 3.3-1.4-1.42L8.58 10l-4.3-4.3L5.7 4.3 9 7.58V0h.41zM11 4.41V7.6L12.59 6 11 4.41zM12.59 14L11 12.41v3.18L12.59 14z"/></svg>`;
  }

}
customElements.define('z-icon-bluetooth', Icon$F);

/**
 * @element z-icon-bolt
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$G extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/></svg>`;
  }

}
customElements.define('z-icon-bolt', Icon$G);

/**
 * @element z-icon-book-reference
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$H extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"/></svg>`;
  }

}
customElements.define('z-icon-book-reference', Icon$H);

/**
 * @element z-icon-bookmark-outline-add
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$I extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4zm5 5V5h2v2h2v2h-2v2H9V9H7V7h2z"/></svg>`;
  }

}
customElements.define('z-icon-bookmark-outline-add', Icon$I);

/**
 * @element z-icon-bookmark-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$J extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z"/></svg>`;
  }

}
customElements.define('z-icon-bookmark-outline', Icon$J);

/**
 * @element z-icon-bookmark
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$K extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2z"/></svg>`;
  }

}
customElements.define('z-icon-bookmark', Icon$K);

/**
 * @element z-icon-border-all
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$L extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 11v6h6v-6h-6zm0-2h6V3h-6v6zm-2 2H3v6h6v-6zm0-2V3H3v6h6zm-8 9V1h18v18H1v-1z"/></svg>`;
  }

}
customElements.define('z-icon-border-all', Icon$L);

/**
 * @element z-icon-border-bottom
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$M extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h18v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm4-8h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm4-12h2v2h-2V1zm0 8h2v2h-2V9zm4-8h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-bottom', Icon$M);

/**
 * @element z-icon-border-horizontal
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$N extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h18v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 8h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-horizontal', Icon$N);

/**
 * @element z-icon-border-inner
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$O extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 9V1h2v8h8v2h-8v8H9v-8H1V9h8zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 8h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zm8-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-inner', Icon$O);

/**
 * @element z-icon-border-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$P extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h2v18H1V1zm4 0h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-left', Icon$P);

/**
 * @element z-icon-border-none
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$Q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-none', Icon$Q);

/**
 * @element z-icon-border-outer
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$R extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 19H1V1h18v18H2zm1-2h14V3H3v14zm10-8h2v2h-2V9zM9 9h2v2H9V9zM5 9h2v2H5V9zm4-4h2v2H9V5zm0 8h2v2H9v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-outer', Icon$R);

/**
 * @element z-icon-border-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$S extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM17 1h2v18h-2V1z"/></svg>`;
  }

}
customElements.define('z-icon-border-right', Icon$S);

/**
 * @element z-icon-border-top
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$T extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h18v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4-8h2v2H5V9zm0 8h2v2H5v-2zM9 5h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h2v2h-2V9zm0 8h2v2h-2v-2zm4-12h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-top', Icon$T);

/**
 * @element z-icon-border-vertical
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$U extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v18H9V1zm4 0h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-border-vertical', Icon$U);

/**
 * @element z-icon-box
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$V extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2H0V2zm1 3h18v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5zm6 2v2h6V7H7z"/></svg>`;
  }

}
customElements.define('z-icon-box', Icon$V);

/**
 * @element z-icon-brightness-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$W extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z"/></svg>`;
  }

}
customElements.define('z-icon-brightness-down', Icon$W);

/**
 * @element z-icon-brightness-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$X extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z"/></svg>`;
  }

}
customElements.define('z-icon-brightness-up', Icon$X);

/**
 * @element z-icon-browser-window-new
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$Y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z"/></svg>`;
  }

}
customElements.define('z-icon-browser-window-new', Icon$Y);

/**
 * @element z-icon-browser-window-open
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$Z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z"/></svg>`;
  }

}
customElements.define('z-icon-browser-window-open', Icon$Z);

/**
 * @element z-icon-browser-window
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$_ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z"/></svg>`;
  }

}
customElements.define('z-icon-browser-window', Icon$_);

/**
 * @element z-icon-bug
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$$ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z"/></svg>`;
  }

}
customElements.define('z-icon-bug', Icon$$);

/**
 * @element z-icon-buoy
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$10 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.16 6.42a8.03 8.03 0 0 0-3.58-3.58l-1.34 2.69a5.02 5.02 0 0 1 2.23 2.23l2.69-1.34zm0 7.16l-2.69-1.34a5.02 5.02 0 0 1-2.23 2.23l1.34 2.69a8.03 8.03 0 0 0 3.58-3.58zM6.42 2.84a8.03 8.03 0 0 0-3.58 3.58l2.69 1.34a5.02 5.02 0 0 1 2.23-2.23L6.42 2.84zM2.84 13.58a8.03 8.03 0 0 0 3.58 3.58l1.34-2.69a5.02 5.02 0 0 1-2.23-2.23l-2.69 1.34zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-buoy', Icon$10);

/**
 * @element z-icon-calculator
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$11 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm3 1v2h10V3H5zm0 4v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9zm4 0v6h2v-6h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9z"/></svg>`;
  }

}
customElements.define('z-icon-calculator', Icon$11);

/**
 * @element z-icon-calendar
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$12 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-calendar', Icon$12);

/**
 * @element z-icon-camera
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$13 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-camera', Icon$13);

/**
 * @element z-icon-chart-bar
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$14 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z"/></svg>`;
  }

}
customElements.define('z-icon-chart-bar', Icon$14);

/**
 * @element z-icon-chart-pie
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$15 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19.95 11A10 10 0 1 1 9 .05V11h10.95zm-.08-2.6H11.6V.13a10 10 0 0 1 8.27 8.27z"/></svg>`;
  }

}
customElements.define('z-icon-chart-pie', Icon$15);

/**
 * @element z-icon-chart
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$16 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/></svg>`;
  }

}
customElements.define('z-icon-chart', Icon$16);

/**
 * @element z-icon-chat-bubble-dots
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$17 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z"/></svg>`;
  }

}
customElements.define('z-icon-chat-bubble-dots', Icon$17);

/**
 * @element z-icon-checkmark-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$18 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>`;
  }

}
customElements.define('z-icon-checkmark-outline', Icon$18);

/**
 * @element z-icon-checkmark
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$19 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>`;
  }

}
customElements.define('z-icon-checkmark', Icon$19);

/**
 * @element z-icon-cheveron-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1a extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-down', Icon$1a);

/**
 * @element z-icon-cheveron-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1b extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-left', Icon$1b);

/**
 * @element z-icon-cheveron-outline-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1c extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-.7 10.54L5.75 9l1.41-1.41L10 10.4l2.83-2.82L14.24 9 10 13.24l-.7-.7z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-outline-down', Icon$1c);

/**
 * @element z-icon-cheveron-outline-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1d extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-outline-left', Icon$1d);

/**
 * @element z-icon-cheveron-outline-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1e extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-outline-right', Icon$1e);

/**
 * @element z-icon-cheveron-outline-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1f extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.7-10.54L14.25 11l-1.41 1.41L10 9.6l-2.83 2.8L5.76 11 10 6.76l.7.7z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-outline-up', Icon$1f);

/**
 * @element z-icon-cheveron-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1g extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-right', Icon$1g);

/**
 * @element z-icon-cheveron-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1h extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/></svg>`;
  }

}
customElements.define('z-icon-cheveron-up', Icon$1h);

/**
 * @element z-icon-clipboard
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1i extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-clipboard', Icon$1i);

/**
 * @element z-icon-close-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1j extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/></svg>`;
  }

}
customElements.define('z-icon-close-outline', Icon$1j);

/**
 * @element z-icon-close-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1k extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z"/></svg>`;
  }

}
customElements.define('z-icon-close-solid', Icon$1k);

/**
 * @element z-icon-close
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1l extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>`;
  }

}
customElements.define('z-icon-close', Icon$1l);

/**
 * @element z-icon-cloud-upload
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1m extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/></svg>`;
  }

}
customElements.define('z-icon-cloud-upload', Icon$1m);

/**
 * @element z-icon-cloud
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1n extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z"/></svg>`;
  }

}
customElements.define('z-icon-cloud', Icon$1n);

/**
 * @element z-icon-code
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1o extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"/></svg>`;
  }

}
customElements.define('z-icon-code', Icon$1o);

/**
 * @element z-icon-coffee
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1p extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 11H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2V1h14v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm0-2V5H2v4h2zm-2 8v-1h18v1l-4 2H6l-4-2z"/></svg>`;
  }

}
customElements.define('z-icon-coffee', Icon$1p);

/**
 * @element z-icon-cog
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-cog', Icon$1q);

/**
 * @element z-icon-color-palette
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1r extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 0 1-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 0 1 2.82 0l2.83 2.83a2 2 0 0 1 0 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-color-palette', Icon$1r);

/**
 * @element z-icon-compose
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1s extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>`;
  }

}
customElements.define('z-icon-compose', Icon$1s);

/**
 * @element z-icon-computer-desktop
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1t extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z"/></svg>`;
  }

}
customElements.define('z-icon-computer-desktop', Icon$1t);

/**
 * @element z-icon-computer-laptop
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1u extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 16h2v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12zM4 4v9h12V4H4zm4 11v1h4v-1H8z"/></svg>`;
  }

}
customElements.define('z-icon-computer-laptop', Icon$1u);

/**
 * @element z-icon-conversation
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1v extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z"/></svg>`;
  }

}
customElements.define('z-icon-conversation', Icon$1v);

/**
 * @element z-icon-copy
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1w extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z"/></svg>`;
  }

}
customElements.define('z-icon-copy', Icon$1w);

/**
 * @element z-icon-credit-card
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1x extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm4 8h4v2H4v-2z"/></svg>`;
  }

}
customElements.define('z-icon-credit-card', Icon$1x);

/**
 * @element z-icon-currency-dollar
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1-5h1a3 3 0 0 0 0-6H7.99a1 1 0 0 1 0-2H14V5h-3V3H9v2H8a3 3 0 1 0 0 6h4a1 1 0 1 1 0 2H6v2h3v2h2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-currency-dollar', Icon$1y);

/**
 * @element z-icon-dashboard
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"/></svg>`;
  }

}
customElements.define('z-icon-dashboard', Icon$1z);

/**
 * @element z-icon-date-add
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1A extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z"/></svg>`;
  }

}
customElements.define('z-icon-date-add', Icon$1A);

/**
 * @element z-icon-dial-pad
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1B extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-dial-pad', Icon$1B);

/**
 * @element z-icon-directions
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1C extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0l10 10-10 10L0 10 10 0zM6 10v3h2v-3h3v3l4-4-4-4v3H8a2 2 0 0 0-2 2z"/></svg>`;
  }

}
customElements.define('z-icon-directions', Icon$1C);

/**
 * @element z-icon-document-add
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1D extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zm-5 8h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"/></svg>`;
  }

}
customElements.define('z-icon-document-add', Icon$1D);

/**
 * @element z-icon-document
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1E extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z"/></svg>`;
  }

}
customElements.define('z-icon-document', Icon$1E);

/**
 * @element z-icon-dots-horizontal-double
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1F extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-dots-horizontal-double', Icon$1F);

/**
 * @element z-icon-dots-horizontal-triple
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1G extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-dots-horizontal-triple', Icon$1G);

/**
 * @element z-icon-download
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1H extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-download', Icon$1H);

/**
 * @element z-icon-duplicate
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1I extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2zm4 4v-2h2v2h2v2H8v2H6v-2H4v-2h2z"/></svg>`;
  }

}
customElements.define('z-icon-duplicate', Icon$1I);

/**
 * @element z-icon-edit-copy
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1J extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z"/></svg>`;
  }

}
customElements.define('z-icon-edit-copy', Icon$1J);

/**
 * @element z-icon-edit-crop
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1K extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 16H6a2 2 0 0 1-2-2V6H0V4h4V0h2v14h14v2h-4v4h-2v-4zm0-3V6H7V4h7a2 2 0 0 1 2 2v7h-2z"/></svg>`;
  }

}
customElements.define('z-icon-edit-crop', Icon$1K);

/**
 * @element z-icon-edit-cut
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1L extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.77 11.5l5.34 3.91c.44.33 1.24.59 1.79.59H20L6.89 6.38A3.5 3.5 0 1 0 5.5 8.37L7.73 10 5.5 11.63a3.5 3.5 0 1 0 1.38 1.99l2.9-2.12zM3.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM15.1 4.59A3.53 3.53 0 0 1 16.9 4H20l-7.5 5.5L10.45 8l4.65-3.41z"/></svg>`;
  }

}
customElements.define('z-icon-edit-cut', Icon$1L);

/**
 * @element z-icon-edit-pencil
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1M extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/></svg>`;
  }

}
customElements.define('z-icon-edit-pencil', Icon$1M);

/**
 * @element z-icon-education
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1N extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z"/></svg>`;
  }

}
customElements.define('z-icon-education', Icon$1N);

/**
 * @element z-icon-envelope
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1O extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>`;
  }

}
customElements.define('z-icon-envelope', Icon$1O);

/**
 * @element z-icon-exclamation-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1P extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"/></svg>`;
  }

}
customElements.define('z-icon-exclamation-outline', Icon$1P);

/**
 * @element z-icon-exclamation-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1Q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z"/></svg>`;
  }

}
customElements.define('z-icon-exclamation-solid', Icon$1Q);

/**
 * @element z-icon-explore
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1R extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-explore', Icon$1R);

/**
 * @element z-icon-factory
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1S extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.5 20H0V7l5 3.33V7l5 3.33V7l5 3.33V0h5v20h-9.5z"/></svg>`;
  }

}
customElements.define('z-icon-factory', Icon$1S);

/**
 * @element z-icon-fast-forward
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1T extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z"/></svg>`;
  }

}
customElements.define('z-icon-fast-forward', Icon$1T);

/**
 * @element z-icon-fast-rewind
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1U extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z"/></svg>`;
  }

}
customElements.define('z-icon-fast-rewind', Icon$1U);

/**
 * @element z-icon-film
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1V extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm6 0v12h8V4H6zM2 5v2h2V5H2zm0 4v2h2V9H2zm0 4v2h2v-2H2zm14-8v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zM8 7l5 3-5 3V7z"/></svg>`;
  }

}
customElements.define('z-icon-film', Icon$1V);

/**
 * @element z-icon-filter
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1W extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z"/></svg>`;
  }

}
customElements.define('z-icon-filter', Icon$1W);

/**
 * @element z-icon-flag
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1X extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z"/></svg>`;
  }

}
customElements.define('z-icon-flag', Icon$1X);

/**
 * @element z-icon-flashlight
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1Y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 7v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7L5 5V3h10v2l-2 2zM9 8v1a1 1 0 1 0 2 0V8a1 1 0 0 0-2 0zM5 0h10v2H5V0z"/></svg>`;
  }

}
customElements.define('z-icon-flashlight', Icon$1Y);

/**
 * @element z-icon-folder-outline-add
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1Z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2zm7 4V8h2v2h2v2h-2v2H9v-2H7v-2h2z"/></svg>`;
  }

}
customElements.define('z-icon-folder-outline-add', Icon$1Z);

/**
 * @element z-icon-folder-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1_ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z"/></svg>`;
  }

}
customElements.define('z-icon-folder-outline', Icon$1_);

/**
 * @element z-icon-folder
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$1$ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"/></svg>`;
  }

}
customElements.define('z-icon-folder', Icon$1$);

/**
 * @element z-icon-format-bold
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$20 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 19V1h8a5 5 0 0 1 3.88 8.16A5.5 5.5 0 0 1 11.5 19H3zm7.5-8H7v5h3.5a2.5 2.5 0 1 0 0-5zM7 4v4h3a2 2 0 1 0 0-4H7z"/></svg>`;
  }

}
customElements.define('z-icon-format-bold', Icon$20);

/**
 * @element z-icon-format-font-size
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$21 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z"/></svg>`;
  }

}
customElements.define('z-icon-format-font-size', Icon$21);

/**
 * @element z-icon-format-italic
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$22 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 1h9v2H8V1zm3 2h3L8 17H5l6-14zM2 17h9v2H2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-format-italic', Icon$22);

/**
 * @element z-icon-format-text-size
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$23 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z"/></svg>`;
  }

}
customElements.define('z-icon-format-text-size', Icon$23);

/**
 * @element z-icon-format-underline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$24 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 9A6 6 0 1 1 4 9V1h3v8a3 3 0 0 0 6 0V1h3v8zM2 17h16v2H2v-2z"/></svg>`;
  }

}
customElements.define('z-icon-format-underline', Icon$24);

/**
 * @element z-icon-forward-step
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$25 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>`;
  }

}
customElements.define('z-icon-forward-step', Icon$25);

/**
 * @element z-icon-forward
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$26 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z"/></svg>`;
  }

}
customElements.define('z-icon-forward', Icon$26);

/**
 * @element z-icon-gift
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$27 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0 1 10 .76 3 3 0 0 1 14.83 4zM8 10H3v8h5v-8zm4 0v8h5v-8h-5zM8 6H2v2h6V6zm4 0v2h6V6h-6zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-gift', Icon$27);

/**
 * @element z-icon-globe
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$28 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-2.25a8 8 0 0 0 4-2.46V9a2 2 0 0 1-2-2V3.07a7.95 7.95 0 0 0-3-1V3a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2v2h3a2 2 0 0 1 2 2v5.75zm-4 0V15a2 2 0 0 1-2-2v-1h-.5A1.5 1.5 0 0 1 4 10.5V8H2.25A8.01 8.01 0 0 0 8 17.75z"/></svg>`;
  }

}
customElements.define('z-icon-globe', Icon$28);

/**
 * @element z-icon-hand-stop
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$29 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 16a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4.01V4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v6h1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v8h1V1a1 1 0 1 1 2 0v9h1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v13h1V9a1 1 0 0 1 1-1h1v8z"/></svg>`;
  }

}
customElements.define('z-icon-hand-stop', Icon$29);

/**
 * @element z-icon-hard-drive
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2a extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10.4 5.6A5 5 0 1 0 15 12V5l-2.6 2.6zM10 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM6 3v2h4V3H6zM4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-hard-drive', Icon$2a);

/**
 * @element z-icon-headphones
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2b extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 8A6 6 0 1 0 4 8v11H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2V8a8 8 0 1 1 16 0v3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2V8zm-4 2h3v10h-3V10zm-7 0h3v10H5V10z"/></svg>`;
  }

}
customElements.define('z-icon-headphones', Icon$2b);

/**
 * @element z-icon-heart
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2c extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z"/></svg>`;
  }

}
customElements.define('z-icon-heart', Icon$2c);

/**
 * @element z-icon-home
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2d extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/></svg>`;
  }

}
customElements.define('z-icon-home', Icon$2d);

/**
 * @element z-icon-hot
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2e extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0s8 7.58 8 12a8 8 0 1 1-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0 0 10 6V0zM8 0a3 3 0 1 0 0 6V0z"/></svg>`;
  }

}
customElements.define('z-icon-hot', Icon$2e);

/**
 * @element z-icon-hour-glass
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2f extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3 18a7 7 0 0 1 4-6.33V8.33A7 7 0 0 1 3 2H1V0h18v2h-2a7 7 0 0 1-4 6.33v3.34A7 7 0 0 1 17 18h2v2H1v-2h2zM5 2a5 5 0 0 0 4 4.9V10h2V6.9A5 5 0 0 0 15 2H5z"/></svg>`;
  }

}
customElements.define('z-icon-hour-glass', Icon$2f);

/**
 * @element z-icon-inbox-check
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2g extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z"/></svg>`;
  }

}
customElements.define('z-icon-inbox-check', Icon$2g);

/**
 * @element z-icon-inbox-download
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2h extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM9 8V5h2v3h3l-4 4-4-4h3z"/></svg>`;
  }

}
customElements.define('z-icon-inbox-download', Icon$2h);

/**
 * @element z-icon-inbox-full
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2i extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 14h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 2h12v2H4V4zm0 3h12v2H4V7zm0 3h12v2H4v-2z"/></svg>`;
  }

}
customElements.define('z-icon-inbox-full', Icon$2i);

/**
 * @element z-icon-inbox
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2j extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2z"/></svg>`;
  }

}
customElements.define('z-icon-inbox', Icon$2j);

/**
 * @element z-icon-indent-decrease
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2k extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM5 6v8l-4-4 4-4z"/></svg>`;
  }

}
customElements.define('z-icon-indent-decrease', Icon$2k);

/**
 * @element z-icon-indent-increase
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2l extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM1 6l4 4-4 4V6z"/></svg>`;
  }

}
customElements.define('z-icon-indent-increase', Icon$2l);

/**
 * @element z-icon-information-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2m extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>`;
  }

}
customElements.define('z-icon-information-outline', Icon$2m);

/**
 * @element z-icon-information-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2n extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z"/></svg>`;
  }

}
customElements.define('z-icon-information-solid', Icon$2n);

/**
 * @element z-icon-key
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2o extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 1 1 4 4zm4.86-4.62A3 3 0 0 0 15 2a3 3 0 0 0-2.12.88l4.24 4.24z"/></svg>`;
  }

}
customElements.define('z-icon-key', Icon$2o);

/**
 * @element z-icon-keyboard
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2p extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v2h2V6H2zm1 3v2h2V9H3zm-1 3v2h2v-2H2zm3 0v2h10v-2H5zm11 0v2h2v-2h-2zM6 9v2h2V9H6zm3 0v2h2V9H9zm3 0v2h2V9h-2zm3 0v2h2V9h-2zM5 6v2h2V6H5zm3 0v2h2V6H8zm3 0v2h2V6h-2zm3 0v2h4V6h-4z"/></svg>`;
  }

}
customElements.define('z-icon-keyboard', Icon$2p);

/**
 * @element z-icon-layers
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z"/></svg>`;
  }

}
customElements.define('z-icon-layers', Icon$2q);

/**
 * @element z-icon-library
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2r extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 6l10-6 10 6v2H0V6zm0 12h20v2H0v-2zm2-2h16v2H2v-2zm0-8h4v8H2V8zm6 0h4v8H8V8zm6 0h4v8h-4V8z"/></svg>`;
  }

}
customElements.define('z-icon-library', Icon$2r);

/**
 * @element z-icon-light-bulb
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2s extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 13.33a7 7 0 1 1 6 0V16H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 18.5V17zm2-5.1V14h2v-2.1a5 5 0 1 0-2 0z"/></svg>`;
  }

}
customElements.define('z-icon-light-bulb', Icon$2s);

/**
 * @element z-icon-link
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2t extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z"/></svg>`;
  }

}
customElements.define('z-icon-link', Icon$2t);

/**
 * @element z-icon-list-add
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2u extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-list-add', Icon$2u);

/**
 * @element z-icon-list-bullet
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2v extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"/></svg>`;
  }

}
customElements.define('z-icon-list-bullet', Icon$2v);

/**
 * @element z-icon-list
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2w extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z"/></svg>`;
  }

}
customElements.define('z-icon-list', Icon$2w);

/**
 * @element z-icon-load-balancer
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2x extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 12h-6v4h1v4H8v-4h1v-4H3v4h1v4H0v-4h1v-4a2 2 0 0 1 2-2h6V6H7V0h6v6h-2v4h6a2 2 0 0 1 2 2v4h1v4h-4v-4h1v-4z"/></svg>`;
  }

}
customElements.define('z-icon-load-balancer', Icon$2x);

/**
 * @element z-icon-location-current
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 8-8 4-2 8z"/></svg>`;
  }

}
customElements.define('z-icon-location-current', Icon$2y);

/**
 * @element z-icon-location-food
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z"/></svg>`;
  }

}
customElements.define('z-icon-location-food', Icon$2z);

/**
 * @element z-icon-location-gas-station
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2A extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 18h1v2H0v-2h1V2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v16zM3 2v6h8V2H3zm10 8h1a2 2 0 0 1 2 2v3a1 1 0 0 0 2 0v-5l-2-2V6l-2-2 1-1 5 5v7a3 3 0 0 1-6 0v-3h-1v-2z"/></svg>`;
  }

}
customElements.define('z-icon-location-gas-station', Icon$2A);

/**
 * @element z-icon-location-hotel
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2B extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 12h18v6h-2v-2H2v2H0V2h2v10zm8-6h8a2 2 0 0 1 2 2v3H10V6zm-4 5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-location-hotel', Icon$2B);

/**
 * @element z-icon-location-marina
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2C extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 1.88V0h2v16h10l-4 4H2l-2-4h8v-2H0v-.26A24.03 24.03 0 0 0 8 1.88zM19.97 14H10v-.36A11.94 11.94 0 0 0 10 .36v-.2A16.01 16.01 0 0 1 19.97 14z"/></svg>`;
  }

}
customElements.define('z-icon-location-marina', Icon$2C);

/**
 * @element z-icon-location-park
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2D extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.33 12.77A4 4 0 1 1 3 5.13V5a4 4 0 0 1 5.71-3.62 3.5 3.5 0 0 1 6.26 1.66 2.5 2.5 0 0 1 2 2.08 4 4 0 1 1-2.7 7.49A5.02 5.02 0 0 1 12 14.58V18l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z"/></svg>`;
  }

}
customElements.define('z-icon-location-park', Icon$2D);

/**
 * @element z-icon-location-restroom
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2E extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4h2v7h4v-7zM5 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-location-restroom', Icon$2E);

/**
 * @element z-icon-location-shopping
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2F extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"/></svg>`;
  }

}
customElements.define('z-icon-location-shopping', Icon$2F);

/**
 * @element z-icon-location
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2G extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-location', Icon$2G);

/**
 * @element z-icon-lock-closed
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2H extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>`;
  }

}
customElements.define('z-icon-lock-closed', Icon$2H);

/**
 * @element z-icon-lock-open
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2I extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>`;
  }

}
customElements.define('z-icon-lock-open', Icon$2I);

/**
 * @element z-icon-map
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2J extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l6 4 8-4 6 4v16l-6-4-8 4-6-4V0zm7 6v11l6-3V3L7 6z"/></svg>`;
  }

}
customElements.define('z-icon-map', Icon$2J);

/**
 * @element z-icon-menu
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2K extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-menu', Icon$2K);

/**
 * @element z-icon-mic
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2L extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0V4z"/></svg>`;
  }

}
customElements.define('z-icon-mic', Icon$2L);

/**
 * @element z-icon-minus-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2M extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm5-9v2H5V9h10z"/></svg>`;
  }

}
customElements.define('z-icon-minus-outline', Icon$2M);

/**
 * @element z-icon-minus-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2N extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm5-11H5v2h10V9z"/></svg>`;
  }

}
customElements.define('z-icon-minus-solid', Icon$2N);

/**
 * @element z-icon-mobile-devices
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2O extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-mobile-devices', Icon$2O);

/**
 * @element z-icon-mood-happy-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2P extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z"/></svg>`;
  }

}
customElements.define('z-icon-mood-happy-outline', Icon$2P);

/**
 * @element z-icon-mood-happy-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2Q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 3H4.34a6 6 0 0 0 11.32 0z"/></svg>`;
  }

}
customElements.define('z-icon-mood-happy-solid', Icon$2Q);

/**
 * @element z-icon-mood-neutral-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2R extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"/></svg>`;
  }

}
customElements.define('z-icon-mood-neutral-outline', Icon$2R);

/**
 * @element z-icon-mood-neutral-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2S extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 13a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H7z"/></svg>`;
  }

}
customElements.define('z-icon-mood-neutral-solid', Icon$2S);

/**
 * @element z-icon-mood-sad-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2T extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 6H4.34a6 6 0 0 1 11.32 0z"/></svg>`;
  }

}
customElements.define('z-icon-mood-sad-outline', Icon$2T);

/**
 * @element z-icon-mood-sad-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2U extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 6a6 6 0 0 0-11.32 0h11.32z"/></svg>`;
  }

}
customElements.define('z-icon-mood-sad-solid', Icon$2U);

/**
 * @element z-icon-mouse
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2V extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 9V6A6 6 0 0 1 9 .08V9H4zm0 2v3a6 6 0 1 0 12 0v-3H4zm12-2V6a6 6 0 0 0-5-5.92V9h5z"/></svg>`;
  }

}
customElements.define('z-icon-mouse', Icon$2V);

/**
 * @element z-icon-music-album
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2W extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0h20v20H0V0zm10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`;
  }

}
customElements.define('z-icon-music-album', Icon$2W);

/**
 * @element z-icon-music-artist
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2X extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"/></svg>`;
  }

}
customElements.define('z-icon-music-artist', Icon$2X);

/**
 * @element z-icon-music-notes
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2Y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 2.5V0L6 2v12.17A3 3 0 0 0 5 14H3a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V5.71L18 4.3v7.88a3 3 0 0 0-1-.17h-2a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V2.5z"/></svg>`;
  }

}
customElements.define('z-icon-music-notes', Icon$2Y);

/**
 * @element z-icon-music-playlist
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2Z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-music-playlist', Icon$2Z);

/**
 * @element z-icon-navigation-more
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2_ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-navigation-more', Icon$2_);

/**
 * @element z-icon-network
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$2$ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg>`;
  }

}
customElements.define('z-icon-network', Icon$2$);

/**
 * @element z-icon-news-paper
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$30 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"/></svg>`;
  }

}
customElements.define('z-icon-news-paper', Icon$30);

/**
 * @element z-icon-notification
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$31 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"/></svg>`;
  }

}
customElements.define('z-icon-notification', Icon$31);

/**
 * @element z-icon-notifications-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$32 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 8v7h8V8a4 4 0 1 0-8 0zm2.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8a6 6 0 0 1 4.03-5.67zM12 18a2 2 0 1 1-4 0h4z"/></svg>`;
  }

}
customElements.define('z-icon-notifications-outline', Icon$32);

/**
 * @element z-icon-notifications
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$33 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z"/></svg>`;
  }

}
customElements.define('z-icon-notifications', Icon$33);

/**
 * @element z-icon-paste
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$34 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z"/></svg>`;
  }

}
customElements.define('z-icon-paste', Icon$34);

/**
 * @element z-icon-pause-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$35 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6h2v8H7V6zm4 0h2v8h-2V6z"/></svg>`;
  }

}
customElements.define('z-icon-pause-outline', Icon$35);

/**
 * @element z-icon-pause-solid
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$36 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM7 6v8h2V6H7zm4 0v8h2V6h-2z"/></svg>`;
  }

}
customElements.define('z-icon-pause-solid', Icon$36);

/**
 * @element z-icon-pause
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$37 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>`;
  }

}
customElements.define('z-icon-pause', Icon$37);

/**
 * @element z-icon-pen-tool
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$38 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 1 0 2 0zM6 18h8v2H6v-2z"/></svg>`;
  }

}
customElements.define('z-icon-pen-tool', Icon$38);

/**
 * @element z-icon-phone
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$39 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"/></svg>`;
  }

}
customElements.define('z-icon-phone', Icon$39);

/**
 * @element z-icon-photo
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3a extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-photo', Icon$3a);

/**
 * @element z-icon-php-elephant
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3b extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 12v8A10 10 0 0 1 8.17.17L10 2h5a5 5 0 0 1 5 4.99v9.02A4 4 0 0 1 16 20v-2a2 2 0 1 0 0-4h-4l-2-2zm5.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`;
  }

}
customElements.define('z-icon-php-elephant', Icon$3b);

/**
 * @element z-icon-pin
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3c extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 12h6v-1l-3-1V2l3-1V0H3v1l3 1v8l-3 1v1h6v7l1 1 1-1v-7z"/></svg>`;
  }

}
customElements.define('z-icon-pin', Icon$3c);

/**
 * @element z-icon-play-outline
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3d extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z"/></svg>`;
  }

}
customElements.define('z-icon-play-outline', Icon$3d);

/**
 * @element z-icon-play
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3e extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"/></svg>`;
  }

}
customElements.define('z-icon-play', Icon$3e);

/**
 * @element z-icon-playlist
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3f extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-playlist', Icon$3f);

/**
 * @element z-icon-plugin
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3g extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 14v4a2 2 0 0 1-2 2h-4v-2a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2H6a2 2 0 0 1-2-2v-4H2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2V6c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v4h-2a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2z"/></svg>`;
  }

}
customElements.define('z-icon-plugin', Icon$3g);

/**
 * @element z-icon-portfolio
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3h extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>`;
  }

}
customElements.define('z-icon-portfolio', Icon$3h);

/**
 * @element z-icon-printer
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3i extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"/></svg>`;
  }

}
customElements.define('z-icon-printer', Icon$3i);

/**
 * @element z-icon-pylon
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3j extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.4 18H20v2H0v-2h2.6L8 0h4l5.4 18zm-3.2-4H5.8l-1.2 4h10.8l-1.2-4zm-2.4-8H8.2L7 10h6l-1.2-4z"/></svg>`;
  }

}
customElements.define('z-icon-pylon', Icon$3j);

/**
 * @element z-icon-question
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3k extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z"/></svg>`;
  }

}
customElements.define('z-icon-question', Icon$3k);

/**
 * @element z-icon-queue
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3l extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-queue', Icon$3l);

/**
 * @element z-icon-radar
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3m extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 10a2 2 0 0 1-3.41 1.41A2 2 0 0 1 10 8V0a9.97 9.97 0 0 1 10 10h-8zm7.9 1.41A10 10 0 1 1 8.59.1v2.03a8 8 0 1 0 9.29 9.29h2.02zm-4.07 0a6 6 0 1 1-7.25-7.25v2.1a3.99 3.99 0 0 0-1.4 6.57 4 4 0 0 0 6.56-1.42h2.1z"/></svg>`;
  }

}
customElements.define('z-icon-radar', Icon$3m);

/**
 * @element z-icon-radio
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3n extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 9v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h13.8L.74 1.97 1.26.03 20 5.06V9zm-5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 8v2h16V8H2zm1.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5-1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-radio', Icon$3n);

/**
 * @element z-icon-refresh
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3o extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>`;
  }

}
customElements.define('z-icon-refresh', Icon$3o);

/**
 * @element z-icon-reload
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3p extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"/></svg>`;
  }

}
customElements.define('z-icon-reload', Icon$3p);

/**
 * @element z-icon-reply-all
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 17v-2.99A4 4 0 0 0 14 10h-3v5L5 9l6-6v5h3a6 6 0 0 1 6 6v3h-2zM6 6V3L0 9l6 6v-3L3 9l3-3z"/></svg>`;
  }

}
customElements.define('z-icon-reply-all', Icon$3q);

/**
 * @element z-icon-reply
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3r extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 17v-2.99A4 4 0 0 0 11 10H8v5L2 9l6-6v5h3a6 6 0 0 1 6 6v3h-2z"/></svg>`;
  }

}
customElements.define('z-icon-reply', Icon$3r);

/**
 * @element z-icon-repost
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3s extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/></svg>`;
  }

}
customElements.define('z-icon-repost', Icon$3s);

/**
 * @element z-icon-save-disk
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3t extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z"/></svg>`;
  }

}
customElements.define('z-icon-save-disk', Icon$3t);

/**
 * @element z-icon-screen-full
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3u extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z"/></svg>`;
  }

}
customElements.define('z-icon-screen-full', Icon$3u);

/**
 * @element z-icon-search
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3v extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>`;
  }

}
customElements.define('z-icon-search', Icon$3v);

/**
 * @element z-icon-send
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3w extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z"/></svg>`;
  }

}
customElements.define('z-icon-send', Icon$3w);

/**
 * @element z-icon-servers
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3x extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zM12 2v2h2V2h-2zm4 0v2h2V2h-2zm-4 7v2h2V9h-2zm4 0v2h2V9h-2zm-4 7v2h2v-2h-2zm4 0v2h2v-2h-2z"/></svg>`;
  }

}
customElements.define('z-icon-servers', Icon$3x);

/**
 * @element z-icon-share-01
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7L4.5 5.5l1.42 1.4L9 3.84z"/></svg>`;
  }

}
customElements.define('z-icon-share-01', Icon$3y);

/**
 * @element z-icon-share-alt
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z"/></svg>`;
  }

}
customElements.define('z-icon-share-alt', Icon$3z);

/**
 * @element z-icon-share
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3A extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7-4.8 4.8 1.42 1.4L9 3.84z"/></svg>`;
  }

}
customElements.define('z-icon-share', Icon$3A);

/**
 * @element z-icon-shield
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3B extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"/></svg>`;
  }

}
customElements.define('z-icon-shield', Icon$3B);

/**
 * @element z-icon-shopping-cart
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3C extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-shopping-cart', Icon$3C);

/**
 * @element z-icon-show-sidebar
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3D extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z"/></svg>`;
  }

}
customElements.define('z-icon-show-sidebar', Icon$3D);

/**
 * @element z-icon-shuffle
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3E extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>`;
  }

}
customElements.define('z-icon-shuffle', Icon$3E);

/**
 * @element z-icon-stand-by
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3F extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z"/></svg>`;
  }

}
customElements.define('z-icon-stand-by', Icon$3F);

/**
 * @element z-icon-star-full
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3G extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>`;
  }

}
customElements.define('z-icon-star-full', Icon$3G);

/**
 * @element z-icon-station
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3H extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 11.73a2 2 0 1 1 2 0V20H9v-8.27zm5.24 2.51l-1.41-1.41A3.99 3.99 0 0 0 10 6a4 4 0 0 0-2.83 6.83l-1.41 1.41a6 6 0 1 1 8.49 0zm2.83 2.83l-1.41-1.41a8 8 0 1 0-11.31 0l-1.42 1.41a10 10 0 1 1 14.14 0z"/></svg>`;
  }

}
customElements.define('z-icon-station', Icon$3H);

/**
 * @element z-icon-step-backward
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3I extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>`;
  }

}
customElements.define('z-icon-step-backward', Icon$3I);

/**
 * @element z-icon-step-forward
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3J extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>`;
  }

}
customElements.define('z-icon-step-forward', Icon$3J);

/**
 * @element z-icon-stethoscope
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3K extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 10.27V4.99a1 1 0 0 0-2 0V15a5 5 0 0 1-10 0v-1.08A6 6 0 0 1 0 8V2C0 .9.9 0 2 0h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2v6a4 4 0 1 0 8 0V2H9a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v6a6 6 0 0 1-5 5.92V15a3 3 0 0 0 6 0V5a3 3 0 0 1 6 0v5.27a2 2 0 1 1-2 0z"/></svg>`;
  }

}
customElements.define('z-icon-stethoscope', Icon$3K);

/**
 * @element z-icon-store-front
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3L extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"/></svg>`;
  }

}
customElements.define('z-icon-store-front', Icon$3L);

/**
 * @element z-icon-stroke-width
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3M extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0h20v5H0V0zm0 7h20v4H0V7zm0 6h20v3H0v-3zm0 5h20v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-stroke-width', Icon$3M);

/**
 * @element z-icon-subdirectory-left
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3N extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 12v1H8v5l-6-6 6-6v5h8V2h2z"/></svg>`;
  }

}
customElements.define('z-icon-subdirectory-left', Icon$3N);

/**
 * @element z-icon-subdirectory-right
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3O extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z"/></svg>`;
  }

}
customElements.define('z-icon-subdirectory-right', Icon$3O);

/**
 * @element z-icon-swap
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3P extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 6a4 4 0 1 1 8 0v8h3l-4 4-4-4h3V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8a4 4 0 1 1-8 0V6H0l4-4 4 4H5v8a2 2 0 0 0 2 2 2 2 0 0 0 2-2V6z"/></svg>`;
  }

}
customElements.define('z-icon-swap', Icon$3P);

/**
 * @element z-icon-tablet
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3Q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-tablet', Icon$3Q);

/**
 * @element z-icon-tag
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3R extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`;
  }

}
customElements.define('z-icon-tag', Icon$3R);

/**
 * @element z-icon-target
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3S extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"/></svg>`;
  }

}
customElements.define('z-icon-target', Icon$3S);

/**
 * @element z-icon-text-box
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3T extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0h6v6H0V0zm2 2v2h2V2H2zm12-2h6v6h-6V0zm2 2v2h2V2h-2zm-2 12h6v6h-6v-6zm2 2v2h2v-2h-2zM0 14h6v6H0v-6zm2 2v2h2v-2H2zM6 2h8v2H6V2zm0 14h8v2H6v-2zM16 6h2v8h-2V6zM2 6h2v8H2V6zm5 1h6v2H7V7zm2 2h2v4H9V9z"/></svg>`;
  }

}
customElements.define('z-icon-text-box', Icon$3T);

/**
 * @element z-icon-text-decoration
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3U extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 5h-2v12H8V3h8v2h-2v12h-2V5zM8 3a4 4 0 1 0 0 8V3z"/></svg>`;
  }

}
customElements.define('z-icon-text-decoration', Icon$3U);

/**
 * @element z-icon-thermometer
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3V extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 11.17V7h2v4.17a3 3 0 1 1-2 0zm-1-.63a4 4 0 1 0 4 0V4a2 2 0 1 0-4 0v6.53zM6 9.53V4a4 4 0 0 1 8 0v5.53A5.99 5.99 0 0 1 10 20 6 6 0 0 1 6 9.53z"/></svg>`;
  }

}
customElements.define('z-icon-thermometer', Icon$3V);

/**
 * @element z-icon-thumbs-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3W extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/></svg>`;
  }

}
customElements.define('z-icon-thumbs-down', Icon$3W);

/**
 * @element z-icon-thumbs-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3X extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/></svg>`;
  }

}
customElements.define('z-icon-thumbs-up', Icon$3X);

/**
 * @element z-icon-ticket
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3Y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 12v5H0v-5a2 2 0 1 0 0-4V3h20v5a2 2 0 1 0 0 4zM3 5v10h14V5H3zm7 7.08l-2.92 2.04L8.1 10.7 5.27 8.56l3.56-.08L10 5.12l1.17 3.36 3.56.08-2.84 2.15 1.03 3.4L10 12.09z"/></svg>`;
  }

}
customElements.define('z-icon-ticket', Icon$3Y);

/**
 * @element z-icon-time
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3Z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"/></svg>`;
  }

}
customElements.define('z-icon-time', Icon$3Z);

/**
 * @element z-icon-timer
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3_ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.32 7.1A8 8 0 1 1 9 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z"/></svg>`;
  }

}
customElements.define('z-icon-timer', Icon$3_);

/**
 * @element z-icon-translate
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$3$ extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7.41 9l2.24 2.24-.83 2L6 10.4l-3.3 3.3-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4 12.08 15z"/></svg>`;
  }

}
customElements.define('z-icon-translate', Icon$3$);

/**
 * @element z-icon-trash
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$40 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg>`;
  }

}
customElements.define('z-icon-trash', Icon$40);

/**
 * @element z-icon-travel-bus
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$41 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 18H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zM4 5v6h5V5H4zm7 0v6h5V5h-5zM5 2v1h10V2H5zm.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`;
  }

}
customElements.define('z-icon-travel-bus', Icon$41);

/**
 * @element z-icon-travel-car
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$42 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 14v-3H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1l4-7h8l4 7h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3zm13.86-5L13 4H7L4.14 9h11.72zM5.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`;
  }

}
customElements.define('z-icon-travel-car', Icon$42);

/**
 * @element z-icon-travel-case
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$43 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V5zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z"/></svg>`;
  }

}
customElements.define('z-icon-travel-case', Icon$43);

/**
 * @element z-icon-travel-taxi-cab
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$44 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 3h2l4 7h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1l4-7h2V1h4v2zm3.86 7L13 5H7l-2.86 5h11.72zM5.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`;
  }

}
customElements.define('z-icon-travel-taxi-cab', Icon$44);

/**
 * @element z-icon-travel-train
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$45 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 18H8l-2 2H3l2-2a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2l2 2h-3l-2-2zM5 5v6h10V5H5zm1.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM8 2v1h4V2H8z"/></svg>`;
  }

}
customElements.define('z-icon-travel-train', Icon$45);

/**
 * @element z-icon-travel-walk
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$46 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.94 5.94 0 0 0-1.4-1.4l-1.32-.88a1.72 1.72 0 0 0-1.7-.04L4 6v5h2V7l2-1-3 14h2l2.35-7.65L11 14v6h2v-8l-2.7-2.7L11 7zm1-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-travel-walk', Icon$46);

/**
 * @element z-icon-travel
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$47 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V5zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z"/></svg>`;
  }

}
customElements.define('z-icon-travel', Icon$47);

/**
 * @element z-icon-trophy
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$48 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/></svg>`;
  }

}
customElements.define('z-icon-trophy', Icon$48);

/**
 * @element z-icon-tuning
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$49 extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 16v4h-2v-4h-2v-3h6v3h-2zM1 9h6v3H1V9zm6-4h6v3H7V5zM3 0h2v8H3V0zm12 0h2v12h-2V0zM9 0h2v4H9V0zM3 12h2v8H3v-8zm6-4h2v12H9V8z"/></svg>`;
  }

}
customElements.define('z-icon-tuning', Icon$49);

/**
 * @element z-icon-upload
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4a extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-upload', Icon$4a);

/**
 * @element z-icon-usb
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4b extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 8v2h-4V4h2l-3-4-3 4h2v8H5V9.73a2 2 0 1 0-2 0V12a2 2 0 0 0 2 2h4v2.27a2 2 0 1 0 2 0V12h4a2 2 0 0 0 2-2V8h1V4h-4v4h1z"/></svg>`;
  }

}
customElements.define('z-icon-usb', Icon$4b);

/**
 * @element z-icon-user-add
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4c extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/></svg>`;
  }

}
customElements.define('z-icon-user-add', Icon$4c);

/**
 * @element z-icon-user-group
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4d extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"/></svg>`;
  }

}
customElements.define('z-icon-user-group', Icon$4d);

/**
 * @element z-icon-user-solid-circle
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4e extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>`;
  }

}
customElements.define('z-icon-user-solid-circle', Icon$4e);

/**
 * @element z-icon-user-solid-square
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4f extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm7 4v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm11 9.14A15.93 15.93 0 0 0 10 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/></svg>`;
  }

}
customElements.define('z-icon-user-solid-square', Icon$4f);

/**
 * @element z-icon-user
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4g extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/></svg>`;
  }

}
customElements.define('z-icon-user', Icon$4g);

/**
 * @element z-icon-vector
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4h extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 4h4.27a2 2 0 1 1 0 2h-2.14a9 9 0 0 1 4.84 7.25 2 2 0 1 1-2 .04 7 7 0 0 0-4.97-6V8H8v-.71a7 7 0 0 0-4.96 6 2 2 0 1 1-2-.04A9 9 0 0 1 5.86 6H3.73a2 2 0 1 1 0-2H8V3h4v1z"/></svg>`;
  }

}
customElements.define('z-icon-vector', Icon$4h);

/**
 * @element z-icon-video-camera
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4i extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 7l4-4v14l-4-4v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3zm-8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-video-camera', Icon$4i);

/**
 * @element z-icon-view-carousel
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4j extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z"/></svg>`;
  }

}
customElements.define('z-icon-view-carousel', Icon$4j);

/**
 * @element z-icon-view-column
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4k extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12 4H8v12h4V4zm2 0v12h4V4h-4zM6 4H2v12h4V4zM0 2h20v16H0V2z"/></svg>`;
  }

}
customElements.define('z-icon-view-column', Icon$4k);

/**
 * @element z-icon-view-hide
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4l extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"/></svg>`;
  }

}
customElements.define('z-icon-view-hide', Icon$4l);

/**
 * @element z-icon-view-list
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4m extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z"/></svg>`;
  }

}
customElements.define('z-icon-view-list', Icon$4m);

/**
 * @element z-icon-view-show
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4n extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>`;
  }

}
customElements.define('z-icon-view-show', Icon$4n);

/**
 * @element z-icon-view-tile
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4o extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z"/></svg>`;
  }

}
customElements.define('z-icon-view-tile', Icon$4o);

/**
 * @element z-icon-volume-down
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4p extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 7H3v6h4l5 5V2L7 7zm8.54 6.54l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08z"/></svg>`;
  }

}
customElements.define('z-icon-volume-down', Icon$4p);

/**
 * @element z-icon-volume-mute
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4q extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 7H5v6h4l5 5V2L9 7z"/></svg>`;
  }

}
customElements.define('z-icon-volume-mute', Icon$4q);

/**
 * @element z-icon-volume-off
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4r extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z"/></svg>`;
  }

}
customElements.define('z-icon-volume-off', Icon$4r);

/**
 * @element z-icon-volume-up
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4s extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41a6.98 6.98 0 0 0 0-9.9l1.41-1.41a8.97 8.97 0 0 1 0 12.72zm-2.82-2.82l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08z"/></svg>`;
  }

}
customElements.define('z-icon-volume-up', Icon$4s);

/**
 * @element z-icon-wallet
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4t extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>`;
  }

}
customElements.define('z-icon-wallet', Icon$4t);

/**
 * @element z-icon-watch
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4u extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 9h2v2H9V7h2v2zm-5.82 6.08a6.98 6.98 0 0 1 0-10.16L6 0h8l.82 4.92a6.98 6.98 0 0 1 0 10.16L14 20H6l-.82-4.92zM10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/></svg>`;
  }

}
customElements.define('z-icon-watch', Icon$4u);

/**
 * @element z-icon-window-new
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4v extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z"/></svg>`;
  }

}
customElements.define('z-icon-window-new', Icon$4v);

/**
 * @element z-icon-window-open
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4w extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z"/></svg>`;
  }

}
customElements.define('z-icon-window-open', Icon$4w);

/**
 * @element z-icon-window
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4x extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z"/></svg>`;
  }

}
customElements.define('z-icon-window', Icon$4x);

/**
 * @element z-icon-wrench
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4y extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.47 9.8A5 5 0 0 1 .2 3.22l3.95 3.95 2.82-2.83L3.03.41a5 5 0 0 1 6.4 6.68l10 10-2.83 2.83L6.47 9.8z"/></svg>`;
  }

}
customElements.define('z-icon-wrench', Icon$4y);

/**
 * @element z-icon-yin-yang
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4z extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>`;
  }

}
customElements.define('z-icon-yin-yang', Icon$4z);

/**
 * @element z-icon-zoom-in
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4A extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z"/></svg>`;
  }

}
customElements.define('z-icon-zoom-in', Icon$4A);

/**
 * @element z-icon-zoom-out
 *
 * @cssprop --z-icon-color
 * @cssprop --z-icon-width
 * @cssprop --z-icon-height
 */

class Icon$4B extends Icon {
  render() {
    return litElement.html`<svg fill="currentColor" ...=${litHelpers.spread(this.iconProps())} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM5 7h6v2H5V7z"/></svg>`;
  }

}
customElements.define('z-icon-zoom-out', Icon$4B);

exports.AddOutlineIcon = Icon$1;
exports.AddSolidIcon = Icon$2;
exports.AdjustIcon = Icon$3;
exports.AirplaneIcon = Icon$4;
exports.AlbumIcon = Icon$5;
exports.AlignCenterIcon = Icon$6;
exports.AlignJustifiedIcon = Icon$7;
exports.AlignLeftIcon = Icon$8;
exports.AlignRightIcon = Icon$9;
exports.AnchorIcon = Icon$a;
exports.AnnouncementIcon = Icon$b;
exports.ApparelIcon = Icon$c;
exports.ArrowDownIcon = Icon$d;
exports.ArrowLeftIcon = Icon$e;
exports.ArrowOutlineDownIcon = Icon$f;
exports.ArrowOutlineLeftIcon = Icon$g;
exports.ArrowOutlineRightIcon = Icon$h;
exports.ArrowOutlineUpIcon = Icon$i;
exports.ArrowRightIcon = Icon$j;
exports.ArrowThickDownIcon = Icon$k;
exports.ArrowThickLeftIcon = Icon$l;
exports.ArrowThickRightIcon = Icon$m;
exports.ArrowThickUpIcon = Icon$n;
exports.ArrowThinDownIcon = Icon$o;
exports.ArrowThinLeftIcon = Icon$p;
exports.ArrowThinRightIcon = Icon$q;
exports.ArrowThinUpIcon = Icon$r;
exports.ArrowUpIcon = Icon$s;
exports.ArtistIcon = Icon$t;
exports.AtSymbolIcon = Icon$u;
exports.AttachmentIcon = Icon$v;
exports.BackspaceIcon = Icon$w;
exports.BackwardIcon = Icon$y;
exports.BackwardStepIcon = Icon$x;
exports.BadgeIcon = Icon$z;
exports.BatteryFullIcon = Icon$A;
exports.BatteryHalfIcon = Icon$B;
exports.BatteryLowIcon = Icon$C;
exports.BeverageIcon = Icon$D;
exports.BlockIcon = Icon$E;
exports.BluetoothIcon = Icon$F;
exports.BoltIcon = Icon$G;
exports.BookReferenceIcon = Icon$H;
exports.BookmarkIcon = Icon$K;
exports.BookmarkOutlineAddIcon = Icon$I;
exports.BookmarkOutlineIcon = Icon$J;
exports.BorderAllIcon = Icon$L;
exports.BorderBottomIcon = Icon$M;
exports.BorderHorizontalIcon = Icon$N;
exports.BorderInnerIcon = Icon$O;
exports.BorderLeftIcon = Icon$P;
exports.BorderNoneIcon = Icon$Q;
exports.BorderOuterIcon = Icon$R;
exports.BorderRightIcon = Icon$S;
exports.BorderTopIcon = Icon$T;
exports.BorderVerticalIcon = Icon$U;
exports.BoxIcon = Icon$V;
exports.BrightnessDownIcon = Icon$W;
exports.BrightnessUpIcon = Icon$X;
exports.BrowserWindowIcon = Icon$_;
exports.BrowserWindowNewIcon = Icon$Y;
exports.BrowserWindowOpenIcon = Icon$Z;
exports.BugIcon = Icon$$;
exports.BuoyIcon = Icon$10;
exports.CalculatorIcon = Icon$11;
exports.CalendarIcon = Icon$12;
exports.CameraIcon = Icon$13;
exports.ChartBarIcon = Icon$14;
exports.ChartIcon = Icon$16;
exports.ChartPieIcon = Icon$15;
exports.ChatBubbleDotsIcon = Icon$17;
exports.CheckmarkIcon = Icon$19;
exports.CheckmarkOutlineIcon = Icon$18;
exports.CheveronDownIcon = Icon$1a;
exports.CheveronLeftIcon = Icon$1b;
exports.CheveronOutlineDownIcon = Icon$1c;
exports.CheveronOutlineLeftIcon = Icon$1d;
exports.CheveronOutlineRightIcon = Icon$1e;
exports.CheveronOutlineUpIcon = Icon$1f;
exports.CheveronRightIcon = Icon$1g;
exports.CheveronUpIcon = Icon$1h;
exports.ClipboardIcon = Icon$1i;
exports.CloseIcon = Icon$1l;
exports.CloseOutlineIcon = Icon$1j;
exports.CloseSolidIcon = Icon$1k;
exports.CloudIcon = Icon$1n;
exports.CloudUploadIcon = Icon$1m;
exports.CodeIcon = Icon$1o;
exports.CoffeeIcon = Icon$1p;
exports.CogIcon = Icon$1q;
exports.ColorPaletteIcon = Icon$1r;
exports.ComposeIcon = Icon$1s;
exports.ComputerDesktopIcon = Icon$1t;
exports.ComputerLaptopIcon = Icon$1u;
exports.ConversationIcon = Icon$1v;
exports.CopyIcon = Icon$1w;
exports.CreditCardIcon = Icon$1x;
exports.CurrencyDollarIcon = Icon$1y;
exports.DashboardIcon = Icon$1z;
exports.DateAddIcon = Icon$1A;
exports.DialPadIcon = Icon$1B;
exports.DirectionsIcon = Icon$1C;
exports.DocumentAddIcon = Icon$1D;
exports.DocumentIcon = Icon$1E;
exports.DotsHorizontalDoubleIcon = Icon$1F;
exports.DotsHorizontalTripleIcon = Icon$1G;
exports.DownloadIcon = Icon$1H;
exports.DuplicateIcon = Icon$1I;
exports.EditCopyIcon = Icon$1J;
exports.EditCropIcon = Icon$1K;
exports.EditCutIcon = Icon$1L;
exports.EditPencilIcon = Icon$1M;
exports.EducationIcon = Icon$1N;
exports.EnvelopeIcon = Icon$1O;
exports.ExclamationOutlineIcon = Icon$1P;
exports.ExclamationSolidIcon = Icon$1Q;
exports.ExploreIcon = Icon$1R;
exports.FactoryIcon = Icon$1S;
exports.FastForwardIcon = Icon$1T;
exports.FastRewindIcon = Icon$1U;
exports.FilmIcon = Icon$1V;
exports.FilterIcon = Icon$1W;
exports.FlagIcon = Icon$1X;
exports.FlashlightIcon = Icon$1Y;
exports.FolderIcon = Icon$1$;
exports.FolderOutlineAddIcon = Icon$1Z;
exports.FolderOutlineIcon = Icon$1_;
exports.FormatBoldIcon = Icon$20;
exports.FormatFontSizeIcon = Icon$21;
exports.FormatItalicIcon = Icon$22;
exports.FormatTextSizeIcon = Icon$23;
exports.FormatUnderlineIcon = Icon$24;
exports.ForwardIcon = Icon$26;
exports.ForwardStepIcon = Icon$25;
exports.GiftIcon = Icon$27;
exports.GlobeIcon = Icon$28;
exports.HandStopIcon = Icon$29;
exports.HardDriveIcon = Icon$2a;
exports.HeadphonesIcon = Icon$2b;
exports.HeartIcon = Icon$2c;
exports.HomeIcon = Icon$2d;
exports.HotIcon = Icon$2e;
exports.HourGlassIcon = Icon$2f;
exports.InboxCheckIcon = Icon$2g;
exports.InboxDownloadIcon = Icon$2h;
exports.InboxFullIcon = Icon$2i;
exports.InboxIcon = Icon$2j;
exports.IndentDecreaseIcon = Icon$2k;
exports.IndentIncreaseIcon = Icon$2l;
exports.InformationOutlineIcon = Icon$2m;
exports.InformationSolidIcon = Icon$2n;
exports.KeyIcon = Icon$2o;
exports.KeyboardIcon = Icon$2p;
exports.LayersIcon = Icon$2q;
exports.LibraryIcon = Icon$2r;
exports.LightBulbIcon = Icon$2s;
exports.LinkIcon = Icon$2t;
exports.ListAddIcon = Icon$2u;
exports.ListBulletIcon = Icon$2v;
exports.ListIcon = Icon$2w;
exports.LoadBalancerIcon = Icon$2x;
exports.LocationCurrentIcon = Icon$2y;
exports.LocationFoodIcon = Icon$2z;
exports.LocationGasStationIcon = Icon$2A;
exports.LocationHotelIcon = Icon$2B;
exports.LocationIcon = Icon$2G;
exports.LocationMarinaIcon = Icon$2C;
exports.LocationParkIcon = Icon$2D;
exports.LocationRestroomIcon = Icon$2E;
exports.LocationShoppingIcon = Icon$2F;
exports.LockClosedIcon = Icon$2H;
exports.LockOpenIcon = Icon$2I;
exports.MapIcon = Icon$2J;
exports.MenuIcon = Icon$2K;
exports.MicIcon = Icon$2L;
exports.MinusOutlineIcon = Icon$2M;
exports.MinusSolidIcon = Icon$2N;
exports.MobileDevicesIcon = Icon$2O;
exports.MoodHappyOutlineIcon = Icon$2P;
exports.MoodHappySolidIcon = Icon$2Q;
exports.MoodNeutralOutlineIcon = Icon$2R;
exports.MoodNeutralSolidIcon = Icon$2S;
exports.MoodSadOutlineIcon = Icon$2T;
exports.MoodSadSolidIcon = Icon$2U;
exports.MouseIcon = Icon$2V;
exports.MusicAlbumIcon = Icon$2W;
exports.MusicArtistIcon = Icon$2X;
exports.MusicNotesIcon = Icon$2Y;
exports.MusicPlaylistIcon = Icon$2Z;
exports.NavigationMoreIcon = Icon$2_;
exports.NetworkIcon = Icon$2$;
exports.NewsPaperIcon = Icon$30;
exports.NotificationIcon = Icon$31;
exports.NotificationsIcon = Icon$33;
exports.NotificationsOutlineIcon = Icon$32;
exports.PasteIcon = Icon$34;
exports.PauseIcon = Icon$37;
exports.PauseOutlineIcon = Icon$35;
exports.PauseSolidIcon = Icon$36;
exports.PenToolIcon = Icon$38;
exports.PhoneIcon = Icon$39;
exports.PhotoIcon = Icon$3a;
exports.PhpElephantIcon = Icon$3b;
exports.PinIcon = Icon$3c;
exports.PlayIcon = Icon$3e;
exports.PlayOutlineIcon = Icon$3d;
exports.PlaylistIcon = Icon$3f;
exports.PluginIcon = Icon$3g;
exports.PortfolioIcon = Icon$3h;
exports.PrinterIcon = Icon$3i;
exports.PylonIcon = Icon$3j;
exports.QuestionIcon = Icon$3k;
exports.QueueIcon = Icon$3l;
exports.RadarIcon = Icon$3m;
exports.RadioIcon = Icon$3n;
exports.RefreshIcon = Icon$3o;
exports.ReloadIcon = Icon$3p;
exports.ReplyAllIcon = Icon$3q;
exports.ReplyIcon = Icon$3r;
exports.RepostIcon = Icon$3s;
exports.SaveDiskIcon = Icon$3t;
exports.ScreenFullIcon = Icon$3u;
exports.SearchIcon = Icon$3v;
exports.SendIcon = Icon$3w;
exports.ServersIcon = Icon$3x;
exports.Share01Icon = Icon$3y;
exports.ShareAltIcon = Icon$3z;
exports.ShareIcon = Icon$3A;
exports.ShieldIcon = Icon$3B;
exports.ShoppingCartIcon = Icon$3C;
exports.ShowSidebarIcon = Icon$3D;
exports.ShuffleIcon = Icon$3E;
exports.StandByIcon = Icon$3F;
exports.StarFullIcon = Icon$3G;
exports.StationIcon = Icon$3H;
exports.StepBackwardIcon = Icon$3I;
exports.StepForwardIcon = Icon$3J;
exports.StethoscopeIcon = Icon$3K;
exports.StoreFrontIcon = Icon$3L;
exports.StrokeWidthIcon = Icon$3M;
exports.SubdirectoryLeftIcon = Icon$3N;
exports.SubdirectoryRightIcon = Icon$3O;
exports.SwapIcon = Icon$3P;
exports.TabletIcon = Icon$3Q;
exports.TagIcon = Icon$3R;
exports.TargetIcon = Icon$3S;
exports.TextBoxIcon = Icon$3T;
exports.TextDecorationIcon = Icon$3U;
exports.ThermometerIcon = Icon$3V;
exports.ThumbsDownIcon = Icon$3W;
exports.ThumbsUpIcon = Icon$3X;
exports.TicketIcon = Icon$3Y;
exports.TimeIcon = Icon$3Z;
exports.TimerIcon = Icon$3_;
exports.TranslateIcon = Icon$3$;
exports.TrashIcon = Icon$40;
exports.TravelBusIcon = Icon$41;
exports.TravelCarIcon = Icon$42;
exports.TravelCaseIcon = Icon$43;
exports.TravelIcon = Icon$47;
exports.TravelTaxiCabIcon = Icon$44;
exports.TravelTrainIcon = Icon$45;
exports.TravelWalkIcon = Icon$46;
exports.TrophyIcon = Icon$48;
exports.TuningIcon = Icon$49;
exports.UploadIcon = Icon$4a;
exports.UsbIcon = Icon$4b;
exports.UserAddIcon = Icon$4c;
exports.UserGroupIcon = Icon$4d;
exports.UserIcon = Icon$4g;
exports.UserSolidCircleIcon = Icon$4e;
exports.UserSolidSquareIcon = Icon$4f;
exports.VectorIcon = Icon$4h;
exports.VideoCameraIcon = Icon$4i;
exports.ViewCarouselIcon = Icon$4j;
exports.ViewColumnIcon = Icon$4k;
exports.ViewHideIcon = Icon$4l;
exports.ViewListIcon = Icon$4m;
exports.ViewShowIcon = Icon$4n;
exports.ViewTileIcon = Icon$4o;
exports.VolumeDownIcon = Icon$4p;
exports.VolumeMuteIcon = Icon$4q;
exports.VolumeOffIcon = Icon$4r;
exports.VolumeUpIcon = Icon$4s;
exports.WalletIcon = Icon$4t;
exports.WatchIcon = Icon$4u;
exports.WindowIcon = Icon$4x;
exports.WindowNewIcon = Icon$4v;
exports.WindowOpenIcon = Icon$4w;
exports.WrenchIcon = Icon$4y;
exports.YinYangIcon = Icon$4z;
exports.ZoomInIcon = Icon$4A;
exports.ZoomOutIcon = Icon$4B;
//# sourceMappingURL=index.js.map
