/**
 * 
 */
export type CorvusLoadingState = (
  CorvusLoadingState.LOADING |
  CorvusLoadingState.SUCCESS |
  CorvusLoadingState.FAILURE
)

/**
 * 
 */
export namespace CorvusLoadingState {
  /**
   * 
   */
  export type LOADING = 0

  /**
   * 
   */
  export const LOADING : LOADING = 0

  /**
   * 
   */
  export type SUCCESS = 1

  /**
   * 
   */
  export const SUCCESS : SUCCESS = 1

  /**
   * 
   */
  export type FAILURE = 2

  /**
   * 
   */
  export const FAILURE : FAILURE = 2

  /**
   * 
   */
  export const DEFAULT: CorvusLoadingState = LOADING

  /**
   * 
   */
  export const ALL: Array<CorvusLoadingState> = [
    LOADING,
    SUCCESS,
    FAILURE
  ]

  /**
   * 
   */
  export function toString(state: CorvusLoadingState): string | undefined {
    switch(state) {
      case LOADING: return 'LOADING'
      case SUCCESS: return 'SUCCESS'
      case FAILURE: return 'FAILURE'
      default: return undefined
    }
  }

  /**
   * 
   */
  export function toDebugString(state: CorvusLoadingState): string {
    return `CorvusLoadingState #${state} (${toString(state) || 'undefined'})`
  }
}