export const uniqBy = <T = Record<string, any>>(
  arr: T[],
  predicate?: ((o: T) => any) | string
): T[] => {
  const cb = typeof predicate === 'function' ? predicate : (o: any): any => o[predicate as string]

  return [
    ...arr
      .reduce((map, item) => {
        const key =
          item === null ||
          item === undefined ||
          typeof item === 'string' ||
          typeof item === 'number'
            ? item
            : cb(item)

        map.has(key) || map.set(key, item)

        return map
      }, new Map())
      .values(),
  ]
}
