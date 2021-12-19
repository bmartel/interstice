import { m } from 'million';
import { BaseElement } from './base-element';
import {
  bindDispatch,
  bindEvent,
  DispatchBinding,
  EventBinding,
  PropertyBinding,
  proxyProperty,
} from './bindings';
import { define } from './utils';

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
