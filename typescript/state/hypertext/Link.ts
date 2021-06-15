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
  public readonly content: string | undefined

  /**
  *
  */
  public readonly url: string

  /**
   * 
   */
  public static create(properties: Link.Properties): Link {
    return new Link(properties)
  }

  /**
  *
  */
  private constructor(properties: Link.Properties) {
    this.type = HypertextElementType.LINK
    this.content = properties.content
    this.url = properties.url
  }

  /**
  *
  */
  public setContent(content: string | undefined): Link {
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
    content?: string | undefined,

    /**
    *
    */
    url: string
  }
}
