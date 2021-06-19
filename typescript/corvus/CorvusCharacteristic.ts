import { Set } from 'immutable'
import { StaticCorvusNode } from './StaticCorvusNode'
import { CorvusCharacteristicBuilder } from './CorvusCharacteristicBuilder'
import { CorvusElement } from './CorvusElement'

/**
*
*/
export class CorvusCharacteristic extends StaticCorvusNode {
  /**
  *
  */
  public readonly title: string

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
  public static create(properties: Readonly<CorvusCharacteristicBuilder>): CorvusCharacteristic {
    return new CorvusCharacteristic(properties)
  }

  /**
  *
  */
  private constructor(properties: Readonly<CorvusCharacteristicBuilder>) {
    super(properties)

    this.title = properties.title
    this.classes = Set(properties.classes)
    this.keywords = Set(properties.keywords)
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
    if (super.equals(other) && other instanceof CorvusCharacteristic) {
      return (
        other.title === this.title &&
        other.keywords.equals(this.keywords) &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusCharacteristic {
  /**
  *
  */
  export function is(element: CorvusElement | null | undefined): element is CorvusCharacteristic {
    return element && element instanceof CorvusCharacteristic
  }

  /**
  *
  */
  export function assert(element: CorvusElement | null | undefined, message?: string | undefined): asserts element is CorvusCharacteristic {
    if (is(element)) return
    throw new Error(message || 'The given element is not a corvus characteristic.')
  }
}
