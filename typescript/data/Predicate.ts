/**
 * 
 */
export type Predicate<From, To extends From = From> = (value: From) => value is To

/**
 * 
 */
export namespace Predicate {
  /**
   * 
   */
  export function truthy<Type>(value: Type): value is Type {
    return true
  }

  /**
   * 
   */
  export function falsy<Type>(value: Type): value is Type {
    return false
  }

  /**
   * 
   */
  export function negate<From, To extends From = From>(predicate: Predicate<From, To>): Predicate<From, From> {
    return function (value: From): value is From {
      return !predicate(value)
    }
  }
}