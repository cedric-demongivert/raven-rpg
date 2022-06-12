import { List } from 'immutable'

import { Builder } from './Builder'
import { ContentNodeVisitor } from './ContentNodeVisitor'

import { TextNodeElement } from './TextNodeElement'

/**
 *
 */
export interface TextNode extends List<TextNodeElement> {

}

/**
 *
 */
export namespace TextNode {
  /**
   * 
   */
  export function create(elements: Iterable<TextNodeElement | Builder<TextNodeElement>>): TextNode {
    const result: List<TextNodeElement> = List<TextNodeElement>().asMutable()

    for (const element of elements) {
      result.push(Builder.is(element) ? element.build() : element)
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function of(...elements: Array<TextNodeElement | Builder<TextNodeElement>>): TextNode {
    return create(elements)
  }

  /**
   * 
   */
  export function visit(text: TextNode, visitor: ContentNodeVisitor): void {
    for (const element of text) {
      if (typeof element === 'string') {
        visitor.visitString(element)
      } else {
        visitor.visitNode(element)
      }
    }
  }

  /**
   *
   */
  export const EMPTY: TextNode = List()

  /**
   *
   */
  export function empty(): TextNode {
    return EMPTY
  }
}
