import { DocumentNode } from 'graphql'
import { WritableAtom, atom, useAtom } from 'jotai'
import { CombinedError, useMutation } from 'urql'
import { useCallback } from 'react'
import { AtomEntity } from './atom'
import { PartialWithId } from './types'

export type DeleteEntityReturn<Value extends { id: string }> = (
  id: string
) => [{ entity?: PartialWithId<Value>; loading: boolean; error?: CombinedError }, () => void]

export const deleteEntity = <Value extends { id: string }>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: string | DocumentNode,
  fromData: (data: any) => PartialWithId<Value> = (data) => data,
  deleteSource: boolean | WritableAtom<Value[], Value[]> = true
): DeleteEntityReturn<Value> => {
  const deleteSourceAtom = atom(null, (get, set, id: string) => {
    if (typeof deleteSource === 'boolean' && deleteSource) {
      set(atomEntityInstance({ id } as any), null as any)
      return
    }
    if (typeof deleteSource !== 'boolean' && deleteSource) {
      const prev = get(deleteSource as WritableAtom<Value[], Value[]>) as Value[]
      set(
        deleteSource as WritableAtom<Value[], Value[]>,
        prev.filter(({ id }) => id !== id)
      )
    }
  })

  const optimisticUndoAtom = atom(
    (get) => {
      if (typeof deleteSource !== 'boolean' && deleteSource) {
        return get(deleteSource)
      }
    },
    (get, set, value: { index?: number; entity: Value }) => {
      const { index, entity } = value
      if (index === undefined || index === null) {
        set(atomEntityInstance({ id: entity.id } as any), entity)
        return
      }
      const prev = get(deleteSource as WritableAtom<Value[], Value[]>) as Value[]
      set(
        deleteSource as WritableAtom<Value[], Value[]>,

        [...prev.slice(0, index), entity, ...prev.slice(index)]
      )
    }
  )

  return (id: string) => {
    const [entity] = useAtom(atomEntityInstance({ id } as any))
    const [, deleteEntityInstance] = useAtom(deleteSourceAtom)
    const [sourceList, optimisticUndo] = useAtom(optimisticUndoAtom)

    const [{ fetching, error, data }, performDelete] = useMutation(mutation)

    const optimisticDelete = useCallback(async () => {
      const entityInstance = entity as any
      const index = sourceList?.findIndex((val: Value) => id === val.id)

      try {
        // Delete optimistically
        deleteEntityInstance(id)

        await performDelete({ id } as any)
      } catch (_err) {
        // restore if failed
        optimisticUndo({ index, entity: entityInstance })
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, entity, sourceList])

    return [
      {
        entity: !fetching ? fromData(data) : undefined,
        loading: fetching,
        error,
      },
      optimisticDelete,
    ]
  }
}
