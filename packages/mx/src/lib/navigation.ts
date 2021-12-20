export const MX_NAVIGATION_EVENT = 'mx-navigation'

window.addEventListener('popstate', () => {
  dispatchEvent(
    new CustomEvent(MX_NAVIGATION_EVENT, {
      bubbles: true,
      composed: true,
      cancelable: true,
    })
  );
});

export type NavigateOptions = {
  replace?: boolean;
  silent?: boolean;
  title?: string;
  state?: Record<string, any>;
};

export function navigate(href: string, options: NavigateOptions = {}) {
  const { replace, silent, state, title } = options;
  if (replace) {
    history.replaceState(state, title || '', href);
  } else {
    history.pushState(state, title || '', href);
  }
  if (!silent) {
    dispatchEvent(
      new CustomEvent(MX_NAVIGATION_EVENT, {
        detail: {
          href,
          title,
          state,
        },
        composed: true,
        cancelable: true,
        bubbles: true,
      })
    );
  }
}
