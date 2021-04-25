import { Map } from 'immutable'

import { Mutation } from '../mutation/Mutation'
import { MutationType } from '../mutation/MutationType'

import { Table } from '../table/Table'

import { Entry } from '../Entry'

import { Mapping } from '../Mapping'

/**
*
*/
export class OneToOneIndex<Key, Model> {
  /**
  *
  */
  public readonly relationships: Map<Key, Entry<Model>>

  /**
  *
  */
  public get size(): number {
    return this.relationships.size
  }

  /**
  *
  */
  public constructor(relationships: Map<Key, Entry<Model>> = Map()) {
    this.relationships = relationships
  }

  /**
  *
  */
  public keys(): IterableIterator<Key> {
    return this.relationships.keys()
  }

  /**
  *
  */
  public get(key: Key): Entry<Model> | undefined {
    return this.relationships.get(key)
  }

  /**
  *
  */
  public has(key: Key): boolean {
    return this.relationships.has(key)
  }
}

export namespace OneToOneIndex {
  /**
  *
  */
  export type Reducer<Key, Model> = (state: OneToOneIndex<Key, Model> | undefined, actions: Iterable<Mutation<Model>>) => OneToOneIndex<Key, Model>

  /**
  *
  */
  export function make<Key, Model>(table: Table<Model>, mapping: Mapping<Model, Key>): OneToOneIndex<Key, Model> {
    if (table.entries.isEmpty()) {
      return EMPTY
    }

    const result: Map<Key, Entry<Model>> = Map<Key, Entry<Model>>().asMutable()

    for (const element of table.entries) {
      const key: Key = mapping(element.model)

      if (result.has(key)) {
        throw new Error(
          'Unable to index models of the given table by using ' +
          mapping.toString() + ' because entries ' +
          result.get(key).toString() + ' and ' + element.toString() + ' are ' +
          'indexed with the same key ' + key.toString() + '.'
        )
      } else {
        result.set(key, element)
      }
    }

    return new OneToOneIndex(result.asImmutable())
  }


  /**
  *
  */
  export function reduce<Key, Model>(state: OneToOneIndex<Key, Model>, mutations: Iterable<Mutation<Model>>, mapping: Mapping<Model, Key>): OneToOneIndex<Key, Model> {
    if (mutations[Symbol.iterator]().next().done) {
      return this
    }

    const nextRelationships: Map<Key, Entry<Model>> = (state || EMPTY).relationships.asMutable()

    for (const mutation of mutations) {
      switch (mutation.type) {
        case MutationType.ADDITION:
          const addition: Model = mutation.next
          const key: Key = mapping(addition)

          if (nextRelationships.has(key)) {
            throw new Error(
              'Unable to handle indexation of value ' + addition + ' ' +
              'associated with key ' + key + ' as a value with the given key ' +
              'was already indexed.'
            )
          } else {
            nextRelationships.set(key, new Entry(mutation.identifier, addition))
          }
          break
        case MutationType.DELETION:
          nextRelationships.delete(mapping(mutation.previous))
          break
        case MutationType.UPDATE:
          const oldValue: Model = mutation.previous
          const newValue: Model = mutation.next
          const oldKey: Key = mapping(oldValue)
          const newKey: Key = mapping(newValue)

          if (oldKey === newKey) {
            nextRelationships.set(oldKey, new Entry(mutation.identifier, newValue))
          } else {
            nextRelationships.delete(oldKey)

            if (nextRelationships.has(newKey)) {
              throw new Error(
                'Unable to handle indexation of value ' + addition + ' ' +
                'associated with key ' + newKey + ' as a value with the ' +
                'given key was already indexed.'
              )
            } else {
              nextRelationships.set(newKey, new Entry(mutation.identifier, newValue))
            }
          }
          break
        default:
          throw new Error(
            'Unable to handle mutation of type ' +
            MutationType.toDebugString(mutation.type) +
            ' as no procedure was defined for handling this type of mutation.'
          )
      }
    }

    return new OneToOneIndex(nextRelationships.asImmutable())
  }

  /**
  *
  */
  export function reducer<Key, Model>(mapping: Mapping<Model, Key>): Reducer<Key, Model> {
    return function oneToOneIndexReducer(state: OneToOneIndex<Key, Model> | undefined, action: Iterable<Mutation<Model>>): OneToOneIndex<Key, Model> {
      return reduce(state, action, mapping)
    }
  }

  /**
  *
  */
  export const EMPTY: OneToOneIndex<any, any> = new OneToOneIndex()

  /**
  *
  */
  export function empty<Key, Model>(): OneToOneIndex<Key, Model> {
    return EMPTY
  }
}
