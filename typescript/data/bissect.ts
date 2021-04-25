import { List } from 'immutable'

import { Comparator } from './Comparator'

/**
 * 
 */
export namespace bissect {
  /**
   * 
   */
  export function list<Model, Key>(list: List<Model>, key: Key, comparator: Comparator<Key, Model>): number {
    if (list.size > 0) {
      let left: number = 0
      let right: number = list.size

      while (left !== right) {
        const cursor: number = left + ((right - left) >>> 1)
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

      return - (left + 1)
    } else {
      return -1
    }
  }
}