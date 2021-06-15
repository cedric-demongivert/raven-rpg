import { List } from 'immutable'

import { RPGDocument } from './RPGDocument'
import { RPGElement } from './RPGElement'

/**
*
*/
export interface RPGNode extends RPGElement {
  /**
  *
  */
  readonly children: RPGDocument

  /**
   * 
   */
  readonly isNode: true
}

/**
*
*/
export namespace RPGNode {
  /**
  *
  */
  export function is(element: RPGElement): element is RPGNode {
    return element.isNode === true
  }
}
