/** 
 * 
 */
export type MutationType = (
  MutationType.ADDITION |
  MutationType.DELETION |
  MutationType.IDENTITY |
  MutationType.UPDATE
)

export namespace MutationType {
  /**
  *
  */
  export type ADDITION = 0

  /**
  *
  */
  export const ADDITION: ADDITION = 0

  /**
  *
  */
  export type UPDATE = 1

  /**
  *
  */
  export const UPDATE: UPDATE = 1

  /**
  *
  */
  export type DELETION = 2

  /**
  *
  */
  export const DELETION: DELETION = 2

  /**
  *
  */
  export type IDENTITY = 3

  /**
  *
  */
  export const IDENTITY: IDENTITY = 3

  /**
  *
  */
  export const DEFAULT: MutationType = ADDITION

  /**
  *
  */
  export const ALL: MutationType[] = [
    ADDITION,
    DELETION,
    IDENTITY,
    UPDATE
  ]

  /**
  *
  */
  export function toString(type: MutationType): string | undefined {
    switch (type) {
      case ADDITION: return 'ADDITION'
      case DELETION: return 'DELETION'
      case IDENTITY: return 'IDENTITY'
      case UPDATE: return 'UPDATE'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(type: MutationType): string {
    return '# ' + type + ' (' + (toString(type) || 'undefined') + ')'
  }
}
