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
  children: RPGDocument
}

/**
*
*/
export namespace RPGNode {
  /**
  *
  */
  export function is(element: RPGElement): element is RPGNode {
    if ('children' in element) {
      return List.isList((element as any).children)
    } else {
      return false
    }
  }
}
