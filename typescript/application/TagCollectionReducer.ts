import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'
import { OneToOneIndex } from '../data/view/OneToOneIndex'
import { OneToManyIndex } from '../data/view/OneToManyIndex'

import { Tag } from '../tag/Tag'
import { TagTableReducer } from '../tag/TagTableReducer'

import { TagCollection } from './TagCollection'

/**
*
*/
export namespace TagCollectionReducer {
  /**
  *
  */
  export const reduceIdentifierIndex: OneToOneIndex.Reducer<string, Tag> = (
    OneToOneIndex.reducer(Tag.getIdentifier)
  )

  /**
  *
  */
  export const reduceRepositoryIndex: OneToManyIndex.Reducer<number, Tag> = (
    OneToManyIndex.reducer(Tag.getRepository)
  )
  /**
  *
  */
  export const reduceCommitIndex: OneToOneIndex.Reducer<number, Tag> = (
    OneToOneIndex.reducer(Tag.getCommit)
  )

  /**
  *
  */
  export function reduce(state: TagCollection | undefined, action: ApplicationEvent): TagCollection {
    const nonNullState: TagCollection = state || TagCollection.empty()
    const nextTable: Table<Tag> = TagTableReducer.reduce(nonNullState.table, action)

    if (nextTable === nonNullState.table) {
      return nonNullState
    } else {
      return new TagCollection({
        table: nextTable,
        byIdentifier: reduceIdentifierIndex(nonNullState.byIdentifier, nextTable.mutations),
        byRepository: reduceRepositoryIndex(nonNullState.byRepository, nextTable.mutations),
        byCommit: reduceCommitIndex(nonNullState.byCommit, nextTable.mutations)
      })
    }
  }
}
