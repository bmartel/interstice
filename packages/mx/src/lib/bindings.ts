import { routeStorage } from './storage';
import { addQueryParam, isEmpty } from './utils';

export type PropertyBinding = {
  propertyKey: string;
  lookupKey: string;
};

export function proxyProperty(
  target: any,
  _optionsKey: any, // Not used for now, might be interesting to have storage scoped to element definitions
  propertyName: string,
  lookupKey: string | number,
  type: string
) {
  const defaultValue: any = target && target[propertyName];
  let value: any = defaultValue;
  target.__proxy = target.__proxy || {};
  target.__proxyOrder = target.__proxyOrder || {};
  target.__proxyOrder[propertyName] = target.__proxyOrder[propertyName] || [];
  target.__proxy[propertyName] = target.__proxy[propertyName] || {};

  const parseProperty = target.parseProperty.bind(target);
  if (target.__proxyOrder[propertyName].indexOf(type) === -1) {
    target.__proxyOrder[propertyName].push(type);
  }

  Object.defineProperty(target.__proxy[propertyName], type, {
    get() {
      const _storage = routeStorage();

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
          value = parseProperty(
            _storage.query && _storage.query.get(lookupKey)
          );
          return value;
        case 'hash':
          if (!_storage) return value;
          value = parseProperty(_storage.hash && _storage.hash.get(lookupKey));
          return value;
        case 'storage':
          value = parseProperty(
            localStorage.getItem(lookupKey as string) as any
          );
          return value;
        case 'cssProp':
          const root = document.documentElement;
          value = root.style.getPropertyValue(lookupKey as string);
          return value;
        default:
          return value;
      }
    },
    set(newValue: any) {
      const _storage = routeStorage();
      const oldValue = value;
      switch (type) {
        case 'prop':
          value = parseProperty(newValue);
          target.maybeRender(oldValue, value);
          return;
        case 'state':
          value = newValue;
          target.maybeRender(oldValue, value);
          return;
        case 'param':
          value = newValue;
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
          value = newValue;
          if (!_storage) return;
          _storage.query.set(lookupKey, value);
          routeStorage({
            ..._storage,
            query: _storage.query,
          });
          addQueryParam(lookupKey as string, value);
          return;
        case 'hash':
          value = newValue;
          if (!_storage) return;
          _storage.hash.set(lookupKey, value);
          routeStorage({
            ..._storage,
            hash: _storage.hash,
          });
          return;
        case 'storage':
          value = newValue;
          localStorage.setItem(lookupKey as string, JSON.stringify(value));
          return;
        case 'cssProp':
          value = newValue.toString();
          const root = document.documentElement;
          root.style.setProperty(lookupKey as string, newValue);
          return value;
      }
    },
    enumerable: true,
    configurable: true,
  });

  Object.defineProperty(target, propertyName, {
    get() {
      let propValue: any = undefined;
      this.__proxyOrder[propertyName].find((key: string) => {
        const e = this.__proxy[propertyName][key];
        propValue = e;
        return !isEmpty(e) && !isEmpty(propValue)
      });
      return propValue;
    },
    set(nextValue: any) {
      this.__proxyOrder[propertyName].forEach((key: string) => {
        this.__proxy[propertyName][key] = nextValue;
      });
    },
    enumerable: true,
    configurable: true,
  });

  // Property Alias
  if (
    type === 'prop' &&
    lookupKey &&
    typeof lookupKey === 'string' &&
    lookupKey !== propertyName
  ) {
    Object.defineProperty(target, lookupKey, {
      get() {
        return target[propertyName];
      },
      set(nextValue: any) {
        target[propertyName] = nextValue;
      },
      enumerable: true,
      configurable: true,
    });
  }
}

export type EventBinding = {
  eventName: string;
  eventHandler: string;
};

export function bindEvent(target: any, e: EventBinding) {
  target.addEventListener(e.eventName, target[e.eventHandler]);
}

export type DispatchBinding = {
  eventName: string;
  eventDispatch: string;
};

export function bindDispatch(target: any, e: DispatchBinding) {
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
