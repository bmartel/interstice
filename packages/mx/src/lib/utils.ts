export const define =
  (name: string) => (El: any, opt?: ElementDefinitionOptions) => {
    window.customElements.define(name, El, opt);
    return El;
  };

export function addQueryParam(key: string, value: any) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, encodeURIComponent(value));
  window.history.pushState({}, '', url.toString());
}

export function parseProperty(newValue: any): any {
  return typeof newValue === 'string'
    ? ['{', '['].indexOf(newValue && newValue.charAt(0)) > -1 &&
      ['}', ']'].indexOf(
        newValue && newValue.charAt(+(newValue && newValue.length) - 1)
      ) > -1
      ? JSON.parse(newValue)
      : newValue === 'true'
      ? true
      : newValue === 'false'
      ? false
      : newValue === 'undefined'
      ? undefined
      : newValue === 'null'
      ? null
      : /^\d+(\.\d+)?$/.test(newValue)
      ? Number(newValue)
      : decodeURIComponent(newValue)
    : newValue;
}

export function isEmpty(a: any): boolean {
  return (
    (typeof a === 'object' && JSON.stringify(a) === '{}') ||
    (Array.isArray(a) && a.length === 0) ||
    !a
  );
}

export function isEqual(a: any, b: any): boolean {
  return (
    a === b ||
    !(
      typeof a !== typeof b ||
      !(Array.isArray(a) && Array.isArray(b)) ||
      a.length !== b.length ||
      (typeof a === 'object' && JSON.stringify(a) !== JSON.stringify(b))
    )
  );
}
