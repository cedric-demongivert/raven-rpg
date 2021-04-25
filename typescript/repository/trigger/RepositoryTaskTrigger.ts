import { ApplicationTrigger } from '../../ApplicationTrigger'
import { ApplicationTriggerListener } from '../../ApplicationTriggerListener'
import { ApplicationPublication } from '../../ApplicationPublication'
import { Utils } from '../../Utils'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'
import { Reference } from '../../data/Reference'

import { Repository } from '../Repository'
import { RepositoryAction } from '../RepositoryAction'
import { RepositoryTask } from '../RepositoryTask'
import { Task } from '../../task'
import { ApplicationEvent } from '../../ApplicationEvent'


export class RepositoryTaskTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly repository: number

  /**
  *
  */
  public readonly type: RepositoryTask

  /**
  *
  */
  public constructor(repository: number | Entry<Repository> | Reference<Repository>, type: RepositoryTask) {
    this.repository = Reference.identifier(repository)
    this.type = type
  }

  /**
  * @see ApplicationTrigger.afterStart
  */
  public afterStart(listener: ApplicationTriggerListener<void>, state: Application): void {
    try {
      if (this.tryToCheckIfCloned(state)) {
        listener.resolve()
      }
    } catch (error) {
      listener.reject(error)
    }
  }

  /**
   * 
   */
  private tryToCheckIfCloned(application: Application): boolean {
    const repository: Entry<Repository> | undefined = application.repositories.getByIdentifier(this.repository)

    Utils.assertDefined(repository, 'The repository #' + this.repository + ' does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The repository #' + this.repository + ' is not awaiting the resolution of a task of type ' + RepositoryTask.toDebugString(this.type) + '.')
    Task.assertOfType(state, this.type, 'The repository #' + this.repository + ' is not awaiting the resolution of a task of type ' + RepositoryTask.toDebugString(this.type) + '.')

    if (Task.isRejected(state) || Task.isCanceled(state)) {
      throw state.reason
    } else {
      return Task.isResolved(state)
    }
  }

  /**
  * @see ApplicationTrigger.afterReduction
  */
  public afterReduction(listener: ApplicationTriggerListener<void>, publication: ApplicationPublication<Application>): void {
    const event: ApplicationEvent = publication.event

    if (event.type === RepositoryAction.UPDATE && event.payload.repository === this.repository) {
      const state: any = event.payload.state

      if (Task.isTaskOfType(state, this.type)) {
        if (Task.isRejected(state) || Task.isCanceled(state)) {
          listener.reject(state.reason)
        } else if (Task.isResolved(state)) {
          listener.resolve()
        }
      }
    }
  }
}
