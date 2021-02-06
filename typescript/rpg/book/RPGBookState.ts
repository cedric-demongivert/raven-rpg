export type RPGBookState = number

export namespace RPGBookState {
  /**
  *
  */
  export const HOLLOW: RPGBookState = 0

  /**
  *
  */
  export const CONTENT_EXTRACTION_REQUESTED: RPGBookState = 1

  /**
  *
  */
  export const EXTRACTING_CONTENT: RPGBookState = 2

  /**
  *
  */
  export const CONTENT_EXTRACTED: RPGBookState = 3

  /**
  *
  */
  export const CONTENT_EXTRACTION_FAILURE: RPGBookState = 4

  /**
  *
  */
  export const READY: RPGBookState = 5

  /**
  *
  */
  export const ALL: RPGBookState[] = [
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
  export const DEFAULT: RPGBookState = HOLLOW

  /**
  *
  */
  export function toString(state: RPGBookState): string | undefined {
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
  export function toDebugString(state: RPGBookState): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
