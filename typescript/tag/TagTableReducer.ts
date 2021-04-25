import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'

import { TagAction } from './TagAction'
import { Tag } from './Tag'


export namespace TagTableReducer {

  /**
  *
  */
  export function reduce(state: Table<Tag> | undefined, action: ApplicationEvent): Table<Tag> {
    const nonNullState: Table<Tag> = state || Table.empty()

    // @todo add handler for commit deletion
    // @todo add handler for repository deletion
    switch (action.type) {
      case TagAction.EXTRACTED:
        return nonNullState.add(action.payload)
      default:
        return nonNullState.pristine()
    }
  }
}
