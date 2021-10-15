import { DocumentNode } from 'graphql';
import { atom, useAtom, WritableAtom } from 'jotai';
import { CombinedError, useQuery } from 'urql';
import { useCallback, useEffect } from 'react';
import { AtomEntity, PauseAtomEntity } from './atom';
import { useResetAtom } from 'jotai/utils';

const defaultPauseWhen: PauseAtomEntity = (atoms) => (get) =>
  !get(atoms.variablesAtom)?.id;

export type FindOneEntityReturn<
  Value extends { [k: string]: string | number }
> = ((value: Partial<Value>) => [
  { entity: Value; loaded: boolean; loading: boolean; error?: CombinedError },
  {
    reset: () => void;
    refetch: (newValue: Partial<Value>) => void;
    fetch: () => void;
  }
]) & {
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>;
  loadingAtom: WritableAtom<boolean, boolean>;
  pauseAtom: WritableAtom<boolean, boolean>;
  variablesAtom: WritableAtom<Record<string, any>, Record<string, any>>;
};

export const findOneEntity = <Value extends { [k: string]: any }>(
  atomEntityInstance: AtomEntity<Value>,
  query: string | DocumentNode,
  hasData: (data: any) => Value = (data) => data,
  fromData: (data: any) => Value = hasData,
  pauseWhen: PauseAtomEntity | boolean = defaultPauseWhen,
  initialVariables: any = {}
): FindOneEntityReturn<Value> => {
  const hasFetchedAtom = atom(false);
  const errorAtom = atom<CombinedError | null>(null);
  const loadingAtom = atom(false);
  const variablesAtom = atom(initialVariables);
  const pauseAtom = atom<boolean>(
    typeof pauseWhen === 'boolean' || !pauseWhen
      ? pauseWhen
      : (pauseWhen({ hasFetchedAtom, loadingAtom, variablesAtom }) as any)
  );

  function findOneHook(value: Partial<Value>) {
    const [hasFetched, setHasFetched] = useAtom(hasFetchedAtom);
    const resetHasFetched = useResetAtom(hasFetchedAtom as any);
    const [loading, setLoading] = useAtom(loadingAtom);
    const resetLoading = useResetAtom(loadingAtom as any);
    const [error, setError] = useAtom(errorAtom as any);
    const resetError = useResetAtom(errorAtom as any);
    const [variables, setVariables] = useAtom(variablesAtom);
    const resetVariables = useResetAtom(variablesAtom as any);
    const [pause] = useAtom(pauseAtom);
    const [entity, setEntity] = useAtom(atomEntityInstance(value as any));

    useEffect(() => {
      setVariables((prev: any) => ({ ...prev, ...value }));
    }, [value]);

    const [{ fetching, error: _error, data }, refetchQuery] = useQuery({
      query,
      variables,
      pause,
    });

    useEffect(() => {
      setLoading(fetching);
      if (fetching) {
        setHasFetched(fetching);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching]);

    useEffect(() => {
      if (!fetching && hasData(data)) {
        setEntity(fromData(data) as any);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching, data]);

    useEffect(() => {
      setError(_error as any);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_error]);

    const refetch = useCallback((newValue: Partial<Value>) => {
      setVariables(newValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const manualFetch = useCallback(() => {
      refetchQuery();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const reset = useCallback(() => {
      resetVariables();
      resetError();
      resetLoading();
      resetHasFetched();
    }, []);

    return [
      { entity, loading, loaded: hasFetched && !loading, error: error as any },
      { reset, refetch, fetch: manualFetch },
    ];
  }

  // Keep a reference on the function itself to the atoms for Create/Delete purposes, and allowing fine grain reads by
  // outside consumers
  findOneHook.errorAtom = errorAtom as any;
  findOneHook.loadingAtom = loadingAtom as any;
  findOneHook.hasFetchedAtom = hasFetchedAtom as any;
  findOneHook.variablesAtom = variablesAtom as any;
  findOneHook.pauseAtom = pauseAtom as any;

  return findOneHook as any;
};
