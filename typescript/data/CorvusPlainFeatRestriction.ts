import { notEmpty } from "../notEmpty"
import { CorvusFeatRestriction } from "./CorvusFeatRestriction"

/**
 * 
 */
export class CorvusPlainFeatRestriction extends CorvusFeatRestriction {
  /**
   * 
   */
  public readonly content: string

  /**
   * 
   */
  public constructor(content: string) {
    super()
    this.content = notEmpty(content)
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusPlainFeatRestriction) {
      return other.content === this.content
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusPlainFeatRestriction {
  /**
   * 
   */
  export function create(restriction: string): CorvusPlainFeatRestriction {
    return new CorvusPlainFeatRestriction(restriction)
  }

  /**
   * 
   */
  export function is(value: unknown): value is CorvusPlainFeatRestriction {
    return value instanceof CorvusPlainFeatRestriction
  }
}