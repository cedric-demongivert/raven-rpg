import { notEmpty } from '../../notEmpty'

import { TextStructure } from './TextStructure'
import { TextStructureType } from './TextStructureType'

/**
 *
 */
export class Acronym implements TextStructure {
  /**
   *
   */
  public readonly type: TextStructureType.ACRONYM

  /**
   *
   */
  public readonly acronym: string

  /**
   *
   */
  public readonly expanded: string | null

  /**
   *
   */
  public constructor(acronym: string, expanded?: string | null | undefined) {
    this.type = TextStructureType.ACRONYM
    this.acronym = notEmpty(acronym.trim())
    this.expanded = expanded == null ? null : expanded
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
  export function create(acronym: string, expanded?: string | null | undefined): Acronym {
    return new Acronym(acronym, expanded)
  }
}
