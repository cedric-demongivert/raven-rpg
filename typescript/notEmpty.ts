const EMPTY_STRING: RegExp = /^\s*$/

/**
 * 
 */
export function notEmpty(value: string): string
/**
 * 
 */
export function notEmpty(value: string): string {
  if (EMPTY_STRING.test(value)) {
    throw new Error('Expected non-empty value.')
  }

  return value
}