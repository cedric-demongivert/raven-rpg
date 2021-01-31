export type CommitState = number

export namespace CommitState {
  /**
  *
  */
  export const HOLLOW: CommitState = 0

  /**
  *
  */
  export const BOOKS_EXTRACTION_REQUESTED: CommitState = 1

  /**
  *
  */
  export const EXTRACTING_BOOKS: CommitState = 2

  /**
  *
  */
  export const BOOKS_EXTRACTED: CommitState = 3

  /**
  *
  */
  export const BOOKS_EXTRACTION_FAILURE: CommitState = 4

  /**
  *
  */
  export const READY: CommitState = 5

  /**
  *
  */
  export const DEFAULT: CommitState = HOLLOW

  /**
  *
  */
  export const ALL: CommitState[] = [
    HOLLOW,
    BOOKS_EXTRACTION_REQUESTED,
    EXTRACTING_BOOKS,
    BOOKS_EXTRACTED,
    BOOKS_EXTRACTION_FAILURE,
    READY
  ]

  /**
  *
  */
  export function toString(state: CommitState): string | undefined {
    switch (state) {
      case HOLLOW: return 'HOLLOW'
      case BOOKS_EXTRACTION_REQUESTED: return 'BOOKS_EXTRACTION_REQUESTED'
      case EXTRACTING_BOOKS: return 'EXTRACTING_BOOKS'
      case BOOKS_EXTRACTED: return 'BOOKS_EXTRACTED'
      case BOOKS_EXTRACTION_FAILURE: return 'BOOKS_EXTRACTION_FAILURE'
      case READY: return 'READY'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: CommitState): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
