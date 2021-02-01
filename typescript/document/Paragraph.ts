import { Empty } from '../Empty'

import { Hypertext } from '../hypertext/Hypertext'

import { DocumentElement } from './DocumentElement'
import { DocumentElementType } from './DocumentElementType'

/**
*
*/
export class Paragraph implements DocumentElement {
  /**
  *
  */
  public readonly type: DocumentElementType.PARAGRAPH

  /**
  *
  */
  public readonly identifier: string | undefined

  /**
  *
  */
  public readonly title: string | undefined

  /**
  *
  */
  public readonly content: Hypertext

  /**
  *
  */
  public constructor(properties: Paragraph.Properties = Empty.OBJECT) {
    this.type = DocumentElementType.PARAGRAPH
    this.identifier = properties.identifier || undefined
    this.title = properties.title || undefined
    this.content = properties.content || Hypertext.empty()
  }

  /**
  *
  */
  public setTitle(title: string | undefined): Paragraph {
    if (this.title === title) {
      return this
    } else {
      return new Paragraph({ ...this, title })
    }
  }

  /**
  *
  */
  public setContent(content: Hypertext): Paragraph {
    if (this.content === content) {
      return this
    } else {
      return new Paragraph({ ...this, content })
    }
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): Paragraph {
    if (this.identifier === identifier) {
      return this
    } else {
      return new Paragraph({ ...this, identifier })
    }
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
        other.title === this.title &&
        other.content.equals(this.content)
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
    identifier?: string | undefined,

    /**
    *
    */
    title?: string | undefined,

    /**
    *
    */
    content?: Hypertext
  }

  /**
  *
  */
  export const EMPTY: Paragraph = Object.freeze(new Paragraph())

  /**
  *
  */
  export function empty(): Paragraph {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): Paragraph {
    return new Paragraph(properties)
  }
}
