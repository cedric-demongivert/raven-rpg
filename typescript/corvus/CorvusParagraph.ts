import { Set } from 'immutable'

import { Hypertext } from '../state/hypertext/Hypertext'
import { StaticCorvusElement } from './StaticCorvusElement'

import { CorvusParagraphBuilder } from './CorvusParagraphBuilder'
import { CorvusElement } from './CorvusElement'

/**
*
*/
export class CorvusParagraph extends StaticCorvusElement {
  /**
  *
  */
  public readonly title: string | undefined

  /**
  *
  */
  public readonly classes: Set<string>

  /**
  *
  */
  public readonly content: Hypertext

  /**
  *
  */
  public static create(properties: Readonly<CorvusParagraphBuilder>): CorvusParagraph {
    return new CorvusParagraph(properties)
  }

  /**
  *
  */
  private constructor(properties: Readonly<CorvusParagraphBuilder>) {
    super(properties)

    this.title = properties.title
    this.content = properties.content
    this.classes = Set(properties.classes)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusParagraph) {
      return (
        other.title === this.title &&
        other.content.equals(this.content) &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusParagraph {
  /**
  *
  */
  export function is(element: CorvusElement | null | undefined): element is CorvusParagraph {
    return element && element instanceof CorvusParagraph
  }

  /**
  *
  */
  export function assert(element: CorvusElement | null | undefined, message?: string | undefined): asserts element is CorvusParagraph {
    if (is(element)) return
    throw new Error(message || 'The given element is not a corvus document paragraph.')
  }
}
