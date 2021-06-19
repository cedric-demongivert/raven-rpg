import { ClassAssignableBuilder } from './ClassAssignableBuilder'
import { KeywordAssignableBuilder } from './KeywordAssignableBuilder'

import { CorvusSection } from './CorvusSection'
import { StaticCorvusNodeBuilder } from './StaticCorvusNodeBuilder'

/**
*
*/
export class CorvusSectionBuilder extends ClassAssignableBuilder(KeywordAssignableBuilder(StaticCorvusNodeBuilder)) {
  /**
  *
  */
  public title: string

  /**
  *
  */
  public static create(): CorvusSectionBuilder {
    return new CorvusSectionBuilder()
  }

  /**
  *
  */
  private constructor() {
    super()
    this.title = 'Untitled section'
  }

  /**
   * 
   */
  public subdivision(): string {
    return this.title
  }

  /**
   * 
   */
  public build(): CorvusSection {
    return CorvusSection.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusSectionBuilder) {
      return other.title === this.title
    }

    return false
  }
}