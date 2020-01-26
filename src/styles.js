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
    :host,
    .input-wrapper,
    .input {
      width: var(--t-w-full);
    }
  </style>
`;

export const inputStyles = html`
  <style>
    :host {
      display: inline-flex;
    }
    .input-wrapper {
      display: grid;
      grid-gap: var(--t-gap);
      grid-template-areas: "l l l"
                           "i i i"
                           "m m m";
    }
    .input {
      grid-area: i;
    }
    .label {
      grid-area: l;
    }
    .messages {
      grid-area: m;
      display: grid;
      grid-gap: var(--t-gap);
    }
    :host,
    .input-wrapper,
    .label,
    .messages,
    .input {
      box-sizing: border-box;
      transition: var(--t-transition);
    }
    .input-wrapper.inline {
      grid-template-areas: "l i i"
                           ". m m";
      align-items: center;
    }
    .input {
      font-size: var(--t-font-size);
      font-family: var(--t-font-family);
      padding: var(--t-padding);
      color: var(--t-color);
      border: var(--t-border-size) solid var(--t-border-color);
      border-radius: var(--t-round);
    }
    .input:focus {
      outline: 0;
      border-color: var(--t-color-primary);
      box-shadow: var(--t-color-primary) 0 0 0 var(--t-outline-size);
    }
    .input::selection {
      color: var(--t-color-white);
      background-color: var(--t-color-accent);
    }
    .input-wrapper.error .input::selection {
      background-color: var(--t-color-error);
    }
    .input-wrapper.error .label, .input-wrapper.error .messages {
      color: var(--t-color-error);
    }
    .input-wrapper.error .input {
      border-color: var(--t-color-error);
      box-shadow: var(--t-color-error) 0 0 0 var(--t-outline-size);
    }
  </style>
`;
