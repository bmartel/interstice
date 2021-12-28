# capsular

Offline first remote data, using a standard fetch api backed by web workers and indexeddb.

## Getting started

### Install

```
npm i @interstice/capsular
```

### Initialize store migrations

init command takes optional args:
`init [dir] [language]`

```
npx @interstice/capsular init src/migrations ts
```

### Create a migration

Migrations can be optionally named, with a target db name being required.
If no migration name is provided it will consist solely of the timestamp of generation.
`migration generate <db> [name]`

```
npx @interstice/capsular migration g offline init
```

You will end up with a new migration file similar to the following, with timestamps corresponding to the time in which the command was run.
```ts
// migrations/offline/1640716285009_init.ts
import { Migration, DBSchema } from "capsular";

export const version = "1640716285009";

export interface Post {
  title: string;
  createdAt: number;
  updatedAt: number;
}

export interface Schema extends DBSchema {
  posts: {
   key: string;
   value: Post[];
  }
}

export const migration: Migration<Schema> = (db, oldVersion) => {
  db.createObjectStore('offline')
};
```

Fill out the migration accordingly, in a simplified case this might just mean uncommenting the migration sample command and replacing the collection name with your db name.

## Usage

Use the provided worker, this worker file should be built out to a location it will be publicly served. ex. `dist/worker.js`

```ts
// worker.ts
import '@interstice/capsular/worker';
```

To use a store you first create an instance, providing store connection details.

```ts
// store.ts
import { Store, StoreConnection } from '@interstice/capsular';
import { version } from './migrations' // this will be the location of where migrations are kept

export const offline = new Store({
    db: 'offline', // target db name
    version // latest version of the migrations
  },
  '/worker.js' // path to public worker file once built relative to the root
) 
```

### Fetch

Fetching requires creation of stable key id references referred to as a `ConnectedStoreRecord`.

```ts
// api.ts
import { KeyID, ConnectedStoreRecord, StoreData } from '@interstice/capsular';
import { offline } from './store';

export const allPosts: ConnectedStoreRecord = {
  key: new KeyID(['all', 'posts']),
  collection: 'offline',
};

const queryAllPosts = async (): Promise<StoreData|undefined> => {
  const query = await offline.createFetch(allPosts);
  return await query();
}
```

### Background Fetch

A Fetch can be refetched in the background of the worker off the main thread.

```ts
// api.ts
import { KeyID, ConnectedStoreRecord, StoreData } from '@interstice/capsular';
import { offline } from './store';

export const allPosts: ConnectedStoreRecord = {
  key: new KeyID(['all', 'posts']),
  collection: 'offline',
};

const backgroundQueryAllPosts = (): void => {
  offline.backgroundFetch(allPosts, undefined, {
    cacheFor: 600,  // in seconds
    refetchInterval: 60 // in seconds
  });
}

backgroundQueryAllPosts()
```

### Subscribe Fetch

A Fetch can be subscribed to whenever it is refetched in the worker, so that it can be refetched on the main thread.
You can always add more logic to the subscription as to what is fetched from the store, and is not limited to just fetching from the store.

```ts
// subscription.ts
import { KeyID, ConnectedStoreRecord, StoreData } from '@interstice/capsular';
import { offline } from './store';
import { allPosts, queryAllPosts } from './api';

let unsubscribeAllPosts = null
const subscribeAllPosts = (): void => {
  if (unsubscribeAllPosts) unsubscribeAllPosts();
  
  // returns the unsubscribe method
  unsubscribeAllPosts = offline.subscribe(allPosts.id, async (info: { updated: boolean } ) => {
    // contains the metadata of the subscription, ie: did this update?
    if (info.updated) {
      // requery the data from the store if it has signalled as having been updated
      const posts = await queryAllPosts()
    }
  }, (error: Error) => {
      // errors that may have occurred
  });
}

subscribeAllPosts()
```
