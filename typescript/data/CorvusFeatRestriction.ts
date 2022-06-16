import { Comparable } from "@cedric-demongivert/gl-tool-utils/types/Comparable"

/**
 * 
 */
export abstract class CorvusFeatRestriction implements Comparable {
  /**
   * 
   */
  public abstract equals(other: CorvusFeatRestriction): boolean
}

/**
 * 
 */
export namespace CorvusFeatRestriction {
  /**
   * 
   */
  export function is(value: unknown): value is CorvusFeatRestriction {
    return value instanceof CorvusFeatRestriction
  }
}