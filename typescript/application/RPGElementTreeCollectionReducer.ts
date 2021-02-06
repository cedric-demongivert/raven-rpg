import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'

import { RPGElementTree } from '../rpg/tree/RPGElementTree'
import { RPGElementTreeTableReducer } from '../rpg/tree/RPGElementTreeTableReducer'

import { OneToOneIndex } from '../data/view/OneToOneIndex'

import { RPGElementTreeCollection } from './RPGElementTreeCollection'

/**
*
*/
export namespace RPGElementTreeCollectionReducer {
  /**
  *
  */
  export const reduceElementIndex: OneToOneIndex.Reducer<number, RPGElementTree> = (
    OneToOneIndex.reducer(RPGElementTree.getElement)
  )

  /**
  *
  */
  export function reduce(state: RPGElementTreeCollection | undefined, action: ApplicationEvent): RPGElementTreeCollection {
    const nonNullState: RPGElementTreeCollection = state || RPGElementTreeCollection.empty()
    const nextTable: Table<RPGElementTree> = RPGElementTreeTableReducer.reduce(nonNullState.table, action)

    if (nextTable === nonNullState.table) {
      return state
    } else {
      return new RPGElementTreeCollection({
        table: nextTable,
        byElement: reduceElementIndex(nonNullState.byElement, nextTable.mutations)
      })
    }
  }
}
