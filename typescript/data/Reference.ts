import { Entry } from './Entry'

export type Reference<Model> = Entry<Model> | number

/**
*
*/
export namespace Reference {
  /**
   * 
   */
  export function is(value: any): value is Reference<any> {
    return typeof value === 'number' || Entry.is(value)
  }

  /**
   * 
   */
  export function assert(value: any, message?: string | undefined): asserts value is Reference<any> {
    if (!is(value)) {
      throw new Error(message || 'The given value is not a reference.')
    }
  }

  /**
  *
  */
  export function identifier(identifiable: Reference<any>): number {
    return typeof identifiable === 'number' ? identifiable : identifiable.identifier
  }

  /**
   * 
   */
  export function compare(left: Reference<any>, right: Reference<any>): number {
    return identifier(left) - identifier(right)
  }

  /**
   * 
   */
  export function equals(left: Reference<any>, right: Reference<any>): boolean {
    if (typeof left === 'number') {
      if (typeof right === 'number') {
        return left === right
      } else {
        return left === right.identifier
      }
    } else {
      if (typeof right === 'number') {
        return left.identifier === right
      } else {
        return left.equals(right)
      }
    }
  }
}
