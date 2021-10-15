import { DocumentNode } from 'graphql';
import { WritableAtom, atom, useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { CombinedError, useMutation } from 'urql';
import { useCallback, useEffect } from 'react';
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
  const loadingAtom = atom(false);
  const errorAtom = atom(null as CombinedError | null);
  const entityIdAtom = atom<string | null>(null);
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
    const [, createEntityInstance] = useAtom(createSourceAtom);
    const resetEntityId = useResetAtom(entityIdAtom as any);
    const [entity] = useAtom(entityAtom);
    const [{ fetching, error: _error }, performCreate] = useMutation(mutation);

    useEffect(() => {
      setLoading(fetching);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching]);

    useEffect(() => {
      setError(_error as any);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_error]);

    const create = useCallback(async (entityData: Partial<Value>) => {
      try {
        const res = (await performCreate(entityData as any)) as any;
        createEntityInstance(fromData(res.data as any));
      } catch (err) {}
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
