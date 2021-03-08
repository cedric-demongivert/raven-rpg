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

}
