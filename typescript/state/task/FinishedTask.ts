import { Task } from './Task'
import { CanceledTask } from './CanceledTask'
import { ResolvedTask } from './ResolvedTask'
import { RejectedTask } from './RejectedTask'

/**
*
*/
export type FinishedTask<Type extends number = number, Result = any, Reason extends Error = Error> = (
  CanceledTask<Type, Reason> |
  ResolvedTask<Type, Result> |
  RejectedTask<Type, Reason>
)

/**
*
*/
export namespace FinishedTask {
  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is FinishedTask<Properties['type'], Properties['result'], Properties['reason']> {
    return CanceledTask.is(task) || ResolvedTask.is(task) || RejectedTask.is(task)
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is FinishedTask<Properties['type'], Properties['result'], Properties['reason']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a finished task.')
    }
  }
}
