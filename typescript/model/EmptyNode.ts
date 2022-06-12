import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { Set } from 'immutable'

import { ContentNode } from './ContentNode'
import { ContentNodeType } from './ContentNodeType'
import { ContentNodeVisitor } from './ContentNodeVisitor'

/**
 *
 */
export class EmptyNode implements ContentNode {
  /**
   *
   */
  public readonly type: ContentNodeType.EMPTY

  /**
   * 
   */
  public readonly identifier: string

  /**
   * 
   */
  public readonly classes: Set<string>

  /**
   *
   */
  public constructor() {
    this.type = ContentNodeType.EMPTY
    this.identifier = Empty.STRING
    this.classes = Set()
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
  public accept(visitor: ContentNodeVisitor): void {
    visitor.visitEmpty(this)
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    return other instanceof EmptyNode
  }
}

/**
 *
 */
export namespace EmptyNode {
  /**
   * 
   */
  export const INSTANCE: EmptyNode = new EmptyNode()

  /**
   * 
   */
  export function create(): EmptyNode {
    return INSTANCE
  }
}
