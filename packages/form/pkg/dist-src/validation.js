export const Validation = base => class extends base {
  static get properties() {
    return {
      rules: Array,
      messages: Array
    };
  }

  constructor() {
    super();
    this.rules = [];
  }

  inputValue() {
    return this.value;
  }

  inputName() {
    return this.name;
  }

  validate() {
    this.messages = this.rules.filter(rule => rule(this.inputValue()));
    this.status = this.messages.length ? 'error' : '';
    this.dispatchEvent('validation', {
      composed: true,
      bubbles: true,
      detail: {
        name: this.inputName(),
        errors: this.messages
      }
    });
  }

};