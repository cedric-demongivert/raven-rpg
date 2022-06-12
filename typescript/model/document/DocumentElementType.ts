/**
 *
 *
 */
export type DocumentElementType = (
  DocumentElementType.PARAGRAPH |
  DocumentElementType.LIST |
  DocumentElementType.SECTION |
  DocumentElementType.EMPTY
)

/**
 *
 */
export namespace DocumentElementType {
  /**
   *
   */
  export type PARAGRAPH = 0

  /**
   *
   */
  export const PARAGRAPH: PARAGRAPH = 0

  /**
   *
   */
  export type LIST = 1

  /**
   *
   */
  export const LIST: LIST = 1

  /**
   *
   */
  export type SECTION = 2

  /**
   *
   */
  export const SECTION: SECTION = 2

  /**
   *
   */
  export type EMPTY = 3

  /**
   *
   */
  export const EMPTY: EMPTY = 3

  /**
   *
   */
  export const ALL: DocumentElementType[] = [
    PARAGRAPH,
    LIST,
    SECTION,
    EMPTY
  ]

  /**
   *
   */
  export function toString(type: DocumentElementType): string | undefined {
    switch (type) {
      case PARAGRAPH: return 'PARAGRAPH'
      case LIST: return 'LIST'
      case SECTION: return 'SECTION'
      case EMPTY: return 'EMPTY'
      default: return undefined
    }
  }

  /**
   *
   */
  export function toDebugString(type: DocumentElementType): string {
    return `DocumentElementType #${type} (${toString(type) || 'undefined'})`
  }
}
