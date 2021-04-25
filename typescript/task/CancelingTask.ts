import { TaskState } from './TaskState'
import { Task } from './Task'

export interface CancelingTask<Type extends number = number, Reason extends Error = Error> {
  /**
  *
  */
  readonly type: Type

  /**
  *
  */
  readonly state: TaskState.CANCELING

  /**
  *
  */
  readonly result: undefined

  /**
  *
  */
  readonly reason: Reason

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
export namespace CancelingTask {
  /**
  *
  */
  export type Properties<Type extends number = number, Reason extends Error = Error> = {
    /**
    *
    */
    type: Type,

    /**
    *
    */
    state: TaskState.CANCELING,

    /**
    *
    */
    result?: undefined,

    /**
    *
    */
    reason: Reason
  }

  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is CancelingTask<Properties['type'], Properties['reason']> {
    return task.state === TaskState.CANCELING
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is CancelingTask<Properties['type'], Properties['reason']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a canceling task.')
    }
  }
}
