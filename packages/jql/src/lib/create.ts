import { useCallback } from 'react';
import { DocumentNode } from 'graphql';
import { WritableAtom, atom, useAtom } from 'jotai';
import {
  atomWithReset,
  useAtomValue,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import { CombinedError, useMutation } from 'urql';
import { AtomEntity } from './atom';
import { PartialWithId } from './types';

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
]) & {
  entityAtom: WritableAtom<Value, Value>;
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>;
  loadingAtom: WritableAtom<boolean, boolean>;
};

export const createEntity = <Value extends { id: string }, InputValue = Value>(
  atomEntityInstance: AtomEntity<Value>,
  mutation: string | DocumentNode,
  fromData: (data: any) => PartialWithId<Value> = (data) => data,
  createSource: boolean | WritableAtom<Value[], Value[]> = true
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
  const createSourceAtom = atom(null, (get, set, entity: Partial<Value>) => {
    if (atomEntityInstance.idKey in entity) {
      set(entityIdAtom as any, (entity as any)[atomEntityInstance.idKey]);
    }
    if (typeof createSource === 'boolean' && createSource) {
      set(atomEntityInstance(entity as any), entity as any);
      return;
    }
    if (typeof createSource !== 'boolean' && createSource) {
      const prev = get(
        createSource as WritableAtom<Value[], Value[]>
      ) as Value[];
      set(createSource as WritableAtom<Value[], Value[]>, [
        entity as any,
        ...prev,
      ]);
    }
  });

  function createHook() {
    const [loading, setLoading] = useAtom(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const [error, setError] = useAtom(errorAtom);
    const resetError = useResetAtom(errorAtom as any);
    const createEntityInstance = useUpdateAtom(createSourceAtom);
    const resetEntityId = useResetAtom(entityIdAtom as any);
    const entity = useAtomValue(entityAtom);
    const [, performCreate] = useMutation(mutation);

    const create = useCallback(async (entityData: Partial<Value>) => {
      setLoading(true);
      const res = (await performCreate(entityData as any)) as any;
      setLoading(false);
      if (res?.error) {
        setError(res.error);
        throw res.error;
      }
      createEntityInstance(fromData(res.data as any));
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
  createHook.entityAtom = entityAtom as any;
  createHook.errorAtom = errorAtom as any;
  createHook.loadingAtom = loadingAtom as any;

  return createHook as any;
};
