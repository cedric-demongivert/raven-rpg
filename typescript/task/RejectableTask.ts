import { TaskState } from './TaskState'

import { Task } from './Task'
import { RejectedTask } from './RejectedTask'
import { CancelingTask } from './CancelingTask'
import { CanceledTask } from './CanceledTask'
import { PendingTask } from './PendingTask'
import { RunningTask } from './RunningTask'

/**
*
*/
export type RejectableTask<Type extends number = number, Reason extends Error = Error> = (
  CancelingTask<Type, Reason> |
  PendingTask<Type> |
  RunningTask<Type>
)

/**
*
*/
export namespace RejectableTask {
  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is RejectableTask<Properties['type'], Properties['reason']> {
    return CancelingTask.is(task) || PendingTask.is(task) || RunningTask.is(task)
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is RejectableTask<Properties['type'], Properties['reason']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a rejectable task.')
    }
  }

  /**
  *
  */
  export function reject<Type extends number, Reason extends Error>(task: CancelingTask<Type, Reason>, reason?: undefined): CanceledTask<Type, Reason>
  export function reject<Type extends number, Reason extends Error>(task: PendingTask<Type>, reason: Reason): RejectedTask<Type, Reason>
  export function reject<Type extends number, Reason extends Error>(task: RunningTask<Type>, reason: Reason): RejectedTask<Type, Reason>
  export function reject<Type extends number, Reason extends Error>(task: RejectableTask<Type, Reason>, reason?: Reason | undefined): RejectedTask<Type, Reason> | CanceledTask<Type, Reason>
  export function reject<Type extends number, Reason extends Error>(task: RejectableTask<Type, Reason>, reason?: Reason | undefined): RejectedTask<Type, Reason> | CanceledTask<Type, Reason> {
    if (CancelingTask.is(task)) {
      return new Task({
        type: task.type,
        state: TaskState.REJECTED,
        result: undefined,
        reason: task.reason
      })
    } else {
      return new Task({
        type: task.type,
        state: TaskState.REJECTED,
        result: undefined,
        reason
      })
    }
  }
}
