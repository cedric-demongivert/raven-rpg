import { List } from 'immutable'

import { Comparator } from './Comparator'

/**
 *
 */
export namespace bissect {
  /**
   *
   */
  export function list<Model, Key>(list: List<Model>, key: Key, comparator: Comparator<Key, Model>, left: number = 0, right: number = list.size): number {
    while (left < right) {
      const cursor: number = (right + left) >> 1
      const pivot: Model = list.get(cursor)
      const comparison: number = comparator(key, pivot)

      if (comparison === 0) {
        return cursor
      } else if (comparison > 0) {
        left = cursor + 1
      } else {
        right = cursor
      }
    }

    return - left - 1
  }

  /**
   *
   */
  export namespace list {
    /**
     *
     */
    export function left<Model, Key>(list: List<Model>, key: Key, comparator: Comparator<Key, Model>, left: number = 0, right: number = list.size): number {
      while (left < right) {
        const cursor: number = (right + left) >> 1
        const pivot: Model = list.get(cursor)
        const comparison: number = comparator(key, pivot)

        if (comparison === 0) {
          right = cursor

          while (left < right) {
            const cursor: number = (right + left) >> 1
            const pivot: Model = list.get(cursor)
            const comparison: number = comparator(key, pivot)

            if (comparison > 0) {
              left = cursor + 1
            } else {
              right = cursor
            }
          }

          return left
        } else if (comparison > 0) {
          left = cursor + 1
        } else {
          right = cursor
        }
      }

      return - left - 1
    }

    /**
     *
     */
    export function right<Model, Key>(list: List<Model>, key: Key, comparator: Comparator<Key, Model>, left: number = 0, right: number = list.size): number {
      while (left < right) {
        const cursor: number = (right + left) >> 1
        const pivot: Model = list.get(cursor)
        const comparison: number = comparator(key, pivot)

        if (comparison === 0) {
          left = cursor + 1

          while (left < right) {
            const cursor: number = (right + left) >> 1
            const pivot: Model = list.get(cursor)
            const comparison: number = comparator(key, pivot)

            if (comparison < 0) {
              right = cursor
            } else {
              left = cursor + 1
            }
          }

          return left
        } else if (comparison > 0) {
          left = cursor + 1
        } else {
          right = cursor
        }
      }

      return - left - 1
    }
  }
}
