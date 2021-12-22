import { m } from 'million';
import { CustomElement } from './custom-element';
import { MX_NAVIGATION_EVENT, navigate } from './navigation';
import { storage } from './storage';
import { define } from './utils';

const memory = storage('memory');

define('mx-link')(
  class LinkElement extends CustomElement {
    href: string = '';
    state?: any = {};
    active?: any;
    inherit?: any;
    replace?: any;
    exact?: any;
    _url: URL = new URL(window.location.href);

    // @ts-ignore
    static get observedAttributes() {
      return ['href', 'state', 'exact', 'root', 'replace'];
    }

    async connectedCallback(): Promise<void> {
      await super.connectedCallback();
      this.updateActive();
      window.addEventListener(MX_NAVIGATION_EVENT, this.updateActive);
    }

    async disconnect(): Promise<void> {
      await super.disconnect();
      if (this._mountPoint) {
        this._mountPoint.removeEventListener('click', this.navigate);
      }
      window.removeEventListener(MX_NAVIGATION_EVENT, this.updateActive);
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
      this.forceRender();
    };

    // @ts-ignore
    get asUrl(): URL {
      return new URL(this.href, document.baseURI);
    }

    // @ts-ignore
    get asPath(): string {
      return this.asUrl.pathname;
    }

    // @ts-ignore
    get isExact(): boolean {
      return this.hasAttribute('exact');
    }

    // @ts-ignore
    get isRoot(): boolean {
      return this.hasAttribute('root');
    }

    // @ts-ignore
    get isActive(): boolean {
      const exact = this.isExact;
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

    render(): any {
      const isActive = this.isActive;
      const isRoot = this.isRoot;
      const currentType = isRoot ? 'page' : 'location';
      const activeLink = {
        'aria-current': currentType,
      };
      return m(
        'a',
        {
          onclick: this.navigate,
          part: isActive ? `anchor-current-${currentType}` : 'anchor',
          href: this.href,
          state: this.state,
          ...(isActive ? activeLink : {}),
        },
        [m('slot')]
      );
    }
  }
);
