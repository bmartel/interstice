import { useCallback, useEffect, useMemo } from 'react';
import { atom, WritableAtom } from 'jotai';
import {
  atomWithReset,
  useAtomValue,
  useResetAtom,
  useUpdateAtom,
} from 'jotai/utils';
import { AtomEntity, QueryWrite, CombinedError } from './types';

export type FindOneEntityReturn<
  Value extends { [k: string]: string | number }
> = ((value: Partial<Value>) => [
  { entity: Value; loaded: boolean; loading: boolean; error?: CombinedError },
  {
    reset: () => void;
    fetch: (input?: any) => void;
  }
]) & {
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>;
  loadingAtom: WritableAtom<boolean, boolean>;
  pauseAtom: WritableAtom<boolean, boolean>;
  variablesAtom: WritableAtom<Record<string, any>, Record<string, any>>;
};

export const findOneEntity = <Value extends { [k: string]: any }>(
  atomEntityInstance: AtomEntity<Value>,
  query: QueryWrite<any, Value>
): FindOneEntityReturn<Value> => {
  const hasFetchedAtom = atomWithReset(-1);
  const errorAtom = atomWithReset<CombinedError | null>(null);
  const loadingAtom = atomWithReset(false);

  const queryWrite: QueryWrite<any, Value> = async (get, set, params) => {
    try {
      set(params.atoms.loadingAtom, true);
      set(params.atoms.hasFetchedAtom, 0);
      params.previous = get(params.atoms.readAtom) as any;
      await query(get, set, params);
    } catch (err) {
      set(params.atoms.errorAtom, err);
    } finally {
      set(params.atoms.loadingAtom, false);
    }
  };
  const queryAtom = atom(null, queryWrite);

  function findOneHook(value?: Record<string, any>) {
    const sourceAtom = useMemo(
      () =>
        atomEntityInstance({
          [atomEntityInstance.idKey]: value?.[atomEntityInstance.idKey],
        } as any),
      [value?.[atomEntityInstance.idKey]]
    ) as any;
    const hasFetched = useAtomValue(hasFetchedAtom);
    const resetHasFetched = useResetAtom(hasFetchedAtom as any);
    const loading = useAtomValue(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const error = useAtomValue(errorAtom as any);
    const resetError = useResetAtom(errorAtom as any);
    const entity = useAtomValue(sourceAtom) as any;
    const query = useUpdateAtom(queryAtom);

    const fetchQuery = useCallback((input?: any) => {
      query({
        input,
        atoms: {
          loadingAtom,
          hasFetchedAtom,
          errorAtom,
          readAtom: sourceAtom,
          writeAtom: sourceAtom as WritableAtom<Value, Value>,
        },
      });
    }, []);

    useEffect(() => {
      fetchQuery(value);
    }, [value]);

    const reset = useCallback(() => {
      resetError();
      resetLoading();
      resetHasFetched();
    }, []);

    return [
      { entity, loading, loaded: hasFetched && !loading, error: error as any },
      { reset, fetch: fetchQuery },
    ];
  }

  // Keep a reference on the function itself to the atoms for Create/Delete purposes, and allowing fine grain reads by
  // outside consumers
  findOneHook.errorAtom = errorAtom as any;
  findOneHook.loadingAtom = loadingAtom as any;
  findOneHook.hasFetchedAtom = hasFetchedAtom as any;

  return findOneHook as any;
};
