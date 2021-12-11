import { useCallback, useMemo } from 'react';
import { atom, WritableAtom } from 'jotai';
import {
  atomWithReset,
  useAtomValue,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import { AtomEntity, MutationWrite, CombinedError } from './types';

export type UpdateEntityReturn<
  Value extends { id: string },
  InputValue = Value
> = (id: string) => [
  { entity?: Partial<Value>; loading: boolean; error?: CombinedError },
  {
    update: (value: Partial<InputValue>) => Promise<void>;
    reset: () => void;
  }
];

const defaultOptimisticUpdate: MutationWrite<any, any> = (
  _get,
  set,
  update
) => {
  // Update optimistically
  set(update.atoms.writeAtom, {
    ...update.input,
    id: update.entity?.id,
  } as any);
};

const defaultOptimisticRollback: MutationWrite<any, any> = (
  _get,
  set,
  update
) => {
  set(update.atoms.writeAtom, update.entity as any);
};

export const updateEntity = <Value extends { id: string }, InputValue = Value>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: MutationWrite<InputValue, Value>,
  optimisticUpdate: MutationWrite<InputValue, Value> = defaultOptimisticUpdate,
  optimisticRollback: MutationWrite<
    InputValue,
    Value
  > = defaultOptimisticRollback
): UpdateEntityReturn<Value, InputValue> => {
  const mutationWrite: MutationWrite<InputValue, Value> = async (
    get,
    set,
    update
  ) => {
    try {
      set(update.atoms.loadingAtom, true);
      await optimisticUpdate(get, set, update);
      await mutation(get, set, update);
    } catch (err) {
      set(update.atoms.errorAtom, err);
      await optimisticRollback(get, set, update);
    } finally {
      set(update.atoms.loadingAtom, false);
    }
  };
  const mutationAtom = atom(null, mutationWrite);

  return (id: string) => {
    const sourceAtom = useMemo(
      () => atomEntityInstance({ id } as any),
      [id]
    ) as any;
    const entity = useAtomValue(sourceAtom) as any;
    const loadingAtom = useMemo(() => atomWithReset(false as any), [id]) as any;
    const loading = useAtomValue<boolean | any>(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const errorAtom = useMemo(() => atomWithReset(null as any), [id]) as any;
    const resetError = useResetAtom(errorAtom as any);
    const error = useAtomValue<CombinedError | null>(errorAtom);
    const mutation = useUpdateAtom(mutationAtom);

    const update = useCallback(
      async (input: Partial<InputValue>) => {
        await mutation({
          input,
          entity,
          atoms: {
            errorAtom,
            loadingAtom,
            readAtom: sourceAtom,
            writeAtom: sourceAtom as unknown as WritableAtom<Value, Value>,
          },
        });
      },
      [entity]
    );

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
      { update, reset },
    ] as any;
  };
};
