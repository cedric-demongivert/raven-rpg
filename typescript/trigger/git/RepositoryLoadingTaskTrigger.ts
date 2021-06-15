import { ApplicationTrigger } from '../../application/trigger/ApplicationTrigger'
import { ApplicationTriggerListener } from '../../application/trigger/ApplicationTriggerListener'
import { ApplicationPublication } from '../../application/ApplicationPublication'

import { assertDefined } from '../../utils/assertDefined'

import { Entry } from '../../data/Entry'
import { Reference } from '../../data/Reference'

import { Application } from '../../state/application/Application'
import { Repository } from '../../state/git/Repository'
import { RepositoryTask } from '../../state/git/RepositoryTask'
import { Task } from '../../state/task/Task'

import { ApplicationEvent } from '../../application/ApplicationEvent'
import { RepositoryEvent } from '../../redux/git'
import { AbstractError } from '../../utils'


export class RepositoryLoadingTaskTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly repository: number

  /**
  *
  */
  public constructor(repository: Reference<Repository>) {
    this.repository = Reference.identifier(repository)
  }

  /**
  * @see ApplicationTrigger.afterStart
  */
  public afterStart(listener: ApplicationTriggerListener<void>, state: Application): void {
    try {
      this.tryToInitializeTrigger(listener, state)
    } catch (error) {
      listener.reject(error)
    }
  }

  private tryToInitializeTrigger(listener: ApplicationTriggerListener<void>, state: Application): void {
    try {
      this.initializeTrigger(listener, state)
    } catch (error) {
      throw new AbstractError('Unable to initialize a loading trigger for the repository #' + this.repository + '.', error)
    }
  }

  /**
   * 
   */
  private initializeTrigger(listener: ApplicationTriggerListener<void>, application: Application): void {
    const repository: Entry<Repository> | undefined = application.repositories.all.get(this.repository)

    assertDefined(repository, 'The repository does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository does not declare any pending operation.')
    Task.assertOfType(state, RepositoryTask.LOADING, 'The repository does not request a loading operation.')

    if (Task.isRejected(state) || Task.isCanceled(state)) {
      listener.reject(state.reason)
    } else if (Task.isResolved(state)) {
      listener.resolve()
    }
  }

  /**
  * @see ApplicationTrigger.afterReduction
  */
  public afterReduction(listener: ApplicationTriggerListener<void>, publication: ApplicationPublication<Application>): void {
    const event: ApplicationEvent = publication.event

    if (RepositoryEvent.isLoading.success(event) && event.payload === this.repository) {
      listener.resolve()
    } else if (RepositoryEvent.isLoading.failure(event) && event.payload.repository === this.repository) {
      listener.reject(event.payload.error)
    }
  }
}
