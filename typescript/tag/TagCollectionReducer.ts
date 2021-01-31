import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'

import { RepositoryAction } from '../repository/RepositoryAction'
import { RepositoryEvent } from '../repository/RepositoryEvent'

import { TagAction } from './TagAction'
import { Tag } from './Tag'


export namespace TagCollectionReducer {
  /**
  *
  */
  export function reduceRepositoryRemove(state: Table<Tag>, action: RepositoryEvent.Remove): Table<Tag> {
    return state.filterModels((tag: Tag) => tag.getRepositoryIdentifier() === action.payload)
  }


  /**
  *
  */
  export function reduce(state: Table<Tag> | undefined, action: ApplicationEvent): Table<Tag> {
    const nonNullState: Table<Tag> = state || Table.empty()

    // @todo add handler for commit deletion
    switch (action.type) {
      case TagAction.EXTRACTED:
        return nonNullState.add(action.payload)
      case RepositoryAction.REMOVE:
        return reduceRepositoryRemove(nonNullState, action)
      default:
        return nonNullState.pristine()
    }
  }
}
