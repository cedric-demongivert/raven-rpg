
import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { Set } from 'immutable'

import { notNull } from '../notNull'

import { Builder } from '../Builder'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'

import { CorvusText } from './CorvusText'
import { CorvusTextNode } from './CorvusTextNode'

/**
 *
 */
export class CorvusEmphasize extends CorvusTextNode {
  /**
   *
   */
  public readonly type: CorvusNodeType.EMPHASIZE

  /**
   *
   */
  public readonly text: CorvusText

  /**
   *
   */
  public constructor(properties: Partial<CorvusEmphasize.Properties>) {
    super(CorvusNodeType.EMPHASIZE, properties)

    this.text = Builder.flatten(notNull(properties.text))
  }

  /**
   * 
   */
  public accept(visitor: CorvusNodeVisitor): void {
    visitor.enterNode(this)
    CorvusText.visit(this.text, visitor)
    visitor.exitNode(this)
  }

  /**
   *
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusEmphasize) {
      return this.text.equals(other.text)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusEmphasize {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly text: Builder<CorvusText> | CorvusText
  } & CorvusTextNode.Properties

  /**
   * 
   */
  export function create(properties: Partial<Properties>): CorvusEmphasize {
    return new CorvusEmphasize(properties)
  }
}