
import { List } from 'immutable'

import { Builder } from '../Builder'

import { EmphasizeBuilder } from './EmphasizeBuilder'
import { EmphasizeElement } from './EmphasizeElement'
import { TextStructure } from './TextStructure'
import { TextStructureType } from './TextStructureType'

/**
 *
 */
export class Emphasize implements TextStructure {
  /**
   *
   */
  public readonly type: TextStructureType.EMPHASIZE

  /**
   *
   */
  public readonly content: List<EmphasizeElement>

  /**
   *
   */
  public constructor(builder: EmphasizeBuilder) {
    this.type = TextStructureType.EMPHASIZE
    this.content = List(builder.elements.map<EmphasizeElement>(Builder.build))
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Emphasize) {
      return other.content.equals(this.content)
    }

    return false
  }
}

/**
 * 
 */
export namespace Emphasize {
  /**
   * 
   */
  export function create(builder: EmphasizeBuilder): Emphasize {
    return new Emphasize(builder)
  }
}