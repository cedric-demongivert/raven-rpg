export type MutationType = number

export namespace MutationType {
  /**
  *
  */
  export const ADDITION: MutationType = 0

  /**
  *
  */
  export const MUTATION: MutationType = 1

  /**
  *
  */
  export const DELETION: MutationType = 2

  /**
  *
  */
  export const DEFAULT: MutationType = ADDITION

  /**
  *
  */
  export const ALL: MutationType[] = [
    ADDITION,
    MUTATION,
    DELETION
  ]

  /**
  *
  */
  export function toString(type: MutationType): string | undefined {
    switch (type) {
      case ADDITION: return 'ADDITION'
      case MUTATION: return 'MUTATION'
      case DELETION: return 'DELETION'
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
