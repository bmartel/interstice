import { LitElement, html } from 'lit-element';

export class Form extends LitElement {
  static get properties() {
    return {
      valid: Boolean,
      value: Object,
      action: String,
      method: String,
      enctype: String,
    };
  }

  constructor() {
    super();
    this.value = {};
    this.valid = false;
    this.action = '';
    this.method = 'POST';
    this.enctype = 'application/json';
    this.addEventListener('validation', e => {
      this.valid = e.detail.errors.length < 1;
    });
  }

  updateField(e) {
    try {
      this.value[e.target.name] = e.target.value;
      e.target.validate();
    } catch (err) {} // eslint-disable-line
  }

  body() {
    if (this.enctype !== 'application/json') {
      const formData = new FormData();
      Object.keys(this.value).forEach(field => {
        formData[field] = this.value[field];
      });
      return formData;
    }
    return JSON.stringify(this.value);
  }

  headers() {
    if (this.enctype !== 'multipart/form-data') {
      return {
        'Content-Type': this.enctype,
      };
    }
    return {};
  }

  async submit() {
    const { action, method, valid } = this;
    if (action && valid) {
      try {
        const res = await fetch(action, {
          method,
          credentials: 'include',
          body: this.body(),
          headers: this.headers(),
        });
        const data = await res.json();
        this.dispatchEvent(
          new CustomEvent('form-success', {
            composed: true,
            bubbles: true,
            detail: { ...data },
          }),
        );
      } catch (error) {
        this.dispatchEvent(
          new CustomEvent('form-error', {
            composed: true,
            bubbles: true,
            detail: { error },
          }),
        );
      }
    }
  }

  render() {
    return html`
      <form @submit=${this.submit} @change=${this.updateField}>
        <slot></slot>
      </form>
    `;
  }
}

customElements.define('i-form', Form);
