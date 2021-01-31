import { List } from 'immutable'

import { DocumentElement } from './DocumentElement'

/**
*
*/
export type Document = List<DocumentElement>

/**
*
*/
export namespace Document {
  /**
  *
  */
  export const EMPTY: Document = create()

  /**
  *
  */
  export function empty(): Document {
    return EMPTY
  }
  /**
  *
  */
  export function create(...content: Array<DocumentElement>): Document {
    return List(content)
  }
}
