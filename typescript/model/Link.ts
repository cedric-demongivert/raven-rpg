import { Set } from 'immutable'

import { notEmpty } from '../notEmpty'
import { notNull } from '../notNull'

import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { TextualNode } from './TextualNode'
import { ContentNodeType } from './ContentNodeType'
import { ContentNodeVisitor } from './ContentNodeVisitor'

/**
 *
 */
export class Link implements TextualNode {
  /**
   *
   */
  public readonly type: ContentNodeType.LINK

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
  public readonly content: string

  /**
   *
   */
  public readonly url: string

  /**
   *
   */
  public constructor(properties: Partial<Link.Properties>) {
    this.type = ContentNodeType.LINK
    this.identifier = properties.identifier == null ? Empty.STRING : properties.identifier
    this.classes = properties.classes == null ? Set() : Set(properties.classes)
    this.url = notEmpty(notNull(properties.url))
    this.content = properties.content == null ? Empty.STRING : properties.content
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
  public hasContent(): boolean {
    return this.content.length > 0
  }

  /**
   * 
   */
  public accept(visitor: ContentNodeVisitor): void {
    visitor.visitLink(this)
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Link) {
      return (
        this.identifier === other.identifier &&
        this.classes.equals(other.classes) &&
        this.content === other.content &&
        this.url === other.url
      )
    }

    return false
  }
}

/**
 *
 */
export namespace Link {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly url: string,

    /**
     * 
     */
    readonly content?: string | null | undefined
  } & TextualNode.Properties

  /**
   * 
   */
  export function create(properties: Partial<Properties>): Link {
    return new Link(properties)
  }
}
