import { TaskState } from './TaskState'

import { Task } from './Task'
import { ResolvedTask } from './ResolvedTask'
import { CancelingTask } from './CancelingTask'
import { RunningTask } from './RunningTask'
import { PendingTask } from './PendingTask'
import { CanceledTask } from './CanceledTask'

/**
*
*/
export type ResolvableTask<Type extends number = number, Reason extends Error = Error> = (
  PendingTask<Type> |
  RunningTask<Type> |
  CancelingTask<Type, Reason>
)

/**
*
*/
export namespace ResolvableTask {
  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is ResolvableTask<Properties['type'], Properties['reason']> {
    return PendingTask.is(task) || RunningTask.is(task) || CancelingTask.is(task)
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is ResolvableTask<Properties['type'], Properties['reason']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a resolvable task.')
    }
  }

  /**
  *
  */
  export function resolve<Type extends number, Reason extends Error>(task: CancelingTask<Type, Reason>, result?: any): CanceledTask<Type, Reason>
  export function resolve<Type extends number, Result>(task: RunningTask<Type>, result: Result): ResolvedTask<Type, Result>
  export function resolve<Type extends number, Result>(task: PendingTask<Type>, result: Result): ResolvedTask<Type, Result>
  export function resolve<Type extends number, Reason extends Error, Result>(task: ResolvableTask<Type, Reason>, result: Result): ResolvedTask<Type, Result>
  export function resolve<Type extends number, Reason extends Error, Result>(task: ResolvableTask<Type, Reason>, result: Result): ResolvedTask<Type, Result> | CanceledTask<Type, Reason> {
    if (CancelingTask.is(task)) {
      return Task.create({
        type: task.type,
        state: TaskState.CANCELED,
        result: undefined,
        reason: task.reason
      })
    } else {
      return Task.create({
        type: task.type,
        state: TaskState.RESOLVED,
        result,
        reason: undefined
      })
    }
  }
}
