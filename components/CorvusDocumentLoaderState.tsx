/**
 * 
 */
export type CorvusDocumentLoaderState = (
  CorvusDocumentLoaderState.CLONING |
  CorvusDocumentLoaderState.LOADING_LATEST_COMMIT |
  CorvusDocumentLoaderState.PARSING_COMMIT |
  CorvusDocumentLoaderState.SUCCESS |
  CorvusDocumentLoaderState.FAILURE
)

/**
 * 
 */
export namespace CorvusDocumentLoaderState {
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
  export const DEFAULT: CorvusDocumentLoaderState = CLONING

  /**
   * 
   */
  export const ALL: CorvusDocumentLoaderState[] = [
    CLONING,
    LOADING_LATEST_COMMIT,
    PARSING_COMMIT,
    SUCCESS,
    FAILURE
  ]  

  /**
   *
   */
   export function toString(type: CorvusDocumentLoaderState): string | undefined {
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
  export function toDebugString(type: CorvusDocumentLoaderState): string {
    return `CorvusDocumentLoaderState #${type} (${toString(type) || 'undefined'})`
  }
}