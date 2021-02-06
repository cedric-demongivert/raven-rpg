import { RPGDocument } from './RPGDocument'
import { RPGElementType } from './RPGElementType'
import { RPGElement } from './RPGElement'

/**
*
*/
export interface RPGNode extends RPGElement {
  /**
  *
  */
  children: RPGDocument
}

/**
*
*/
export namespace RPGNode {
  /**
  *
  */
  export const EMPTY: RPGNode = Object.freeze({
    /**
    * @see RPGElement.type
    */
    type: RPGElementType.EMPTY,

    /**
    * @see RPGElement.identifier
    */
    identifier: undefined,

    /**
    * @see RPGNode.children
    */
    children: RPGDocument.EMPTY,

    /**
    * @see Object.equals
    */
    equals(other: any): boolean {
      return other === this
    }
  })

  /**
  *
  */
  export function is(element: RPGElement): element is RPGNode {
    if ('children' in element) {
      return true
    } else {
      return false
    }
  }

  /**
  *
  */
  export function empty(): RPGNode {
    return EMPTY
  }
}
