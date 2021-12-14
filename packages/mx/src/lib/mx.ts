import { createElement, patch, VElement, DOMNode } from 'million';

export const define = (name: string) => (El: any) => {
  window.customElements.define(name, El);
  return El;
};

export abstract class CustomElement extends HTMLElement {
  protected _mountPoint: DOMNode | null = null;
  protected _shadowRoot: ShadowRoot | null = null;
  __state: Record<string, any> = {};
  __props: Record<string, any> = {};

  parseProperty(newValue: any): any {
    return typeof newValue === 'string'
      ? ['{', '['].indexOf(newValue?.charAt(0)) > -1 &&
        ['}', ']'].indexOf(newValue?.charAt(+newValue?.length - 1)) > -1
        ? JSON.parse(newValue)
        : newValue === 'undefined'
        ? undefined
        : newValue === 'null'
        ? null
        : /\d+(\.\d+)?/.test(newValue)
        ? Number(newValue)
        : newValue
      : newValue;
  }

  shouldUpdate(_previous: any, _next: any) {
    return true;
  }

  createMountPoint() {
    this._mountPoint = createElement(this.render());
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(this._mountPoint);
  }

  destroyMountPoint() {
    this._shadowRoot?.removeChild(this._mountPoint!);
    this._mountPoint = null;
    this._shadowRoot = null;
  }

  async connect() {}

  async connectedCallback() {
    await this.connect();
    this.createMountPoint();
  }

  async disconnect() {}

  async disconnectedCallback() {
    await this.disconnect();
    this.destroyMountPoint();
  }

  abstract render(): VElement;

  forceRender() {
    patch(this._mountPoint!, this.render());
  }

  maybeRender(oldValue: any, newValue: any) {
    if (this._mountPoint && this.shouldUpdate(oldValue, newValue)) {
      this.forceRender();
    }
  }

  attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
    (this as any)[name] = newValue;
  }
}

function proxyProperty(target: any, propertyName: string, parse?: boolean) {
  let value = target?.[propertyName];
  const parseProperty = target.parseProperty;
  Object.defineProperty(target, propertyName, {
    get() {
      return value;
    },
    set(newValue: any) {
      const oldValue = value;
      try {
        if (parse) {
          value = parseProperty(newValue);
        } else {
          value = newValue;
        }
        target.maybeRender(oldValue, newValue);
      } catch (err) {
        console.log(err);
      }
    },
    enumerable: true,
    configurable: true,
  });
}

export function MXElement(options: { tag: string }) {
  return function (ctor: any) {
    const __observedAttributes = ctor.prototype.__observedAttributes || [];
    const __state = ctor.prototype.__state || [];
    const __props = ctor.prototype.__props || [];
    return define(options.tag)(
      class extends ctor {
        static get observedAttributes() {
          return __observedAttributes;
        }
        constructor() {
          super();
          __state.forEach((key: string) => proxyProperty(this, key));
          __props.forEach((key: string) => proxyProperty(this, key, true));
        }
      }
    );
  };
}

export function State() {
  return function (target: any, propertyKey: string) {
    target.__state ||= [];
    target.__state.push(propertyKey);
  };
}

export function Prop() {
  return function (target: any, propertyKey: string) {
    target.__observedAttributes ||= [];
    target.__props ||= [];
    target.__props.push(propertyKey);
    target.__observedAttributes.push(propertyKey);
  };
}