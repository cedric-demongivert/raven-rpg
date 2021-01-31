import { ApplicationTrigger } from '../ApplicationTrigger'
import { ApplicationTriggerListener } from '../ApplicationTriggerListener'
import { ApplicationPublication } from '../ApplicationPublication'

import { Task } from './Task'
import { TaskManager } from './TaskManager'
import { TaskAction } from './TaskAction'
import { TaskState } from './TaskState'

export class TaskTrigger<T = any> implements ApplicationTrigger<T>{
  /**
  *
  */
  public readonly manager: TaskManager

  /**
  *
  */
  public readonly task: number

  /**
  *
  */
  public constructor(manager: TaskManager, task: number) {
    this.manager = manager
    this.task = task
  }

  /**
  *
  */
  public handleStart(listener: ApplicationTriggerListener<T>): void {
    const task: Task<T> | undefined = this.manager.tasks.getRecord(this.task)

    if (task == null) {
      throw new Error(
        'Unable to handle start of trigger for task #' + this.task + ' as ' +
        'this task does not exists in the underlying task manager.'
      )
    }

    switch (task.getState()) {
      case TaskState.FAILURE:
      case TaskState.CANCELED:
        listener.reject(task.getReason())
        return
      case TaskState.SUCCESS:
        listener.resolve(task.getResult())
        return
    }
  }

  /**
  *
  */
  public handlePublication(listener: ApplicationTriggerListener<T>, publication: ApplicationPublication): void {
    switch (publication.event.type) {
      case TaskAction.CANCELLATION:
        if (publication.event.payload.task === this.task) {
          const task: Task<T> | undefined = this.manager.tasks.getRecord(this.task)

          if (task == null) {
            throw new Error(
              'Unable to resolve cancellation of task #' + this.task + ' as ' +
              'this task does not exists in the underlying task manager.'
            )
          } else {
            listener.reject(task.getReason())
          }
        }
        return
      case TaskAction.SUCCESS:
        if (publication.event.payload.task === this.task) {
          listener.resolve(publication.event.payload.result)
        }
        return
      case TaskAction.FAILURE:
        if (publication.event.payload.task === this.task) {
          listener.reject(publication.event.payload.reason)
        }
        return
      default:
        return
    }
  }
}
