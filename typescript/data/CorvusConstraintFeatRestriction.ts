import { notEmpty } from "../notEmpty"
import { notNull } from "../notNull"
import { CorvusFeatRestriction } from "./CorvusFeatRestriction"

/**
 * 
 */
export class CorvusConstraintFeatRestriction extends CorvusFeatRestriction {
  /**
   * 
   */
  public readonly target: string

  /**
   * 
   */
  public readonly constraint: string

  /**
   * 
   */
  public constructor(properties: Partial<CorvusConstraintFeatRestriction.Properties>) {
    super()
    this.target = notEmpty(notNull(properties.target))
    this.constraint = notEmpty(notNull(properties.constraint))
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusConstraintFeatRestriction) {
      return (
        other.target === this.target &&
        other.constraint === this.constraint
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusConstraintFeatRestriction {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    target: string,

    /**
     * 
     */
    constraint: string
  }

  /**
   * 
   */
  export function is(value: unknown): value is CorvusConstraintFeatRestriction {
    return value instanceof CorvusConstraintFeatRestriction
  }

  /**
   * 
   */
  export function create(properties: Partial<Properties>): CorvusConstraintFeatRestriction {
    return new CorvusConstraintFeatRestriction(properties)
  }
}