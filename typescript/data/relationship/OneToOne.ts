import { List } from 'immutable'

import { Entry } from '../Entry'
import { Comparator } from '../Comparator'

import { Relationship } from './Relationship'

/**
 * 
 */
export type OneToOne<Key, Model> = Relationship<Key, Entry<Model>>

/**
 * 
 */
export namespace OneToOne {
  /**
   * 
   */
  export function toEntryComparator<Key, Model>(comparator: Comparator<Key | Model, Model>): Comparator<Key | Entry<Model>, Entry<Model>> {
    return function entryComparator(left: Key | Entry<Model>, right: Entry<Model>): number {
      return comparator(Entry.is(left) ? left.model : left, right.model)
    }
  }

  /**
    *
    */
  export function gather<Key, Model>(comparator: Comparator<Key | Model, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToOne<Key, Model> {
    return Relationship.gather(
      toEntryComparator(comparator),
      iterator
    )
  }

  /**
  *
  */
  export function empty<Key, Model>(comparator: Comparator<Key | Model, Model>): OneToOne<Key, Model> {
    return Relationship.empty(toEntryComparator(comparator))
  }

  /**
  *
  */
  export function wrap<Key, Model>(comparator: Comparator<Key | Model, Model>, elements: List<Entry<Model>> = List()): OneToOne<Key, Model> {
    return Relationship.wrap(
      toEntryComparator(comparator),
      elements
    )
  }
}