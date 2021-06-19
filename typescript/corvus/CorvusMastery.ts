import { Set } from 'immutable'
import { CorvusElement } from './CorvusElement'
import { CorvusMasteryBuilder } from './CorvusMasteryBuilder'
import { CorvusReference } from './CorvusReference'
import { StaticCorvusNode } from './StaticCorvusNode'

/**
*
*/
export class CorvusMastery extends StaticCorvusNode {
  /**
  *
  */
  public readonly classes: Set<string>

  /**
  *
  */
  public readonly title: string

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
  public static create(properties: Readonly<CorvusMasteryBuilder>): CorvusMastery {
    return new CorvusMastery(properties)
  }

  /**
  *
  */
  private constructor(properties: Readonly<CorvusMasteryBuilder>) {
    super(properties)
    this.title = properties.title
    this.innates = Set(properties.innates)
    this.classes = Set(properties.classes)
    this.keywords = Set(properties.keywords)
  }

  /**
   * 
   */
  public isReferingToCharacteristic(key: string): boolean {
    for (const reference of this.innates) {
      if (reference.element === key) {
        return true
      }
    }

    return false
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
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusMastery) {
      return (
        other.title == this.title &&
        other.classes.equals(this.classes) &&
        other.keywords.equals(this.keywords) &&
        other.innates.equals(this.innates)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusMastery {
  /**
  *
  */
  export function is(element: CorvusElement | null | undefined): element is CorvusMastery {
    return element && element instanceof CorvusMastery
  }

  /**
  *
  */
  export function assert(element: CorvusElement | null | undefined, message?: string | undefined): asserts element is CorvusMastery {
    if (element == undefined || !(element instanceof CorvusMastery)) {
      throw new Error(message || 'The given element is not a corvus characteristic.')
    }
  }
}
