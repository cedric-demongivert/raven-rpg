import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { ContentNodeBuilder } from "./ContentNodeBuilder"

import { Link } from "./Link"

/**
 * 
 */
export class LinkBuilder extends ContentNodeBuilder<Link> {
  /**
   *
   */
  public url: string | null

  /**
   *
   */
  public content: string | null

  /**
   * 
   */
  public constructor() {
    super()
    this.url = null
    this.content = null
  }

  /**
   * 
   */
  public setURL(url: string | null): this {
    this.url = url
    return this
  }

  /**
   * 
   */
  public setContent(content: string | null): this {
    this.content = content
    return this
  }

  /**
   * 
   */
  public build(): Link {
    return new Link(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<LinkBuilder>): this {
    super.copy(toCopy)
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
    super.clear()
    this.url = null
    this.content = null
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

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