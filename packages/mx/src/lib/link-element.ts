import { BaseElement } from './base-element';
import { MX_NAVIGATION_EVENT, navigate } from './navigation';
import { storage } from './storage';
import { define } from './utils';

const memory = storage('memory');

define('mx-link')(
  class LinkElement extends BaseElement {
    href: string = '';
    state?: any = {};
    active?: any;
    inherit?: any;
    replace?: any;
    exact?: any;
    _url: URL = new URL(window.location.href);

    // @ts-ignore
    static get observedAttributes() {
      return ['href', 'state', 'exact', 'replace'];
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
      window.addEventListener(MX_NAVIGATION_EVENT, this.updateActive);
    }

    navigate = (e: Event) => {
      e.preventDefault();
      if (this._url.toString() !== this.asUrl.toString()) {
        navigate(this.href, { state: this.state, replace: this.replace });
      }
    };

    updateUrl() {
      this._url = new URL(window.location.href);
    }

    updateActive = () => {
      this.updateUrl();
      const active = this.isActive;
      if (active) {
        this.setAttribute('active', '');
      } else {
        this.removeAttribute('active');
      }
    };

    protected async disconnect(): Promise<void> {
      await super.disconnect();
      if (this._mountPoint) {
        this._mountPoint.removeEventListener('click', this.navigate);
      }
      window.removeEventListener(MX_NAVIGATION_EVENT, this.updateActive);
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
      const exact = this.hasAttribute('exact');
      const pathname = this.asPath;
      const _storage = memory.getItem('route');
      if (exact) {
        return !(!_storage || !_storage[pathname]);
      }
      return !(
        !_storage ||
        !Object.keys(_storage).some((key) => key.startsWith(pathname))
      );
    }
  }
);
