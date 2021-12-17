import { useCallback } from 'react';
import { WritableAtom, atom } from 'jotai';
import {
  atomWithReset,
  useAtomValue,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import {
  AtomEntity,
  PartialWithId,
  CombinedError,
  MutationWrite,
  MutationAtoms,
} from './types';

export type CreateEntityReturn<
  Value extends { id: string },
  InputValue = Value
> = (() => [
  { entity?: PartialWithId<Value>; loading: boolean; error?: CombinedError },
  {
    create: (
      entity: Partial<InputValue> | { [k: string]: Partial<InputValue> }
    ) => Promise<void>;
    reset: () => void;
  }
]) &
  MutationAtoms<Value>;

export const createEntity = <Value extends { id: string }, InputValue = Value>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: MutationWrite<InputValue, Value>,
  source: boolean | WritableAtom<Value[], Value[]> = true
): CreateEntityReturn<Value, InputValue> => {
  const loadingAtom = atomWithReset(false);
  const errorAtom = atomWithReset(null as CombinedError | null);
  const entityIdAtom = atomWithReset<string | null>(null);
  const entityAtom = atom<Value | null>((get) => {
    const lookupId = { [atomEntityInstance.idKey]: get(entityIdAtom) };
    if (!lookupId[atomEntityInstance.idKey]) {
      return null;
    }
    return (get(atomEntityInstance(lookupId as any)) as Value) || null;
  });
  const sourceAtom = atom(null, (get, set, entity: Partial<Value>) => {
    if (atomEntityInstance.idKey in entity) {
      set(entityIdAtom as any, (entity as any)[atomEntityInstance.idKey]);
    }
    if (typeof source === 'boolean' && source) {
      set(atomEntityInstance(entity as any), entity as any);
      return;
    }
    if (typeof source !== 'boolean' && source) {
      const prev = get(source as WritableAtom<Value[], Value[]>) as Value[];
      set(source as WritableAtom<Value[], Value[]>, [entity as any, ...prev]);
    }
  });

  const mutationWrite: MutationWrite<InputValue, Value> = async (
    get,
    set,
    update
  ) => {
    try {
      set(update.atoms.loadingAtom, true);
      await mutation(get, set, update);
    } catch (err) {
      set(update.atoms.errorAtom, err);
    } finally {
      set(update.atoms.loadingAtom, false);
    }
  };
  const mutationAtom = atom(null, mutationWrite);

  function createHook() {
    const loading = useAtomValue(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const error = useAtomValue(errorAtom);
    const resetError = useResetAtom(errorAtom as any);
    const mutation = useUpdateAtom(mutationAtom);
    const resetEntityId = useResetAtom(entityIdAtom as any);
    const entity = useAtomValue(entityAtom);

    const create = useCallback(async (entityData: Partial<InputValue>) => {
      await mutation({
        input: entityData,
        atoms: {
          errorAtom,
          loadingAtom,
          readAtom: entityAtom,
          writeAtom: sourceAtom as unknown as WritableAtom<Value, Value>,
        },
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const reset = useCallback(() => {
      resetEntityId();
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
      { create, reset },
    ];
  }

  // Keep a reference on the function itself to the atoms for Create/Delete purposes, and allowing fine grain reads by
  // outside consumers
  createHook.readAtom = entityAtom as any;
  createHook.writeAtom = sourceAtom as any;
  createHook.errorAtom = errorAtom as any;
  createHook.loadingAtom = loadingAtom as any;

  return createHook as any;
};
