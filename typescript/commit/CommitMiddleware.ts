import { ApplicationMiddleware } from '../ApplicationMiddleware'
import { ApplicationPublication } from '../ApplicationPublication'

import { Utils } from '../Utils'

import { Application } from '../application/Application'
import { Entry } from '../data/Entry'

import { RPGBook } from '../rpg/book/RPGBook'
import { RPGElementEvent } from '../rpg/RPGElementEvent'

import { Commit } from '../commit/Commit'
import { CommitEvent } from '../commit/CommitEvent'

import { CommitAction } from './CommitAction'
import { CommitTask } from './CommitTask'

import { readRepository } from '../unidoc/readRepository'
import { Task } from '../task'

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
        return this.tryToExtractBooks(publication)
      default:
        return
    }
  }

  private tryToExtractBooks(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>): void {
    try {
      this.extractBooks(publication)
    } catch (error) {
      throw new Error('Unable to extract the books of commit #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private extractBooks(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>): void {
    const identifier: number = publication.event.payload.identifier
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.getByIdentifier(identifier)

    Utils.assertDefined(commit, 'The given commit does not exists.')

    const state = commit.model.state

    Task.assert(state, 'The commit does not declare any occuring operation.')
    Task.assertOfType(state, CommitTask.EXTRACTING_BOOKS, 'The repository does not request a books extraction operation.')
    Task.assertRunnable(state, 'The books extraction operation was already started.')

    publication.store.dispatch(CommitEvent.update(commit, Task.run(state)))

    readRepository(commit)
      .then(this.tryToHandleBooksExtractionSuccess.bind(this, publication))
      .catch(this.tryToHandleBooksExtractionFailure.bind(this, publication))
  }

  /**
   * 
   */
  private tryToHandleBooksExtractionSuccess(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>, books: RPGBook[]): void {
    try {
      this.handleBooksExtractionSuccess(publication, books)
    } catch (error) {
      throw new Error('Unable to resolve the books extraction operation of the commit #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleBooksExtractionSuccess(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>, books: RPGBook[]): void {
    const identifier: number = publication.event.payload.identifier
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.getByIdentifier(identifier)

    Utils.assertDefined(commit, 'The given commit does not exists.')

    const state = commit.model.state

    Task.assert(state, 'The commit does not declare any occuring operation.')
    Task.assertOfType(state, CommitTask.EXTRACTING_BOOKS, 'The repository does not request a books extraction operation.')
    Task.assertResolvable(state, 'The books extraction operation was not resolvable.')

    if (Task.isCancelable(state)) {
      for (const book of books) {
        publication.store.dispatch(RPGElementEvent.extracted(book))
      }
    }

    publication.store.dispatch(CommitEvent.update(commit, Task.resolve(state, undefined)))
  }

  /**
   * 
   */
  private tryToHandleBooksExtractionFailure(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>, reason: Error): void {
    try {
      this.handleBooksExtractionFailure(publication, reason)
    } catch (error) {
      throw new Error('Unable to reject the books extraction operation of the commit #' + publication.event.payload.identifier + '.')
    }
  }

  /**
  *
  */
  private handleBooksExtractionFailure(publication: ApplicationPublication<Application, CommitEvent.ExtractBooks>, reason: Error): void {
    const identifier: number = publication.event.payload.identifier
    const commit: Entry<Commit> | undefined = publication.store.getState().commits.getByIdentifier(identifier)

    Utils.assertDefined(commit, 'The given commit does not exists.')

    const state = commit.model.state

    Task.assert(state, 'The commit does not declare any occuring operation.')
    Task.assertOfType(state, CommitTask.EXTRACTING_BOOKS, 'The repository does not request a books extraction operation.')
    Task.assertRejectable(state, 'The books extraction operation was not rejectable.')

    publication.store.dispatch(CommitEvent.update(commit, Task.reject(state, reason)))
  }
}
