/**
 * 
 */
export type ReduceCorvusTextState = (
  ReduceCorvusTextState.START |
  ReduceCorvusTextState.AFTER_LEADING_SPACE |
  ReduceCorvusTextState.AFTER_TEXT_WORD |
  ReduceCorvusTextState.AFTER_TEXT_SPACE |
  ReduceCorvusTextState.AT_TAG |
  ReduceCorvusTextState.AFTER_TAG_WHITESPACE |
  ReduceCorvusTextState.END
)

/**
 * 
 */
export namespace ReduceCorvusTextState {
  /**
   * 
   */
  export type START = 0

  /**
   * 
   */
  export const START: START = 0

  /**
   * 
   */
  export type AFTER_LEADING_SPACE = 1

  /**
   * 
   */
  export const AFTER_LEADING_SPACE: AFTER_LEADING_SPACE = 1

  /**
   * 
   */
  export type AFTER_TEXT_WORD = 2

  /**
   * 
   */
  export const AFTER_TEXT_WORD: AFTER_TEXT_WORD = 2

  /**
   * 
   */
  export type AFTER_TEXT_SPACE = 3

  /**
   * 
   */
  export const AFTER_TEXT_SPACE: AFTER_TEXT_SPACE = 3

  /**
   * 
   */
  export type AT_TAG = 4

  /**
   * 
   */
  export const AT_TAG: AT_TAG = 4

  /**
   * 
   */
  export type AFTER_TAG_WHITESPACE = 5

  /**
   * 
   */
  export const AFTER_TAG_WHITESPACE: AFTER_TAG_WHITESPACE = 5

  /**
   * 
   */
  export type END = 6

  /**
   * 
   */
  export const END: END = 6

  /**
   * 
   */
  export const DEFAULT: ReduceCorvusTextState = START

  /**
   * 
   */
  export const ALL: ReduceCorvusTextState[] = [
    START,
    AFTER_LEADING_SPACE,
    AFTER_TEXT_WORD,
    AFTER_TEXT_SPACE,
    AT_TAG,
    AFTER_TAG_WHITESPACE,
    END
  ]

  /**
   * 
   */
  export function toString(state: ReduceCorvusTextState): string | undefined {
    switch (state) {
      case START: return 'START'
      case AFTER_LEADING_SPACE: return 'AFTER_LEADING_SPACE'
      case AFTER_TEXT_WORD: return 'AFTER_TEXT_WORD'
      case AFTER_TEXT_SPACE: return 'AFTER_TEXT_SPACE'
      case AT_TAG: return 'AT_TAG'
      case AFTER_TAG_WHITESPACE: return 'AFTER_TAG_WHITESPACE'
      case END: return 'END'
      default: return undefined
    }
  }

  /**
   * 
   */
  export function toDebugString(state: ReduceCorvusTextState): string {
    return `ReduceCorvusTextState #${state} (${toString(state) || 'undefined'})`
  }
}