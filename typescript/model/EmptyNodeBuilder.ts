import { Builder } from "./Builder"
import { EmptyNode } from "./EmptyNode"

/**
 * 
 */
export class EmptyNodeBuilder implements Builder<EmptyNode> {
  /**
   * 
   */
  public constructor() {
  }

  /**
   * 
   */
  public build(): EmptyNode {
    return EmptyNode.INSTANCE
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<EmptyNodeBuilder>): this {
    return this
  }

  /**
   * 
   */
  public clone(): EmptyNodeBuilder {
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

    return other instanceof EmptyNodeBuilder
  }
}

/**
 * 
 */
export namespace EmptyNodeBuilder {
  /**
   * 
   */
  export const INSTANCE: EmptyNodeBuilder = new EmptyNodeBuilder()

  /**
   * 
   */
  export function create(): EmptyNodeBuilder {
    return INSTANCE
  }
}