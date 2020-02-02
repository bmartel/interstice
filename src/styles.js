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
      grid-template-areas:
        'l l l'
        'h h h'
        'i i i'
        'm m m';
    }
    .input {
      grid-area: i;
    }
    .hint {
      grid-area: h;
      font-size: var(--t-message-size);
      color: var(--t-input-placeholder-color);
      flex: 1;
    }
    .label {
      grid-area: l;
      font-size: var(--t-label-size);
      color: var(--t-label-color);
      font-weight: var(--t-label-font-weight, 600);
    }
    .messages {
      font-size: var(--t-message-size);
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
    .disabled {
      opacity: 0.6;
    }
    .inline {
      grid-template-areas:
        'l i i'
        'h i i'
        '. m m';

      grid-column-gap: calc(var(--t-gap) * 2.5);
      grid-row-gap: var(--t-gap);
      align-items: center;
    }
    .inline .label {
      grid-row: span 2;
    }
    .inline .hint {
      align-self: start;
    }
    .inline .hint + .label {
      grid-row: span 1;
      align-self: end;
    }
    .inline.reversed {
      grid-template-areas:
        'i i l'
        'i i h'
        'm m .';
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
    .input::placeholder {
      color: var(--t-input-placeholder-color);
    }
    .input:focus {
      outline: 0;
      border-color: var(--t-color-primary);
    }
    .input:hover {
      border-color: var(--t-color-primary);
      box-shadow: var(--t-color-primary) 0 0 var(--t-outline-size);
    }
    .input-wrapper.error .input:hover {
      border-color: var(--t-color-error);
      box-shadow: var(--t-color-error) 0 0 var(--t-outline-size);
    }
    .input-wrapper.success .input:hover {
      border-color: var(--t-color-success);
      box-shadow: var(--t-color-success) 0 0 var(--t-outline-size);
    }
    .input::selection {
      color: var(--t-color-white);
      background-color: var(--t-color-accent);
    }
    .error .input::selection {
      background-color: var(--t-color-error);
    }
    .error .label,
    .error .check,
    .error .messages {
      color: var(--t-color-error);
    }
    .error .input {
      border-color: var(--t-color-error);
    }
    .success .input::selection {
      background-color: var(--t-color-success);
    }
    .success .label,
    .success .check,
    .success .messages {
      color: var(--t-color-success);
    }
    .success .input {
      border-color: var(--t-color-success);
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
    .check:not(.input):not(.radio) {
      color: var(--t-color-white);
    }
    input:checked + .check {
      background-color: var(--t-color-primary);
      border-color: var(--t-color-primary);
    }
    .error input:checked + .check {
      background-color: var(--t-color-error);
      border-color: var(--t-color-error);
    }
    .success input:checked + .check {
      background-color: var(--t-color-success);
      border-color: var(--t-color-success);
    }
    input:checked + .radio,
    .error input:checked + .radio,
    .success input:checked + .radio {
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
    .hidden {
      opacity: 0;
      -moz-appearance: none;
      width: 0;
      height: 0;
      cursor: pointer;
    }
  </style>
`;
