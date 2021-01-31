export type TaskState = number

export namespace TaskState {
  /**
  * The state of a task that was instantiated but that was not already started.
  */
  export const CREATED: TaskState = 0

  /**
  * The state of a task that was started.
  */
  export const RUNNING: TaskState = 1

  /**
  * The state of a task that succeed, may be associated with a result.
  */
  export const SUCCESS: TaskState = 2

  /**
  * The state of a task that failed, may be associated with a reason.
  */
  export const FAILURE: TaskState = 3

  /**
  * The state of a task that received a cancellation request and that await to resolve.
  */
  export const CANCELING: TaskState = 4

  /**
  * The state of a task that was canceled by the user, may be associated with a reason.
  */
  export const CANCELED: TaskState = 5

  /**
  *
  */
  export const ALL: TaskState[] = [
    CREATED,
    RUNNING,
    SUCCESS,
    FAILURE,
    CANCELING,
    CANCELED
  ]

  /**
  *
  */
  export function toString(state: TaskState): string | undefined {
    switch (state) {
      case CREATED: return 'CREATED'
      case RUNNING: return 'RUNNING'
      case SUCCESS: return 'SUCCESS'
      case FAILURE: return 'FAILURE'
      case CANCELING: return 'CANCELING'
      case CANCELED: return 'CANCELED'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: TaskState): string {
    return '#' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
