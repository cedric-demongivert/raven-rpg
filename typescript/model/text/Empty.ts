import { TextStructure } from './TextStructure'
import { TextStructureType } from './TextStructureType'

/**
 *
 */
export class Empty implements TextStructure {
  /**
   *
   */
  public readonly type: TextStructureType.EMPTY

  /**
   *
   */
  public constructor() {
    this.type = TextStructureType.EMPTY
  }

  /**
   *
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true
    return other instanceof Empty
  }
}

/**
 *
 */
export namespace Empty {
  /**
   * 
   */
  export const INSTANCE: Empty = new Empty()

  /**
   * 
   */
  export function create(): Empty {
    return INSTANCE
  }
}
