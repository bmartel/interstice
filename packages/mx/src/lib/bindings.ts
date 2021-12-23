import { storage } from './storage';
import { addQueryParam, parseProperty, isEmpty } from './utils';
import { PropertyBindingArgs } from './types';

const memory = storage('memory');

export function proxyProperty(
  target: any,
  _optionsKey: any, // Not used for now, might be interesting to have storage scoped to element definitions
  {
    key: propertyName,
    scope: scopeKey,
    lookup: lookupKey,
    expiry,
    storageType,
  }: PropertyBindingArgs = {} as any,
  type: string
) {
  const defaultValue: any = target && target[propertyName];
  let value: any = defaultValue;
  target.__proxy = target.__proxy || {};
  target.__proxyOrder = target.__proxyOrder || {};
  target.__proxyOrder[propertyName] = target.__proxyOrder[propertyName] || [];
  target.__proxy[propertyName] = target.__proxy[propertyName] || {};

  if (target.__proxyOrder[propertyName].indexOf(type) === -1) {
    target.__proxyOrder[propertyName].push(type);
  }

  Object.defineProperty(target.__proxy[propertyName], type, {
    get() {
      const _route = memory.getItem('route');
      switch (type) {
        case 'param':
          if (_route) {
            if (typeof lookupKey === 'string' && _route.namedGroups) {
              lookupKey = _route.namedGroups[lookupKey];
            }
            if (typeof lookupKey === 'number' && Array.isArray(_route.params)) {
              value = _route.params[lookupKey];
            }
          }
          break;
        case 'query':
          if (_route) {
            value = _route.query && _route.query.get(lookupKey);
            value = parseProperty(_route.query && _route.query.get(lookupKey));
          }
          break;
        case 'hash':
          if (_route) {
            value = parseProperty(_route.hash && _route.hash.get(lookupKey));
          }
          break;
        case 'storage':
          value = storage(storageType).getItem(
            `${scopeKey ? `${scopeKey}:` : ''}${lookupKey}`
          ) as any;
          break;
        case 'cookie':
          value = storage('cookie').getItem(
            `${scopeKey ? `${scopeKey}:` : ''}${lookupKey}`
          ) as any;
          break;
        case 'cssProp':
          const root = document.documentElement;
          value = root.style.getPropertyValue(lookupKey as string);
          break;
      }
      return value;
    },
    set(newValue: any) {
      const _route = memory.getItem('route');
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
          if (!_route) return;
          if (typeof lookupKey === 'string') {
            lookupKey = _route.namedGroups[lookupKey];
          }
          _route.params[lookupKey] = value;
          // TODO: use a generic pushState on the current params and generate the pathname after updates to route
          memory.setItem('route', {
            ..._route,
            params: _route.params,
          });
          return;
        case 'query':
          value = newValue;
          if (!_route) return;
          _route.query.set(lookupKey, value);
          memory.setItem('route', {
            ..._route,
            query: _route.query,
          });
          // TODO: move this into the MultiStorage class, use a generic pushState on the current query value after updates to route
          addQueryParam(lookupKey as string, value);
          return;
        case 'hash':
          value = newValue;
          if (!_route) return;
          _route.hash.set(lookupKey, value);
          memory.setItem('route', {
            ..._route,
            hash: _route.hash,
          });
          return;
        case 'storage':
          value = newValue;
          storage(storageType).setItem(
            `${scopeKey ? `${scopeKey}:` : ''}${lookupKey}`,
            value
          );
          return;
        case 'cookie':
          value = newValue;
          storage(storageType).setItem(
            `${scopeKey ? `${scopeKey}:` : ''}${lookupKey}`,
            value,
            expiry
          );
          return;
        case 'cssProp':
          value = newValue.toString();
          const root = document.documentElement;
          root.style.setProperty(lookupKey as string, newValue);
          return;
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
        const found = isEmpty(propValue) && !isEmpty(e);
        propValue = e;
        return found;
      });

      return propValue === undefined || propValue === null
        ? defaultValue
        : propValue;
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
  target.__removeListeners = target.__removeListeners || [];
  target.__removeListeners.push(() =>
    target.removeEventListener(e.eventName, target[e.eventHandler])
  );
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
