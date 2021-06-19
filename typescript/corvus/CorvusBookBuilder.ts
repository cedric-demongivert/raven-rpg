import { Hypertext } from '../state/hypertext/Hypertext'
import { equals } from '../utils/equals'

import { ClassAssignableBuilder } from './ClassAssignableBuilder'
import { CorvusBook } from './CorvusBook'
import { StaticCorvusDocumentBuilder } from './StaticCorvusDocumentBuilder'

/**
*
*/
export class CorvusBookBuilder extends ClassAssignableBuilder(StaticCorvusDocumentBuilder) {
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
  public static create(): CorvusBookBuilder {
    return new CorvusBookBuilder()
  }

  /**
  *
  */
  private constructor() {
    super()
    this.lang = undefined
    this.title = undefined
    this.summary = undefined
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
    if (super.equals(other) && other instanceof CorvusBookBuilder) {
      return (
        other.lang === this.lang &&
        other.title === this.title &&
        equals(other.summary, this.summary)
      )
    }

    return false
  }
}