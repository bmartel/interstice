import { html, LitElement, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { spread } from '@open-wc/lit-helpers';

const fontStyles = html`
  <style>
    :host {
      font-family: var(--z-font-family);
    }
  </style>
`;
const fullWidthInput = html`
  <style>
    @media (min-width: 640px) {
      :host,
      .input-wrapper,
      .input:not(.check) {
        width: var(--z-w-full) !important;
      }
    }
  </style>
`;

/**
 * @element i-forminput
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --gap
 * @cssprop --round
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --input-placeholder-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --label-font-weight
 * @cssprop --message-size
 * @cssprop --message-gap
 * @cssprop --outline-size
 */

class FormInput extends LitElement {
  static get properties() {
    return {
      id: {
        type: String
      },
      name: {
        type: String
      },
      type: {
        type: String
      },
      value: {
        type: String
      },
      label: {
        type: String
      },
      hint: {
        type: String
      },
      placeholder: {
        type: String
      },
      messages: {
        type: Array
      },
      wide: {
        type: Boolean
      },
      inline: {
        type: Boolean
      },
      reversed: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      status: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .input-wrapper {
        display: grid;
        grid-gap: var(--gap);
        grid-template-areas:
          'l l l'
          'h h h'
          'i i i'
          'm m m';
      }
      .hint {
        grid-area: h;
        font-size: var(--message-size);
        color: var(--input-placeholder-color);
        flex: 1;
        margin-bottom: var(--gap);
      }
      .label {
        grid-area: l;
        font-size: var(--label-size);
        color: var(--label-color);
        font-weight: var(--label-font-weight, 600);
      }
      .messages {
        font-size: var(--message-size);
        margin: var(--gap) 0 0 0;
        padding: 0;
        list-style: none;
        grid-area: m;
        display: grid;
      }
      :host,
      .input-wrapper,
      .input:not(.check) {
        width: var(--w-full);
      }
      :host,
      .input-wrapper,
      .label,
      .messages,
      .check,
      .input {
        box-sizing: border-box;
        transition: var(--transition);
      }
      .disabled {
        opacity: 0.6;
      }
      .inline {
        grid-template-areas:
          'l i i'
          'h i i'
          '. m m';

        grid-column-gap: calc(var(--gap) * 2.5);
        grid-row-gap: var(--gap);
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
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        grid-area: i;
        font-size: var(--font-size);
        font-family: var(--font-family);
        padding: var(--padding);
        color: var(--input-color);
        background-color: var(--input-background-color);
        border: var(--border-size) solid var(--border-color);
        border-radius: var(--round);
        outline-color: var(--outline-color);
      }
      .input::placeholder {
        color: var(--input-placeholder-color);
      }
      .input:focus {
        outline: 0;
        border-color: var(--color-primary);
      }
      .input:hover {
        border-color: var(--color-primary);
        box-shadow: var(--color-primary) 0 0 var(--outline-size);
      }
      .input-wrapper.error .input:hover {
        border-color: var(--color-error);
        box-shadow: var(--color-error) 0 0 var(--outline-size);
      }
      .input-wrapper.success .input:hover {
        border-color: var(--color-success);
        box-shadow: var(--color-success) 0 0 var(--outline-size);
      }
      .input::selection {
        color: var(--color-white);
        background-color: var(--color-accent);
      }
      .error .input::selection {
        background-color: var(--color-error);
      }
      .error .label,
      .error .check,
      .error .messages {
        color: var(--color-error);
      }
      .error .input {
        border-color: var(--color-error);
      }
      .success .input::selection {
        background-color: var(--color-success);
      }
      .success .label,
      .success .check,
      .success .messages {
        color: var(--color-success);
      }
      .success .input {
        border-color: var(--color-success);
      }
      @media (min-width: 640px) {
        :host,
        .input-wrapper,
        .input:not(.check) {
          width: initial;
        }
      }
    `;
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.value = null;
    this.label = '';
    this.hint = '';
    this.placeholder = '';
    this.messages = [];
    this.wide = false;
    this.status = '';
    this.inline = false;
    this.reversed = false;
    this.disabled = false;
    this.readonly = false;
  }

  get error() {
    return this.status === 'error';
  }

  set error(_) {} // eslint-disable-line


  get success() {
    return this.status === 'success';
  }

  set success(_) {} // eslint-disable-line


  labelId() {
    return `label-${this.id}`;
  }

  hintId() {
    return `hint-${this.id}`;
  }

  inputName() {
    return this.name || this.id;
  }

  renderLabel() {
    if (this.label) {
      return html`
        <span class="label" .id=${this.labelId()}>${this.label}</span>
      `;
    }

    return null;
  }

  renderHint() {
    if (this.hint) {
      return html`
        <span class="hint" .id=${this.hintId()}>${this.hint}</span>
      `;
    }

    return null;
  }

  renderInput(props = {
    class: 'input'
  }) {
    return html`
      <input
        .id=${this.id}
        .value=${this.value}
        .type=${this.type}
        .name=${this.inputName()}
        .placeholder=${this.placeholder}
        .aria-labelledby=${this.labelId()}
        .aria-describedby=${this.hintId()}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ...=${spread(props)}
      />
    `;
  }

  renderMessages() {
    if (this.messages.length) {
      return html`
        <ul class="messages">
          ${this.messages.map(msg => html`<li>${msg}</li></ul>`)}
        </ul>
      `;
    }

    return null;
  }

  render() {
    return html`
      ${fontStyles} ${this.wide ? fullWidthInput : null}
      <label
        class=${classMap({
      'input-wrapper': true,
      inline: this.inline,
      reversed: this.reversed,
      disabled: this.disabled,
      error: this.error,
      success: this.success
    })}
      >
        ${this.renderHint()} ${this.renderLabel()} ${this.renderInput()} ${this.renderMessages()}
      </label>
    `;
  }

}

/**
 * @element i-textfield
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 */

class TextField extends FormInput {
  constructor() {
    super();
    this.type = 'text';
  }

}
customElements.define('i-textfield', TextField);

/**
 * @element i-textarea
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 */

class TextArea extends FormInput {
  static get properties() {
    return {
      rows: {
        type: Number
      }
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      textarea {
        min-height: calc(var(--font-size) * 7.7);
      }
    `;
  }

  constructor() {
    super();
    this.rows = 4;
  }

  renderInput() {
    return html`
      <textarea
        class="input"
        .id=${this.id}
        .value=${this.value}
        .placeholder=${this.placeholder}
        .name=${this.id}
        .rows=${this.rows}
        .aria-labelledby=${this.labelId()}
        .aria-describedby=${this.hintId()}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
      >
        ${this.value}
      </textarea
      >
    `;
  }

}
customElements.define('i-textarea', TextArea);

const isObject = value => value != null && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]';

class FormSelect extends FormInput {
  static get properties() {
    return {
      value: {
        type: Array
      },
      dependent: {
        type: Boolean
      },
      dependentOptions: {
        type: Object
      },
      options: {
        type: Array
      },
      inline: {
        type: Boolean
      },
      reversed: {
        type: Boolean
      },
      complex: {
        type: Boolean
      },
      labelKey: {
        type: String
      },
      valueKey: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      .select-group {
        display: grid;
        grid-gap: var(--z-gap);
      }
    `;
  }

  constructor() {
    super();
    this.value = [];
    this.options = [];
    this.labelKey = 'label';
    this.valueKey = 'value';
    this.reversed = true;
    this.dependent = false;
    this.dependentOptions = {
      label: 'All',
      value: '_all'
    };
    this.isDependentSelected = false;
    this.complex = false;
    this.addValue = this.addValue.bind(this);
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate(e, updateIndex) {
    if (this.dependent && updateIndex === 0) {
      this.dependentUpdate(e);
      return;
    }

    this.resetDependentSelection();

    if (e.target.checked) {
      this.value = [...this.value, this.addValue(this.options.find(v => this.convertValue(v) === e.target.value))];
    } else {
      const index = this.value.findIndex(selected => this.convertValue(selected) === e.target.value);
      this.value = [...this.value.slice(0, index), ...this.value.slice(index + 1)];
    }
  }

  inputId(index) {
    return `${this.id}-${index + 1}`;
  }

  resetDependentSelection() {
    if (this.isDependentSelected) {
      this.isDependentSelected = false;
    }
  }

  dependentUpdate(e) {
    e.preventDefault();

    if (e.target.checked) {
      this.value = this.options.map(this.addValue);
    } else {
      this.value = [];
    }
  }

  addDependentOption() {
    return {
      [this.labelKey]: this.dependentOptions.label,
      [this.valueKey]: this.dependentOptions.value,
      name: this.dependentOptions.value
    };
  }

  dependentInput(index) {
    return this.dependent && index === 0;
  }

  computeDependent() {
    if (!this.dependent) {
      return;
    }

    this.isDependentSelected = this.options.length === this.value.length && this.options.every(option => this.value.find(v => this.convertValue(option) === this.convertValue(v)));
  }

  addValue(option) {
    if (this.complex) {
      return option;
    }

    return option[this.valueKey];
  }

  convertValue(option) {
    if (isObject(option)) {
      return option[this.valueKey];
    }

    return option;
  }

  convertLabel(option) {
    if (isObject(option)) {
      return option[this.labelKey];
    }

    return option;
  }

  inputSelected(value, index) {
    this.computeDependent();
    return this.dependentInput(index) && this.isDependentSelected || this.value.some(selected => this.convertValue(selected) === this.convertValue(value));
  }

  get selectOptions() {
    if (this.dependent) {
      return [this.addDependentOption(), ...this.options];
    }

    return this.options;
  }

  set selectOptions(_) {} // eslint-disable-line
  // eslint-disable-next-line


  renderOption(option, index) {
    return ''; // eslint-disable-line
  }

  renderSelectOptions() {
    return this.selectOptions.map((option, index) => this.renderOption(option, index));
  }

  renderInput() {
    return html`
      <div class="select-group">
        ${this.renderSelectOptions()}
      </div>
    `;
  }

}

/**
 * @element i-range
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 */

class Range extends FormInput {
  static get properties() {
    return {
      min: {
        Type: Number
      },
      max: {
        Type: Number
      },
      step: {
        Type: Number
      }
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      .input {
        border: none;
        padding: 0px;
      }
      input::-moz-range-track,
      input::-webkit-slider-runnable-track {
        width: 100%;
        cursor: pointer;
        height: var(--outline-size);
        background: var(--border-color);
        border-radius: var(--round);
        border: var(--border-size) solid var(--border-color);
      }
      input::-ms-track {
        width: 100%;
        cursor: pointer;
        height: var(--outline-size);
        background: var(--border-color);
        border-radius: var(--round);
        border: var(--border-size) solid var(--border-color);
      }
      input::-webkit-slider-thumb,
      input::-moz-range-thumb {
        -moz-appearance: none;
        -webkit-appearance: none;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: var(--border-size) solid transparent;
        border-radius: var(--round-full);
        background: var(--color-primary);
        cursor: pointer;
      }
      input::-ms-thumb {
        -ms-appearance: none;
        box-sizing: border-box;
        width: 26px;
        height: 26px;
        border-radius: var(--round-full);
        background: var(--color-primary);
        cursor: pointer;
      }
      .error input::-webkit-slider-thumb,
      .error input::-moz-range-thumb {
        border-color: var(--color-error);
        background: var(--color-error);
      }
      .error input::-ms-thumb {
        border-color: var(--color-error);
        background: var(--color-error);
      }
      .success input::-webkit-slider-thumb,
      .success input::-moz-range-thumb {
        border-color: var(--color-success);
        background: var(--color-success);
      }
      .success input::-ms-thumb {
        border-color: var(--color-success);
        background: var(--color-success);
      }
      input:focus::-moz-range-track,
      input:focus::-webkit-slider-runnable-track {
        background: var(--color-accent);
      }
      input::-ms-fill-lower {
        background: var(--color-primary);
      }
      input::-ms-fill-upper {
        background: var(--border-color);
      }
      input:focus::-ms-fill-lower {
        background: var(--color-accent);
      }
      input:focus::-ms-fill-upper {
        background: var(--border-color);
      }
    `;
  }

  constructor() {
    super();
    this.type = 'range';
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate(e) {
    this.value = e.target.value;
  }

  renderInput() {
    return super.renderInput({
      class: 'input',
      '@input': this.inputUpdate
    });
  }

}
customElements.define('i-range', Range);

/**
 * @element i-checkbox
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 */

class CheckBox extends FormInput {
  static get properties() {
    return {
      checked: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return css`
      ${FormInput.styles}
      .input {
        color: var(--color-primary);
      }
      .check:not(.input):not(.radio) {
        color: var(--color-white);
      }
      :host([checked]) input + .check {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
      }
      :host([checked]) .error input + .check {
        background-color: var(--color-error);
        border-color: var(--color-error);
      }
      :host([checked]) .success input + .check {
        background-color: var(--color-success);
        border-color: var(--color-success);
      }
      .input.check {
        cursor: pointer;
        stroke: currentColor;
        stroke-width: 4px;
        width: 26px;
        height: 26px;
      }
      .hidden {
        opacity: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 0;
        height: 0;
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
    this.inline = true;
    this.checked = false;
    this.type = 'checkbox';
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputStyles() {
    const styles = {
      display: 'flex',
      cursor: 'pointer'
    };

    if (this.checked) {
      styles.padding = '0';
    }

    return styles;
  }

  inputUpdate(e) {
    this.checked = e.target.checked;
    this.dispatchEvent(new CustomEvent('update'));
  }

  renderCheck() {
    if (this.checked) {
      return html`
        <svg class="check" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <path fill="none" d="M6,11.3 L10.3,16 L18,6.2"></path>
        </svg>
      `;
    }

    return null;
  }

  renderInput() {
    return html`
      ${super.renderInput({
      class: 'hidden',
      '?checked': this.checked,
      '@click': this.inputUpdate
    })}
      <div class=${classMap({
      input: true,
      check: true,
      [this.type]: true
    })} style="padding: 0;">
        ${this.renderCheck()}
      </div>
    `;
  }

}
customElements.define('i-checkbox', CheckBox);

/**
 * @element i-radio
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 */

class Radio extends CheckBox {
  static get styles() {
    return css`
      ${CheckBox.styles}
      .radio {
        fill: currentColor;
        border-radius: var(--round-full);
      }
      :host([checked]) input + .radio,
      :host([checked]) .error input + .radio,
      :host([checked]) .success input + .radio {
        background-color: var(--input-background-color);
      }
    `;
  }

  constructor() {
    super();
    this.type = 'radio';
  }

  renderCheck() {
    if (this.checked) {
      return html`
        <svg class="check radio" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <circle cx="12" cy="12" r="6"></circle>
        </svg>
      `;
    }

    return null;
  }

}
customElements.define('i-radio', Radio);

/**
 * @element i-checkboxgroup
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 *
 */

class CheckBoxGroup extends FormSelect {
  static get styles() {
    return css`
      ${FormSelect.styles}
      .messages {
        --gap: 0;
      }
      .label,
      .hint {
        margin-bottom: var(--gap);
      }
      .hint + .label {
        margin-bottom: 0;
      }
      .label + .select-group {
        margin-top: var(--gap);
      }
      i-checkbox {
        --label-font-weight: var(--font-normal);
      }
    `;
  }

  renderOption(option, index) {
    const {
      inline,
      reversed,
      wide,
      ...optionProps
    } = option;
    return html`
      <i-checkbox
        .name=${this.name}
        .id=${this.inputId(index)}
        .label=${this.convertLabel(option)}
        .value=${this.convertValue(option)}
        ?checked=${this.inputSelected(option, index)}
        @update=${e => this.inputUpdate(e, index)}
        reversed
        ...=${spread(optionProps)}
      ></i-checkbox>
    `;
  }

}
customElements.define('i-checkboxgroup', CheckBoxGroup);

/**
 * @element i-radiogroup
 *
 * @cssprop --font-size
 * @cssprop --font-family
 * @cssprop --leading
 * @cssprop --padding
 * @cssprop --round
 * @cssprop --gap
 * @cssprop --transition
 * @cssprop --color
 * @cssprop --color-primary
 * @cssprop --color-accent
 * @cssprop --color-error
 * @cssprop --input-color
 * @cssprop --input-background-color
 * @cssprop --border-color
 * @cssprop --border-size
 * @cssprop --label-color
 * @cssprop --label-size
 * @cssprop --message-size
 * @cssprop --outline-size
 */

class RadioGroup extends FormSelect {
  static get properties() {
    return {
      value: {
        type: String
      }
    };
  }

  static get styles() {
    return css`
      ${FormSelect.styles}
      .messages {
        --gap: 0;
      }
      .label,
      .hint {
        margin-bottom: var(--gap);
      }
      .hint + .label {
        margin-bottom: 0;
      }
      .label + .select-group {
        margin-top: var(--gap);
      }
      i-radio {
        --label-font-weight: var(--font-normal);
      }
    `;
  }

  constructor() {
    super();
    this.value = '';
  }

  inputUpdate(e) {
    this.value = e.target.value;
  }

  inputSelected(value) {
    return this.value === this.convertValue(value);
  }

  renderOption(option, index) {
    const {
      inline,
      reversed,
      wide,
      ...optionProps
    } = option;
    return html`
      <i-radio
        .name=${this.name}
        .id=${this.inputId(index)}
        .label=${this.convertLabel(option)}
        .value=${this.convertValue(option)}
        ?checked=${this.inputSelected(option)}
        @click=${this.inputUpdate}
        reversed
        ...=${spread(optionProps)}
      ></i-radio>
    `;
  }

}
customElements.define('i-radiogroup', RadioGroup);

export { CheckBox, CheckBoxGroup, FormInput, FormSelect, Radio, RadioGroup, Range, TextArea, TextField };
//# sourceMappingURL=index.js.map
