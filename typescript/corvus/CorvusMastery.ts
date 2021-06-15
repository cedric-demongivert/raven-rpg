import { Set } from 'immutable'
import { CorvusDocumentElement } from './CorvusDocumentElement'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'
import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentModelType } from './CorvusDocumentModelType'
import { CorvusMasteryBuilder } from './CorvusMasteryBuilder'
import { CorvusReference } from './CorvusReference'

/**
*
*/
export class CorvusMastery implements CorvusDocumentModel {
  /**
  *
  */
  public readonly type: CorvusDocumentModelType.MASTERY

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
  public static create(properties: CorvusMastery.Properties): CorvusMastery {
    return new CorvusMastery(properties)
  }

  /**
  *
  */
  private constructor(properties: CorvusMastery.Properties) {
    this.type = CorvusDocumentModelType.MASTERY
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
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusMastery) {
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
export namespace CorvusMastery {
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
    keywords?: Iterable<string> | undefined,

    /**
    *
    */
    innates?: Iterable<CorvusReference> | undefined
  }

  /**
  *
  */
  export function is(element: CorvusDocumentModel | null | undefined): element is CorvusMastery {
    return element && element instanceof CorvusMastery
  }

  /**
  *
  */
  export function assert(element: CorvusDocumentModel | null | undefined, message?: string | undefined): asserts element is CorvusMastery {
    if (element == undefined || !(element instanceof CorvusMastery)) {
      throw new Error(message || 'The given element is not a corvus characteristic.')
    }
  }

  /**
  *
  */
  export function compareByTitle(left: CorvusMastery, right: CorvusMastery): number {
    return left.title.localeCompare(right.title)
  }

  /**
  *
  */
  export function compareElementByTitle(left: CorvusDocumentElement<CorvusMastery>, right: CorvusDocumentElement<CorvusMastery>): number {
    return compareByTitle(left.model, right.model)
  }

  /**
   * 
   */
  export type Builder = CorvusMasteryBuilder

  /**
   * 
   */
  export type ElementBuilder = CorvusDocumentElementBuilder<CorvusMastery, Builder>

  /**
   * 
   */
  export const createBuilder: typeof CorvusMasteryBuilder.create = CorvusMasteryBuilder.create

  /**
   * 
   */
  export function createElementBuilder(): ElementBuilder {
    return CorvusDocumentElementBuilder.create(createBuilder())
  }
}
