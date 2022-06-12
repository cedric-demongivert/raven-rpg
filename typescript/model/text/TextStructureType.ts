/**
 *
 *
 */
export type TextStructureType = (
  TextStructureType.EMPHASIZE |
  TextStructureType.ACRONYM |
  TextStructureType.LINK |
  TextStructureType.EMPTY
)

/**
 *
 */
export namespace TextStructureType {
  /**
   *
   */
  export type EMPHASIZE = 0

  /**
   *
   */
  export const EMPHASIZE: EMPHASIZE = 0

  /**
   *
   */
  export type ACRONYM = 1

  /**
   *
   */
  export const ACRONYM: ACRONYM = 1

  /**
   *
   */
  export type LINK = 2

  /**
   *
   */
  export const LINK: LINK = 2

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
  export const ALL: TextStructureType[] = [
    EMPHASIZE,
    ACRONYM,
    LINK,
    EMPTY
  ]

  /**
   *
   */
  export function toString(type: TextStructureType): string | undefined {
    switch (type) {
      case EMPHASIZE: return 'EMPHASIZE'
      case ACRONYM: return 'ACRONYM'
      case LINK: return 'LINK'
      case EMPTY: return 'EMPTY'
      default: return undefined
    }
  }

  /**
   *
   */
  export function toDebugString(type: TextStructureType): string {
    return `TextStructureType #${type} (${toString(type) || 'undefined'})`
  }
}
