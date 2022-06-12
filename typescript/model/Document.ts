import { List } from 'immutable'

import { Builder } from './Builder'
import { ContentNodeVisitor } from './ContentNodeVisitor'

import { DocumentElement } from './DocumentElement'

/**
 *
 */
export interface Document extends List<DocumentElement> {

}

/**
 *
 */
export namespace Document {
  /**
   * 
   */
  export function create(elements: Iterable<DocumentElement | Builder<DocumentElement>>): Document {
    const result: List<DocumentElement> = List<DocumentElement>().asMutable()

    for (const element of elements) {
      result.push(Builder.is(element) ? element.build() : element)
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function of(...elements: Array<Builder<DocumentElement> | DocumentElement>): Document {
    return create(elements)
  }

  /**
   *
   */
  export const EMPTY: Document = List()

  /**
   * 
   */
  export function visit(text: Document, visitor: ContentNodeVisitor): void {
    for (const element of text) {
      visitor.visitNode(element)
    }
  }

  /**
   *
   */
  export function empty(): Document {
    return EMPTY
  }
}
