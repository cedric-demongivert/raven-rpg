import { ApplicationEvent } from '../ApplicationEvent'

import { TaskAction } from './TaskAction'
import { Task } from './Task'

export namespace TaskEvent {
  /**
  *
  */
  export type Create<T = any> = ApplicationEvent<{ definition: Task.Definition<T>, name: string }, Task<T>>

  /**
  *
  */
  export type Cancel = ApplicationEvent<{ task: number, reason: Error | null }, null>

  /**
  *
  */
  export type Resume = ApplicationEvent<number, null>

  /**
  *
  */
  export type Run = ApplicationEvent<number, null>

  /**
  *
  */
  export type Success<T = any> = ApplicationEvent<{ task: number, result: T }, null>

  /**
  *
  */
  export type Failure = ApplicationEvent<{ task: number, reason: Error | null }, null>

  /**
  *
  */
  export type Cancellation = ApplicationEvent<number, null>

  /**
  *
  */
  export type Remove = ApplicationEvent<number, null>

  /**
  *
  */
  export function create<T>(model: Task<T>): Create<T>
  /**
  *
  */
  export function create<T>(definition: Task.Definition<T>, name?: string): Create<T>
  export function create<T>(parameter: Task<T> | Task.Definition<T>, name?: string): Create<T> {
    if (typeof parameter === 'function') {
      return {
        type: TaskAction.CREATE,
        payload: {
          definition: parameter,
          name: name || parameter.name
        },
        payback: null
      }
    } else {
      return {
        type: TaskAction.CREATE,
        payload: {
          definition: parameter.getDefinition(),
          name: parameter.getName()
        },
        payback: null
      }
    }
  }

  /**
  *
  */
  export function run(payload: number): Run
  /**
  *
  */
  export function run<T>(payload: Task<T>): Run
  /**
  *
  */
  export function run<T>(payload: Task<T> | number): Run
  export function run<T>(payload: Task<T> | number): Run {
    return {
      type: TaskAction.RUN,
      payload: (typeof payload === 'number' ? payload : payload.get(Task.Properties.IDENTIFIER)),
      payback: null
    }
  }

  /**
  *
  */
  export function remove(payload: number): Remove
  /**
  *
  */
  export function remove<T>(payload: Task<T>): Remove
  /**
  *
  */
  export function remove<T>(payload: Task<T> | number): Remove
  export function remove<T>(payload: Task<T> | number): Remove {
    return {
      type: TaskAction.REMOVE,
      payload: (typeof payload === 'number' ? payload : payload.get(Task.Properties.IDENTIFIER)),
      payback: null
    }
  }

  /**
  *
  */
  export function resume(payload: number): Resume
  /**
  *
  */
  export function resume<T>(payload: Task<T>): Resume
  /**
  *
  */
  export function resume<T>(payload: Task<T> | number): Resume
  export function resume<T>(payload: Task<T> | number): Resume {
    return {
      type: TaskAction.RESUME,
      payload: (typeof payload === 'number' ? payload : payload.get(Task.Properties.IDENTIFIER)),
      payback: null
    }
  }

  /**
  *
  */
  export function cancel(payload: number, reason?: Error | null): Cancel
  /**
  *
  */
  export function cancel<T>(payload: Task<T>, reason?: Error | null): Cancel
  /**
  *
  */
  export function cancel<T>(payload: Task<T> | number, reason?: Error | null): Cancel
  export function cancel<T>(payload: Task<T> | number, reason: Error | null = null): Cancel {
    return {
      type: TaskAction.CANCEL,
      payload: {
        task: (typeof payload === 'number' ? payload : payload.get(Task.Properties.IDENTIFIER)),
        reason
      },
      payback: null
    }
  }

  /**
  *
  */
  export function success<T>(payload: number, result: T): Success<T>
  /**
  *
  */
  export function success<T>(payload: Task<T>, result: T): Success<T>
  /**
  *
  */
  export function success<T>(payload: Task<T> | number, result: T): Success<T>
  export function success<T>(payload: Task<T> | number, result: T): Success<T> {
    return {
      type: TaskAction.SUCCESS,
      payload: {
        task: (typeof payload === 'number' ? payload : payload.get(Task.Properties.IDENTIFIER)),
        result
      },
      payback: null
    }
  }

  /**
  *
  */
  export function failure(payload: number, reason?: Error | null): Failure
  /**
  *
  */
  export function failure<T>(payload: Task<T>, reason?: Error | null): Failure
  /**
  *
  */
  export function failure<T>(payload: Task<T> | number, reason?: Error | null): Failure
  export function failure<T>(payload: Task<T> | number, reason: Error | null = null): Failure {
    return {
      type: TaskAction.FAILURE,
      payload: {
        task: (typeof payload === 'number' ? payload : payload.get(Task.Properties.IDENTIFIER)),
        reason
      },
      payback: null
    }
  }

  /**
  *
  */
  export function cancellation(payload: number): Cancellation
  /**
  *
  */
  export function cancellation<T>(payload: Task<T>): Cancellation
  /**
  *
  */
  export function cancellation<T>(payload: Task<T> | number): Cancellation
  export function cancellation<T>(payload: Task<T> | number): Cancellation {
    return {
      type: TaskAction.CANCELLATION,
      payload: (typeof payload === 'number' ? payload : payload.get(Task.Properties.IDENTIFIER)),
      payback: null
    }
  }
}
