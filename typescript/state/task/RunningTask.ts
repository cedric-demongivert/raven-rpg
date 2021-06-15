import { Task } from './Task'
import { TaskState } from './TaskState'

export interface RunningTask<Type extends number = number> {
  /**
  *
  */
  readonly type: Type

  /**
  *
  */
  readonly state: TaskState.RUNNING

  /**
  *
  */
  readonly reason: undefined

  /**
  *
  */
  readonly result: undefined

  /**
  *
  */
  toString(typeFormatter?: Task.TypeFormatter): string

  /**
  *
  */
  equals(other: any): boolean
}

/**
*
*/
export namespace RunningTask {
  /**
  *
  */
  export type Properties<Type extends number = number> = {
    /**
    *
    */
    type: Type,

    /**
    *
    */
    state: TaskState.RUNNING,

    /**
    *
    */
    result?: undefined,

    /**
    *
    */
    reason?: undefined
  }

  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is RunningTask<Properties['type']> {
    return task.state === TaskState.RUNNING
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is RunningTask<Properties['type']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a running task.')
    }
  }
}
