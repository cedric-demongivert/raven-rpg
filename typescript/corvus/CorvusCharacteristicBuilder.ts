import { Sets } from '../data/Sets'

import { CorvusCharacteristic } from './CorvusCharacteristic'
import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'

/**
*
*/
export class CorvusCharacteristicBuilder implements CorvusDocumentModelBuilder<CorvusCharacteristic> {
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
  public static create(): CorvusCharacteristicBuilder {
    return new CorvusCharacteristicBuilder()
  }

  /**
  *
  */
  private constructor() {
    this.title = 'Untitled characteristic'
    this.classes = new Set()
    this.keywords = new Set()
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
  public build(): CorvusCharacteristic {
    return CorvusCharacteristic.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusCharacteristicBuilder) {
      return (
        other.title === this.title &&
        Sets.deeplyEquals(other.keywords, this.keywords) &&
        Sets.deeplyEquals(other.classes, this.classes)
      )
    }

    return false
  }
}