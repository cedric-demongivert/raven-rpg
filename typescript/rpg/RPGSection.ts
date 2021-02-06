import { List } from 'immutable'

import { Empty } from '../Empty'

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
  public constructor(properties: RPGSection.Properties = Empty.OBJECT) {
    this.type = RPGElementType.SECTION
    this.identifier = properties.identifier || undefined
    this.title = properties.title || Empty.STRING
    this.keywords = properties.keywords || List()
    this.children = properties.children || RPGDocument.EMPTY
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): RPGSection {
    if (this.identifier === identifier) {
      return this
    } else {
      return new RPGSection({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setTitle(title: string): RPGSection {
    if (this.title === title) {
      return this
    } else {
      return new RPGSection({ ...this, title })
    }
  }

  /**
  *
  */
  public setKeywords(keywords: List<string>): RPGSection {
    if (this.keywords === keywords) {
      return this
    } else {
      return new RPGSection({ ...this, keywords })
    }
  }

  /**
  *
  */
  public setChildren(children: RPGDocument): RPGSection {
    if (this.children === children) {
      return this
    } else {
      return new RPGSection({ ...this, children })
    }
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
    title?: string,

    /**
    *
    */
    keywords?: List<string>,

    /**
    *
    */
    children?: RPGDocument
  }

  /**
  *
  */
  export function compareByTitle(left: RPGSection, right: RPGSection): number {
    return left.title.localeCompare(right.title)
  }

  /**
  *
  */
  export const EMPTY: RPGSection = Object.freeze(new RPGSection())

  /**
  *
  */
  export function empty(): RPGSection {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): RPGSection {
    return new RPGSection(properties)
  }
}
