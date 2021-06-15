import { List } from 'immutable'

import { Lists } from './Lists'
import { Comparator } from './Comparator'

/**
 * 
 */
export namespace Heaps {
  /**
   * 
   */
  export function gather<Element>(comparator: Comparator<Element>, iterator: Iterator<Element, any, any>): List<Element> {
    return pushAll(comparator, List().asMutable(), iterator)
  }

  /**
   * 
   */
  export function pushAll<Element>(comparator: Comparator<Element>, heap: List<Element>, iterator: Iterator<Element, any, any>): List<Element> {
    let iteration: IteratorResult<Element> = iterator.next()

    while (!iteration.done) {
      let currentIndex: number = heap.size
      let parentIndex: number = (currentIndex - 1) >> 0

      heap.push(iteration.value)

      while (parentIndex > -1 && comparator(heap.get(currentIndex), heap.get(parentIndex)) > 0) {
        Lists.swap(heap, currentIndex, parentIndex)
        currentIndex = parentIndex
        parentIndex = (currentIndex - 1) >> 0
      }

      iteration = iterator.next()
    }

    return heap
  }

  /**
   * 
   */
  export function push<Element>(comparator: Comparator<Element>, heap: List<Element>, element: Element): List<Element> {
    let currentIndex: number = heap.size
    let parentIndex: number = (currentIndex - 1) >> 0

    heap.push(element)

    while (parentIndex > -1 && comparator(heap.get(currentIndex), heap.get(parentIndex)) > 0) {
      Lists.swap(heap, currentIndex, parentIndex)
      currentIndex = parentIndex
      parentIndex = (currentIndex - 1) >> 0
    }

    return heap
  }

  /**
   * 
   */
  export function pop<Element>(comparator: Comparator<Element>, heap: List<Element>): Element | undefined {
    const result: Element | undefined = heap.get(0)
    const size: number = heap.size

    heap.set(0, heap.get(heap.size - 1))
    heap.pop()

    let currentIndex: number = 0

    while (true) {
      const leftIndex: number = currentIndex * 2 + 1
      const rightIndex: number = leftIndex + 1
      const currentElement: Element = heap.get(currentIndex)

      if (rightIndex < size) {
        const leftElement: Element = heap.get(leftIndex)
        const rightElement: Element = heap.get(rightIndex)

        if (comparator(currentElement, leftElement) < 0 || comparator(currentElement, rightElement) < 0) {
          if (comparator(leftElement, rightElement) > 0) {
            Lists.swap(heap, currentIndex, leftIndex)
            currentIndex = leftIndex
          } else {
            Lists.swap(heap, currentIndex, rightIndex)
            currentIndex = rightIndex
          }
        }
      } else {
        if (leftIndex < size && comparator(currentElement, heap.get(leftIndex)) < 0) {
          Lists.swap(heap, currentIndex, leftIndex)
        }

        return result
      }
    }
  }

  /**
   * 
   */
  export function sort<Element>(comparator: Comparator<Element>, heap: List<Element>): List<Element> {
    let unsorted: number = heap.size

    while (unsorted > 0) {
      const next: Element = heap.get(unsorted - 1)
      heap.set(unsorted - 1, heap.get(0))
      heap.set(0, next)

      unsorted -= 1

      let currentIndex: number = 0

      while (true) {
        const leftIndex: number = currentIndex * 2 + 1
        const rightIndex: number = leftIndex + 1
        const currentElement: Element = heap.get(currentIndex)

        if (rightIndex < unsorted) {
          const leftElement: Element = heap.get(leftIndex)
          const rightElement: Element = heap.get(rightIndex)

          if (comparator(currentElement, leftElement) < 0 || comparator(currentElement, rightElement) < 0) {
            if (comparator(leftElement, rightElement) > 0) {
              Lists.swap(heap, currentIndex, leftIndex)
              currentIndex = leftIndex
            } else {
              Lists.swap(heap, currentIndex, rightIndex)
              currentIndex = rightIndex
            }
          } else {
            break
          }
        } else {
          if (leftIndex < unsorted && comparator(currentElement, heap.get(leftIndex)) < 0) {
            Lists.swap(heap, currentIndex, leftIndex)
          }
          break
        }
      }
    }

    return heap
  }
}
