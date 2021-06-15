/**
 * 
 */
export type CorvusRulesetLayout = (
  CorvusRulesetLayout.ONE_COLUMN |
  CorvusRulesetLayout.TWO_COLUMN
)

/**
 * 
 */
export namespace CorvusRulesetLayout {
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
  export const ALL: CorvusRulesetLayout[] = [
    ONE_COLUMN,
    TWO_COLUMN
  ]

  /**
  *
  */
  export const DEFAULT: CorvusRulesetLayout = ONE_COLUMN

  /**
  *
  */
  export function toString(layout: CorvusRulesetLayout): string | undefined {
    switch (layout) {
      case ONE_COLUMN: return 'ONE_COLUMN'
      case TWO_COLUMN: return 'TWO_COLUMN'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(type: CorvusRulesetLayout): string {
    return '#' + type + ' (' + (toString(type) || 'undefined') + ')'
  }
}
