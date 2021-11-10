import * as O from 'optics-ts'
import { useMemo } from 'react'
import { useAtom } from 'jotai'
import { focusAtom } from 'jotai/optics'
import { AtomEntity, ResolveType, SetAtom } from './types'

export type FocusEntityReturn<
  Value extends { [k: string]: string | number },
  A,
  R extends void | Promise<void>
> = (id: string) => [ResolveType<A>, SetAtom<A, R>]

export const focusEntity = <Value extends { [k: string]: any }, A = any>(
  atomEntityInstance: AtomEntity<Value>,
  derivedBy: (
    optic: O.OpticFor<Value>
  ) =>
    | O.Lens<Value, any, A>
    | O.Equivalence<Value, any, A>
    | O.Iso<Value, any, A>
    | O.Prism<Value, any, A>
    | O.Traversal<Value, any, A>
): FocusEntityReturn<Value, A, void | Promise<void>> => (id) => {
  return useAtom(
    useMemo(
      () =>
        focusAtom(atomEntityInstance({ [atomEntityInstance.idKey]: id } as any), derivedBy as any),
      [id]
    )
  ) as any
}
