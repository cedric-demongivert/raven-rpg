import { ApplicationTrigger } from '../../ApplicationTrigger'
import { ApplicationTriggerListener } from '../../ApplicationTriggerListener'
import { ApplicationPublication } from '../../ApplicationPublication'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'
import { Reference } from '../../data/Reference'

import { Commit } from '../Commit'
import { CommitAction } from '../CommitAction'
import { CommitState } from '../CommitState'

export class CommitExtractingBooksTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly commit: Reference<Commit>

  /**
  *
  */
  public constructor(commit: number | Entry<Commit>) {
    this.commit = Reference.get(commit)
  }

  /**
  * @see ApplicationTrigger.afterStart
  */
  public afterStart(listener: ApplicationTriggerListener<void>, state: Application): void {
    const commit: Entry<Commit> | undefined = state.commits.getByIdentifier(this.commit)

    if (commit) {
      switch (commit.model.state) {
        case CommitState.BOOKS_EXTRACTION_FAILURE:
          listener.reject(commit.model.reason)
          return
        case CommitState.BOOKS_EXTRACTED:
          listener.resolve()
          return
        case CommitState.EXTRACTING_BOOKS:
        case CommitState.BOOKS_EXTRACTION_REQUESTED:
          return
        default:
          listener.reject(
            new Error(
              'Unable to await termination of the exctraction of commits of ' +
              commit.toString() + ' because the requested ' +
              'commit is in an illegal state.'
            )
          )
          return
      }
    } else {
      listener.reject(
        new Error(
          'Unable to await termination of the exctraction of commits of ' +
          'commit #' + this.commit + ' because the requested ' +
          'commit does not exists.'
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
      case CommitAction.BOOKS_EXTRACTION_FAILURE:
        if (publication.event.payload.commit === this.commit) {
          listener.reject(publication.event.payload.reason)
        }
        break
      case CommitAction.BOOKS_EXTRACTED:
        if (publication.event.payload === this.commit) {
          listener.resolve()
        }
        break
      default:
        break
    }
  }
}
