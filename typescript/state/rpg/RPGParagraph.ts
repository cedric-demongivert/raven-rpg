import { Set } from 'immutable'
import { Empty } from '../../utils/Empty'

import { Hypertext } from '../hypertext/Hypertext'

import { RPGElement } from './RPGElement'
import { RPGElementType } from './RPGElementType'

/**
*
*/
export class RPGParagraph implements RPGElement {
  /**
  *
  */
  public readonly type: RPGElementType.PARAGRAPH

  /**
  *
  */
  public readonly classes: Set<string>

  /**
  *
  */
  public readonly identifier: string | undefined

  /**
  *
  */
  public readonly title: string | undefined

  /**
  *
  */
  public readonly content: Hypertext

  /**
   * 
   */
  public readonly isNode: false

  /**
  *
  */
  public static create(properties: RPGParagraph.Properties = Empty.OBJECT): RPGParagraph {
    return new RPGParagraph(properties)
  }

  /**
  *
  */
  private constructor(properties: RPGParagraph.Properties = Empty.OBJECT) {
    this.type = RPGElementType.PARAGRAPH
    this.identifier = properties.identifier || undefined
    this.title = properties.title || undefined
    this.content = properties.content || Hypertext.empty()
    this.classes = properties.classes || Set()
    this.isNode = false
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGParagraph) {
      return (
        other.identifier === this.identifier &&
        other.title === this.title &&
        other.content.equals(this.content) &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
*
*/
export namespace RPGParagraph {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    identifier?: string | undefined,

    /**
    *
    */
    title?: string | undefined,

    /**
    *
    */
    content?: Hypertext,

    /**
     * 
     */
    classes?: Set<string> | undefined
  }

  /**
  *
  */
  export const EMPTY: RPGParagraph = RPGParagraph.create()
  /**
  *
  */
  export function empty(): RPGParagraph {
    return EMPTY
  }
}
