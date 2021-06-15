import { List } from 'immutable'
import { Comparator } from './Comparator'

/**
 * 
 */
export namespace Lists {
  /**
   * 
   */
  export function swap<Element>(list: List<Element>, left: number, right: number): List<Element> {
    const tmp: Element = list.get(left)
    list.set(left, list.get(right))
    list.set(right, tmp)
    return list
  }
}