/**
*
*
*/
export type HypertextElementType = number

/**
*
*/
export namespace HypertextElementType {
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
  export const ALL: HypertextElementType[] = [
    EMPHASIZE,
    ACRONYM,
    LINK,
    EMPTY
  ]

  /**
  *
  */
  export function toString(type: HypertextElementType): string | undefined {
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
  export function toDebugString(state: HypertextElementType): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
