import { m } from 'million';
import {
  bindDispatch,
  bindEvent,
  DispatchBinding,
  EventBinding,
  proxyProperty,
} from './bindings';
import { define } from './utils';
import { RouteElement } from './route-element';
import { PropertyBindingArgs } from './types';

export function MXElement(options: { tag: string; route?: string | RegExp }) {
  return function (ctor: any) {
    const __observedAttributes = ctor.prototype.__observedAttributes || [];
    const __params = ctor.prototype.__params || [];
    const __queryParams = ctor.prototype.__queryParams || [];
    const __hashParams = ctor.prototype.__hashParams || [];
    const __storage = ctor.prototype.__storage || [];
    const __state = ctor.prototype.__state || [];
    const __props = ctor.prototype.__props || [];
    const __cssProps = ctor.prototype.__cssProps || [];
    const __cookie = ctor.prototype.__cookie || [];
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
    delete ctor.prototype.__cssProps;
    delete ctor.prototype.__cookie;
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
          __props.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'prop')
          );
          __state.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'state')
          );
          __params.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'param')
          );
          __queryParams.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'query')
          );
          __hashParams.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'hash')
          );
          __storage.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'storage')
          );
          __cookie.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'cookie')
          );
          __cssProps.forEach((prop: PropertyBindingArgs) =>
            proxyProperty(this, options, prop, 'cssProp')
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
        class extends RouteElement {
          constructor() {
            super();
            this.tag = options.tag as any;
            this.route = options.route as any;
          }

          updateAndRenderChildren() {
            if (this._mountPoint) {
              (this._mountPoint as any).resetScoped();
              (this._mountPoint as any).forceRender();
            }
          }

          render() {
            this.updateAndRenderChildren();
            // @ts-ignore
            return m(mxTag);
          }
        }
      );
    }
    return mxEl;
  };
}
