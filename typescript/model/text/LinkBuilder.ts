import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from "../../Builder"

import { Link } from "./Link"

/**
 * 
 */
export class LinkBuilder implements Builder<Link> {
  /**
   *
   */
  public url: string

  /**
   *
   */
  public content: string

  /**
   * 
   */
  public constructor() {
    this.url = Empty.STRING
    this.content = Empty.STRING
  }

  /**
   * 
   */
  public setURL(url: string | null): this {
    this.url = url == null ? Empty.STRING : url
    return this
  }

  /**
   * 
   */
  public setContent(content: string | null): this {
    this.content = content == null ? Empty.STRING : content
    return this
  }

  /**
   * 
   */
  public appendContent(content: string | null): this {
    if (content != null) {
      if (this.content.length === 0) {
        return this.setContent(content)
      } else {
        this.content += content
      }
    }

    return this
  }

  /**
   * 
   */
  public build(): Link {
    return new Link(this.url, this.content)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<LinkBuilder>): this {
    this.url = toCopy.url
    this.content = toCopy.content
    return this
  }

  /**
   * 
   */
  public clone(): LinkBuilder {
    return new LinkBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this.url = Empty.STRING
    this.content = Empty.STRING
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof LinkBuilder) {
      return (
        this.url === other.url &&
        this.content === other.content
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace LinkBuilder {
  /**
   * 
   */
  export function create(): LinkBuilder {
    return new LinkBuilder()
  }
}