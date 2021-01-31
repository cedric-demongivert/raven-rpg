import { ApplicationEvent } from '../../ApplicationEvent'

import { Table } from './Table'
import { TableAction } from './TableAction'

export namespace TableReducer {
  /**
  *
  */
  export function reduce<Model>(state: Table<Model> | null, action: ApplicationEvent): Table<Model> {
    const nonNullState: Table<Model> = state || Table.EMPTY

    switch (action.type) {
      case TableAction.ADD:
        return nonNullState.add(action.payload)
      case TableAction.UPDATE:
        return nonNullState.update(action.payload)
      case TableAction.REMOVE:
        return nonNullState.delete(action.payload)
      case TableAction.CLEAR:
        return nonNullState.clear()
      default:
        return nonNullState.pristine()
    }
  }
}
