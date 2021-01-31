export type DocumentElementType = number

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
  export type SECTION = 1

  /**
  *
  */
  export const SECTION: SECTION = 1

  /**
  *
  */
  export type IMAGE = 2

  /**
  *
  */
  export const IMAGE: IMAGE = 2

  /**
  *
  */
  export type SET = 3

  /**
  *
  */
  export const SET: SET = 3

  /**
  *
  */
  export const ALL: DocumentElementType[] = [
    PARAGRAPH,
    SECTION,
    IMAGE,
    SET
  ]

  /**
  *
  */
  export function toString(type: DocumentElementType): string | undefined {
    switch (type) {
      case PARAGRAPH: return 'PARAGRAPH'
      case SECTION: return 'SECTION'
      case IMAGE: return 'IMAGE'
      case SET: return 'SET'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: DocumentElementType): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
