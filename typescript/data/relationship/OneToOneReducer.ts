import { Comparator } from '../Comparator'
import { Entry } from '../Entry'

import { OneToOne } from './OneToOne'

/**
 * 
 */
export namespace OneToOneReducer {
  /**
   * 
   */
  export function gather<Key, Model>(comparator: Comparator<Key | Model, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToOne<Key, Model> {
    return OneToOne.gather(comparator, iterator)
  }

  /**
   * 
   */
  export function set<Key, Model>(relationship: OneToOne<Key, Model>, element: Entry<Model>): OneToOne<Key, Model> {
    return relationship.set(element)
  }

  /**
   * 
   */
  export function setAll<Key, Model>(relationship: OneToOne<Key, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToOne<Key, Model> {
    return relationship.setAll(iterator)
  }

  /**
   * 
   */
  export function setOrdered<Key, Model>(relationship: OneToOne<Key, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToOne<Key, Model> {
    return relationship.setOrdered(iterator)
  }

  /**
   * 
   */
  export function drop<Key, Model>(relationship: OneToOne<Key, Model>, element: Key | Entry<Model>): OneToOne<Key, Model> {
    return relationship.delete(element)
  }

  /**
   * 
   */
  export function dropAll<Key, Model>(relationship: OneToOne<Key, Model>, iterator: Iterator<Key | Entry<Model>>): OneToOne<Key, Model> {
    return relationship.deleteAll(iterator)
  }

  /**
   * 
   */
  export function dropOrdered<Key, Model>(relationship: OneToOne<Key, Model>, iterator: Iterator<Key | Entry<Model>>): OneToOne<Key, Model> {
    return relationship.deleteOrdered(iterator)
  }
}