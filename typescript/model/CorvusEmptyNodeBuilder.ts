import { Builder } from "../Builder"
import { CorvusEmptyNode } from "./CorvusEmptyNode"

/**
 * 
 */
export class CorvusEmptyNodeBuilder implements Builder<CorvusEmptyNode> {
  /**
   * 
   */
  public constructor() {
  }

  /**
   * 
   */
  public build(): CorvusEmptyNode {
    return CorvusEmptyNode.INSTANCE
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusEmptyNodeBuilder>): this {
    return this
  }

  /**
   * 
   */
  public clone(): CorvusEmptyNodeBuilder {
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

    return other instanceof CorvusEmptyNodeBuilder
  }
}

/**
 * 
 */
export namespace CorvusEmptyNodeBuilder {
  /**
   * 
   */
  export const INSTANCE: CorvusEmptyNodeBuilder = new CorvusEmptyNodeBuilder()

  /**
   * 
   */
  export function create(): CorvusEmptyNodeBuilder {
    return INSTANCE
  }
}