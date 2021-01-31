import { HypertextElement } from './HypertextElement'
import { HypertextElementType } from './HypertextElementType'
import { Hypertext } from './Hypertext'

/**
*
*/
export class Emphasize implements HypertextElement {
  /**
  *
  */
  public readonly type: HypertextElementType.EMPHASIZE

  /**
  *
  */
  public readonly content: Hypertext

  /**
  *
  */
  public constructor(content?: Hypertext) {
    this.type = HypertextElementType.EMPHASIZE
    this.content = content || Hypertext.EMPTY
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
  export const EMPTY: Emphasize = Object.freeze(new Emphasize())

  /**
  *
  */
  export function empty(): Emphasize {
    return EMPTY
  }

  /**
  *
  */
  export function create(content?: Hypertext): Emphasize {
    return new Emphasize(content || Hypertext.EMPTY)
  }
}
