export type RPGRulesetLayout = number

export namespace RPGRulesetLayout {
  /**
  *
  */
  export type ONE_COLUMN = 0

  /**
  *
  */
  export type TWO_COLUMN = 1

  /**
  *
  */
  export const ONE_COLUMN: ONE_COLUMN = 0

  /**
  *
  */
  export const TWO_COLUMN: TWO_COLUMN = 1

  /**
  *
  */
  export const ALL: RPGRulesetLayout[] = [
    ONE_COLUMN,
    TWO_COLUMN
  ]

  /**
  *
  */
  export const DEFAULT: RPGRulesetLayout = ONE_COLUMN

  /**
  *
  */
  export function toString(layout: RPGRulesetLayout): string | undefined {
    switch (layout) {
      case ONE_COLUMN: return 'ONE_COLUMN'
      case TWO_COLUMN: return 'TWO_COLUMN'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(type: RPGRulesetLayout): string {
    return '#' + type + ' (' + (toString(type) || 'undefined') + ')'
  }
}
