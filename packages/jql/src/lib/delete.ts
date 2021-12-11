import { useCallback, useMemo } from 'react';
import { WritableAtom, atom } from 'jotai';
import {
  useAtomValue,
  atomWithReset,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import {
  AtomEntity,
  MutationWrite,
  PartialWithId,
  CombinedError,
} from './types';

export type DeleteEntityReturn<Value extends { id: string }> = (
  id: string
) => [
  { entity?: PartialWithId<Value>; loading: boolean; error?: CombinedError },
  { delete: () => void; reset: () => void }
];

const defaultCommitUpdate: MutationWrite<any, any> = (_get, set, update) => {
  set(update.atoms.writeAtom, update.input.id);
};

export const deleteEntity = <Value extends { id: string }>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: MutationWrite<Value, Value>,
  source: boolean | WritableAtom<Value[], Value[]> = true,
  commitUpdate: MutationWrite<Value, Value> = defaultCommitUpdate
): DeleteEntityReturn<Value> => {
  const sourceAtom = atom(null, (get, set, id: string) => {
    if (typeof source === 'boolean' && source) {
      atomEntityInstance.remove({ id } as any);
      return;
    }
    if (typeof source !== 'boolean' && source) {
      const prev = get(source as WritableAtom<Value[], Value[]>) as Value[];
      const next = prev.filter(({ id: _id }) => _id !== id);
      set(source as WritableAtom<Value[], Value[]>, next);
      atomEntityInstance.remove({ id } as any);
    }
  });

  const mutationWrite: MutationWrite<Value, Value> = async (
    get,
    set,
    update
  ) => {
    try {
      set(update.atoms.loadingAtom, true);
      await mutation(get, set, update);
      await commitUpdate(get, set, update);
    } catch (err) {
      set(update.atoms.errorAtom, err);
    } finally {
      set(update.atoms.loadingAtom, false);
    }
  };
  const mutationAtom = atom(null, mutationWrite);

  return (id: string) => {
    const entity = useAtomValue(atomEntityInstance({ id } as any)) as any;
    const loadingAtom = useMemo(() => atomWithReset(false as any), [id]) as any;
    const loading = useAtomValue<boolean | any>(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const errorAtom = useMemo(() => atomWithReset(null as any), [id]) as any;
    const resetError = useResetAtom(errorAtom as any);
    const error = useAtomValue<CombinedError | null>(errorAtom);
    const mutation = useUpdateAtom(mutationAtom);

    const _delete = useCallback(async () => {
      await mutation({
        input: entity,
        atoms: {
          errorAtom,
          loadingAtom,
          readAtom: sourceAtom,
          writeAtom: sourceAtom as unknown as WritableAtom<Value, Value>,
        },
      });
    }, [entity]);

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
