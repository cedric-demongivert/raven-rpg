/**
 * 
 */
export type CorvusNodeType = (
  CorvusNodeType.EMPTY |
  CorvusNodeType.EMPHASIZE |
  CorvusNodeType.ACRONYM |
  CorvusNodeType.LINK |
  CorvusNodeType.PARAGRAPH |
  CorvusNodeType.SECTION
)

/**
 * 
 */
export namespace CorvusNodeType {
  /**
   *
   */
  export type EMPTY = 0

  /**
   *
   */
  export const EMPTY: EMPTY = 0

  /**
   *
   */
  export type EMPHASIZE = 1

  /**
   *
   */
  export const EMPHASIZE: EMPHASIZE = 1

  /**
   *
   */
  export type ACRONYM = 2

  /**
   *
   */
  export const ACRONYM: ACRONYM = 2

  /**
   *
   */
  export type LINK = 3

  /**
   *
   */
  export const LINK: LINK = 3

  /**
   *
   */
  export type PARAGRAPH = 4

  /**
   *
   */
  export const PARAGRAPH: PARAGRAPH = 4

  /**
   *
   */
  export type SECTION = 5

  /**
   *
   */
  export const SECTION: SECTION = 5

  /**
   *
   */
  export const ALL: CorvusNodeType[] = [
    EMPTY,
    EMPHASIZE,
    ACRONYM,
    LINK,
    PARAGRAPH,
    SECTION
  ]

  /**
   *
   */
  export function toString(type: CorvusNodeType): string | undefined {
    switch (type) {
      case EMPTY: return 'EMPTY'
      case EMPHASIZE: return 'EMPHASIZE'
      case ACRONYM: return 'ACRONYM'
      case LINK: return 'LINK'
      case PARAGRAPH: return 'PARAGRAPH'
      case SECTION: return 'SECTION'
      default: return undefined
    }
  }

  /**
   *
   */
  export function toDebugString(type: CorvusNodeType): string {
    return `CorvusNodeType #${type} (${toString(type) || 'undefined'})`
  }
}