import { List } from 'immutable'
import { Set } from 'immutable'

import { RPGDocument } from './RPGDocument'
import { RPGNode } from './RPGNode'
import { RPGElementType } from './RPGElementType'

/**
*
*/
export class RPGSection implements RPGNode {
  /**
  *
  */
  public readonly type: RPGElementType.SECTION

  /**
  *
  */
  public readonly identifier: string | undefined

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
  public readonly keywords: List<string>

  /**
  *
  */
  public readonly children: RPGDocument

  /**
   * 
   */
  public readonly isNode: true

  /**
   * 
   */
  public static create(properties: RPGSection.Properties): RPGSection {
    return new RPGSection(properties)
  }

  /**
  *
  */
  private constructor(properties: RPGSection.Properties) {
    this.type = RPGElementType.SECTION
    this.identifier = properties.identifier || undefined
    this.title = properties.title
    this.classes = properties.classes || Set()
    this.keywords = properties.keywords || List()
    this.children = properties.children || RPGDocument.EMPTY
    this.isNode = true
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGSection) {
      return (
        other.identifier === this.identifier &&
        other.title === this.title &&
        other.keywords.equals(this.keywords) &&
        other.children.equals(this.children)
      )
    }

    return false
  }
}

/**
*
*/
export namespace RPGSection {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    identifier?: string | undefined,

    /**
    *
    */
    title: string,

    /**
    *
    */
    keywords?: List<string> | undefined,

    /**
    *
    */
    classes?: Set<string> | undefined,

    /**
    *
    */
    children?: RPGDocument | undefined
  }

  /**
  *
  */
  export function compareByTitle(left: RPGSection, right: RPGSection): number {
    return left.title.localeCompare(right.title)
  }
}
