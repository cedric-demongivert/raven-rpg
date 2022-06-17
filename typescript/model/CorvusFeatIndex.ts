import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { CorvusNode } from './CorvusNode'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'

/**
 *
 */
export class CorvusFeatIndex extends CorvusNode {
  /**
   *
   */
  public readonly type: CorvusNodeType.FEAT_INDEX

  /**
   *
   */
  public constructor() {
    super(CorvusNodeType.FEAT_INDEX, Empty.OBJECT)
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

    return other instanceof CorvusFeatIndex
  }
}

/**
 *
 */
export namespace CorvusFeatIndex {
  /**
   * 
   */
  export const INSTANCE: CorvusFeatIndex = new CorvusFeatIndex()

  /**
   * 
   */
  export function create(): CorvusFeatIndex {
    return INSTANCE
  }
}
