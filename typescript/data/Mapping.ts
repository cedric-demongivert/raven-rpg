/**
 * 
 */
export type Mapping<From, To> = (value: From) => To

/**
 * 
 */
export namespace Mapping {
  /**
   * 
   */
  export function identity<T>(value: T): T {
    return value
  }

  /**
   * 
   */
  export function chain<A, B, C>(left: Mapping<A, B>, right: Mapping<B, C>): Mapping<A, C> {
    return function chainedMapping(value: A): C {
      return right(left(value))
    }
  }
}