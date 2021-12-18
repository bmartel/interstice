import { createElement, patch, VNode, DOMNode, m } from 'million';

export const define = (name: string) => (El: any) => {
  window.customElements.define(name, El);
  return El;
};

abstract class BaseElement extends HTMLElement {
  protected _mountPoint: DOMNode | null = null;
  protected _styles: HTMLStyleElement | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  protected async connect() {}
  protected async disconnect() {}

  protected abstract render(): VNode;

  private createMountPoint() {
    this._mountPoint = createElement(this.render());
    this.shadowRoot && this.shadowRoot.appendChild(this._mountPoint);
  }

  private destroyMountPoint() {
    this.shadowRoot && this.shadowRoot.removeChild(this._mountPoint!);
    this._mountPoint = null;
  }

  async connectedCallback() {
    await this.connect();
    this.createMountPoint();
  }

  async disconnectedCallback() {
    await this.disconnect();
    this.destroyMountPoint();
  }
}

const storage = new WeakMap<any, any>();

const MXRoute = define('mx-route')(
  class RouteElement extends BaseElement {
    private options: { tag: string; route?: string | RegExp } | null = null;
    private _matcher: RegExp | undefined = undefined;
    private _matched: RegExpMatchArray | null = null;
    private _namedGroups: Record<string, number> = {};
    private _matchNamedGroup = /<(.+)>/g;
    private _url: URL;

    constructor() {
      super();
      this._url = new URL(window.location.href);
    }

    private updateStorage(data: any = {}) {
      const _data = storage.get(RouteElement) || {};
      storage.set(MXRoute, {
        ..._data,
        ...data,
      });
    }

    private createMatcher() {
      if (this._matcher) {
        return;
      }
      if (typeof this.options!.route === 'string') {
        const groupsSplit = (this.options!.route as string).split(/\(.+\)/g);
        let captureGroupPosition = 1;
        for (let i = 0; i < groupsSplit.length - 1; i++) {
          const isCaptureGroup =
            groupsSplit[i].charAt(0) === '(' &&
            groupsSplit[i].charAt(groupsSplit[i].length - 1) === ')';
          if (
            i > 0 &&
            isCaptureGroup &&
            groupsSplit[i - 1].charAt(groupsSplit[i - 1].length - 1) === '>'
          ) {
            const _namedGroup = this._matchNamedGroup.exec(groupsSplit[i - 1]);
            if (_namedGroup) {
              this._namedGroups[_namedGroup[1]] = captureGroupPosition;
              groupsSplit[i - 1] = '';
            }
          }
          if (isCaptureGroup) {
            captureGroupPosition++;
          }
        }
        const _route = groupsSplit.join('');
        this._matcher = new RegExp(_route);
        return;
      }
      this._matcher = this.options!.route;
    }

    private parseMatch() {
      this.createMatcher();

      if (this._matcher) {
        this._matched = this._matcher.exec(this._url.pathname);

        this.updateStorage({
          namedGroups: this._namedGroups,
          params: this._matched || {},
          query: this._url.searchParams,
          hash: new URLSearchParams(this._url.hash.replace('#', '')),
        });
      }
    }
    //
    // private forceRender() {
    //   patch(this._mountPoint!, this.render());
    // }

    protected async connect(): Promise<void> {
      super.connect();
      this.parseMatch();
    }

    render() {
      return m('slot', this._matched ? undefined : { name: 'fallback' });
    }
  }
);

export abstract class CustomElement extends BaseElement {
  constructor() {
    super();
    this.createStyles();
  }

  protected styles(): string {
    return '';
  }
  protected shouldUpdate(_previous: any, _next: any) {
    return true;
  }

  private createStyles() {
    const styles = this.styles();
    if (styles) {
      this._styles = document.createElement('style');
      this._styles.innerHTML = styles;
      this.shadowRoot && this.shadowRoot.appendChild(this._styles);
    }
  }

  private forceRender() {
    patch(this._mountPoint!, this.render());
  }

  parseProperty(newValue: any): any {
    return typeof newValue === 'string'
      ? ['{', '['].indexOf(newValue && newValue.charAt(0)) > -1 &&
        ['}', ']'].indexOf(
          newValue && newValue.charAt(+(newValue && newValue.length) - 1)
        ) > -1
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

  maybeRender(oldValue: any, newValue: any) {
    if (this._mountPoint && this.shouldUpdate(oldValue, newValue)) {
      this.forceRender();
    }
  }

  attributeChangedCallback(name: string, _oldValue: any, newValue: any) {
    (this as any)[name] = newValue;
  }
}

type PropertyBinding = {
  propertyKey: string;
  lookupKey: string;
};

function proxyLocalProperty(
  target: any,
  propertyName: string,
  attrName?: string
) {
  let value = target && target[propertyName];
  const parseProperty = target.parseProperty;
  Object.defineProperty(target, propertyName, {
    get() {
      return value;
    },
    set(newValue: any) {
      const oldValue = value;
      try {
        value = parseProperty(newValue);
        target.maybeRender(oldValue, newValue);
      } catch (err) {
        console.log(err);
      }
    },
    enumerable: true,
    configurable: true,
  });

  if (attrName && attrName !== propertyName.toLowerCase()) {
    Object.defineProperty(target, attrName, {
      get() {
        return this[propertyName];
      },
      set(newValue: any) {
        this[propertyName] = newValue;
      },
    });
  }
}
function proxyProperty(
  target: any,
  _optionsKey: any, // Not used for now, might be interesting to have storage scoped to element definitions
  propertyName: string,
  lookupKey: string | number,
  type: string
) {
  let value: any = target && target[propertyName];
  target.__proxy = target.__proxy || {};
  target.__proxy[propertyName] = target.__proxy[propertyName] || {};

  Object.defineProperty(target.__proxy[propertyName], type, {
    get() {
      const _storage = storage.get(MXRoute);
      if (value !== undefined && value !== null && value !== '') {
        return value;
      }
      switch (type) {
        case 'state':
          return value;
        case 'param':
          if (!_storage) return value;
          if (typeof lookupKey === 'string') {
            lookupKey = _storage.namedGroups[lookupKey];
          }
          value = _storage && _storage.params[lookupKey];
          return value;
        case 'query':
          if (!_storage) return value;
          value = _storage.query && _storage.query.get(lookupKey);
          return value;
        case 'hash':
          if (!_storage) return value;
          value = _storage.hash && _storage.hash.get(lookupKey);
          return value;
        case 'storage':
          value = JSON.parse(
            localStorage.getItem(lookupKey as string) as any
          ) as any;
          return value;
        default:
          return value;
      }
    },
    set(nextValue: any) {
      const _storage = storage.get(MXRoute);
      const oldValue = value;
      value = nextValue;
      switch (type) {
        case 'state':
          target.maybeRender(oldValue, value);
          return;
        case 'param':
          if (!_storage) return;
          if (typeof lookupKey === 'string') {
            lookupKey = _storage.namedGroups[lookupKey];
          }
          _storage.params[lookupKey] = nextValue;
          storage.set(MXRoute, {
            ..._storage,
            params: _storage.params,
          });
          return;
        case 'query':
          if (!_storage) return;
          _storage.query.set(lookupKey, nextValue);
          storage.set(MXRoute, {
            ..._storage,
            query: _storage.query,
          });
          return;
        case 'hash':
          if (!_storage) return;
          _storage.hash.set(lookupKey, nextValue);
          storage.set(MXRoute, {
            ..._storage,
            hash: _storage.hash,
          });
          return;
        case 'storage':
          localStorage.setItem(lookupKey as string, JSON.stringify(nextValue));
      }
    },
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(target, propertyName, {
    get() {
      return Object.values(this.__proxy[propertyName]).find(
        (e) => e !== undefined && e !== null && e !== ''
      );
    },
    set(nextValue: any) {
      Object.keys(this.__proxy[propertyName]).forEach((key) => {
        this.__proxy[propertyName][key] = nextValue;
      });
    },
    enumerable: true,
    configurable: true,
  });
}

export type EventBinding = {
  eventName: string;
  eventHandler: string;
};

function bindEvent(target: any, e: EventBinding) {
  target.addEventListener(e.eventName, target[e.eventHandler]);
}

export type DispatchBinding = {
  eventName: string;
  eventDispatch: string;
};

function bindDispatch(target: any, e: DispatchBinding) {
  const handler = target[e.eventDispatch];
  target[e.eventDispatch] = async function (...args: any[]) {
    const detail = await handler(...args);
    target.dispatchEvent(
      new CustomEvent(e.eventName, {
        detail,
        cancelable: true,
        bubbles: true,
        composed: true,
      })
    );
  };
}

export function MXElement(options: { tag: string; route?: string | RegExp }) {
  return function (ctor: any) {
    const __observedAttributes = ctor.prototype.__observedAttributes || [];
    const __params = ctor.prototype.__params || [];
    const __queryParams = ctor.prototype.__queryParams || [];
    const __hashParams = ctor.prototype.__hashParams || [];
    const __storage = ctor.prototype.__storage || [];
    const __state = ctor.prototype.__state || [];
    const __props = ctor.prototype.__props || [];
    const __events = ctor.prototype.__events || [];
    const __dispatchEvents = ctor.prototype.__dispatchEvents || [];

    const mxTag = options.route ? `route-${options.tag}` : options.tag;

    delete ctor.prototype.__observedAttributes;
    delete ctor.prototype.__params;
    delete ctor.prototype.__queryParams;
    delete ctor.prototype.__hashParams;
    delete ctor.prototype.__storage;
    delete ctor.prototype.__state;
    delete ctor.prototype.__props;
    delete ctor.prototype.__events;
    delete ctor.prototype.__dispatchEvents;

    const mxEl = define(mxTag)(
      class extends ctor {
        // @ts-ignore
        static get observedAttributes() {
          return __observedAttributes;
        }
        constructor() {
          super();
          __props.forEach((prop: PropertyBinding) =>
            proxyLocalProperty(this, prop.propertyKey, prop.lookupKey)
          );
          __state.forEach((prop: PropertyBinding) =>
            proxyProperty(
              this,
              options,
              prop.propertyKey,
              prop.lookupKey,
              'state'
            )
          );
          __params.forEach((prop: PropertyBinding) =>
            proxyProperty(
              this,
              options,
              prop.propertyKey,
              prop.lookupKey,
              'param'
            )
          );
          __queryParams.forEach((prop: PropertyBinding) =>
            proxyProperty(
              this,
              options,
              prop.propertyKey,
              prop.lookupKey,
              'query'
            )
          );
          __hashParams.forEach((prop: PropertyBinding) =>
            proxyProperty(
              this,
              options,
              prop.propertyKey,
              prop.lookupKey,
              'hash'
            )
          );
          __storage.forEach((prop: PropertyBinding) =>
            proxyProperty(
              this,
              options,
              prop.propertyKey,
              prop.lookupKey,
              'storage'
            )
          );
          __events.forEach((e: EventBinding) => bindEvent(this, e));
          __dispatchEvents.forEach((d: DispatchBinding) =>
            bindDispatch(this, d)
          );
        }
      }
    );
    if (options.route) {
      return define(options.tag)(
        class extends BaseElement {
          render() {
            // @ts-ignore
            return m('mx-route', { options }, [m(mxTag)]);
          }
        }
      );
    }
    return mxEl;
  };
}

export function State() {
  return function (target: any, propertyKey: string) {
    target.__state = target.__state || [];
    target.__state.push({ propertyKey, lookupKey: propertyKey });
  };
}

export function Prop(key?: string) {
  return function (target: any, propertyKey: string) {
    target.__observedAttributes = target.__observedAttributes || [];
    target.__props = target.__props || [];
    const lookupKey = (key || propertyKey).toLowerCase();
    target.__props.push(propertyKey);
    target.__props.push({ propertyKey, lookupKey });
    target.__observedAttributes.push(lookupKey);
  };
}
export function Param(key: string | number) {
  return function (target: any, propertyKey: string) {
    const lookupKey = key || propertyKey;
    target.__params = target.__params || [];
    target.__params.push({ propertyKey, lookupKey });
  };
}

export function QueryParam(key?: string) {
  return function (target: any, propertyKey: string) {
    const lookupKey = key || propertyKey;
    target.__queryParams = target.__queryParams || [];
    target.__queryParams.push({ propertyKey, lookupKey });
  };
}

export function HashParam(key?: string) {
  return function (target: any, propertyKey: string) {
    const lookupKey = key || propertyKey;
    target.__hashParams = target.__hashParams || [];
    target.__hashParams.push({ propertyKey, lookupKey });
  };
}

export function Storage(key?: string) {
  return function (target: any, propertyKey: string) {
    const lookupKey = key || propertyKey;
    target.__storage = target.__storage || [];
    target.__storage.push({ propertyKey, lookupKey });
  };
}

export function On(eventName: string) {
  return function (target: any, eventHandler: string) {
    target.__events = target.__events || [];
    target.__events.push({ eventName, eventHandler });
  };
}

export function Dispatch(eventName: string) {
  return function (target: any, eventDispatch: string) {
    target.__dispatchEvents = target.__dispatchEvents || [];
    target.__dispatchEvents.push({ eventName, eventDispatch });
  };
}
