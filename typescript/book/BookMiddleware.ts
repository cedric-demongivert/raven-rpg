import { ApplicationMiddleware } from '../ApplicationMiddleware'
import { ApplicationPublication } from '../ApplicationPublication'

import { GitRepositories } from '../git/GitRepositories'
import { Application } from '../application/Application'
import { Entry } from '../data/Entry'

import { Repository } from '../repository/Repository'

import { Commit } from '../commit/Commit'
import { CommitEvent } from '../commit/CommitEvent'

import { readBook } from '../unidoc/readBook'

import { Document } from '../hypertext/Document'

import { Book } from './Book'
import { BookAction } from './BookAction'
import { BookState } from './BookState'
import { BookEvent } from './BookEvent'

export class BookMiddleware implements ApplicationMiddleware<Application>
{
  /**
  * @see ApplicationListener.beforeReduction
  */
  public beforeReduction(publication: ApplicationPublication<Application>): void {

  }

  /**
  * @see ApplicationListener.afterEventPublication
  */
  public afterReduction(publication: ApplicationPublication<Application>): void {
    switch (publication.event.type) {
      case BookAction.EXTRACT_CONTENT:
        return this.extractContent(publication)
      default:
        return
    }
  }

  /**
  *
  */
  private extractContent(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>): void {
    const identifier: number = publication.event.payload
    const book: Entry<Book> | undefined = publication.store.getState().getBooks().get(identifier)

    if (book == null) {
      throw new Error(
        'Unable to extract content of book #' + identifier + ' because the ' +
        'requested book does not exists.'
      )
    }

    const commit: Entry<Commit> = publication.store.getState().getCommits().get(book.model.commitIdentifier)

    if (book.model.state === BookState.CONTENT_EXTRACTION_REQUESTED) {
      const operation: Promise<Document> = readBook(commit.model, book.model)

      publication.store.dispatch(BookEvent.extractingContent(book))

      operation.then(this.handleContentExtractionSuccess.bind(this, publication))
      operation.catch(this.handleContentExtractionFailure.bind(this, publication))
    } else {
      throw new Error(
        'Unable to extract content from book ' + book.toString() + ' ' +
        'because the requested book is not in state ' +
        BookState.toDebugString(BookState.CONTENT_EXTRACTION_REQUESTED) + '.' +
        ' You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleContentExtractionSuccess(publication: ApplicationPublication<Application, BookEvent.ExtractContent>, content: Document): void {
    const identifier: number = publication.event.payload
    const book: Entry<Book> | undefined = publication.store.getState().getBooks().get(identifier)

    if (book == null) {
      throw new Error(
        'Unable to handle the success of the extaction of content of book #' +
        identifier + ' because the requested book does not exists.'
      )
    }

    if (book.model.state === BookState.EXTRACTING_CONTENT) {
      publication.store.dispatch(BookEvent.contentExtracted(book, content))
    } else {
      throw new Error(
        'Unable to handle success of the extraction of the content of book ' +
        book.toString() + ' because the requested book is not in state ' +
        BookState.toDebugString(BookState.EXTRACTING_CONTENT) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleContentExtractionFailure(publication: ApplicationPublication<Application, BookEvent.ExtractContent>, reason: Error): void {
    const identifier: number = publication.event.payload
    const book: Entry<Book> | undefined = publication.store.getState().getBooks().get(identifier)

    if (book == null) {
      throw new Error(
        'Unable to handle the failure of the extraction of the content of ' +
        'book #' + identifier + ' because the requested book does not exists.'
      )
    }

    if (book.model.state === BookState.EXTRACTING_CONTENT) {
      publication.store.dispatch(BookEvent.contentExtractionFailure(book, reason))
    } else {
      throw new Error(
        'Unable to handle failure of the extraction of the content of book ' +
        book.toString() + ' because the requested book is not in state ' +
        BookState.toDebugString(BookState.EXTRACTING_CONTENT) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }
}
