import { List } from 'immutable'

import { Builder } from '../Builder'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'

import { CorvusTextElement } from './CorvusTextElement'

/**
 *
 */
export interface CorvusText extends List<CorvusTextElement> {

}

/**
 *
 */
export namespace CorvusText {
  /**
   * 
   */
  export function create(elements: Iterable<CorvusTextElement | Builder<CorvusTextElement>>): CorvusText {
    const result: List<CorvusTextElement> = List<CorvusTextElement>().asMutable()

    for (const element of elements) {
      result.push(Builder.is(element) ? element.build() : element)
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function of(...elements: Array<CorvusTextElement | Builder<CorvusTextElement>>): CorvusText {
    return create(elements)
  }

  /**
   * 
   */
  export function visit(text: CorvusText, visitor: CorvusNodeVisitor): void {
    for (const element of text) {
      if (typeof element === 'string') {
        visitor.enterString(element)
        visitor.exitString(element)
      } else {
        visitor.visit(element)
      }
    }
  }

  /**
   *
   */
  export const EMPTY: CorvusText = List()

  /**
   *
   */
  export function empty(): CorvusText {
    return EMPTY
  }
}
