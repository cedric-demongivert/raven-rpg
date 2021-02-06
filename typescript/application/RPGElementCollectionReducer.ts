import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'
import { OneToManyIndex } from '../data/view/OneToManyIndex'
import { View } from '../data/view/View'

import { RPGBook } from '../rpg/book/RPGBook'
import { RPGBookTableReducer } from '../rpg/book/RPGBookTableReducer'

import { RPGElementTableReducer } from '../rpg/RPGElementTableReducer'
import { RPGElement } from '../rpg/RPGElement'

import { RPGElementCollection } from './RPGElementCollection'

/**
*
*/
export namespace RPGElementCollectionReducer {
  /**
  *
  */
  export const reduceBooks: View.FilteringReducer<RPGElement, RPGBook> = (
    View.filteringReducer(RPGBook.is)
  )

  /**
  *
  */
  export const reduceBooksByCommit: OneToManyIndex.Reducer<number, RPGBook> = (
    OneToManyIndex.reducer(RPGBook.getCommit)
  )

  /**
  *
  */
  export function reduce(state: RPGElementCollection | undefined, action: ApplicationEvent): RPGElementCollection {
    const nonNullState: RPGElementCollection = state || RPGElementCollection.empty()
    const nextTable: Table<RPGElement> = RPGBookTableReducer.reduce(
      RPGElementTableReducer.reduce(nonNullState.table, action),
      action
    )

    if (nextTable === nonNullState.table) {
      return state
    } else {
      const nextBooks: View<RPGBook> = reduceBooks(nonNullState.books, nextTable.mutations)

      return new RPGElementCollection({
        table: nextTable,
        books: nextBooks,
        booksByCommit: reduceBooksByCommit(nonNullState.booksByCommit, nextBooks.mutations)
      })
    }
  }
}
