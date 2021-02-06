import { List } from 'immutable'

import { HypertextElement } from './HypertextElement'

/**
*
*/
export type Hypertext = List<HypertextElement | string>

/**
*
*/
export namespace Hypertext {
  /**
  *
  */
  export const EMPTY: Hypertext = create()

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

  /**
  *
  */
  export function create(...content: Array<HypertextElement | string>): Hypertext {
    return List(content)
  }
}
