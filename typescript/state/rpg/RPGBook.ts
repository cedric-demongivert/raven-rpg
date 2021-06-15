import { Set } from 'immutable'

import { Hypertext } from '../hypertext/Hypertext'

import { RPGDocument } from './RPGDocument'
import { RPGElement } from './RPGElement'
import { RPGElementType } from './RPGElementType'

/**
*
*/
export class RPGBook implements RPGElement {
  /**
  *
  */
  public readonly type: RPGElementType.BOOK

  /**
  *
  */
  public readonly identifier: string | undefined

  /**
  *
  */
  public readonly lang: string

  /**
  *
  */
  public readonly title: string

  /**
  *
  */
  public readonly summary: Hypertext | undefined

  /**
  *
  */
  public readonly children: RPGDocument

  /**
  *
  */
  public readonly classes: Set<string>

  /**
   * 
   */
  public readonly isNode: true

  /**
  *
  */
  public static create(properties: RPGBook.Properties): RPGBook {
    return new RPGBook(properties)
  }

  /**
  *
  */
  private constructor(properties: RPGBook.Properties) {
    this.type = RPGElementType.BOOK
    this.identifier = properties.identifier || undefined
    this.lang = properties.lang
    this.title = properties.title
    this.summary = properties.summary || undefined
    this.children = properties.children || RPGDocument.create()
    this.classes = properties.classes || Set()
    this.isNode = true
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGBook) {
      return (
        other.identifier === this.identifier &&
        other.lang === this.lang &&
        other.title === this.title &&
        Hypertext.equals(other.summary, this.summary) &&
        other.children.equals(this.children) &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
*
*/
export namespace RPGBook {
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
    lang: string,

    /**
    *
    */
    title: string,

    /**
    *
    */
    summary?: Hypertext | undefined,

    /**
    *
    */
    children?: RPGDocument,

    /**
     * 
     */
    classes?: Set<string> | undefined
  }
}
