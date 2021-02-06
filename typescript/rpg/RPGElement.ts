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
  equals(other: any): boolean
}

/**
*
*/
export namespace RPGElement {
  /**
  *
  */
  export const EMPTY: RPGElement = Object.freeze({
    /**
    * @see DocumentElement.type
    */
    type: RPGElementType.EMPTY,

    /**
    * @see DocumentElement.identifier
    */
    identifier: undefined,

    /**
    * @see Object.equals
    */
    equals(other: any): boolean {
      return other === this
    }
  })

  /**
  *
  */
  export function empty(): RPGElement {
    return EMPTY
  }
}
