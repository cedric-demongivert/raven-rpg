import { Sets } from '../data/Sets'

import { CorvusSection } from './CorvusSection'
import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'

/**
*
*/
export class CorvusSectionBuilder implements CorvusDocumentModelBuilder<CorvusSection> {
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
  public static create(): CorvusSectionBuilder {
    return new CorvusSectionBuilder()
  }

  /**
  *
  */
  private constructor() {
    this.title = 'Untitled section'
    this.classes = new Set()
    this.keywords = new Set()
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
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusSectionBuilder) {
      return (
        other.title === this.title &&
        Sets.deeplyEquals(other.keywords, this.keywords) &&
        Sets.deeplyEquals(other.classes, this.classes)
      )
    }

    return false
  }
}