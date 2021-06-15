import { Comparator } from '../Comparator'

import { Relationship } from './Relationship'

/**
 * 
 */
export namespace RelationshipReducer {
  /**
   * 
   */
  export function gather<Key, Model>(comparator: Comparator<Key | Model, Model>, iterator: Iterator<Model, undefined, any>): Relationship<Key, Model> {
    return Relationship.gather(comparator, iterator)
  }

  /**
   * 
   */
  export function set<Key, Model>(relationship: Relationship<Key, Model>, element: Model): Relationship<Key, Model> {
    return relationship.set(element)
  }

  /**
   * 
   */
  export function setAll<Key, Model>(relationship: Relationship<Key, Model>, iterator: Iterator<Model, undefined, any>): Relationship<Key, Model> {
    return relationship.setAll(iterator)
  }

  /**
   * 
   */
  export function setOrdered<Key, Model>(relationship: Relationship<Key, Model>, iterator: Iterator<Model, undefined, any>): Relationship<Key, Model> {
    return relationship.setOrdered(iterator)
  }

  /**
   * 
   */
  export function drop<Key, Model>(relationship: Relationship<Key, Model>, element: Key | Model): Relationship<Key, Model> {
    return relationship.delete(element)
  }

  /**
   * 
   */
  export function dropAll<Key, Model>(relationship: Relationship<Key, Model>, iterator: Iterator<Key | Model>): Relationship<Key, Model> {
    return relationship.deleteAll(iterator)
  }

  /**
   * 
   */
  export function dropOrdered<Key, Model>(relationship: Relationship<Key, Model>, iterator: Iterator<Key | Model>): Relationship<Key, Model> {
    return relationship.deleteOrdered(iterator)
  }
}