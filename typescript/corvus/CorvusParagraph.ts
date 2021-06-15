import { Set } from 'immutable'

import { Hypertext } from '../state/hypertext/Hypertext'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'

import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentModelType } from './CorvusDocumentModelType'

import { CorvusParagraphBuilder } from './CorvusParagraphBuilder'

/**
*
*/
export class CorvusParagraph implements CorvusDocumentModel {
  /**
  *
  */
  public readonly type: CorvusDocumentModelType.PARAGRAPH

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
  public static create(properties: Readonly<CorvusParagraph.Properties>): CorvusParagraph {
    return new CorvusParagraph(properties)
  }

  /**
  *
  */
  private constructor(properties: Readonly<CorvusParagraph.Properties>) {
    this.type = CorvusDocumentModelType.PARAGRAPH
    this.title = properties.title || undefined
    this.content = properties.content
    this.classes = Set(properties.classes)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusParagraph) {
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
  export type Properties = {
    /**
    *
    */
    title?: string | undefined,

    /**
    *
    */
    classes?: Iterable<string> | undefined,

    /**
    *
    */
    content?: Hypertext | undefined
  }

  /**
  *
  */
  export function is(element: CorvusDocumentModel | null | undefined): element is CorvusParagraph {
    return element && element instanceof CorvusParagraph
  }

  /**
  *
  */
  export function assert(element: CorvusDocumentModel | null | undefined, message?: string | undefined): asserts element is CorvusParagraph {
    if (element == undefined || !(element instanceof CorvusParagraph)) {
      throw new Error(message || 'The given element is not a corvus document paragraph.')
    }
  }

  /**
   * 
   */
  export type Builder = CorvusParagraphBuilder

  /**
   * 
   */
  export type ElementBuilder = CorvusDocumentElementBuilder<CorvusParagraph, Builder>

  /**
   * 
   */
  export const createBuilder: typeof CorvusParagraphBuilder.create = CorvusParagraphBuilder.create

  /**
   * 
   */
  export function createElementBuilder(): ElementBuilder {
    return CorvusDocumentElementBuilder.create(createBuilder())
  }
}
