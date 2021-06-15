import { Task } from './Task'
import { TaskState } from './TaskState'

export interface ResolvedTask<Type extends number = number, Result = any> {
  /**
  *
  */
  readonly type: Type

  /**
  *
  */
  readonly state: TaskState.RESOLVED

  /**
  *
  */
  readonly reason: undefined

  /**
  *
  */
  readonly result: Result

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
export namespace ResolvedTask {
  /**
  *
  */
  export type Properties<Type extends number = number, Result = any> = {
    /**
    *
    */
    type: Type,

    /**
    *
    */
    state: TaskState.RESOLVED,

    /**
    *
    */
    result: Result,

    /**
    *
    */
    reason?: undefined
  }

  /**
  *
  */
  export function is<Properties extends Task.Properties>(task: Task<Properties>): task is ResolvedTask<Properties['type'], Properties['result']> {
    return task.state === TaskState.RESOLVED
  }

  /**
  *
  */
  export function assert<Properties extends Task.Properties>(task: Task<Properties>, message?: string | undefined): asserts task is ResolvedTask<Properties['type'], Properties['result']> {
    if (!is(task)) {
      throw new Error(message || 'Parameter task is not a resolved task.')
    }
  }
}
