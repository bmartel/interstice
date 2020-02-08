import { html, css } from 'lit-element';
import { FormInput } from './forminput.js';
import { isObject } from '../utils.js';

export class FormSelect extends FormInput {
  static get properties() {
    return {
      value: { type: Array },
      dependent: { type: Boolean },
      dependentOptions: { type: Object },
      options: { type: Array },
      inline: { type: Boolean },
      reversed: { type: Boolean },
      labelKey: { type: String },
      valueKey: { type: String },
      complex: { type: Boolean },
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
    this.dependentOptions = { label: 'All', value: '_all' };
    this.complex = false;
    this.addValue = this.addValue.bind(this);
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate(e, updateIndex) {
    if (this.dependent && updateIndex === 0) {
      this.dependentUpdate(e);
      return;
    }

    if (e.target.checked) {
      this.value = [
        ...this.value,
        this.addValue(this.options.find(v => this.convertValue(v) === e.target.value)),
      ];
    } else {
      const index = this.value.findIndex(
        selected => this.convertValue(selected) === e.target.value,
      );
      this.value = [...this.value.slice(0, index), ...this.value.slice(index + 1)];
    }
  }

  inputId(index) {
    return `${this.id}-${index + 1}`;
  }

  dependentUpdate(e) {
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
      name: this.dependentOptions.value,
    };
  }

  dependentInput(index) {
    return this.dependent && index === 0;
  }

  dependentSelected() {
    return !this.value.some(v =>
      this.options.find(option => this.convertValue(option) !== this.convertValue(v)),
    );
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
    return (
      (this.dependentInput(index) && this.dependentSelected()) ||
      this.value.some(selected => this.convertValue(selected) === this.convertValue(value))
    );
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
