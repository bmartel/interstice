import {
  PropertyDecoratorArgs,
  PropertyDecorator as MethodDecorator,
} from './types';

const PropertyDecorator = (
  targetKey: string,
  observed?: boolean,
  lookupTransform?: boolean | ((key: string) => string)
) => {
  return function ({
    observed: _observed = observed,
    key,
    scope,
    storageType,
    expiry,
  }: PropertyDecoratorArgs = {}) {
    return function (target: any, propertyKey: string) {
      if (_observed) {
        target.__observedAttributes = target.__observedAttributes || [];
      }
      let lookup = key || propertyKey;
      if (lookupTransform) {
        lookup =
          typeof lookupTransform === 'boolean'
            ? lookup.toLowerCase()
            : lookupTransform(lookup);
      }
      target[targetKey] = target[targetKey] || [];
      target[targetKey].push({
        key: propertyKey,
        lookup,
        scope,
        storageType,
        expiry,
      });
      if (_observed) {
        target.__observedAttributes.push(lookup);
      }
    };
  };
};

export const State = PropertyDecorator('__state') as (
  options?: Pick<PropertyDecoratorArgs, 'key'>
) => MethodDecorator;
export const Prop = PropertyDecorator('__props', true, true) as (
  options?: Pick<PropertyDecoratorArgs, 'key'>
) => MethodDecorator;
export const CssProp = PropertyDecorator(
  '__cssProps',
  false,
  (lookupKey: string) => {
    return lookupKey.startsWith('--') ? lookupKey : `--${lookupKey}`;
  }
) as (options: Pick<PropertyDecoratorArgs, 'key'>) => MethodDecorator;
export const Param = PropertyDecorator('__params') as (
  options: Pick<PropertyDecoratorArgs, 'key'>
) => MethodDecorator;
export const QueryParam = PropertyDecorator('__queryParams') as (
  options: Pick<PropertyDecoratorArgs, 'key'>
) => MethodDecorator;
export const HashParam = PropertyDecorator('__hashParams') as (
  options: Pick<PropertyDecoratorArgs, 'key'>
) => MethodDecorator;
export const Storage = PropertyDecorator('__storage') as (
  options: Pick<PropertyDecoratorArgs, 'key' | 'scope' | 'storageType'>
) => MethodDecorator;
export const Cookie = PropertyDecorator('__cookie') as (
  options: Pick<PropertyDecoratorArgs, 'key' | 'scope' | 'expiry'>
) => MethodDecorator;
