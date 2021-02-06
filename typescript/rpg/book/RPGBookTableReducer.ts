import { ApplicationEvent } from '../../ApplicationEvent'

import { Table } from '../../data/table/Table'
import { Entry } from '../../data/Entry'

import { RPGElement } from '../RPGElement'

import { RPGBookAction } from './RPGBookAction'
import { RPGBook } from './RPGBook'
import { RPGBookEvent } from './RPGBookEvent'

export namespace RPGBookTableReducer {

  /**
  *
  */
  export function reduceExtractContent(state: Table<RPGElement>, action: RPGBookEvent.ExtractContent): Table<RPGElement> {
    const book: Entry<RPGElement> | undefined = state.get(action.payload)

    if (RPGBook.isEntry(book)) {
      return state.update(book.setModel(book.model.markExtractContent()))
    } else {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }
  }

  /**
  *
  */
  export function reduceExtractingContent(state: Table<RPGElement>, action: RPGBookEvent.ExtractingContent): Table<RPGElement> {
    const book: Entry<RPGElement> | undefined = state.get(action.payload)

    if (RPGBook.isEntry(book)) {
      return state.update(book.setModel(book.model.markExtractingContent()))
    } else {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }
  }

  /**
  *
  */
  export function reduceContentExtracted(state: Table<RPGElement>, action: RPGBookEvent.ContentExtracted): Table<RPGElement> {
    const book: Entry<RPGElement> | undefined = state.get(action.payload.book)

    if (RPGBook.isEntry(book)) {
      return state.update(book.setModel(book.model.markContentExtracted(action.payload.document)))
    } else {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }
  }

  /**
  *
  */
  export function reduceContentExtractionFailure(state: Table<RPGElement>, action: RPGBookEvent.ContentExtractionFailure): Table<RPGElement> {
    const book: Entry<RPGElement> | undefined = state.get(action.payload.book)

    if (RPGBook.isEntry(book)) {
      return state.update(book.setModel(book.model.markContentExtractionFailure(action.payload.reason)))
    } else {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }
  }

  /**
  *
  */
  export function reduceReady(state: Table<RPGElement>, action: RPGBookEvent.Ready): Table<RPGElement> {
    const book: Entry<RPGElement> | undefined = state.get(action.payload)

    if (RPGBook.isEntry(book)) {
      return state.update(book.setModel(book.model.markReady()))
    } else {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }
  }

  /**
  *
  */
  export function reduce(state: Table<RPGElement> | undefined, action: ApplicationEvent): Table<RPGElement> {
    const nonNullState: Table<RPGElement> = state || Table.empty()

    switch (action.type) {
      case RPGBookAction.EXTRACT_CONTENT:
        return reduceExtractContent(state, action)
      case RPGBookAction.EXTRACTING_CONTENT:
        return reduceExtractingContent(state, action)
      case RPGBookAction.CONTENT_EXTRACTED:
        return reduceContentExtracted(state, action)
      case RPGBookAction.CONTENT_EXTRACTION_FAILURE:
        return reduceContentExtractionFailure(state, action)
      case RPGBookAction.READY:
        return reduceReady(state, action)
      default:
        return nonNullState//.pristine() @TODO voir cette affaire de pristine
    }
  }
}
