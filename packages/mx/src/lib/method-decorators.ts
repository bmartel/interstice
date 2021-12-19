export type PropertyDecoratorArgs = {
  key?: string;
  observed?: boolean;
};
function PropertyDecorator(
  targetKey: string,
  observed?: boolean,
  lookupTransform?: boolean | ((key: string) => string)
) {
  return function ({
    observed: _observed = observed,
    key,
  }: PropertyDecoratorArgs = {}) {
    return function (target: any, propertyKey: string) {
      if (_observed) {
        target.__observedAttributes = target.__observedAttributes || [];
      }
      let lookupKey = key || propertyKey;
      if (lookupTransform) {
        lookupKey =
          typeof lookupTransform === 'boolean'
            ? lookupKey.toLowerCase()
            : lookupTransform(lookupKey);
      }
      target[targetKey] = target[targetKey] || [];
      target[targetKey].push({ propertyKey, lookupKey });
      if (_observed) {
        target.__observedAttributes.push(lookupKey);
      }
    };
  };
}

export const State = PropertyDecorator('__state');
export const Prop = PropertyDecorator('__props', true, true);
export const CssProp = PropertyDecorator(
  '__cssProps',
  false,
  (lookupKey: string) => {
    return lookupKey.startsWith('--') ? lookupKey : `--${lookupKey}`;
  }
);
export const Param = PropertyDecorator('__params');
export const QueryParam = PropertyDecorator('__queryParams');
export const HashParam = PropertyDecorator('__hashParams');
export const Storage = PropertyDecorator('__storage');

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
