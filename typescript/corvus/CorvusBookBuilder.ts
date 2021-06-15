import { Sets } from '../data/Sets'
import { Hypertext } from '../state/hypertext/Hypertext'
import { equals } from '../utils/equals'

import { CorvusBook } from './CorvusBook'
import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'

/**
*
*/
export class CorvusBookBuilder implements CorvusDocumentModelBuilder<CorvusBook> {
  /**
    *
    */
  public lang: string | undefined

  /**
   *
   */
  public title: string | undefined

  /**
   *
   */
  public summary: Hypertext | undefined

  /**
   *
   */
  public readonly classes: Set<string>

  /**
  *
  */
  public static create(): CorvusBookBuilder {
    return new CorvusBookBuilder()
  }

  /**
  *
  */
  private constructor() {
    this.lang = undefined
    this.title = undefined
    this.summary = undefined
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
  public build(): CorvusBook {
    return CorvusBook.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusBookBuilder) {
      return (
        other.lang === this.lang &&
        other.title === this.title &&
        equals(other.summary, this.summary) &&
        Sets.deeplyEquals(other.classes, this.classes)
      )
    }

    return false
  }
}