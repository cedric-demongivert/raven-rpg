/**
 * 
 */
export function isUndefined<T>(value: T | undefined): value is T {
  return value === undefined
}