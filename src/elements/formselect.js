import { html, css } from 'lit-element';
import { FormInput } from './forminput.js';
import {isObject} from '../utils.js';

export class FormSelect extends FormInput {
  static get properties() {
    return {
      value: { type: Array },
      dependent: { type: Boolean },
      dependentLabel: { type: String },
      dependentValue: { type: String },
      options: { type: Array },
      inline: { type: Boolean },
      reversed: { type: Boolean },
      labelKey: { type: String },
      valueKey: { type: String },
      complexValues: { type: Boolean },
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
    this.dependentLabel = 'All';
    this.dependentValue = '_all';
    this.complexValues = false;
    this.inputUpdate = this.inputUpdate.bind(this);
  }

  inputUpdate(e, updateIndex) {
    if (this.dependent && updateIndex === 0) {
      this.dependentUpdate(e);
      return;
    }

    const index = this.value.findIndex(selected => this.convertValue(selected) === e.target.value);

    if (e.target.checked) {
      if (index < 0) {
        this.value.push(this.addValue(this.options.find(v => v === e.target.value)));
      }
    } else {
      this.value.splice(index, 1);
    }
  }

  inputId(index) {
    return `${this.id}-${index + 1}`;
  }

  dependentUpdate(e) {
    if(e.target.checked) {
      this.value = this.options.map(this.addValue);
    } else {
      this.value = [];
    }
  }

  addDependentOption() {
    return {
      [this.labelKey]: this.dependentLabel,
      [this.valueKey]: this.dependentValue,
      name: this.dependentValue
    };
  }

  dependentInput(index) {
    return this.dependent && index === 0;
  }

  dependentSelected() {
    return !this.value.some(v => this.options.find(option => this.convertValue(option) !== this.convertValue(v)));
  }

  addValue(option) {
    if (this.complexValues) {
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
    return this.dependentInput(index) && this.dependentSelected() || this.value.some(selected => this.convertValue(selected) === this.convertValue(value));
  }

  selectOptions() {
    if (this.dependent) {
      return [this.addDependentOption(), ...this.options];
    }
    return this.options;
  }

  // eslint-disable-next-line
  renderOption(option, index) {
    return ''; // eslint-disable-line
  }

  renderSelectOptions() {
    return this.options.map((option, index) => this.renderOption(option, index));
  }

  renderInput() {
    return html`
      <div class="select-group">
        ${this.renderSelectOptions()}
      </div>
    `;
  }
}

