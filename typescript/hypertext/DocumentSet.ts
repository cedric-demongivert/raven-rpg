import { List } from 'immutable'

import { Empty } from '../Empty'

import { DocumentElement } from './DocumentElement'
import { DocumentElementType } from './DocumentElementType'
import { Section } from './Section'
import { DocumentSetLayout } from './DocumentSetLayout'

/**
*
*/
export class DocumentSet implements DocumentElement {
  /**
  *
  */
  public readonly type: DocumentElementType.SET

  /**
  *
  */
  public readonly identifier: string | undefined

  /**
  *
  */
  public readonly content: List<Section>

  /**
  *
  */
  public readonly layout: DocumentSetLayout

  /**
  *
  */
  public constructor(properties: DocumentSet.Properties = Empty.OBJECT) {
    this.type = DocumentElementType.SET
    this.identifier = properties.identifier || undefined
    this.content = properties.content || List()
    this.layout = properties.layout || DocumentSetLayout.DEFAULT
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): DocumentSet {
    if (this.identifier === identifier) {
      return this
    } else {
      return new DocumentSet({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setContent(content: List<Section>): DocumentSet {
    if (this.content === content) {
      return this
    } else {
      return new DocumentSet({ ...this, content })
    }
  }

  /**
  *
  */
  public setLayout(layout: DocumentSetLayout): DocumentSet {
    if (this.layout === layout) {
      return this
    } else {
      return new DocumentSet({ ...this, layout })
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof DocumentSet) {
      return (
        other.identifier === this.identifier &&
        other.layout === this.layout &&
        other.content.equals(this.content)
      )
    }

    return false
  }
}

/**
*
*/
export namespace DocumentSet {
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
    content?: List<Section>,

    /**
    *
    */
    layout?: DocumentSetLayout
  }

  /**
  *
  */
  export const EMPTY: DocumentSet = new DocumentSet()

  /**
  *
  */
  export function empty(): DocumentSet {
    return EMPTY
  }

  /**
  *
  */
  export function create(content: Properties = Empty.OBJECT): DocumentSet {
    return new DocumentSet(content)
  }
}
