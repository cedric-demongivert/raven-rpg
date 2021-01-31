import { List } from 'immutable'

import { Empty } from '../Empty'

import { Document } from './Document'
import { DocumentElement } from './DocumentElement'
import { DocumentElementType } from './DocumentElementType'

/**
*
*/
export class Section implements DocumentElement {
  /**
  *
  */
  public readonly type: DocumentElementType.SECTION

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
  public readonly content: Document

  /**
  *
  */
  public constructor(properties: Section.Properties = Empty.OBJECT) {
    this.type = DocumentElementType.SECTION
    this.identifier = properties.identifier || undefined
    this.title = properties.title || Empty.STRING
    this.keywords = properties.keywords || List()
    this.content = properties.content || Document.EMPTY
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): Section {
    if (this.identifier === identifier) {
      return this
    } else {
      return new Section({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setTitle(title: string): Section {
    if (this.title === title) {
      return this
    } else {
      return new Section({ ...this, title })
    }
  }

  /**
  *
  */
  public setKeywords(keywords: List<string>): Section {
    if (this.keywords === keywords) {
      return this
    } else {
      return new Section({ ...this, keywords })
    }
  }

  /**
  *
  */
  public setContent(content: Document): Section {
    if (this.content === content) {
      return this
    } else {
      return new Section({ ...this, content })
    }
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
        other.keywords.equals(this.keywords) &&
        other.content.equals(this.content)
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
    content?: Document
  }

  /**
  *
  */
  export function compareByTitle(left: Section, right: Section): number {
    return left.title.localeCompare(right.title)
  }

  /**
  *
  */
  export const EMPTY: Section = Object.freeze(new Section())

  /**
  *
  */
  export function empty(): Section {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): Section {
    return new Section(properties)
  }
}
