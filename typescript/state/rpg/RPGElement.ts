import { RPGElementType } from './RPGElementType'

/**
*
*/
export interface RPGElement {
  /**
  *
  */
  readonly type: RPGElementType

  /**
  *
  */
  readonly identifier: string | undefined

  /**
   * 
   */
  readonly isNode: boolean

  /**
  *
  */
  equals(other: any): boolean
}

/**
*
*/
export namespace RPGElement {
  /**
   * 
   */
  export function is(element: any): element is RPGElement {
    return typeof element === 'object' && 'type' in element && RPGElementType.is(element.type)
  }
}
