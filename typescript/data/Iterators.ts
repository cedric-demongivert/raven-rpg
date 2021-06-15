import { List } from 'immutable'
import { Mapping } from '../Mapping'

import { Comparator } from './Comparator'
import { Heaps } from './Heaps'

export namespace Iterators {
  /**
   * 
   */
  export function* concatenate<Element>(...iterators: Iterator<Element, undefined, undefined>[]): IterableIterator<Element> {
    for (const iterator of iterators) {
      let next: IteratorResult<Element, undefined> = iterator.next()

      while (!next.done) {
        yield next.value
        next = iterator.next()
      }
    }
  }

  /**
   * 
   */
  export function* map<From, To>(iterator: Iterator<From>, map: Mapping<From, To>): Iterator<To> {
    let iteration: IteratorResult<From> = iterator.next()

    while (!iteration.done) {
      yield map(iteration.value)
      iteration = iterator.next()
    }
  }

  /**
   * 
   */
  export function toArray<Element>(iterator: Iterator<Element>): Element[] {
    const result: Element[] = []

    let iteration: IteratorResult<Element> = iterator.next()

    while (!iteration.done) {
      result.push(iteration.value)
      iteration = iterator.next()
    }

    return result
  }

  /**
   * 
   */
  export function toList<Element>(iterator: Iterator<Element>): List<Element> {
    const result: List<Element> = List().asMutable()

    let iteration: IteratorResult<Element> = iterator.next()

    while (!iteration.done) {
      result.push(iteration.value)
      iteration = iterator.next()
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function sort<Element>(comparator: Comparator<Element>, iterator: Iterator<Element>): IterableIterator<Element> {
    const result: List<Element> = Heaps.gather(comparator, iterator)
    Heaps.sort(comparator, result)

    return result.values()
  }

  /**
   * 
   */
  export function over<Element>(iterable: Iterable<Element>): Iterator<Element> {
    return iterable[Symbol.iterator]()
  }

  /**
   * 
   */
  export namespace Ordered {

    /**
     * 
     */
    export namespace dedupe {
      /**
       * 
       */
      export function* last<Element, Result>(comparator: Comparator<Element>, iterator: Iterator<Element, undefined, Result>): Generator<Element, undefined, Result> {
        let current: IteratorResult<Element, any> = iterator.next()

        while (!current.done) {
          let next: IteratorResult<Element, any> = iterator.next()

          while (!next.done && comparator(current.value, next.value) === 0) {
            current = next
            next = iterator.next()
          }

          yield current.value
          current = next
        }

        return current.value
      }

      /**
       * 
       */
      export function* first<Element, Result>(comparator: Comparator<Element>, iterator: Iterator<Element, undefined, Result>): Generator<Element, undefined, Result> {
        let current: IteratorResult<Element, any> = iterator.next()

        while (!current.done) {
          let next: IteratorResult<Element, any> = iterator.next()

          while (!next.done && comparator(current.value, next.value) === 0) {
            next = iterator.next()
          }

          yield current.value
          current = next
        }

        return current.value
      }
    }
  }
}