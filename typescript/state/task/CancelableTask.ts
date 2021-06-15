import { TaskState } from './TaskState'

import { Task } from './Task'
import { CancelingTask } from './CancelingTask'
import { CanceledTask } from './CanceledTask'
import { PendingTask } from './PendingTask'
import { RunningTask } from './RunningTask'

/**
*
*/
export type CancelableTask<Type extends number = number> = (
  PendingTask<Type> |
  RunningTask<Type>
)

/**
*
*/
export namespace CancelableTask {
  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is CancelableTask<Properties['type']> {
    return PendingTask.is(task) || RunningTask.is(task)
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is CancelableTask<Properties['type']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a cancelable task.')
    }
  }

  /**
  *
  */
  export function cancel<Type extends number, Reason extends Error>(task: PendingTask<Type>, reason: Reason): CanceledTask<Type, Reason>
  export function cancel<Type extends number, Reason extends Error>(task: RunningTask<Type>, reason: Reason): CancelingTask<Type, Reason>
  export function cancel<Type extends number, Reason extends Error>(task: CancelableTask<Type>, reason: Reason): CanceledTask<Type, Reason> | CancelingTask<Type, Reason> {
    if (PendingTask.is(task)) {
      return Task.create({
        type: task.type,
        state: TaskState.CANCELED,
        result: undefined,
        reason
      })
    } else {
      return Task.create({
        type: task.type,
        state: TaskState.CANCELING,
        result: undefined,
        reason
      })
    }
  }
}
