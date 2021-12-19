import { createElement, patch, VNode, DOMNode, m } from 'million';

export const define =
  (name: string) => (El: any, opt?: ElementDefinitionOptions) => {
    window.customElements.define(name, El, opt);
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

  protected createMountPoint() {
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

export const storage = new WeakMap<any, any>();

const MXRoute = define('mx-route')(
  class RouteElement extends BaseElement {
    private options: { tag: string; route?: string | RegExp } | null = null;
    private _matcher: RegExp | undefined = undefined;
    private _matched: RegExpMatchArray | null = null;
    private _namedGroups: Record<string, number> = {};
    private _matchNamedGroup = /<(.+)>/g;
    private _url: URL | null = null;

    private updateUrl() {
      this._url = new URL(window.location.href);
    }
    private updateStorage(key: string, data: any = {}) {
      const _data = routeStorage() || {};
      routeStorage({
        ...data,
        [key]: {
          ...(_data && _data[key]),
          ...data,
        },
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
      this.updateUrl();
      this.createMatcher();
      if (!this._url) return;
      if (this._matcher) {
        this._matched = this._matcher.exec(this._url.pathname);

        if (this._matched) {
          this.updateStorage(this._url.pathname, {
            namedGroups: this._namedGroups,
            params: this._matched || {},
            query: this._url.searchParams,
            hash: new URLSearchParams(this._url.hash.replace('#', '')),
          });
        }
      }
    }

    private forceRender() {
      patch(this._mountPoint!, this.render());
    }

    updateAndRender = () => {
      this.parseMatch();
      this.forceRender();
    };

    protected async connect(): Promise<void> {
      super.connect();
      this.parseMatch();
      window.addEventListener('mx-navigation', this.updateAndRender);
    }

    protected async disconnect(): Promise<void> {
      super.disconnect();
      window.removeEventListener('mx-navigation', this.updateAndRender);
    }

    render() {
      return m('slot', this._matched ? undefined : { name: 'fallback' });
    }
  }
);

export function routeStorage(data?: any) {
  if (data) {
    storage.set(MXRoute, data);
    return;
  }
  return storage.get(MXRoute);
}

define('mx-link')(
  class LinkElement extends BaseElement {
    href: string = '';
    state?: any = {};
    active?: any;
    inherit?: any;
    replace?: any;

    // @ts-ignore
    static get observedAttributes() {
      return ['href', 'state', 'inherit', 'replace'];
    }

    updateAnchor(name: string, value: any) {
      if (this._mountPoint === null) return;
      (this._mountPoint as any).setAttribute(name, value);
    }

    attributeChangedCallback(name: string, oldValue: any, newValue: any) {
      this.updateActive();
      if (oldValue !== newValue) {
        this.updateAnchor(name, newValue);
      }
    }

    render(): any {
      const a = document.createElement('a');
      a.setAttribute('part', 'anchor');
      a.appendChild(document.createElement('slot'));
      return a;
    }

    protected createMountPoint() {
      this._mountPoint = this.render();
      this.shadowRoot && this.shadowRoot.appendChild(this._mountPoint!);
    }

    async connectedCallback(): Promise<void> {
      await super.connectedCallback();
      this.updateActive();
      this.updateAnchor('href', this.href);
      this.updateAnchor('state', this.state);
      if (this._mountPoint) {
        this._mountPoint.addEventListener('click', this.navigate);
      }
      window.addEventListener('mx-navigation', this.updateActive);
    }

    navigate = (e: Event) => {
      e.preventDefault();
      if (this.replace) {
        history.replaceState(this.state, document.title, this.href);
        return;
      }
      history.pushState(this.state, document.title, this.href);
      window.dispatchEvent(
        new CustomEvent('mx-navigation', {
          detail: {
            href: this.href,
            title: document.title,
            state: this.state,
          },
          composed: true,
          cancelable: true,
          bubbles: true,
        })
      );
    };

    updateActive = () => {
      const active = this.isActive;
      if (active) {
        this.setAttribute('active', '');
        const _storage = routeStorage()[this.href];
        const inherit = this.hasAttribute('inherit');
        if (inherit && _storage && _storage.query) {
          const url = new URL(this.href, document.baseURI);
          _storage.query.forEach((v: any, k: any) => {
            url.searchParams.append(k, v);
          });
          url.host = '';
          this.href = url.toString();
          this.updateAnchor('href', this.href);
        }
      } else {
        this.removeAttribute('active');
      }
    };

    protected async disconnect(): Promise<void> {
      super.disconnect();
      if (this._mountPoint) {
        this._mountPoint.removeEventListener('click', this.navigate);
      }
      window.removeEventListener('mx-navigation', this.updateActive);
    }

    // @ts-ignore
    get asUrl(): URL {
      return new URL(this.href, document.baseURI);
    }

    // @ts-ignore
    get asPath(): string {
      return this.asUrl.pathname;
    }

    // @ts-ignore
    get isActive(): boolean {
      const pathname = this.asPath;
      const _storage = routeStorage();
      return !(!_storage || !(pathname in _storage));
    }
  }
);

function defaultParseProperty(newValue: any): any {
  return typeof newValue === 'string'
    ? ['{', '['].indexOf(newValue && newValue.charAt(0)) > -1 &&
      ['}', ']'].indexOf(
        newValue && newValue.charAt(+(newValue && newValue.length) - 1)
      ) > -1
      ? JSON.parse(newValue)
      : newValue === 'true'
      ? true
      : newValue === 'false'
      ? false
      : newValue === 'undefined'
      ? undefined
      : newValue === 'null'
      ? null
      : /\d+(\.\d+)?/.test(newValue)
      ? Number(newValue)
      : newValue
    : newValue;
}

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
    return defaultParseProperty(newValue);
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

export function addQueryParam(key: string, value: any) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, encodeURIComponent(value));
  window.history.pushState({}, '', url.toString());
}

export function getQueryParam(key: string): any {
  const url = new URL(window.location.href);
  const param = url.searchParams.get(key);
  if (!param) return param;
  return decodeURIComponent(param);
}

function proxyProperty(
  target: any,
  _optionsKey: any, // Not used for now, might be interesting to have storage scoped to element definitions
  propertyName: string,
  lookupKey: string | number,
  type: string
) {
  const defaultValue: any = target && target[propertyName];
  let value: any = defaultValue;
  target.__proxy = target.__proxy || {};
  target.__proxy[propertyName] = target.__proxy[propertyName] || {};
  const parseProperty = target.parseProperty;

  Object.defineProperty(target.__proxy[propertyName], type, {
    get() {
      const _storage = routeStorage();
      if (value !== defaultValue) {
        return value;
      }
      switch (type) {
        case 'prop':
          return value;
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
          value = defaultParseProperty(
            _storage.query && _storage.query.get(lookupKey)
          );
          return value;
        case 'hash':
          if (!_storage) return value;
          value = defaultParseProperty(
            _storage.hash && _storage.hash.get(lookupKey)
          );
          return value;
        case 'storage':
          value = defaultParseProperty(
            localStorage.getItem(lookupKey as string) as any
          );
          return value;
        default:
          return value;
      }
    },
    set(newValue: any) {
      const _storage = routeStorage();
      const oldValue = value;
      value = parseProperty(newValue);
      switch (type) {
        case 'prop':
          target.maybeRender(oldValue, value);
          return;
        case 'state':
          target.maybeRender(oldValue, value);
          return;
        case 'param':
          if (!_storage) return;
          if (typeof lookupKey === 'string') {
            lookupKey = _storage.namedGroups[lookupKey];
          }
          _storage.params[lookupKey] = value;
          routeStorage({
            ..._storage,
            params: _storage.params,
          });
          return;
        case 'query':
          if (!_storage) return;
          _storage.query.set(lookupKey, value);
          routeStorage({
            ..._storage,
            query: _storage.query,
          });
          addQueryParam(lookupKey as string, value);
          return;
        case 'hash':
          if (!_storage) return;
          _storage.hash.set(lookupKey, value);
          routeStorage({
            ..._storage,
            hash: _storage.hash,
          });
          return;
        case 'storage':
          localStorage.setItem(lookupKey as string, JSON.stringify(value));
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
            proxyProperty(
              this,
              options,
              prop.propertyKey,
              prop.lookupKey,
              'prop'
            )
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
