import { Builder } from "../Builder"
import { CorvusFeatIndex } from "./CorvusFeatIndex"

/**
 * 
 */
export class CorvusFeatIndexBuilder implements Builder<CorvusFeatIndex> {
  /**
   * 
   */
  public constructor() {
  }

  /**
   * 
   */
  public build(): CorvusFeatIndex {
    return CorvusFeatIndex.INSTANCE
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusFeatIndexBuilder>): this {
    return this
  }

  /**
   * 
   */
  public clone(): CorvusFeatIndexBuilder {
    return this
  }

  /**
   * 
   */
  public clear(): this {
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    return other instanceof CorvusFeatIndexBuilder
  }
}

/**
 * 
 */
export namespace CorvusFeatIndexBuilder {
  /**
   * 
   */
  export const INSTANCE: CorvusFeatIndexBuilder = new CorvusFeatIndexBuilder()

  /**
   * 
   */
  export function create(): CorvusFeatIndexBuilder {
    return INSTANCE
  }
}