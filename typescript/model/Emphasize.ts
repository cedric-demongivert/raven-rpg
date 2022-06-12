
import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { Set } from 'immutable'

import { notNull } from '../notNull'

import { Builder } from './Builder'
import { ContentNodeType } from './ContentNodeType'
import { ContentNodeVisitor } from './ContentNodeVisitor'

import { TextNode } from './TextNode'
import { TextualNode } from './TextualNode'

/**
 *
 */
export class Emphasize implements TextualNode {
  /**
   *
   */
  public readonly type: ContentNodeType.EMPHASIZE

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
  public readonly text: TextNode

  /**
   *
   */
  public constructor(properties: Partial<Emphasize.Properties>) {
    this.type = ContentNodeType.EMPHASIZE
    this.identifier = properties.identifier == null ? Empty.STRING : properties.identifier
    this.classes = properties.classes == null ? Set() : Set(properties.classes)
    this.text = Builder.flatten(notNull(properties.text))
  }

  /**
   * 
   */
  public accept(visitor: ContentNodeVisitor): void {
    visitor.enterEmphasize(this)
    TextNode.visit(this.text, visitor)
    visitor.exitEmphasize(this)
  }

  /**
   * 
   */
  public hasIdentifier(): boolean {
    return this.identifier.length > 0
  }

  /**
   * 
   */
  public hasClasses(): boolean {
    return this.classes.size > 0
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Emphasize) {
      return (
        this.identifier === other.identifier &&
        this.classes.equals(other.classes) &&
        this.text.equals(other.text)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace Emphasize {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly text: Builder<TextNode> | TextNode
  } & TextualNode.Properties

  /**
   * 
   */
  export function create(properties: Partial<Properties>): Emphasize {
    return new Emphasize(properties)
  }
}