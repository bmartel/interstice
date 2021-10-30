import { useCallback, useState } from 'react';
import { DocumentNode } from 'graphql';
import { CombinedError, useMutation } from 'urql';
import { WritableAtom, atom } from 'jotai';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import { AtomEntity, PartialWithId } from './types';

export type DeleteEntityReturn<Value extends { id: string }> = (
  id: string
) => [
  { entity?: PartialWithId<Value>; loading: boolean; error?: CombinedError },
  () => void
];

export const deleteEntity = <Value extends { id: string }>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: string | DocumentNode,
  deleteSource: boolean | WritableAtom<Value[], Value[]> = true
): DeleteEntityReturn<Value> => {
  const deleteSourceAtom = atom(null, (get, set, id: string) => {
    if (typeof deleteSource === 'boolean' && deleteSource) {
      atomEntityInstance.remove({ id } as any);
      return;
    }
    if (typeof deleteSource !== 'boolean' && deleteSource) {
      const prev = get(
        deleteSource as WritableAtom<Value[], Value[]>
      ) as Value[];
      const next = prev.filter(({ id: _id }) => _id !== id);
      set(deleteSource as WritableAtom<Value[], Value[]>, next);
      atomEntityInstance.remove({ id } as any);
    }
  });

  return (id: string) => {
    const entity = useAtomValue(atomEntityInstance({ id } as any));
    const deleteEntityInstance = useUpdateAtom(deleteSourceAtom);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [, performDelete] = useMutation(mutation);

    const _delete = useCallback(async () => {
      setLoading(true);

      // Request delete from remote
      const res = await performDelete({ id } as any);
      setLoading(false);
      if (res.error) {
        setError(res.error as any);
        throw res.error;
      }

      // Delete entity
      deleteEntityInstance(id);
    }, [id, entity, setLoading, setError]);

    return [
      {
        entity,
        loading,
        error,
      },
      _delete,
    ] as any;
  };
};
