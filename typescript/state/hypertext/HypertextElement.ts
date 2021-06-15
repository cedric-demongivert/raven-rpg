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
export namespace HypertexElement {
  /**
   * 
   */
  export const Type: typeof HypertextElementType = HypertextElementType
}