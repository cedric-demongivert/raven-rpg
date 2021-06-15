import { Set } from 'immutable'

import { Hypertext } from '../state/hypertext/Hypertext'
import { CorvusBookBuilder } from './CorvusBookBuilder'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'

import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentModelType } from './CorvusDocumentModelType'

/**
*
*/
export class CorvusBook implements CorvusDocumentModel {
  /**
  *
  */
  public readonly type: CorvusDocumentModelType.BOOK

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
  public static create(properties: Readonly<CorvusBook.Properties>): CorvusBook {
    return new CorvusBook(properties)
  }

  /**
  *
  */
  private constructor(properties: CorvusBook.Properties) {
    this.type = CorvusDocumentModelType.BOOK
    this.lang = properties.lang
    this.title = properties.title
    this.summary = properties.summary || undefined
    this.classes = Set(properties.classes)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusBook) {
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
  export type Properties = {
    /**
    *
    */
    lang: string,

    /**
    *
    */
    title: string,

    /**
    *
    */
    summary?: Hypertext | undefined,

    /**
     * 
     */
    classes?: Iterable<string> | undefined
  }

  /**
  *
  */
  export function is(element: CorvusDocumentModel | null | undefined): element is CorvusBook {
    return element && element instanceof CorvusBook
  }

  /**
  *
  */
  export function assert(element: CorvusDocumentModel | null | undefined, message?: string | undefined): asserts element is CorvusBook {
    if (element == undefined || !(element instanceof CorvusBook)) {
      throw new Error(message || 'The given element is not a corvus book.')
    }
  }

  /**
   * 
   */
  export type Builder = CorvusBookBuilder

  /**
   * 
   */
  export type ElementBuilder = CorvusDocumentElementBuilder<CorvusBook, Builder>

  /**
   * 
   */
  export const createBuilder: typeof CorvusBookBuilder.create = CorvusBookBuilder.create

  /**
   * 
   */
  export function createElementBuilder(): ElementBuilder {
    return CorvusDocumentElementBuilder.create(createBuilder())
  }
}
