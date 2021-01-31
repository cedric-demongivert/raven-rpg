import { Empty } from '../Empty'

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
  public readonly expanded: string

  /**
  *
  */
  public constructor(properties: Acronym.Properties = Empty.OBJECT) {
    this.type = HypertextElementType.ACRONYM
    this.acronym = properties.acronym || Empty.STRING
    this.expanded = properties.expanded || Empty.STRING
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
  public setExpanded(expanded: string): Acronym {
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
    acronym?: string,

    /**
    *
    */
    expanded?: string
  }

  /**
  *
  */
  export const EMPTY: Acronym = new Acronym()

  /**
  *
  */
  export function empty(): Acronym {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): Acronym {
    return new Acronym(properties)
  }
}
