import { RPGDocument } from './RPGDocument'
import { RPGElementType } from './RPGElementType'
import { RPGElement } from './RPGElement'

/**
*
*/
export interface RPGDocumentNode extends RPGElement {
  /**
  *
  */
  children: RPGDocument
}

/**
*
*/
export namespace RPGDocumentNode {
  /**
  *
  */
  export const EMPTY: RPGDocumentNode = Object.freeze({
    /**
    * @see RPGElement.type
    */
    type: RPGElementType.EMPTY,

    /**
    * @see RPGElement.identifier
    */
    identifier: undefined,

    /**
    * @see RPGDocumentNode.children
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
  export function empty(): RPGDocumentNode {
    return EMPTY
  }
}
