import { ApplicationTrigger } from '../../../ApplicationTrigger'
import { ApplicationTriggerListener } from '../../../ApplicationTriggerListener'
import { ApplicationPublication } from '../../../ApplicationPublication'

import { Application } from '../../../application/Application'
import { Entry } from '../../../data/Entry'

import { RPGBook } from '../RPGBook'
import { RPGBookAction } from '../RPGBookAction'
import { RPGBookState } from '../RPGBookState'

export class RPGBookExtractingContentTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly book: number

  /**
  *
  */
  public constructor(book: Entry<RPGBook> | number) {
    this.book = Entry.identifier(book)
  }

  /**
  * @see ApplicationTrigger.afterStart
  */
  public afterStart(listener: ApplicationTriggerListener<void>, state: Application): void {
    const book: Entry<RPGBook> | undefined = state.elements.getBookByIdentifier(this.book)

    if (book) {
      switch (book.model.state) {
        case RPGBookState.CONTENT_EXTRACTION_FAILURE:
          listener.reject(new Error()/*book.getReason()*/)
          return
        case RPGBookState.CONTENT_EXTRACTED:
          listener.resolve()
          return
        case RPGBookState.EXTRACTING_CONTENT:
        case RPGBookState.CONTENT_EXTRACTION_REQUESTED:
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
      case RPGBookAction.CONTENT_EXTRACTION_FAILURE:
        if (publication.event.payload.book === this.book) {
          listener.reject(publication.event.payload.reason)
        }
        break
      case RPGBookAction.CONTENT_EXTRACTED:
        if (publication.event.payload === this.book) {
          listener.resolve()
        }
        break
      default:
        break
    }
  }
}
