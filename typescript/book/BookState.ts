export type BookState = number

export namespace BookState {
  /**
  *
  */
  export const HOLLOW: BookState = 0

  /**
  *
  */
  export const CONTENT_EXTRACTION_REQUESTED: BookState = 1

  /**
  *
  */
  export const EXTRACTING_CONTENT: BookState = 2

  /**
  *
  */
  export const CONTENT_EXTRACTED: BookState = 3

  /**
  *
  */
  export const CONTENT_EXTRACTION_FAILURE: BookState = 4

  /**
  *
  */
  export const READY: BookState = 5

  /**
  *
  */
  export const ALL: BookState[] = [
    HOLLOW,
    CONTENT_EXTRACTION_REQUESTED,
    EXTRACTING_CONTENT,
    CONTENT_EXTRACTED,
    CONTENT_EXTRACTION_FAILURE,
    READY
  ]

  /**
  *
  */
  export const DEFAULT: BookState = HOLLOW

  /**
  *
  */
  export function toString(state: BookState): string | undefined {
    switch (state) {
      case HOLLOW: return 'HOLLOW'
      case CONTENT_EXTRACTION_REQUESTED: return 'CONTENT_EXTRACTION_REQUESTED'
      case EXTRACTING_CONTENT: return 'EXTRACTING_CONTENT'
      case CONTENT_EXTRACTED: return 'CONTENT_EXTRACTED'
      case CONTENT_EXTRACTION_FAILURE: return 'CONTENT_EXTRACTION_FAILURE'
      case READY: return 'READY'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: BookState): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
