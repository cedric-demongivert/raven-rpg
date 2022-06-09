import { List, Set } from 'immutable'

import { Hypertext } from '../state/hypertext/Hypertext'
import { CorvusBookBuilder } from './CorvusBookBuilder'
import { CorvusElement } from './CorvusElement'
import { CorvusTag } from './CorvusTag'
import { CorvusTagBuilder } from './CorvusTagBuilder'

import { StaticCorvusDocument } from './StaticCorvusDocument'

/**
*
*/
export class CorvusBook extends StaticCorvusDocument {
  /**
  *
  */
  public readonly lang: string

  /**
  *
  */
  public readonly title: string

  /**
  *
  */
  public readonly summary: Hypertext | undefined

  /**
  *
  */
  public readonly classes: Set<string>

  /**
  *
  */
  public readonly tagDefinitions: List<CorvusTag>

  /**
  *
  */
  public static create(properties: CorvusBookBuilder): CorvusBook {
    return new CorvusBook(properties)
  }

  /**
  *
  */
  private constructor(properties: CorvusBookBuilder) {
    super(properties)
    this.lang = properties.lang
    this.title = properties.title
    this.summary = properties.summary || undefined
    this.classes = Set(properties.classes)
    this.tagDefinitions = List(properties.tagDefinitions.map(CorvusTagBuilder.instantiate).sort(CorvusTag.compareByIdentifier))
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusBook) {
      return (
        other.lang === this.lang &&
        other.title === this.title &&
        Hypertext.equals(other.summary, this.summary) &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusBook {
  /**
  *
  */
  export function is(element: CorvusElement | null | undefined): element is CorvusBook {
    return element && element instanceof CorvusBook
  }

  /**
  *
  */
  export function assert(element: CorvusElement | null | undefined, message?: string | undefined): asserts element is CorvusBook {
    if (element == undefined || !(element instanceof CorvusBook)) {
      throw new Error(message || 'The given element is not a corvus book.')
    }
  }
}
