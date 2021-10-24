# Entity

A mix of jotai atoms, with graphql to create reusable factory hook functions to perform common operations. It solves the
boilerplate issue created in managing state between server and client, in a transparent way.

## AtomEntity

AtomEntity is a jotai AtomFamily instance which operates as an in memory store (lookup table) for a specific entity
type. It is used to create a singular reference to all entity instances (by id), propagating change to all readers of
the data.

```ts
import { atomEntity } from '@/lib/entity/atom'

const todoEntity = atomEntity()
```

## FindOneEntity

Creates a hook which manages retrieval of a single entity by id.

```ts
import { findOneEntity } from '@/lib/entity/findOne'
import { gql } from '@urql/core'
import { useRouter } from 'next/router'

const useFindTodo = findOneEntity(
  todoEntity,
  gql`
    query FindTodo(id: String!) {
        todo: findTodo(id: $id) {
            id
            name
        }
    }
    `,
  (data) => data.todo
)

const TodoSummary = () => {
  const router = useRouter()
  const [{ entity: todo, loading, loaded, error }] = useFindTodo({ id: router.query.id })
}
```

## FindManyEntities

Creates a hook which manages retrieval of a multiple entities, and optionally paginated.

```ts
import { findManyEntities } from '@/lib/entity/findMany'
import { gql } from '@urql/core'

const useListTodos = findManyEntities(
  todoEntity,
  gql`
    query ListTodos {
      todos: listTodos {
        items {
          id
          name
        }
        pagination {
          hasMore
          offset
          limit
        }
      }
    }
  `,
  (data) => data.todos
)

const TodosTable = () => {
  const [{ entities: todos, loading, loaded, error }] = useListTodos()
}
```

## SubscribeEntities

Creates a hook which manages subscription retrieval of multiple entities.

```ts
import { subscribeEntities } from '@/lib/entity/subscribe'
import { gql } from '@urql/core'

const useSubscribeTodos = subscribeEntities(
  todoEntity,
  gql`
    subscription TodosSubscription {
      todos {
        id
        name
      }
    }
  `,
  (data) => data.todos
)

const TodosTable = () => {
  const [{ entities: todos }] = useSubscribeTodos()
}
```

## CreateEntity

Creates a hook which manages the creation of a single entity.
Optionally allows for a target list atom to be prepended to with the result.

```ts
import { createEntity } from '@/lib/entity/create'
import { gql } from '@urql/core'

const useCreateTodo = createEntity(
  todoEntity,
  gql`
    input TodoInput {
      name: String!
    }
    mutation CreateTodo($input: TodoInput!) {
      todo: createTodo(input: $input) {
        id
        name
      }
    }
  `,
  (data) => data.todo,
  useListTodos.entitiesAtom
)

const TodosTable = () => {
  const [{ entities: todos, loading: _loading, loaded, error: _error }] = useListTodos()
  const [{ entity: todo, loading, error }, createTodo] = useCreateTodo()
}
```

## UpdateEntity

Creates a hook which manages the update of a single entity.

```ts
import { updateEntity } from '@/lib/entity/update'
import { gql } from '@urql/core'

const useUpdateTodo = updateEntity(
  todoEntity,
  gql`
    input TodoInput {
      name: String!
    }
    mutation UpdateTodo($id: String!, $input: TodoInput!) {
      todo: updateTodo(id: $id, input: $input) {
        id
        name
      }
    }
  `,
  (data) => data.todo
)

const TodosTable = () => {
  const [{ entities: todos, loading: _loading, loaded, error: _error }] = useListTodos()
  const [{ entity: todo, loading, error }, updateTodo] = useUpdateTodo()
}
```

## DeleteEntity

Creates a hook which manages the deletion of a single entity.
Optionally allows for a target list atom to be removed from.

```ts
import { deleteEntity } from '@/lib/entity/delete'
import { gql } from '@urql/core'

const useDeleteTodo = deleteEntity(
  todoEntity,
  gql`
    mutation DeleteTodo($id: String!) {
      todo: deleteTodo(id: $id) {
        id
      }
    }
  `,
  (data) => data.todo,
  useListTodos.entitiesAtom
)

const TodosTable = () => {
  const [{ entities: todos, loading: _loading, loaded: _loaded, error: _error }] = useListTodos()
  const [{ entity: todo, loading, loaded, error }, deleteTodo] = useDeleteTodo()
}
```

## Related Entities

Allows a related schema to be added to Entity Factories, to allow for cross entity read/write.

Example. A todo may have more than one user editing.

```ts
import { atomEntity } from '@/lib/entity/atom'

interface User {
  id: string;
  name: string;
}
interface Todo {
  id: string;
  text: string;
  user: User;
  collabororators: User[];
}
const userEntity = atomEntity<User>()
const todoEntity = atomEntity<Todo>("id", "id", {
  user: userEntity,
  collaborators: [userEntity]
})
```

With that relationship setup at the atom entity level, updates to a given user will propagate to the todos owned or
collaborated on by that user and do not have to explicitly attempt to try and update all the various places the user may
appear.
