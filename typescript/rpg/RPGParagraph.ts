import { Empty } from '../Empty'

import { Hypertext } from '../hypertext/Hypertext'

import { RPGElement } from './RPGElement'
import { RPGElementType } from './RPGElementType'

/**
*
*/
export class RPGParagraph implements RPGElement {
  /**
  *
  */
  public readonly type: RPGElementType.PARAGRAPH

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
  public constructor(properties: RPGParagraph.Properties = Empty.OBJECT) {
    this.type = RPGElementType.PARAGRAPH
    this.identifier = properties.identifier || undefined
    this.title = properties.title || undefined
    this.content = properties.content || Hypertext.empty()
  }

  /**
  *
  */
  public setTitle(title: string | undefined): RPGParagraph {
    if (this.title === title) {
      return this
    } else {
      return new RPGParagraph({ ...this, title })
    }
  }

  /**
  *
  */
  public setContent(content: Hypertext): RPGParagraph {
    if (this.content === content) {
      return this
    } else {
      return new RPGParagraph({ ...this, content })
    }
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): RPGParagraph {
    if (this.identifier === identifier) {
      return this
    } else {
      return new RPGParagraph({ ...this, identifier })
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGParagraph) {
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
export namespace RPGParagraph {
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
  export const EMPTY: RPGParagraph = Object.freeze(new RPGParagraph())

  /**
  *
  */
  export function empty(): RPGParagraph {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): RPGParagraph {
    return new RPGParagraph(properties)
  }
}
