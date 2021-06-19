import { Hypertext } from '../state/hypertext/Hypertext'

import { StaticCorvusElementBuilder } from './StaticCorvusElementBuilder'
import { CorvusParagraph } from './CorvusParagraph'
import { ClassAssignableBuilder } from './ClassAssignableBuilder'

/**
*
*/
export class CorvusParagraphBuilder extends ClassAssignableBuilder(StaticCorvusElementBuilder) {
  /**
   *
   */
  public title: string | undefined

  /**
  *
  */
  public content: Hypertext

  /**
  *
  */
  public static create(): CorvusParagraphBuilder {
    return new CorvusParagraphBuilder()
  }

  /**
  *
  */
  private constructor() {
    super()

    this.title = undefined
    this.content = Hypertext.EMPTY
  }

  /**
   * 
   */
  public build(): CorvusParagraph {
    return CorvusParagraph.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusParagraphBuilder) {
      return (
        other.title === this.title &&
        other.content.equals(this.content)
      )
    }

    return false
  }
}
