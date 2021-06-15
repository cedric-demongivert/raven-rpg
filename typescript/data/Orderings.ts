import { List } from 'immutable'

import { Heaps } from './Heaps'
import { Comparator } from './Comparator'
import { Iterators } from './Iterators'

import { bissect } from './bissect'

/**
 * 
 */
export namespace Orderings {
  /**
   * 
   */
  export namespace dedupe {
    /**
     *
     */
    export function first<Element>(comparator: Comparator<Element>, ordering: List<Element>): List<Element> {
      let duplicates: number = 0
      let current: Element = ordering.get(0)

      for (let index = 1; index < ordering.size; ++index) {
        if (comparator(current, ordering.get(index)) === 0) {
          duplicates += 1
        } else {
          current = ordering.get(index)
          ordering.set(index - duplicates, current)
        }
      }

      ordering.setSize(ordering.size - duplicates)

      return ordering
    }

    /**
     *
     */
    export function last<Element>(comparator: Comparator<Element>, ordering: List<Element>): List<Element> {
      let duplicates: number = 0
      let current: Element = ordering.get(0)

      for (let index = 1; index < ordering.size; ++index) {
        if (comparator(current, ordering.get(index)) === 0) {
          duplicates += 1
          ordering.set(index - duplicates, current)
        } else {
          current = ordering.get(index)
        }
      }

      ordering.set(ordering.size - 1 - duplicates, current)
      ordering.setSize(ordering.size - duplicates)

      return ordering
    }
  }

  /**
   * 
   */
  export function gather<Element>(comparator: Comparator<Element>, iterator: Iterator<Element, undefined, any>): List<Element> {
    const elements: List<Element> = Heaps.gather(comparator, iterator)
    Heaps.sort(comparator, elements)

    return elements.asImmutable()
  }

  /**
   * 
   */
  export namespace gatherAndDedupe {
    /**
     * 
     */
    export function last<Element>(comparator: Comparator<Element>, iterator: Iterator<Element, undefined, any>): List<Element> {
      return dedupe.last(comparator, gather(comparator, iterator))
    }

    /**
     * 
     */
    export function first<Element>(comparator: Comparator<Element>, iterator: Iterator<Element, undefined, any>): List<Element> {
      return dedupe.first(comparator, gather(comparator, iterator))
    }
  }



  /**
   * 
   */
  export function indexOf<Element, Key = Element>(comparator: Comparator<Key, Element>, ordering: List<Element>, key: Key): number {
    return bissect.list(ordering, key, comparator)
  }

  /**
   * 
   */
  export function has<Element, Key = Element>(comparator: Comparator<Key, Element>, ordering: List<Element>, key: Key): boolean {
    return bissect.list(ordering, key, comparator) > -1
  }

  /**
   * 
   */
  export function get<Element, Key = Element>(comparator: Comparator<Key, Element>, ordering: List<Element>, key: Key): Element | undefined {
    const index: number = bissect.list(ordering, key, comparator)
    return index < 0 ? undefined : ordering.get(index)
  }

  /**
   * 
   */
  export function set<Element>(comparator: Comparator<Element>, ordering: List<Element>, element: Element): List<Element> {
    const result: List<Element> = List().asMutable()

    let cursor: number = 0

    while (cursor < ordering.size && comparator(element, ordering.get(cursor)) > 0) {
      result.push(ordering.get(cursor))
      cursor += 1
    }

    result.push(element)

    if (comparator(element, ordering.get(cursor)) === 0) {
      cursor += 1
    }

    while (cursor < ordering.size) {
      result.push(ordering.get(cursor))
      cursor += 1
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function setAll<Element>(comparator: Comparator<Element>, ordering: List<Element>, iterator: Iterator<Element, undefined, any>): List<Element> {
    const result: List<Element> = gather(comparator, Iterators.concatenate(iterator, ordering.values()))
    dedupe.last(comparator, result)
    return result.asImmutable()
  }

  /**
   * 
   */
  export function setOrdered<Element>(comparator: Comparator<Element>, ordering: List<Element>, iterator: Iterator<Element, undefined, any>): List<Element> {
    const dedupedIterator: Iterator<Element, undefined, any> = Iterators.Ordered.dedupe.last(comparator, iterator)
    const result: List<Element> = List().asMutable()

    let current: IteratorResult<Element, any> = dedupedIterator.next()
    let cursor: number = 0

    while (!current.done) {
      while (cursor < ordering.size && comparator(current.value, ordering.get(cursor)) > 0) {
        result.push(ordering.get(cursor))
        cursor += 1
      }

      result.push(current.value)

      if (comparator(current.value, ordering.get(cursor)) === 0) {
        cursor += 1
      }

      current = dedupedIterator.next()
    }

    while (cursor < ordering.size) {
      result.push(ordering.get(cursor))
      cursor += 1
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function drop<Element, Key = Element>(comparator: Comparator<Key, Element>, ordering: List<Element>, key: Key): List<Element> {
    const result: List<Element> = List().asMutable()

    let cursor: number = 0

    while (cursor < ordering.size && comparator(key, ordering.get(cursor)) !== 0) {
      result.push(ordering.get(cursor))
      cursor += 1
    }

    cursor += 1

    while (cursor < ordering.size) {
      result.push(ordering.get(cursor))
      cursor += 1
    }

    return result.asImmutable()
  }

  /**
   * 
   */
  export function dropAll<Element, Key = Element>(comparator: Comparator<Key, Key | Element>, ordering: List<Element>, iterator: Iterator<Key>): List<Element> {
    return dropOrdered<Element, Key>(comparator, ordering, Iterators.sort<Key>(comparator, iterator))
  }

  /**
   * 
   */
  export function dropOrdered<Element, Key = Element>(comparator: Comparator<Key, Element>, ordering: List<Element>, iterator: Iterator<Key>): List<Element> {
    const result: List<Element> = List().asMutable()

    let current: IteratorResult<Key> = iterator.next()
    let cursor: number = 0

    while (!current.done) {
      while (comparator(current.value, ordering.get(cursor)) > 0) {
        result.push(ordering.get(cursor))
        cursor += 1
      }

      if (comparator(current.value, ordering.get(cursor)) === 0) {
        cursor += 1
      }

      current = iterator.next()
    }

    while (cursor < ordering.size) {
      result.push(ordering.get(cursor))
      cursor += 1
    }

    return result.asImmutable()
  }
}