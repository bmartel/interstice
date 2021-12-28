import { IDBPDatabase, IDBPTransaction, StoreNames } from "idb";
import { TransactionInstance, TransactionType } from "./types";

export function bindTransactions<Schema = any>(db: IDBPDatabase<Schema>) {
  return (
    name: string | Array<string>,
    type?: TransactionType
  ): TransactionInstance<Schema> => {
    return {
      name,
      type,
      async exec(transaction) {
        const tx = db.transaction(
          (Array.isArray(name) ? name : [name]) as StoreNames<Schema>[],
          type
        );
        await Promise.all([
          transaction(tx as IDBPTransaction<Schema>),
          tx.done,
        ]);
      },
    };
  };
}
