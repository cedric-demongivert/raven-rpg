import { ApplicationMiddleware } from '../ApplicationMiddleware'
import { ApplicationPublication } from '../ApplicationPublication'

import { Application } from '../application/Application'
import { Entry } from '../data/Entry'

import { RPGBook } from '../rpg/book/RPGBook'
import { RPGElementEvent } from '../rpg/RPGElementEvent'

import { Commit } from '../commit/Commit'
import { CommitEvent } from '../commit/CommitEvent'

import { CommitAction } from './CommitAction'
import { CommitState } from './CommitState'

import { readRepository } from '../unidoc/readRepository'

export class CommitMiddleware implements ApplicationMiddleware<Application>
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
      case CommitAction.EXTRACT_BOOKS:
        return this.extractBooks(publication)
      default:
        return
    }
  }

  /**
  *
  */
  private extractBooks(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>): void {
    const identifier: number = publication.event.payload
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.getByIdentifier(identifier)

    if (commit == null) {
      throw new Error(
        'Unable to extract books from commit #' + identifier + ' because the ' +
        'requested commit does not exists.'
      )
    }

    if (commit.model.state === CommitState.BOOKS_EXTRACTION_REQUESTED) {
      const operation: Promise<RPGBook[]> = readRepository(commit)

      publication.store.dispatch(CommitEvent.extractingBooks(commit))

      operation.then(this.handleBooksExtractionSuccess.bind(this, publication))
      operation.catch(this.handleBooksExtractionFailure.bind(this, publication))
    } else {
      throw new Error(
        'Unable to extract books from ' + commit.toString() + ' ' +
        'because the requested commit is not in state ' +
        CommitState.toDebugString(CommitState.BOOKS_EXTRACTION_REQUESTED) + '.' +
        ' You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleBooksExtractionSuccess(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>, books: RPGBook[]): void {
    const identifier: number = publication.event.payload
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.getByIdentifier(identifier)

    if (commit == null) {
      throw new Error(
        'Unable to handle success of the extraction of books of commit #' +
        identifier + ' because the requested commit does not exists.'
      )
    }

    if (commit.model.state === CommitState.EXTRACTING_BOOKS) {
      for (const book of books) {
        publication.store.dispatch(RPGElementEvent.extracted(book))
      }

      publication.store.dispatch(CommitEvent.booksExtracted(commit))
    } else {
      throw new Error(
        'Unable to handle success of the extraction of books of commit ' +
        commit.toString() + ' because the requested commit is ' +
        'not in state ' +
        CommitState.toDebugString(CommitState.EXTRACTING_BOOKS) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }

  /**
  *
  */
  private handleBooksExtractionFailure(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>, reason: Error): void {
    const identifier: number = publication.event.payload
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.getByIdentifier(identifier)

    if (commit == null) {
      throw new Error(
        'Unable to handle failure of the extraction of books of commit #' +
        identifier + ' because the requested commit does not exists.'
      )
    }

    if (commit.model.state === CommitState.EXTRACTING_BOOKS) {
      publication.store.dispatch(CommitEvent.booksExtractionFailure(commit, reason))
    } else {
      throw new Error(
        'Unable to handle failure of the extraction of books of ' +
        commit.toString() + ' because the requested commit is ' +
        'not in state ' +
        CommitState.toDebugString(CommitState.EXTRACTING_BOOKS) +
        '. You may have a problem somewhere into your workflow.'
      )
    }
  }
}
