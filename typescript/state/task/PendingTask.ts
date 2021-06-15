import { Task } from './Task'
import { TaskState } from './TaskState'

export interface PendingTask<Type extends number = number> {
  /**
  *
  */
  readonly type: Type

  /**
  *
  */
  readonly state: TaskState.PENDING

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
export namespace PendingTask {
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
    state: TaskState.PENDING,

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
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is PendingTask<Properties['type']> {
    return task.state === TaskState.PENDING
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is PendingTask<Properties['type']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a pending task.')
    }
  }
}
