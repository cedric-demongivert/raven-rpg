import { Set } from 'immutable'

import { Builder } from '../Builder'
import { CorvusText } from './CorvusText'

import { CorvusDocumentNode } from './CorvusDocumentNode'
import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'
import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { notNull } from '../notNull'

/**
 *
 */
export class CorvusParagraph extends CorvusDocumentNode {
  /**
   *
   */
  public readonly type: CorvusNodeType.PARAGRAPH

  /**
   *
   */
  public readonly title: string

  /**
   *
   */
  public readonly text: CorvusText

  /**
   *
   */
  public constructor(properties: Partial<CorvusParagraph.Properties>) {
    super(CorvusNodeType.PARAGRAPH, properties)
    this.title = properties.title == null ? Empty.STRING : properties.title
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
  public hasTitle(): boolean {
    return this.title.length > 0
  }

  /**
   *
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusParagraph) {
      return (
        other.title === this.title &&
        other.text.equals(this.text)
      )
    }

    return false
  }
}

/**
 *
 */
export namespace CorvusParagraph {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly title?: string | null | undefined,

    /**
     * 
     */
    readonly text: Builder<CorvusText> | CorvusText
  } & CorvusDocumentNode.Properties

  /**
   * 
   */
  export function create(builder: Partial<Properties>): CorvusParagraph {
    return new CorvusParagraph(builder)
  }
}
