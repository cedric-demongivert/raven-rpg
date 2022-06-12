import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { Set } from 'immutable'

import { notEmpty } from '../notEmpty'
import { notNull } from '../notNull'

import { ContentNodeType } from './ContentNodeType'
import { ContentNodeVisitor } from './ContentNodeVisitor'
import { TextualNode } from './TextualNode'

/**
 *
 */
export class Acronym implements TextualNode {
  /**
   *
   */
  public readonly type: ContentNodeType.ACRONYM

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
  public readonly acronym: string

  /**
   *
   */
  public readonly expanded: string

  /**
   *
   */
  public constructor(properties: Partial<Acronym.Properties>) {
    this.type = ContentNodeType.ACRONYM
    this.identifier = properties.identifier == null ? Empty.STRING : properties.identifier
    this.classes = properties.classes == null ? Set() : Set(properties.classes)
    this.acronym = notEmpty(notNull(properties.acronym))
    this.expanded = properties.expanded == null ? Empty.STRING : properties.expanded
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
  public hasExpanded(): boolean {
    return this.expanded.length > 0
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
  public accept(visitor: ContentNodeVisitor): void {
    visitor.visitAcronym(this)
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Acronym) {
      return (
        other.identifier === this.identifier &&
        other.classes.equals(this.classes) &&
        other.acronym === this.acronym &&
        other.expanded === this.expanded
      )
    }

    return false
  }
}

/**
 *
 */
export namespace Acronym {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly acronym: string,

    /**
     * 
     */
    readonly expanded?: string | null | undefined
  } & TextualNode.Properties

  /**
   * 
   */
  export function create(properties: Partial<Properties>): Acronym {
    return new Acronym(properties)
  }
}
