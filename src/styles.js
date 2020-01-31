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
      font-size: var(--t-label-size);
      color: var(--t-label-color);
      font-weight: var(--t-label-font-weight, 600);
    }
    .messages {
      font-size: var(--t-message-size);
      color: var(--t-message-color);
      margin: 0;
      padding: 0;
      list-style: none;
      grid-area: m;
      display: grid;
    }
    :host,
    .input-wrapper,
    .input:not(.check) {
      width: var(--t-w-full);
    }
    :host,
    .input-wrapper,
    .label,
    .messages,
    .check,
    .input {
      box-sizing: border-box;
      transition: var(--t-transition);
    }
    .input-wrapper.disabled {
      opacity: 0.6;
    }
    .input-wrapper.inline {
      grid-template-areas: "l i i"
                           ". m m";
      align-items: center;
    }
    .input-wrapper.inline.reversed {
      grid-template-areas: "i i l"
                           "m m .";
    }
    .input {
      font-size: var(--t-font-size);
      font-family: var(--t-font-family);
      padding: var(--t-padding);
      color: var(--t-input-color);
      background-color: var(--t-input-bg-color);
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
    .input-wrapper.error .label, .input-wrapper.error .check, .input-wrapper.error .messages {
      color: var(--t-color-error);
    }
    .input-wrapper.error .input {
      border-color: var(--t-color-error);
      box-shadow: var(--t-color-error) 0 0 0 var(--t-outline-size);
    }
    .input-wrapper.success .input::selection {
      background-color: var(--t-color-success);
    }
    .input-wrapper.success .label, .input-wrapper.success .check, .input-wrapper.success .messages {
      color: var(--t-color-success);
    }
    .input-wrapper.success .input {
      border-color: var(--t-color-success);
      box-shadow: var(--t-color-success) 0 0 0 var(--t-outline-size);
    }
    @media (min-width: 640px) {
      :host,
      .input-wrapper,
      .input:not(.check) {
        width: initial;
      }
    }
  </style>
`;

export const checkboxStyles = html`
  <style>
    .input {
      color: var(--t-color-primary);
    }
    .input-wrapper:not(.error):not(.success) .check:not(.input):not(.radio) {
      color: var(--t-color-white);
    }
    .input-wrapper:not(.error):not(.success) input:checked + .check {
      background-color: var(--t-color-primary);
    }
    .input-wrapper:not(.error):not(.success) input:checked + .radio {
      background-color: var(--t-input-bg-color);
    }
    .input.check {
      cursor: pointer;
      stroke: currentColor;
      stroke-width: 4px;
      width: 26px;
      height: 26px;
    }
    .radio {
      fill: currentColor;
      border-radius: var(--t-round-full);
    }
    input:checked + .check {
      border-color: var(--t-color-primary);
    }
    .hidden {
      opacity: 0;
      -moz-appearance: none;
      width: 0;
      height: 0;
      cursor: pointer;
    }
  </style>
`;
