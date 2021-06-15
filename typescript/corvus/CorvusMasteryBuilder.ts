import { Sets } from '../data/Sets'

import { CorvusMastery } from './CorvusMastery'
import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'
import { CorvusReference } from './CorvusReference'

/**
*
*/
export class CorvusMasteryBuilder implements CorvusDocumentModelBuilder<CorvusMastery> {
  /**
  *
  */
  public title: string

  /**
  *
  */
  public readonly classes: Set<string>

  /**
  *
  */
  public readonly keywords: Set<string>

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
    this.title = 'Untitled mastery'
    this.classes = new Set()
    this.keywords = new Set()
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
  public addClasses(classes: Iterable<string>): void {
    for (const token of classes) {
      this.classes.add(token)
    }
  }

  /**
   * 
   */
  public addKeywords(keywords: Iterable<string>): void {
    for (const token of keywords) {
      this.keywords.add(token)
    }
  }

  /**
   * 
   */
  public addInnates(innates: Iterable<CorvusReference>): void {
    for (const token of innates) {
      this.innates.add(token)
    }
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
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusMasteryBuilder) {
      return (
        other.title === this.title &&
        Sets.deeplyEquals(other.keywords, this.keywords) &&
        Sets.deeplyEquals(other.classes, this.classes) &&
        Sets.deeplyEquals(other.innates, this.innates)
      )
    }

    return false
  }
}