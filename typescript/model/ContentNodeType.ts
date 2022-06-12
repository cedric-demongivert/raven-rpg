/**
 * 
 */
export type ContentNodeType = (
  ContentNodeType.EMPTY |
  ContentNodeType.EMPHASIZE |
  ContentNodeType.ACRONYM |
  ContentNodeType.LINK |
  ContentNodeType.PARAGRAPH |
  ContentNodeType.SECTION
)

/**
 * 
 */
export namespace ContentNodeType {
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
  export const ALL: ContentNodeType[] = [
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
  export function toString(type: ContentNodeType): string | undefined {
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
  export function toDebugString(type: ContentNodeType): string {
    return `ContentNodeType #${type} (${toString(type) || 'undefined'})`
  }
}