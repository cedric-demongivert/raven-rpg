import { Comparator } from '../Comparator'
import { Entry } from '../Entry'

import { OneToMany } from './OneToMany'

/**
 * 
 */
export namespace OneToManyReducer {
  /**
   * 
   */
  export function gather<Key, Model>(comparator: Comparator<Key | Model, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToMany<Key, Model> {
    return OneToMany.gather(comparator, iterator)
  }

  /**
   * 
   */
  export function set<Key, Model>(relationship: OneToMany<Key, Model>, element: Entry<Model>): OneToMany<Key, Model> {
    return relationship.set(element)
  }

  /**
   * 
   */
  export function setAll<Key, Model>(relationship: OneToMany<Key, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToMany<Key, Model> {
    return relationship.setAll(iterator)
  }

  /**
   * 
   */
  export function setOrdered<Key, Model>(relationship: OneToMany<Key, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToMany<Key, Model> {
    return relationship.setOrdered(iterator)
  }

  /**
   * 
   */
  export function drop<Key, Model>(relationship: OneToMany<Key, Model>, element: Entry<Model>): OneToMany<Key, Model> {
    return relationship.delete(element)
  }

  /**
   * 
   */
  export function dropAll<Key, Model>(relationship: OneToMany<Key, Model>, iterator: Iterator<Entry<Model>>): OneToMany<Key, Model> {
    return relationship.deleteAll(iterator)
  }

  /**
   * 
   */
  export function dropOrdered<Key, Model>(relationship: OneToMany<Key, Model>, iterator: Iterator<Entry<Model>>): OneToMany<Key, Model> {
    return relationship.deleteOrdered(iterator)
  }
}