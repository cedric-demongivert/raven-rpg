export type CorvusDocumentModelType = (
  CorvusDocumentModelType.PARAGRAPH |
  CorvusDocumentModelType.SECTION |
  CorvusDocumentModelType.IMAGE |
  CorvusDocumentModelType.RULESET |
  CorvusDocumentModelType.BOOK |
  CorvusDocumentModelType.CHARACTERISTIC |
  CorvusDocumentModelType.MASTERY
)

export namespace CorvusDocumentModelType {
  /**
  *
  */
  export type PARAGRAPH = 1

  /**
  *
  */
  export const PARAGRAPH: PARAGRAPH = 1

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
  export type IMAGE = 3

  /**
  *
  */
  export const IMAGE: IMAGE = 3

  /**
  *
  */
  export type RULESET = 4

  /**
  *
  */
  export const RULESET: RULESET = 4

  /**
  *
  */
  export type BOOK = 5

  /**
  *
  */
  export const BOOK: BOOK = 5

  /**
  *
  */
  export type CHARACTERISTIC = 6

  /**
  *
  */
  export const CHARACTERISTIC: CHARACTERISTIC = 6

  /**
  *
  */
  export type MASTERY = 7

  /**
  *
  */
  export const MASTERY: MASTERY = 7

  /**
  *
  */
  export const ALL: CorvusDocumentModelType[] = [
    PARAGRAPH,
    SECTION,
    IMAGE,
    RULESET,
    BOOK,
    CHARACTERISTIC,
    MASTERY
  ]

  /**
  *
  */
  export function toString(type: CorvusDocumentModelType): string | undefined {
    switch (type) {
      case PARAGRAPH: return 'PARAGRAPH'
      case SECTION: return 'SECTION'
      case IMAGE: return 'IMAGE'
      case RULESET: return 'RULESET'
      case BOOK: return 'BOOK'
      case CHARACTERISTIC: return 'CHARACTERISTIC'
      case MASTERY: return 'MASTERY'
      default: return undefined
    }
  }

  /**
  *
  */
  export function is(type: number): type is CorvusDocumentModelType {
    switch (type) {
      case PARAGRAPH:
      case SECTION:
      case IMAGE:
      case RULESET:
      case BOOK:
      case CHARACTERISTIC:
      case MASTERY:
        return true
      default:
        return false
    }
  }

  /**
  *
  */
  export function toDebugString(state: CorvusDocumentModelType): string {
    return 'CorvusDocumentModelType # ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
