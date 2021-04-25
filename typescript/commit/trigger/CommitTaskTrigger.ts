import { ApplicationTrigger } from '../../ApplicationTrigger'
import { ApplicationTriggerListener } from '../../ApplicationTriggerListener'
import { ApplicationPublication } from '../../ApplicationPublication'
import { Utils } from '../../Utils'

import { Application } from '../../application/Application'
import { Entry } from '../../data/Entry'
import { Reference } from '../../data/Reference'

import { Commit } from '../Commit'
import { CommitAction } from '../CommitAction'
import { CommitTask } from '../CommitTask'
import { Task } from '../../task'
import { ApplicationEvent } from '../../ApplicationEvent'


export class CommitTaskTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly commit: number

  /**
  *
  */
  public readonly type: CommitTask

  /**
  *
  */
  public constructor(repository: number | Entry<Commit> | Reference<Commit>, type: CommitTask) {
    this.commit = Reference.identifier(repository)
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
    const repository: Entry<Commit> | undefined = application.commits.getByIdentifier(this.commit)

    Utils.assertDefined(repository, 'The commit #' + this.commit + ' does not exists.')

    const state = repository.model.state

    Task.assert(state, 'The commit #' + this.commit + ' is not awaiting the resolution of a task of type ' + CommitTask.toDebugString(this.type) + '.')
    Task.assertOfType(state, this.type, 'The commit #' + this.commit + ' is not awaiting the resolution of a task of type ' + CommitTask.toDebugString(this.type) + '.')

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

    if (event.type === CommitAction.UPDATE && event.payload.repository === this.commit) {
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
