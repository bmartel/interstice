import { openDB } from "idb";
import { migrate, Migration } from "./migration";
import { bindTransactions } from "./transaction";

export async function open<Schema = any>(
  name: string,
  version: number = 1,
  upgrade: Migration = migrate
) {
  const db = await openDB<Schema>(name, version, { upgrade });
  const tx = bindTransactions<Schema>(db);

  return { db, tx };
}
