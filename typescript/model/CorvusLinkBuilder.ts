import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { CorvusNodeBuilder } from "./CorvusNodeBuilder"

import { CorvusLink } from "./CorvusLink"

/**
 * 
 */
export class CorvusLinkBuilder extends CorvusNodeBuilder<CorvusLink> {
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
  public build(): CorvusLink {
    return new CorvusLink(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusLinkBuilder>): this {
    super.copy(toCopy)
    this.url = toCopy.url
    this.content = toCopy.content
    return this
  }

  /**
   * 
   */
  public clone(): CorvusLinkBuilder {
    return new CorvusLinkBuilder().copy(this)
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

    if (other instanceof CorvusLinkBuilder) {
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
export namespace CorvusLinkBuilder {
  /**
   * 
   */
  export function create(): CorvusLinkBuilder {
    return new CorvusLinkBuilder()
  }
}