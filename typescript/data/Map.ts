/**
 * 
 */
export type Map<From, To> = (value: From) => To

/**
 * 
 */
export namespace Map {
  /**
   * 
   */
  export function identity<T>(value: T): T {
    return value
  }
}