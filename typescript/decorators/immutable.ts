/**
 * Indicate that the decorated class is designed to be immutable.
 * 
 * @param constructor - The constructor to decorate.
 */
export function immutable(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}