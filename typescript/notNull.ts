/**
 * 
 */
export function notNull(value: null | undefined): never
/**
 * 
 */
export function notNull<Type>(value: Type): Type
/**
 * 
 */
export function notNull<Type>(value: Type | null | undefined): Type
/**
 * 
 */
export function notNull<Type>(value: Type | null | undefined): Type {
  if (value == null) {
    throw new Error('Expected value to be defined.')
  }

  return value
}