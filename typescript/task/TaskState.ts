export type TaskState = (
  TaskState.PENDING |
  TaskState.RUNNING |
  TaskState.REJECTED |
  TaskState.RESOLVED |
  TaskState.CANCELING |
  TaskState.CANCELED
)

export namespace TaskState {
  /**
  *
  */
  export type PENDING = 0

  /**
  *
  */
  export const PENDING: PENDING = 0

  /**
  *
  */
  export type RUNNING = 1

  /**
  *
  */
  export const RUNNING: RUNNING = 1

  /**
  *
  */
  export type REJECTED = 2

  /**
  *
  */
  export const REJECTED: REJECTED = 2

  /**
  *
  */
  export type RESOLVED = 3

  /**
  *
  */
  export const RESOLVED: RESOLVED = 3

  /**
  *
  */
  export type CANCELING = 4

  /**
  *
  */
  export const CANCELING: CANCELING = 4

  /**
  *
  */
  export type CANCELED = 5

  /**
  *
  */
  export const CANCELED: CANCELED = 5

  /**
  *
  */
  export const DEFAULT: TaskState = PENDING

  /**
  *
  */
  export const ALL: TaskState[] = [
    PENDING,
    RUNNING,
    REJECTED,
    RESOLVED,
    CANCELING,
    CANCELED
  ]

  /**
  *
  */
  export function toString(state: TaskState): string | undefined {
    switch (state) {
      case PENDING: return 'PENDING'
      case RUNNING: return 'RUNNING'
      case REJECTED: return 'REJECTED'
      case RESOLVED: return 'RESOLVED'
      case CANCELING: return 'CANCELING'
      case CANCELED: return 'CANCELED'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: TaskState): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
