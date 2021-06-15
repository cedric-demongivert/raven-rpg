import { Set } from 'immutable'
import { CorvusDocumentElement } from './CorvusDocumentElement'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'
import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentModelType } from './CorvusDocumentModelType'
import { CorvusCharacteristicBuilder } from './CorvusCharacteristicBuilder'

/**
*
*/
export class CorvusCharacteristic implements CorvusDocumentModel {
  /**
  *
  */
  public readonly type: CorvusDocumentModelType.CHARACTERISTIC

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
  public static create(properties: CorvusCharacteristic.Properties): CorvusCharacteristic {
    return new CorvusCharacteristic(properties)
  }

  /**
  *
  */
  private constructor(properties: CorvusCharacteristic.Properties) {
    this.type = CorvusDocumentModelType.CHARACTERISTIC
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
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusCharacteristic) {
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
  export type Properties = {
    /**
    *
    */
    classes?: Iterable<string> | undefined,

    /**
    *
    */
    title: string,

    /**
    *
    */
    keywords?: Iterable<string> | undefined
  }

  /**
  *
  */
  export function is(element: CorvusDocumentModel | null | undefined): element is CorvusCharacteristic {
    return element && element instanceof CorvusCharacteristic
  }

  /**
  *
  */
  export function assert(element: CorvusDocumentModel | null | undefined, message?: string | undefined): asserts element is CorvusCharacteristic {
    if (element == undefined || !(element instanceof CorvusCharacteristic)) {
      throw new Error(message || 'The given element is not a corvus characteristic.')
    }
  }

  /**
  *
  */
  export function compareByTitle(left: CorvusCharacteristic, right: CorvusCharacteristic): number {
    return left.title.localeCompare(right.title)
  }

  /**
  *
  */
  export function compareElementByTitle(left: CorvusDocumentElement<CorvusCharacteristic>, right: CorvusDocumentElement<CorvusCharacteristic>): number {
    return compareByTitle(left.model, right.model)
  }

  /**
   * 
   */
  export type Builder = CorvusCharacteristicBuilder

  /**
   * 
   */
  export type ElementBuilder = CorvusDocumentElementBuilder<CorvusCharacteristic, Builder>

  /**
   * 
   */
  export const createBuilder: typeof CorvusCharacteristicBuilder.create = CorvusCharacteristicBuilder.create

  /**
   * 
   */
  export function createElementBuilder(): ElementBuilder {
    return CorvusDocumentElementBuilder.create(createBuilder())
  }
}
