export type RepositoryTask = (
  RepositoryTask.LOADING |
  RepositoryTask.DUMPING
)

export namespace RepositoryTask {
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
  export type DUMPING = 1

  /**
  *
  */
  export const DUMPING: DUMPING = 1

  /**
  *
  */
  export function toString(state: RepositoryTask): string | undefined {
    switch (state) {
      case LOADING: return 'LOADING'
      case DUMPING: return 'DUMPING'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: RepositoryTask): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
