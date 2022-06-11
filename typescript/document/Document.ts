import { List } from 'immutable'

import { Builder } from '../Builder'

import { DocumentBuilder } from './DocumentBuilder'
import { DocumentElement } from './DocumentElement'

/**
 *
 */
export interface Document extends List<DocumentElement> {

}

/**
 *
 */
export namespace Document {
  /**
   * 
   */
  export function of(...elements: Array<DocumentElement>): Document {
    return List.of(...elements)
  }

  /**
   * 
   */
  export function create(builder: DocumentBuilder): Document {
    return List(builder.elements.map<DocumentElement>(Builder.build))
  }

  /**
   *
   */
  export const EMPTY: Document = List()

  /**
   *
   */
  export function empty(): Document {
    return EMPTY
  }
}
