import { Empty } from "@cedric-demongivert/gl-tool-utils"

import { CorvusAcronym } from "./CorvusAcronym"
import { CorvusNodeBuilder } from "./CorvusNodeBuilder"

/**
 * 
 */
export class CorvusAcronymBuilder extends CorvusNodeBuilder<CorvusAcronym> {
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
    this.expanded = expanded == null ? Empty.STRING : expanded
    return this
  }

  /**
   * 
   */
  public build(): CorvusAcronym {
    return new CorvusAcronym(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusAcronymBuilder>): this {
    super.copy(toCopy)
    this.acronym = toCopy.acronym
    this.expanded = toCopy.expanded
    return this
  }

  /**
   * 
   */
  public clone(): CorvusAcronymBuilder {
    return new CorvusAcronymBuilder().copy(this)
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

    if (other instanceof CorvusAcronymBuilder) {
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
export namespace CorvusAcronymBuilder {
  /**
   * 
   */
  export function create(): CorvusAcronymBuilder {
    return new CorvusAcronymBuilder()
  }
}