/**
 * 
 */
export namespace Generators {
  /**
   * 
   */
  export function empty<IterationType, ReturnType = undefined, ParameterType = undefined>(returnValue: ReturnType): Generator<IterationType, ReturnType, ParameterType>
  /**
   * 
   */
  export function empty<IterationType, ParameterType = undefined>(returnValue?: undefined): Generator<IterationType, undefined, ParameterType>
  export function* empty<IterationType, ReturnType = undefined, ParameterType = undefined>(returnValue?: ReturnType): Generator<IterationType, ReturnType, ParameterType> {
    return returnValue
  }

  /**
   * 
   */
  export function only<IterationType, ReturnType = undefined, ParameterType = undefined>(value: IterationType, returnValue: ReturnType): Generator<IterationType, ReturnType, ParameterType>
  /**
   * 
   */
  export function only<IterationType, ParameterType = undefined>(value: IterationType, returnValue?: undefined): Generator<IterationType, undefined, ParameterType>
  export function* only<IterationType, ReturnType = undefined, ParameterType = undefined>(value: IterationType, returnValue?: ReturnType): Generator<IterationType, ReturnType, ParameterType> {
    yield value
    return returnValue
  }

  /**
   * 
   */
  export function* over<IterationType>(iterable: Iterable<IterationType>): Generator<IterationType, undefined, undefined> {
    return yield* iterable
  }

  /**
   * 
   */
  export function* iterators<IterationType>(...iterators: Iterator<IterationType>[]): Generator<IterationType, undefined, undefined> {
    for (const iterator of iterators) {
      let next: IteratorResult<IterationType | undefined> = iterator.next()

      while (!next.done) {
        yield next.value
        next = iterator.next()
      }
    }

    return
  }

  /**
   * 
   */
  export function* iterables<IterationType>(...iterables: Iterable<IterationType>[]): Generator<IterationType, undefined, undefined> {
    for (const iterable of iterables) {
      yield* iterable
    }

    return
  }
}