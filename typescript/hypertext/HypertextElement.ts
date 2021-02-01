import { HypertextElementType } from './HypertextElementType'

/**
*
*/
export interface HypertextElement {
  /**
  *
  */
  readonly type: HypertextElementType

  /**
  *
  */
  equals(other: any): boolean
}

/**
*
*/
export namespace HypertextElement {
  /**
  *
  */
  export const EMPTY: HypertextElement = Object.freeze({
    type: HypertextElementType.EMPTY,
    equals(other: any): boolean {
      return other === this
    }
  })

  /**
  *
  */
  export function empty(): HypertextElement {
    return EMPTY
  }
}
