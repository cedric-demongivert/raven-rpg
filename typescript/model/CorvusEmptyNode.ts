import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { CorvusNode } from './CorvusNode'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'

/**
 *
 */
export class CorvusEmptyNode extends CorvusNode {
  /**
   *
   */
  public readonly type: CorvusNodeType.EMPTY

  /**
   *
   */
  public constructor() {
    super(CorvusNodeType.EMPTY, Empty.OBJECT)
  }

  /**
   * 
   */
  public hasIdentifier(): boolean {
    return false
  }

  /**
   * 
   */
  public hasClasses(): boolean {
    return false
  }

  /**
   * 
   */
  public accept(visitor: CorvusNodeVisitor): void {
    visitor.enterNode(this)
    visitor.exitNode(this)
  }

  /**
   *
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    return other instanceof CorvusEmptyNode
  }
}

/**
 *
 */
export namespace CorvusEmptyNode {
  /**
   * 
   */
  export const INSTANCE: CorvusEmptyNode = new CorvusEmptyNode()

  /**
   * 
   */
  export function create(): CorvusEmptyNode {
    return INSTANCE
  }
}
