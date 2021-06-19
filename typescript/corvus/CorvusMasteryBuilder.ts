import { Sets } from '../data/Sets'

import { CorvusMastery } from './CorvusMastery'
import { CorvusReference } from './CorvusReference'
import { ClassAssignableBuilder } from './ClassAssignableBuilder'
import { KeywordAssignableBuilder } from './KeywordAssignableBuilder'
import { StaticCorvusNodeBuilder } from './StaticCorvusNodeBuilder'

/**
*
*/
export class CorvusMasteryBuilder extends ClassAssignableBuilder(KeywordAssignableBuilder(StaticCorvusNodeBuilder)) {
  /**
  *
  */
  public title: string

  /**
  *
  */
  public readonly innates: Set<CorvusReference>

  /**
  *
  */
  public static create(): CorvusMasteryBuilder {
    return new CorvusMasteryBuilder()
  }

  /**
  *
  */
  private constructor() {
    super()
    this.title = 'Untitled mastery'
    this.innates = new Set()
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
  public addInnates(innates: Iterable<CorvusReference>): this {
    for (const token of innates) {
      this.innates.add(token)
    }

    return this
  }

  /**
   * 
   */
  public build(): CorvusMastery {
    return CorvusMastery.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusMasteryBuilder) {
      return (
        other.title === this.title &&
        Sets.deeplyEquals(other.innates, this.innates)
      )
    }

    return false
  }
}