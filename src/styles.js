import { html } from 'lit-element';

export const fullWidthInput = html`
  <style>
    :host {
      width: var(--t-w-full);
    }
    .input-wrapper,
    .input {
      flex: 1;
    }
  </style>
`;

export const inputStyles = html`
  <style>
    :host,
    .input-wrapper,
    .input {
      display: inline-flex;
    }
    .input {
      font-size: var(--t-font-size);
      font-family: var(--t-font-family);
      padding: var(--t-padding);
      color: var(--t-color);
    }
  </style>
`;
