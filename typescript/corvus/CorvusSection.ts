import { Set } from 'immutable'
import { CorvusSectionBuilder } from './CorvusSectionBuilder'
import { CorvusElement } from './CorvusElement'
import { StaticCorvusNode } from './StaticCorvusNode'

/**
*
*/
export class CorvusSection extends StaticCorvusNode {
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
  public static create(properties: CorvusSectionBuilder): CorvusSection {
    return new CorvusSection(properties)
  }

  /**
  *
  */
  private constructor(properties: CorvusSectionBuilder) {
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
    if (super.equals(other) && other instanceof CorvusSection) {
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
  export function is(element: CorvusElement | null | undefined): element is CorvusSection {
    return element && element instanceof CorvusSection
  }

  /**
  *
  */
  export function assert(element: CorvusElement | null | undefined, message?: string | undefined): asserts element is CorvusSection {
    if (is(element)) return
    throw new Error(message || 'The given element is not a corvus document section.')
  }
}
