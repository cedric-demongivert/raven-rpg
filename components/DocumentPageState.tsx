/**
 * 
 */
export type DocumentPageState = (
  DocumentPageState.CLONING |
  DocumentPageState.LOADING_LATEST_COMMIT |
  DocumentPageState.PARSING_COMMIT |
  DocumentPageState.SUCCESS |
  DocumentPageState.FAILURE
)

/**
 * 
 */
export namespace DocumentPageState {
  /**
   * 
   */
  export type CLONING = 0

  /**
   * 
   */
  export const CLONING: CLONING = 0

  /**
   * 
   */
  export type LOADING_LATEST_COMMIT = 1

  /**
   * 
   */
  export const LOADING_LATEST_COMMIT: LOADING_LATEST_COMMIT = 1

  /**
   * 
   */
  export type PARSING_COMMIT = 2

  /**
   * 
   */
  export const PARSING_COMMIT: PARSING_COMMIT = 2

  /**
   * 
   */
  export type SUCCESS = 3

  /**
   * 
   */
  export const SUCCESS: SUCCESS = 3

  /**
   * 
   */
  export type FAILURE = 4

  /**
   * 
   */
  export const FAILURE: FAILURE = 4

  /**
   * 
   */
  export const DEFAULT: DocumentPageState = CLONING

  /**
   * 
   */
  export const ALL: DocumentPageState[] = [
    CLONING,
    LOADING_LATEST_COMMIT,
    PARSING_COMMIT,
    SUCCESS,
    FAILURE
  ]  

  /**
   *
   */
   export function toString(type: DocumentPageState): string | undefined {
    switch (type) {
      case CLONING: return 'CLONING'
      case LOADING_LATEST_COMMIT: return 'LOADING_LATEST_COMMIT'
      case PARSING_COMMIT: return 'PARSING_COMMIT'
      case SUCCESS: return 'SUCCESS'
      case FAILURE: return 'FAILURE'
      default: return undefined
    }
  }

  /**
   *
   */
  export function toDebugString(type: DocumentPageState): string {
    return `DocumentPageState #${type} (${toString(type) || 'undefined'})`
  }
}