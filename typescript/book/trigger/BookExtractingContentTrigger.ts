import { ApplicationTrigger } from '../../ApplicationTrigger'
import { ApplicationTriggerListener } from '../../ApplicationTriggerListener'
import { ApplicationPublication } from '../../ApplicationPublication'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { Book } from '../Book'
import { BookAction } from '../BookAction'
import { BookState } from '../BookState'

export class BookExtractingContentTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly book: number

  /**
  *
  */
  public constructor(book: Entry<Book> | number) {
    this.book = Entry.identifier(book)
  }

  /**
  * @see ApplicationTrigger.afterStart
  */
  public afterStart(listener: ApplicationTriggerListener<void>, state: Application): void {
    const book: Entry<Book> | undefined = state.getBooks().get(this.book)

    if (book) {
      switch (book.model.state) {
        case BookState.CONTENT_EXTRACTION_FAILURE:
          listener.reject(new Error()/*book.getReason()*/)
          return
        case BookState.CONTENT_EXTRACTED:
          listener.resolve()
          return
        case BookState.EXTRACTING_CONTENT:
        case BookState.CONTENT_EXTRACTION_REQUESTED:
          return
        default:
          listener.reject(
            new Error(
              'Unable to await termination of the exctraction of the content of book #' +
              book.identifier + ' because the requested book is in an ' +
              'illegal state.'
            )
          )
          return
      }
    } else {
      listener.reject(
        new Error(
          'Unable to await termination of the exctraction of the content of ' +
          'book #' + book.identifier + ' because the requested ' +
          'book does not exists.'
        )
      )
      return
    }
  }

  /**
  * @see ApplicationTrigger.afterReduction
  */
  public afterReduction(listener: ApplicationTriggerListener<void>, publication: ApplicationPublication<Application>): void {
    switch (publication.event.type) {
      case BookAction.CONTENT_EXTRACTION_FAILURE:
        if (publication.event.payload.book === this.book) {
          listener.reject(publication.event.payload.reason)
        }
        break
      case BookAction.CONTENT_EXTRACTED:
        if (publication.event.payload === this.book) {
          listener.resolve()
        }
        break
      default:
        break
    }
  }
}
