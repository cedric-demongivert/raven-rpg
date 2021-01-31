import { Empty } from '../Empty'

import { HypertextElement } from './HypertextElement'
import { HypertextElementType } from './HypertextElementType'

/**
*
*/
export class Link implements HypertextElement {
  /**
  *
  */
  public readonly type: HypertextElementType.LINK

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
  public constructor(properties: Link.Properties = Empty.OBJECT) {
    this.type = HypertextElementType.LINK
    this.content = properties.content || Empty.STRING
    this.url = properties.url || Empty.STRING
  }

  /**
  *
  */
  public setContent(content: string): Link {
    if (this.content === content) {
      return this
    } else {
      return new Link({ ...this, content })
    }
  }

  /**
  *
  */
  public setURL(url: string): Link {
    if (this.url === url) {
      return this
    } else {
      return new Link({ ...this, url })
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Link) {
      return (
        other.content === this.content &&
        other.url === this.url
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
    content?: string,

    /**
    *
    */
    url?: string
  }

  /**
  *
  */
  export const EMPTY: Link = Object.freeze(new Link())

  /**
  *
  */
  export function empty(): Link {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): Link {
    return new Link(properties)
  }
}
