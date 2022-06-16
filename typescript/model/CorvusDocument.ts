import { List } from 'immutable'

import { Builder } from '../Builder'

import { CorvusNodeVisitor } from './CorvusNodeVisitor'

import { CorvusDocumentNode } from './CorvusDocumentNode'

/**
 *
 */
export interface CorvusDocument extends List<CorvusDocumentNode> {

}

/**
 *
 */
export namespace CorvusDocument {
  /**
   * 
   */
  export function create(elements: Iterable<CorvusDocumentNode | Builder<CorvusDocumentNode>>): CorvusDocument {
    const result: List<CorvusDocumentNode> = List<CorvusDocumentNode>().asMutable()

    for (const element of elements) {
      result.push(Builder.is(element) ? element.build() : element)
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function of(...elements: Array<Builder<CorvusDocumentNode> | CorvusDocumentNode>): CorvusDocument {
    return create(elements)
  }

  /**
   *
   */
  export const EMPTY: CorvusDocument = List()

  /**
   * 
   */
  export function visit(text: CorvusDocument, visitor: CorvusNodeVisitor): void {
    for (const element of text) {
      visitor.visit(element)
    }
  }

  /**
   *
   */
  export function empty(): CorvusDocument {
    return EMPTY
  }
}
