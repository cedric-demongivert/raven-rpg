import { ApplicationTrigger } from '../../application/trigger/ApplicationTrigger'
import { ApplicationTriggerListener } from '../../application/trigger/ApplicationTriggerListener'
import { ApplicationPublication } from '../../application/ApplicationPublication'

import { assertDefined } from '../../utils/assertDefined'

import { Entry } from '../../data/Entry'
import { Reference } from '../../data/Reference'

import { Application } from '../../state/application/Application'
import { Commit } from '../../state/git/Commit'
import { CommitTask } from '../../state/git/CommitTask'
import { Task } from '../../state/task/Task'

import { ApplicationEvent } from '../../application/ApplicationEvent'
import { CommitEvent } from '../../redux/git/CommitEvent'
import { AbstractError } from '../../utils'


export class CommitLoadingTaskTrigger implements ApplicationTrigger<void, Application> {
  /**
  *
  */
  public readonly commit: number

  /**
  *
  */
  public constructor(commit: Reference<Commit>) {
    this.commit = Reference.identifier(commit)
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
      throw new AbstractError('Unable to initialize a loading trigger for the commit #' + this.commit + '.', error)
    }
  }

  /**
   * 
   */
  private initializeTrigger(listener: ApplicationTriggerListener<void>, application: Application): void {
    const commit: Entry<Commit> | undefined = application.commits.all.get(this.commit)

    assertDefined(commit, 'The commit does not exists.')

    const state = commit.model.state

    Task.assert(state, 'The commit does not declare any pending operation.')
    Task.assertOfType(state, CommitTask.LOADING, 'The commit does not request a loading operation.')

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

    if (CommitEvent.isLoading.success(event) && event.payload === this.commit) {
      listener.resolve()
    } else if (CommitEvent.isLoading.failure(event) && event.payload.commit === this.commit) {
      listener.reject(event.payload.error)
    }
  }
}
