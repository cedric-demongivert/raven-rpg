/**
 * 
 */
export type CorvusDocumentLocationElementType = (
  CorvusDocumentLocationElementType.SECTION |
  CorvusDocumentLocationElementType.ELEMENT
)

/**
 * 
 */
export namespace CorvusDocumentLocationElementType {
  /**
  *
  */
  export type SECTION = 0

  /**
  *
  */
  export const SECTION: SECTION = 0

  /**
  *
  */
  export type ELEMENT = 1

  /**
  *
  */
  export const ELEMENT: ELEMENT = 1

  /**
   * 
   */
  export const DEFAULT: CorvusDocumentLocationElementType = SECTION

  /**
  *
  */
  export const ALL: CorvusDocumentLocationElementType[] = [
    SECTION,
    ELEMENT
  ]

  /**
  *
  */
  export function toString(type: CorvusDocumentLocationElementType): string | undefined {
    switch (type) {
      case SECTION: return 'SECTION'
      case ELEMENT: return 'ELEMENT'
      default: return undefined
    }
  }

  /**
  *
  */
  export function is(type: number): type is CorvusDocumentLocationElementType {
    switch (type) {
      case SECTION:
      case ELEMENT:
        return true
      default:
        return false
    }
  }

  /**
  *
  */
  export function toDebugString(state: CorvusDocumentLocationElementType): string {
    return 'CorvusDocumentLocationElementType # ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
