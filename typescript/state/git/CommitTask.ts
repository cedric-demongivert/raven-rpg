export type CommitTask = (
  CommitTask.LOADING
)

export namespace CommitTask {
  /**
  *
  */
  export type LOADING = 0

  /**
  *
  */
  export const LOADING: LOADING = 0

  /**
  *
  */
  export const DEFAULT: CommitTask = LOADING

  /**
  *
  */
  export const ALL: CommitTask[] = [
    LOADING
  ]

  /**
  *
  */
  export function toString(state: CommitTask): string | undefined {
    switch (state) {
      case LOADING: return 'LOADING'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: CommitTask): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
