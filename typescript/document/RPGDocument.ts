import { List } from 'immutable'

import { RPGElement } from './RPGElement'

/**
*
*/
export type RPGDocument = List<RPGElement>

/**
*
*/
export namespace RPGDocument {
  /**
  *
  */
  export const EMPTY: RPGDocument = create()

  /**
  *
  */
  export function empty(): RPGDocument {
    return EMPTY
  }

  /**
  *
  */
  export function create(...content: Array<RPGElement>): RPGDocument {
    return List(content)
  }
}
