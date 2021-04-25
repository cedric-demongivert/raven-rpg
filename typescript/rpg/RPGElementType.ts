export type RPGElementType = (
  RPGElementType.PARAGRAPH |
  RPGElementType.SECTION |
  RPGElementType.IMAGE |
  RPGElementType.RULESET |
  RPGElementType.BOOK
)

export namespace RPGElementType {
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
  export type RULESET = 3

  /**
  *
  */
  export const RULESET: RULESET = 3

  /**
  *
  */
  export type BOOK = 4

  /**
  *
  */
  export const BOOK: BOOK = 4

  /**
  *
  */
  export const ALL: RPGElementType[] = [
    PARAGRAPH,
    SECTION,
    IMAGE,
    RULESET,
    BOOK
  ]

  /**
  *
  */
  export function toString(type: RPGElementType): string | undefined {
    switch (type) {
      case PARAGRAPH: return 'PARAGRAPH'
      case SECTION: return 'SECTION'
      case IMAGE: return 'IMAGE'
      case RULESET: return 'RULESET'
      case BOOK: return 'BOOK'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: RPGElementType): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
