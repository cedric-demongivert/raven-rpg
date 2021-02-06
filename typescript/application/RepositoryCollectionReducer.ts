import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/view/OneToOneIndex'

import { Repository } from '../repository/Repository'
import { RepositoryTableReducer } from '../repository/RepositoryTableReducer'

import { RepositoryCollection } from './RepositoryCollection'

/**
*
*/
export namespace RepositoryCollectionReducer {
  /**
  *
  */
  export const reduceOriginIndex: OneToOneIndex.Reducer<string, Repository> = (
    OneToOneIndex.reducer(Repository.getOrigin)
  )

  /**
  *
  */
  export function reduce(state: RepositoryCollection | undefined, action: ApplicationEvent): RepositoryCollection {
    const nonNullState: RepositoryCollection = state || RepositoryCollection.empty()
    const nextTable: Table<Repository> = RepositoryTableReducer.reduce(nonNullState.table, action)

    if (nextTable === nonNullState.table) {
      return state
    } else {
      return new RepositoryCollection({
        table: nextTable,
        byOrigin: reduceOriginIndex(nonNullState.byOrigin, nextTable.mutations)
      })
    }
  }
}
