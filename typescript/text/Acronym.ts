import { notEmpty } from '../notEmpty'

import { AcronymBuilder } from './AcronymBuilder'
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
  public readonly expanded: string

  /**
   *
   */
  public constructor(builder: AcronymBuilder) {
    this.type = TextStructureType.ACRONYM
    this.acronym = notEmpty(builder.acronym.toString().trim())
    this.expanded = builder.expanded.toString().trim()
  }

  /**
   * 
   */
  public hasExpanded(): boolean {
    return this.expanded.length > 0
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
  export function create(builder: AcronymBuilder): Acronym {
    return new Acronym(builder)
  }
}
