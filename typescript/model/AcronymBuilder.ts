import { Empty } from "@cedric-demongivert/gl-tool-utils"

import { Acronym } from "./Acronym"
import { ContentNodeBuilder } from "./ContentNodeBuilder"

/**
 * 
 */
export class AcronymBuilder extends ContentNodeBuilder<Acronym> {
  /**
   *
   */
  public acronym: string | null

  /**
   *
   */
  public expanded: string | null

  /**
   * 
   */
  public constructor() {
    super()
    this.acronym = null
    this.expanded = null
  }

  /**
   * 
   */
  public setAcronym(acronym: string | null): this {
    this.acronym = acronym == null ? Empty.STRING : acronym
    return this
  }

  /**
   * 
   */
  public setExpanded(expanded: string | null): this {
    this.acronym = expanded == null ? Empty.STRING : expanded
    return this
  }

  /**
   * 
   */
  public build(): Acronym {
    return new Acronym(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<AcronymBuilder>): this {
    super.copy(toCopy)
    this.acronym = toCopy.acronym
    this.expanded = toCopy.expanded
    return this
  }

  /**
   * 
   */
  public clone(): AcronymBuilder {
    return new AcronymBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    super.clear()
    this.acronym = null
    this.expanded = null
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof AcronymBuilder) {
      return (
        other.acronym === this.acronym &&
        other.expanded === this.expanded
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace AcronymBuilder {
  /**
   * 
   */
  export function create(): AcronymBuilder {
    return new AcronymBuilder()
  }
}