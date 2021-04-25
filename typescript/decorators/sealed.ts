/**
 * Indicate that the decorated class cannot be subclassed, equivalent to a final class in java or to a sealed class in c#.
 * 
 * @param constructor - The constructor to decorate.
 */
export function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}