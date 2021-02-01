export type DocumentSetLayout = number

export namespace DocumentSetLayout {
  /**
  *
  */
  export type ONE_COLUMN = 0

  /**
  *
  */
  export const ONE_COLUMN: ONE_COLUMN = 0

  /**
  *
  */
  export type TWO_COLUMN = 1

  /**
  *
  */
  export const TWO_COLUMN: TWO_COLUMN = 1

  /**
  *
  */
  export const DEFAULT: DocumentSetLayout = ONE_COLUMN

  /**
  *
  */
  export const ALL: DocumentSetLayout[] = [
    ONE_COLUMN,
    TWO_COLUMN
  ]

  /**
  *
  */
  export function toString(layout: DocumentSetLayout): string | undefined {
    switch (layout) {
      case ONE_COLUMN: return 'ONE_COLUMN'
      case TWO_COLUMN: return 'TWO_COLUMN'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(type: DocumentSetLayout): string {
    return '#' + type + ' (' + (toString(type) || 'undefined') + ')'
  }
}
