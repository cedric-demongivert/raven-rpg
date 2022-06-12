import { Set } from 'immutable'

import { Document } from './Document'
import { DocumentElement } from './DocumentElement'
import { ContentNodeType } from './ContentNodeType'
import { ContentNodeVisitor } from './ContentNodeVisitor'
import { Builder } from './Builder'
import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { notNull } from '../notNull'

/**
 *
 */
export class Section implements DocumentElement {
  /**
   *
   */
  public readonly type: ContentNodeType.SECTION

  /**
   *
   */
  public readonly title: string

  /**
   *
   */
  public readonly classes: Set<string>

  /**
   *
   */
  public readonly identifier: string

  /**
   *
   */
  public readonly content: Document

  /**
   *
   */
  public constructor(properties: Partial<Section.Properties>) {
    this.type = ContentNodeType.SECTION
    this.identifier = properties.identifier == null ? Empty.STRING : properties.identifier
    this.classes = properties.classes == null ? Set() : Set(properties.classes)
    this.title = properties.title == null ? Empty.STRING : properties.title
    this.content = Builder.flatten(notNull(properties.content))
  }

  /**
   * 
   */
  public accept(visitor: ContentNodeVisitor): void {
    visitor.enterSection(this)
    Document.visit(this.content, visitor)
    visitor.exitSection(this)
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
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Section) {
      return (
        other.identifier === this.identifier &&
        other.title === this.title &&
        other.content.equals(this.content) &&
        other.classes.equals(this.classes) &&
        other.keywords.equals(this.keywords)
      )
    }

    return false
  }
}

/**
*
*/
export namespace Section {
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
    readonly content: Document | Builder<Document>
  } & DocumentElement.Properties

  /**
   * 
   */
  export function create(builder: Partial<Properties>): Section {
    return new Section(builder)
  }
}
