import { Set } from 'immutable'

import { Document } from './Document'
import { DocumentElement } from './DocumentElement'
import { DocumentElementType } from './DocumentElementType'
import { SectionBuilder } from './SectionBuilder'

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
  public readonly classes: Set<string>

  /**
   *
   */
  public readonly keywords: Set<string>

  /**
   *
   */
  public readonly identifier: string

  /**
   *
   */
  public readonly title: string

  /**
   *
   */
  public readonly content: Document

  /**
   *
   */
  public constructor(builder: SectionBuilder) {
    this.type = DocumentElementType.SECTION
    this.identifier = builder.identifier
    this.title = builder.title
    this.content = builder.content.build()
    this.classes = builder.classes.build()
    this.keywords = builder.keywords.build()
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
  export function create(builder: SectionBuilder): Section {
    return new Section(builder)
  }

  /**
   *
   */
  export const EMPTY: Section = create(new SectionBuilder())

  /**
   *
   */
  export function empty(): Section {
    return EMPTY
  }
}
