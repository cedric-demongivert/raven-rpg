import { ApplicationTrigger } from '../../ApplicationTrigger'
import { ApplicationTriggerListener } from '../../ApplicationTriggerListener'
import { ApplicationPublication } from '../../ApplicationPublication'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'

import { Repository } from '../Repository'
import { RepositoryAction } from '../RepositoryAction'
import { RepositoryState } from '../RepositoryState'

export class RepositoryExctractingLabelsTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly repository: number

  /**
  *
  */
  public constructor(repository: number | Entry<Repository>) {
    this.repository = Entry.identifier(repository)
  }

  /**
  * @see ApplicationTrigger.afterStart
  */
  public afterStart(listener: ApplicationTriggerListener<void>, state: Application): void {
    const repository: Entry<Repository> | undefined = state.repositories.getByIdentifier(this.repository)

    if (repository) {
      switch (repository.model.state) {
        case RepositoryState.LABELS_EXTRACTION_FAILURE:
          listener.reject(repository.model.reason)
          return
        case RepositoryState.LABELS_EXTRACTED:
          listener.resolve()
          return
        case RepositoryState.EXTRACTING_LABELS:
        case RepositoryState.LABELS_EXTRACTION_REQUESTED:
          return
        default:
          listener.reject(
            new Error(
              'Unable to await termination of the exctraction of labels of ' +
              repository.toString() + ' because the requested ' +
              'repository is in an illegal state.'
            )
          )
          return
      }
    } else {
      listener.reject(
        new Error(
          'Unable to await termination of the exctraction of labels of ' +
          'repository #' + this.repository + ' because the requested ' +
          'repository does not exists.'
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
      case RepositoryAction.LABELS_EXTRACTION_FAILURE:
        if (publication.event.payload.repository === this.repository) {
          listener.reject(publication.event.payload.reason)
        }
        break
      case RepositoryAction.LABELS_EXTRACTED:
        if (publication.event.payload === this.repository) {
          listener.resolve()
        }
        break
      default:
        break
    }
  }
}
