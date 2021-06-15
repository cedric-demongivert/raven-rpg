import { Hypertext } from '../state/hypertext/Hypertext'
import { Sets } from '../data/Sets'

import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'
import { CorvusParagraph } from './CorvusParagraph'

/**
*
*/
export class CorvusParagraphBuilder implements CorvusDocumentModelBuilder<CorvusParagraph> {
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
  public readonly classes: Set<string>

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
    this.title = undefined
    this.content = Hypertext.EMPTY
    this.classes = new Set()
  }

  /**
   * 
   */
  public addClasses(classes: Iterable<string>): void {
    for (const token of classes) {
      this.classes.add(token)
    }
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
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusParagraphBuilder) {
      return (
        other.title === this.title &&
        other.content.equals(this.content) &&
        Sets.deeplyEquals(other.classes, this.classes)
      )
    }

    return false
  }
}
