import { List } from 'immutable'

import { HypertextElement } from './HypertextElement'

/**
*
*/
export interface Hypertext extends List<HypertextElement | string> { }

/**
*
*/
export namespace Hypertext {
  /**
   * 
   */
  export function create(...elements: Array<HypertextElement | string>): Hypertext {
    return List.of(...elements)
  }

  /**
  *
  */
  export const EMPTY: Hypertext = List()

  /**
  *
  */
  export function equals(left: Hypertext | undefined, right: Hypertext | undefined): boolean {
    return left == null ? left === right : left.equals(right)
  }

  /**
  *
  */
  export function empty(): Hypertext {
    return EMPTY
  }
}
