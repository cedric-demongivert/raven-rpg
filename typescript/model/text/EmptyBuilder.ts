import { Builder } from "../../Builder"

import { Empty } from "./Empty"

/**
 * 
 */
export class EmptyBuilder implements Builder<Empty> {
  /**
   * 
   */
  public constructor() {
  }

  /**
   * 
   */
  public build(): Empty {
    return Empty.INSTANCE
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<EmptyBuilder>): this {
    return this
  }

  /**
   * 
   */
  public clone(): EmptyBuilder {
    return new EmptyBuilder().copy(this)
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

    return other instanceof EmptyBuilder
  }
}

/**
 * 
 */
export namespace EmptyBuilder {
  /**
   * 
   */
  export const INSTANCE: EmptyBuilder = new EmptyBuilder()

  /**
   * 
   */
  export function create(): EmptyBuilder {
    return INSTANCE
  }
}