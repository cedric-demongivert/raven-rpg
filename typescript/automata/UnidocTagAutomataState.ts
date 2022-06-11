/**
 * 
 */
export type UnidocTagAutomataState = (
  UnidocTagAutomataState.LEADING_STREAM |
  UnidocTagAutomataState.SHALLOW_STREAM |
  UnidocTagAutomataState.CONTENT_STREAM |
  UnidocTagAutomataState.DEEP_STREAM |
  UnidocTagAutomataState.TRAILING_STREAM
)

/**
 * 
 */
export namespace UnidocTagAutomataState {
  /**
   * 
   */
  export type LEADING_STREAM = 0

  /**
   * 
   */
  export const LEADING_STREAM: LEADING_STREAM = 0

  /**
   * 
   */
  export type SHALLOW_STREAM = 1

  /**
   * 
   */
  export const SHALLOW_STREAM: SHALLOW_STREAM = 1

  /**
   * 
   */
  export type CONTENT_STREAM = 2

  /**
   * 
   */
  export const CONTENT_STREAM: CONTENT_STREAM = 2

  /**
   * 
   */
  export type DEEP_STREAM = 3

  /**
   * 
   */
  export const DEEP_STREAM: DEEP_STREAM = 3

  /**
   * 
   */
  export type TRAILING_STREAM = 4

  /**
   * 
   */
  export const TRAILING_STREAM: TRAILING_STREAM = 4

  /**
   * 
   */
  export const ALL = [
    LEADING_STREAM,
    SHALLOW_STREAM,
    CONTENT_STREAM,
    DEEP_STREAM,
    TRAILING_STREAM
  ]

  /**
   * 
   */
  export const DEFAULT: UnidocTagAutomataState = LEADING_STREAM

  /**
   * 
   */
  export function toString(value: UnidocTagAutomataState): string | undefined {
    switch (value) {
      case LEADING_STREAM: return 'LEADING_STREAM'
      case SHALLOW_STREAM: return 'SHALLOW_STREAM'
      case CONTENT_STREAM: return 'CONTENT_STREAM'
      case DEEP_STREAM: return 'DEEP_STREAM'
      case TRAILING_STREAM: return 'TRAILING_STREAM'
      default: return undefined
    }
  }

  /**
   * 
   */
  export function toDebugString(value: UnidocTagAutomataState): string | undefined {
    return `UnidocTagAutomataState #${value} (${toString(value) || 'undefined'})`
  }

}