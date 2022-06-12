import { List } from 'immutable'

import { Builder } from '../../Builder'

import { TextBuilder } from './TextBuilder'
import { TextElement } from './TextElement'

/**
 *
 */
export interface Text extends List<TextElement> {

}

/**
 *
 */
export namespace Text {
  /**
   * 
   */
  export function of(...elements: Array<TextElement>): Text {
    return List.of(...elements)
  }

  /**
   * 
   */
  export function create(builder: TextBuilder): Text {
    return List(builder.elements.map<TextElement>(Builder.build))
  }

  /**
   *
   */
  export const EMPTY: Text = List()

  /**
   *
   */
  export function empty(): Text {
    return EMPTY
  }
}
