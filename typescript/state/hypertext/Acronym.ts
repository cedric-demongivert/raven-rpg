import { HypertextElement } from './HypertextElement'
import { HypertextElementType } from './HypertextElementType'

/**
*
*/
export class Acronym implements HypertextElement {
  /**
  *
  */
  public readonly type: HypertextElementType.ACRONYM

  /**
  *
  */
  public readonly acronym: string

  /**
  *
  */
  public readonly expanded: string | undefined

  /**
  *
  */
  public static create(properties: Acronym.Properties): Acronym {
    return new Acronym(properties)
  }

  /**
  *
  */
  private constructor(properties: Acronym.Properties) {
    this.type = HypertextElementType.ACRONYM
    this.acronym = properties.acronym
    this.expanded = properties.expanded || undefined
  }

  /**
  *
  */
  public setAcronym(acronym: string): Acronym {
    if (this.acronym === acronym) {
      return this
    } else {
      return new Acronym({ ...this, acronym })
    }
  }

  /**
  *
  */
  public setExpanded(expanded: string | undefined): Acronym {
    if (this.expanded === expanded) {
      return this
    } else {
      return new Acronym({ ...this, expanded })
    }
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Acronym) {
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
export namespace Acronym {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    acronym: string,

    /**
    *
    */
    expanded?: string | undefined
  }
}
