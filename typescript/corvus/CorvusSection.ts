import { Set } from 'immutable'
import { CorvusDocumentElement } from './CorvusDocumentElement'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'
import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentModelType } from './CorvusDocumentModelType'
import { CorvusSectionBuilder } from './CorvusSectionBuilder'

/**
*
*/
export class CorvusSection implements CorvusDocumentModel {
  /**
  *
  */
  public readonly type: CorvusDocumentModelType.SECTION

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
  public static create(properties: CorvusSection.Properties): CorvusSection {
    return new CorvusSection(properties)
  }

  /**
  *
  */
  private constructor(properties: CorvusSection.Properties) {
    this.type = CorvusDocumentModelType.SECTION
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

    if (other instanceof CorvusSection) {
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
export namespace CorvusSection {
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
  export function is(element: CorvusDocumentModel | null | undefined): element is CorvusSection {
    return element && element instanceof CorvusSection
  }

  /**
  *
  */
  export function assert(element: CorvusDocumentModel | null | undefined, message?: string | undefined): asserts element is CorvusSection {
    if (element == undefined || !(element instanceof CorvusSection)) {
      throw new Error(message || 'The given element is not a corvus document section.')
    }
  }

  /**
  *
  */
  export function compareByTitle(left: CorvusSection, right: CorvusSection): number {
    return left.title.localeCompare(right.title)
  }

  /**
  *
  */
  export function compareElementByTitle(left: CorvusDocumentElement<CorvusSection>, right: CorvusDocumentElement<CorvusSection>): number {
    return compareByTitle(left.model, right.model)
  }

  /**
   * 
   */
  export type Builder = CorvusSectionBuilder

  /**
   * 
   */
  export type ElementBuilder = CorvusDocumentElementBuilder<CorvusSection, Builder>

  /**
   * 
   */
  export const createBuilder: typeof CorvusSectionBuilder.create = CorvusSectionBuilder.create

  /**
   * 
   */
  export function createElementBuilder(): ElementBuilder {
    return CorvusDocumentElementBuilder.create(createBuilder())
  }
}
