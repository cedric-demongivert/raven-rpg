import { ApplicationEvent } from '../ApplicationEvent'

import { Table } from '../data/table/Table'
import { Entry } from '../data/Entry'

import { BookAction } from './BookAction'
import { Book } from './Book'
import { BookEvent } from './BookEvent'

export namespace BookCollectionReducer {

  /**
  *
  */
  export function reduceExtractContent(state: Table<Book>, action: BookEvent.ExtractContent): Table<Book> {
    const book: Entry<Book> | undefined = state.get(action.payload)

    if (book == null) {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }

    return state.update(book.setData(book.model.extractContent()))
  }

  /**
  *
  */
  export function reduceExtractingContent(state: Table<Book>, action: BookEvent.ExtractingContent): Table<Book> {
    const book: Entry<Book> | undefined = state.get(action.payload)

    if (book == null) {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }

    return state.update(book.setData(book.model.extractingContent()))
  }

  /**
  *
  */
  export function reduceContentExtracted(state: Table<Book>, action: BookEvent.ContentExtracted): Table<Book> {
    const book: Entry<Book> | undefined = state.get(action.payload.book)

    if (book == null) {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }

    return state.update(book.setData(book.model.contentExtracted(action.payload.document)))
  }

  /**
  *
  */
  export function reduceContentExtractionFailure(state: Table<Book>, action: BookEvent.ContentExtractionFailure): Table<Book> {
    const book: Entry<Book> | undefined = state.get(action.payload.book)

    if (book == null) {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }

    return state.update(book.setData(book.model.contentExtractionFailure(action.payload.reason)))
  }

  /**
  *
  */
  export function reduceReady(state: Table<Book>, action: BookEvent.Ready): Table<Book> {
    const book: Entry<Book> | undefined = state.get(action.payload)

    if (book == null) {
      throw new Error(
        'Unable to update book #' + action.payload + ' because the ' +
        'requested book does not exists.'
      )
    }

    return state.update(book.setData(book.model.ready()))
  }

  /**
  *
  */
  export function reduce(state: Table<Book> | undefined, action: ApplicationEvent): Table<Book> {
    const nonNullState: Table<Book> = state || Table.empty()

    switch (action.type) {
      case BookAction.EXTRACTED:
        return nonNullState.add(action.payload)
      case BookAction.EXTRACT_CONTENT:
        return reduceExtractContent(state, action)
      case BookAction.EXTRACTING_CONTENT:
        return reduceExtractingContent(state, action)
      case BookAction.CONTENT_EXTRACTED:
        return reduceContentExtracted(state, action)
      case BookAction.CONTENT_EXTRACTION_FAILURE:
        return reduceContentExtractionFailure(state, action)
      case BookAction.READY:
        return reduceReady(state, action)
      default:
        return nonNullState.pristine()
    }
  }
}
