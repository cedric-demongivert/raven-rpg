import { Set } from 'immutable'

import { Builder } from './Builder'
import { TextNode } from './TextNode'

import { DocumentElement } from './DocumentElement'
import { ContentNodeType } from './ContentNodeType'
import { ContentNodeVisitor } from './ContentNodeVisitor'
import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { notNull } from '../notNull'

/**
 *
 */
export class Paragraph implements DocumentElement {
  /**
   *
   */
  public readonly type: ContentNodeType.PARAGRAPH

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
  public readonly title: string

  /**
   *
   */
  public readonly text: TextNode

  /**
   *
   */
  public constructor(properties: Partial<Paragraph.Properties>) {
    this.type = ContentNodeType.PARAGRAPH
    this.identifier = properties.identifier == null ? Empty.STRING : properties.identifier
    this.classes = properties.classes == null ? Set() : Set(properties.classes)
    this.title = properties.title == null ? Empty.STRING : properties.title
    this.text = Builder.flatten(notNull(properties.text))
  }

  /**
   * 
   */
  public accept(visitor: ContentNodeVisitor): void {
    visitor.enterParagraph(this)
    TextNode.visit(this.text, visitor)
    visitor.exitParagraph(this)
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
  public hasIdentifier(): boolean {
    return this.identifier.length > 0
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
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Paragraph) {
      return (
        other.identifier === this.identifier &&
        other.classes.equals(this.classes) &&
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
export namespace Paragraph {
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
    readonly text: Builder<TextNode> | TextNode
  } & DocumentElement.Properties

  /**
   * 
   */
  export function create(builder: Partial<Properties>): Paragraph {
    return new Paragraph(builder)
  }
}
