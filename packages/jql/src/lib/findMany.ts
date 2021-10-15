/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react'
import { DocumentNode } from 'graphql'
import { Atom, WritableAtom, atom, useAtom } from 'jotai'
import { RESET, useResetAtom } from 'jotai/utils'
import { CombinedError, useQuery } from 'urql'
import { AtomEntity, PauseAtomEntity } from './atom'
import { defaultPagination, Pagination, PaginatedValue } from './pagination'
import { uniqBy } from './utils'
import { PartialWithId } from './types'

const defaultPauseWhen: PauseAtomEntity = (atoms) => (get) => !get(atoms.paginationAtom)?.hasMore

export type FindManyEntitiesReturn<Value extends { id: string }> = ((
  vars?: any
) => [
  {
    entities: Value[]
    loaded: boolean
    loading: boolean
    pagination: Pagination
    error?: CombinedError
  },
  {
    refetch: (newValue?: PartialWithId<Value>) => void
    fetch: () => void
    reset: () => void
    loadPrevious: () => void
    loadNext: () => void
    setPagination: Dispatch<SetStateAction<Pagination>>
  }
]) & {
  entitiesAtom: WritableAtom<Value[], Value[]>
  errorAtom: WritableAtom<CombinedError | null, CombinedError | null>
  loadingAtom: WritableAtom<boolean, boolean>
  hasFetchedAtom: WritableAtom<number, number>
  pauseAtom: WritableAtom<boolean, boolean>
  variablesAtom: WritableAtom<Record<string, any>, Record<string, any>>
  paginationAtom: WritableAtom<Pagination, Pagination>
}

export const findManyEntities = <Value extends { id: string }>(
  atomEntityInstance: AtomEntity<Value>,
  query: string | DocumentNode,
  hasData: (data: any) => Value[] | PaginatedValue<Value> = (data) => data,
  fromData: (data: any) => Value[] | PaginatedValue<Value> = hasData,
  listAtom?: Atom<Value[]>,
  pauseWhen: PauseAtomEntity | boolean = defaultPauseWhen,
  initialVariables: any = {},
  paginated = true,
  hydrate?: Value[]
): FindManyEntitiesReturn<Value> => {
  const hasFetchedAtom = atom<number>(hydrate?.length ? 1 : -1)
  const loadingAtom = atom(false)
  const errorAtom = atom(null as CombinedError | null)
  const variablesAtom = paginated
    ? atom({
        ...initialVariables,
        pagination: initialVariables.pagination || defaultPagination,
      })
    : (atom(initialVariables) as WritableAtom<any, any>)
  const paginationAtom = paginated
    ? atom(
        (get) => (get(variablesAtom) as any).pagination || defaultPagination,
        (get, set, update: any) => {
          const prev = get(variablesAtom) as any
          if (update === RESET) {
            set(variablesAtom, { ...prev, pagination: defaultPagination })
          } else {
            set(variablesAtom, {
              ...prev,
              pagination: { ...prev.pagination, ...update },
            })
          }
        }
      )
    : atom({})
  const pauseAtom = atom<boolean>(
    typeof pauseWhen === 'boolean' || !pauseWhen
      ? Boolean(pauseWhen)
      : (pauseWhen({
          hasFetchedAtom,
          loadingAtom,
          variablesAtom,
          paginationAtom,
        }) as any)
  )
  const entityIdsAtom = listAtom
    ? null
    : atom<string[]>(
        (hydrate
          ?.map((entity) => {
            if (!entity?.id) {
              return null
            }
            atomEntityInstance(entity)
            return entity.id
          })
          .filter(Boolean) as string[]) || []
      )
  const entitiesAtom =
    listAtom ||
    atom(
      (get) =>
        get(entityIdsAtom!)
          ?.map((id) => get(atomEntityInstance({ id } as any)))
          ?.filter(Boolean),
      (_get, set, update: any[] | typeof RESET) => {
        if (update === RESET) {
          set(entityIdsAtom!, [])
          return
        }
        set(
          entityIdsAtom!,
          update.map((u) => {
            set(atomEntityInstance({ id: u.id } as any), u)
            return u.id
          })
        )
      }
    )

  function findManyHook(vars?: any) {
    const entitiesRef = useRef<Value[]>([])
    const [hasFetched, setHasFetched] = useAtom(hasFetchedAtom as any)
    const resetHasFetched = useResetAtom(hasFetchedAtom as any)
    const [loading, setLoading] = useAtom(loadingAtom)
    const resetLoading = useResetAtom(loadingAtom as any)
    const [error, setError] = useAtom(errorAtom)
    const resetError = useResetAtom(errorAtom as any)
    const [variables, setVariables] = useAtom(variablesAtom)
    const resetVariables = useResetAtom(variablesAtom)
    const [pagination, setPagination] = useAtom(paginationAtom)
    const [pause] = useAtom(pauseAtom)
    const [entities, setEntities] = useAtom(entitiesAtom as any)
    const resetEntities = useResetAtom(entitiesAtom as any)

    // Ensure useEffect can have a non stale reference without triggering recalcs
    entitiesRef.current = entities as any

    useEffect(() => {
      if (vars) {
        setVariables((prev: any) => ({ ...prev, ...vars }))
      }
    }, [vars])

    const [{ fetching, error: _error, data }, refetchQuery] = useQuery({
      query,
      variables,
      pause,
    })

    useEffect(() => {
      setLoading(fetching)
      if (fetching) {
        setHasFetched(0)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching])

    useEffect(() => {
      setError(_error as any)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_error])

    useEffect(() => {
      if (!fetching && hasData(data)) {
        if (paginated) {
          const { items, pagination } = fromData(data) as PaginatedValue<Value>
          setEntities(
            uniqBy([...(entitiesRef.current || ([] as any)), ...(items || [])], 'id') as any
          )
          setPagination({ hasMore: !!pagination?.hasMore })
        } else {
          setEntities(
            uniqBy(
              [...(entitiesRef.current || ([] as any)), ...((fromData(data) as Value[]) || [])],
              'id'
            ) as any
          )
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching, data])

    const manualFetch = useCallback(() => {
      refetchQuery()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const refetch = useCallback((newValue?: PartialWithId<Value>) => {
      // If wanting to just refetch the current, just delegate to manualFetch (urql refetch)
      if (!newValue) {
        manualFetch()
        return
      }
      setVariables(newValue)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const reset = useCallback(() => {
      resetVariables()
      resetEntities()
      resetError()
      resetLoading()
      resetHasFetched()
    }, [])

    const loadNext = useCallback(() => {
      setPagination({
        offset: pagination.offset + pagination.limit,
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagination])

    const loadPrevious = useCallback(() => {
      setPagination({
        offset: Math.max(pagination.offset - pagination.limit, 0),
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pagination])

    return [
      {
        entities,
        loading,
        loaded: (hasFetched as number) > -1 && !loading,
        pagination,
        error,
      },
      {
        refetch,
        fetch: manualFetch,
        reset,
        loadPrevious,
        loadNext,
        setPagination,
      },
    ]
  }

  // Keep a reference on the function itself to the atoms for Create/Delete purposes, and allowing fine grain reads by
  // outside consumers
  findManyHook.entitiesAtom = entitiesAtom as any
  findManyHook.errorAtom = errorAtom as any
  findManyHook.loadingAtom = loadingAtom as any
  findManyHook.hasFetchedAtom = hasFetchedAtom as any
  findManyHook.variablesAtom = variablesAtom as any
  findManyHook.paginationAtom = paginationAtom as any
  findManyHook.pauseAtom = pauseAtom as any

  return findManyHook as any
}
