export type CommitTask = (
  CommitTask.EXTRACTING_BOOKS
)

export namespace CommitTask {
  /**
  *
  */
  export type EXTRACTING_BOOKS = 0

  /**
  *
  */
  export const EXTRACTING_BOOKS: EXTRACTING_BOOKS = 0

  /**
  *
  */
  export const DEFAULT: CommitTask = EXTRACTING_BOOKS

  /**
  *
  */
  export const ALL: CommitTask[] = [
    EXTRACTING_BOOKS
  ]

  /**
  *
  */
  export function toString(state: CommitTask): string | undefined {
    switch (state) {
      case EXTRACTING_BOOKS: return 'EXTRACTING_BOOKS'
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
