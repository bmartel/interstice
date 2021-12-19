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
