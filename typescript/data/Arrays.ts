import { equals as areEquals } from '../utils/equals'

import { Comparator } from './Comparator'

export namespace Arrays {
  /**
   * 
   */
  export function deeplyEquals(left: any[], right: any[]): boolean {
    if (left.length !== right.length) return false

    for (let index: number = 0; index < left.length; ++index) {
      if (!areEquals(left, right)) {
        return false
      }
    }

    return true
  }

  /**
   * 
   */
  export function sort<Model>(comparator: Comparator<Model, Model>, entries: Model[]): Model[] {
    entries.sort(comparator)
    return entries
  }

  /**
   * 
   */
  export namespace Heap {
    /**
     * 
     */
    export function left(index: number): number {
      return index * 2 + 1
    }

    /**
     * 
     */
    export function right(index: number): number {
      return index * 2 + 2
    }

    /**
     * 
     */
    export function parent(index: number): number {
      return (index - 1) >> 1
    }

    /**
     * 
     */
    export function sort<Element>(elements: Element[], comparator: Comparator<Element>): Element[] {
      let sorted: number = 0

      while (sorted < elements.length) {
        let tmp: Element = elements[elements.length - sorted - 1]
        elements[elements.length - sorted - 1] = elements[0]
        elements[0] = tmp

        sorted += 1

        let currentIndex: number = 0

        while (true) {
          const leftIndex: number = left(currentIndex)
          const rightIndex: number = right(currentIndex)

          if (leftIndex < elements.length - sorted && comparator(elements[leftIndex], elements[currentIndex]) > 0) {
            if (rightIndex < elements.length - sorted && comparator(elements[rightIndex], elements[leftIndex]) > 0) {
              const tmp: Element = elements[rightIndex]
              elements[rightIndex] = elements[currentIndex]
              elements[currentIndex] = tmp
              currentIndex = rightIndex
            } else {
              const tmp: Element = elements[leftIndex]
              elements[leftIndex] = elements[currentIndex]
              elements[currentIndex] = tmp
              currentIndex = leftIndex
            }
          } else if (rightIndex < elements.length - sorted && comparator(elements[rightIndex], elements[currentIndex]) > 0) {
            const tmp: Element = elements[rightIndex]
            elements[rightIndex] = elements[currentIndex]
            elements[currentIndex] = tmp
            currentIndex = rightIndex
          } else {
            break
          }
        }
      }

      return elements
    }

    /**
     * 
     */
    export function reduceAll<Element>(
      elements: Element[],
      comparator: Comparator<Element>,
      additions: Iterator<Element, any, undefined>
    ): Element[] {
      let iteration: IteratorResult<Element> = additions.next()

      while (!iteration.done) {
        let currentIndex: number = elements.length
        let parentIndex: number = parent(currentIndex)

        elements.push(iteration.value)

        while (comparator(elements[currentIndex], elements[parentIndex]) > 0) {
          const tmp: Element = elements[parentIndex]
          elements[parentIndex] = elements[currentIndex]
          elements[currentIndex] = tmp

          currentIndex = parentIndex
          parentIndex = parent(currentIndex)
        }

        iteration = additions.next()
      }

      return elements
    }

    /**
     * 
     */
    export function reduce<Element>(
      elements: Element[],
      comparator: Comparator<Element>,
      addition: Element
    ): Element[] {
      let currentIndex: number = elements.length
      let parentIndex: number = parent(currentIndex)

      elements.push(addition)

      while (comparator(elements[currentIndex], elements[parentIndex]) > 0) {
        const tmp: Element = elements[parentIndex]
        elements[parentIndex] = elements[currentIndex]
        elements[currentIndex] = tmp

        currentIndex = parentIndex
        parentIndex = parent(currentIndex)
      }

      return elements
    }

    /**
     * 
     */
    export function pop<Element>(
      elements: Element[],
      comparator: Comparator<Element>
    ): Element | undefined {
      const result: Element | undefined = elements[0]

      elements[0] = elements[elements.length - 1]
      elements.pop()

      let currentIndex: number = 0

      while (true) {
        const leftIndex: number = left(currentIndex)
        const rightIndex: number = right(currentIndex)

        if (leftIndex < elements.length && comparator(elements[leftIndex], elements[currentIndex]) > 0) {
          if (rightIndex < elements.length && comparator(elements[rightIndex], elements[leftIndex]) > 0) {
            const tmp: Element = elements[rightIndex]
            elements[rightIndex] = elements[currentIndex]
            elements[currentIndex] = tmp
            currentIndex = rightIndex
          } else {
            const tmp: Element = elements[leftIndex]
            elements[leftIndex] = elements[currentIndex]
            elements[currentIndex] = tmp
            currentIndex = leftIndex
          }
        } else if (rightIndex < elements.length && comparator(elements[rightIndex], elements[currentIndex]) > 0) {
          const tmp: Element = elements[rightIndex]
          elements[rightIndex] = elements[currentIndex]
          elements[currentIndex] = tmp
          currentIndex = rightIndex
        } else {
          return result
        }
      }
    }
  }

  /**
   * 
   */
  export namespace Ordered {
    /**
     * 
     */
    export function dedupe<Model>(entries: Model[], comparator: Comparator<Model, Model>): Model[] {
      let duplicates: number = 0
      let current: Model = entries[0]

      for (let index = 1; index < entries.length; ++index) {
        if (comparator(current, entries[index]) === 0) {
          duplicates += 1
        } else {
          current = entries[index]
        }

        entries[index - duplicates] = entries[index]
      }

      entries.length += duplicates

      return entries
    }
  }
}