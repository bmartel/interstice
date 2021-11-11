# JQL

A mix of jotai atoms, with graphql to create reusable factory hook functions to perform common operations. It solves the
boilerplate issue created in managing state between server and client, in a transparent way.

## Get started

```bash
yarn add jotai optics-ts urql @interstice/jql
```

## AtomEntity

AtomEntity is a jotai AtomFamily instance which operates as an in memory store (lookup table) for a specific entity
type. It is used to create a singular reference to all entity instances (by id), propagating change to all readers of
the data.

```ts
import { atomEntity } from '@interstice/jql'

const todoEntity = atomEntity()
```

## FindOneEntity

Creates a hook which manages retrieval of a single entity by id.

```ts
import { findOneEntity } from '@interstice/jql'
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
import { findManyEntities } from '@interstice/jql'
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
import { subscribeEntities } from '@interstice/jql'
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
import { createEntity } from '@interstice/jql'
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

const TodoItem = ({ id }) => {
  const [{ entity: todo, loading, error }, { update: updateTodo }] = useUpdateTodo(id)
  return (
    <pre>
        {JSON.stringify(todo, null, 2)}
    </pre>
  )
}
const TodosTable = () => {
  const [{ entities: todos, loading: _loading, loaded, error: _error }] = useListTodos()
  return (
    <div>{ todos.map(({ id }) => <TodoItem id={id} />) }</div>
  )
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

const TodoItem = ({ id }) => {
  const [{ entity: todo, loading, error }, { update: deleteTodo }] = useDeleteTodo(id)
  return (
    <pre>
      {JSON.stringify(todo, null, 2)}
    </pre>
  )
}
const TodosTable = () => {
  const [{ entities: todos, loading: _loading, loaded, error: _error }] = useListTodos()
  return (
    <div>{ todos.map(({ id }) => <TodoItem id={id} />) }</div>
  )
}
```

## Related Entities

Allows a related schema to be added to Entity Factories, to allow for cross entity read/write.

Example. A todo may have more than one user editing.

```ts
import { atomEntity } from '@interstice/jql'

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
const todoEntity = atomEntity<Todo>({
  user: userEntity,
  collaborators: [userEntity]
})
```

With that relationship setup at the atom entity level, updates to a given user will propagate to the todos owned or
collaborated on by that user and do not have to explicitly attempt to try and update all the various places the user may
appear.

## Entity Effects

Allows a property on a schema to intercept changes to the property. This can be used to update the property in different ways, or update other properties or entities.

Example. A todo may be linked to external data, and might want to sync status updates from external services.

```ts
import { atomEntity, atomEffect } from '@interstice/jql'

interface User {
  id: string;
  name: string;
}
interface Todo {
  id: string;
  text: string;
  user: User;
  status: string;
  collabororators: User[];
}
const userEntity = atomEntity<User>()

const todoStatusEffect = atomEffect<string>((_get, _set, update) => {
    // This function runs anytime the 'status' property changes on the specific todo entity instance.
    // Take caution to not cause infinite loops, you can check that changes are the same as previous
    if(update.shouldSkip()) return
    
    // Can add any other logic needed in here
    
    // Create a memoized polling call
    update.memo(update.ref(), () => {
        let timeoutId
        const pollForStatusUpdates = async () => {
           const res = await fetch('http://somethirdparty.service') 
            if (res.ok) {
                update.set(await res.json().status)
            }
            timeoutId = setTimeout(pollForStatusUpdates, 1000)
        }
        
        pollForStatusUpdates()
        
        // The return from a memo populates update.cache() in case you need to cancel a timeout outside the memo.
        // Anything can be returned and updated in the effect cache, its a container for managing the effect as needed.
        return timeoutId
    })
    
    
})
const todoEntity = atomEntity<Todo>({
  user: userEntity,
  collaborators: [userEntity],
  status: todoStatusEffect,
})
```

## Entity Optics - Focus

Allows a property on an atomEntity instance to be focused so that updates are isolated to the specific property alone.

Example. A page header component may derive its title based on a selected todo and not require to rerender unless the title changes.

```ts
import Head from 'next/head' // just an example, nextjs is not required here
import { useRouter } from 'next/router' // just an example, nextjs is not required here
import { focusEntity } from '@interstice/jql'

const useTodoTitle = focusEntity<Todo>(
    todoEntity,
    (optics) => optics.prop('title')
)

const TodoHeader = () => {
    const router = useRouter()
    const [todoTitle] = useTodoTitle(router.query.todoId)
    return (
        <>
            <Head>
                <title>{todoTitle}</title>
            </Head>
            <header>
                {todoTitle}
            </header>
        </>
    )
}
```
