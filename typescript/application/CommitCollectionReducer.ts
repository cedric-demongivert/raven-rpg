import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/view/OneToOneIndex'
import { OneToManyIndex } from '../data/view/OneToManyIndex'

import { Commit } from '../commit/Commit'
import { CommitTableReducer } from '../commit/CommitTableReducer'

import { CommitCollection } from './CommitCollection'

/**
*
*/
export namespace CommitCollectionReducer {
  /**
  *
  */
  export const reduceIdentifierIndex: OneToOneIndex.Reducer<string, Commit> = (
    OneToOneIndex.reducer(Commit.getIdentifier)
  )

  /**
  *
  */
  export const reduceRepositoryIndex: OneToManyIndex.Reducer<number, Commit> = (
    OneToManyIndex.reducer(Commit.getRepositoryIdentifier)
  )

  /**
  *
  */
  export function reduce(state: CommitCollection | undefined, action: ApplicationEvent): CommitCollection {
    const nonNullState: CommitCollection = state || CommitCollection.empty()
    const nextTable: Table<Commit> = CommitTableReducer.reduce(nonNullState.table, action)

    if (nextTable === nonNullState.table) {
      return nonNullState
    } else {
      return new CommitCollection({
        table: nextTable,
        byIdentifier: reduceIdentifierIndex(nonNullState.byIdentifier, nextTable.mutations),
        byRepository: reduceRepositoryIndex(nonNullState.byRepository, nextTable.mutations)
      })
    }
  }
}
