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
  public static create(content: Hypertext): Emphasize {
    return new Emphasize(content)
  }

  /**
  *
  */
  private constructor(content: Hypertext) {
    this.type = HypertextElementType.EMPHASIZE
    this.content = content
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
