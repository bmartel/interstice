import { html, css, LitElement } from 'lit-element';

export class TailwindWc extends LitElement {
  static get styles() {
    return css`
      :host {
        --twc-color: #eee;
        display: block;
        padding: var(--twc-padding);
        color: var(--twc-color);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
