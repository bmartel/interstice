import { html } from 'lit-element';

export const fontStyles = html`
  <style>
    :host {
      font-family: var(--t-font-family);
    }
  </style>
`;

export const fullWidthInput = html`
  <style>
    @media (min-width: 640px) {
      :host,
      .input-wrapper,
      .input:not(.check) {
        width: var(--t-w-full) !important;
      }
    }
  </style>
`;
