import { Duplicator } from "@cedric-demongivert/gl-tool-collection"
import { Empty } from "@cedric-demongivert/gl-tool-utils"

import { Builder } from "../Builder"
import { Acronym } from "./Acronym"

/**
 * 
 */
export class AcronymBuilder implements Builder<Acronym> {
  /**
   *
   */
  public acronym: string

  /**
   *
   */
  public expanded: string

  /**
   * 
   */
  public constructor(capacity: number = 32) {
    this.acronym = Empty.STRING
    this.expanded = Empty.STRING
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
    this.acronym = Empty.STRING
    this.expanded = Empty.STRING
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

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

  /**
   * 
   */
  export const ALLOCATOR: Duplicator<AcronymBuilder> = Duplicator.fromFactory(create)
}