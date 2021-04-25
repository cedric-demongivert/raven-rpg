import { Task } from './Task'
import { TaskState } from './TaskState'

import { PendingTask } from './PendingTask'
import { RunningTask } from './RunningTask'

export type RunnableTask<Type extends number = number> = (
  PendingTask<Type>
)

/**
*
*/
export namespace RunnableTask {
  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is RunnableTask<Properties['type']> {
    return PendingTask.is(task)
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is RunnableTask<Properties['type']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a runnable task.')
    }
  }

  /**
  *
  */
  export function run<Type extends number>(task: RunnableTask<Type>): RunningTask<Type> {
    return new Task({
      type: task.type,
      state: TaskState.RUNNING,
      result: undefined,
      reason: undefined
    })
  }
}
