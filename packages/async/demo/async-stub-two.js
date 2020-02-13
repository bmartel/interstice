import { LitElement, html } from "lit-element";

class AsyncStubTwo extends LitElement {

  render() {
    return html`
      <slot></slot>
      <h2>My name is AsyncStubTwo</h2>
      <p>I have loaded asynchronously through a managed element</p>
    `;
  }
}

customElements.define('i-async-stub-two', AsyncStubTwo);

