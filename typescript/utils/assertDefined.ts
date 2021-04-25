/**
 *
 */
export function assertDefined<T>(value?: T | undefined | null, message?: string | undefined): asserts value is T {
  if (value == null) {
    throw new Error(message || 'The given value is not defined.')
  }
}