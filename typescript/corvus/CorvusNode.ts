import { List } from 'immutable'

import { CorvusElement } from './CorvusElement'
import { CorvusIdentifier } from './CorvusIdentifier'

/**
 * A node is an element of a corvus document that has zero or more child element.
 * 
 * A section is a good example of node, as it embed a title and many children that can be
 * paragraphs, tables, lists or other sections.
 */
export interface CorvusNode<Child extends CorvusElement = CorvusElement> extends CorvusElement {
  /**
   * 
   */
  readonly children: List<CorvusIdentifier<Child>>

  /**
   * 
   */
  readonly isNode: true
}

/**
 * 
 */
export namespace CorvusNode {
  /**
   * 
   */
  export function is(element?: CorvusElement | undefined | null): element is CorvusNode {
    return element && element.isNode
  }
}