import { useCallback, useMemo } from 'react';
import { DocumentNode } from 'graphql';
import { CombinedError, useMutation } from 'urql';
import { WritableAtom, atom, useAtom } from 'jotai';
import {
  useAtomValue,
  atomWithReset,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import { AtomEntity, PartialWithId } from './types';

export type DeleteEntityReturn<Value extends { id: string }> = (
  id: string
) => [
  { entity?: PartialWithId<Value>; loading: boolean; error?: CombinedError },
  { delete: () => void; reset: () => void }
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
    const loadingAtom = useMemo(() => atomWithReset(false as any), [id]) as any;
    const [loading, setLoading] = useAtom<boolean, boolean, any>(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const errorAtom = useMemo(() => atomWithReset(null as any), [id]) as any;
    const resetError = useResetAtom(errorAtom as any);
    const [error, setError] = useAtom<
      CombinedError | null,
      CombinedError | null,
      any
    >(errorAtom);
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

    const reset = useCallback(() => {
      resetError();
      resetLoading();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [
      {
        entity,
        loading,
        error,
      },
      { delete: _delete, reset },
    ] as any;
  };
};
