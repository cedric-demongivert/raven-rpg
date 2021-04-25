import { Map } from 'immutable'
import { List } from 'immutable'

import { Table } from '../table/Table'

import { Mutation } from '../mutation/Mutation'
import { MutationType } from '../mutation/MutationType'

import { Entry } from '../Entry'
import { Mapping } from '../Mapping'

/**
*
*/
export class OneToManyIndex<Key, Model> {
  /**
  *
  */
  public readonly relationships: Map<Key, Table<Model>>

  /**
  *
  */
  public constructor(relationships: Map<Key, Table<Model>> = Map()) {
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
  public get(key: Key): Table<Model> {
    return this.relationships.get(key, Table.empty())
  }

  /**
  *
  */
  public has(key: Key): boolean {
    return this.relationships.has(key)
  }
}

export namespace OneToManyIndex {
  /**
  *
  */
  export function make<Key, Model>(table: Table<Model>, mapping: Mapping<Model, Key>): OneToManyIndex<Key, Model> {
    if (table.entries.isEmpty()) {
      return EMPTY
    }

    const listMap: Map<Key, List<Entry<Model>>> = Map<Key, List<Entry<Model>>>().asMutable()

    for (const element of table.entries) {
      const key: Key = mapping(element.model)

      if (!listMap.has(key)) {
        listMap.set(key, List().asMutable())
      }

      listMap.get(key).push(element)
    }

    const tableMap: Map<Key, Table<Model>> = Map<Key, Table<Model>>().asMutable()

    for (const entry of listMap.entries()) {
      tableMap.set(entry[0], new Table(entry[1].asImmutable()))
    }

    return new OneToManyIndex(tableMap.asImmutable())
  }

  /**
  *
  */
  export type Reducer<Key, Model> = (state: OneToManyIndex<Key, Model> | undefined, actions: Iterable<Mutation<Model>>) => OneToManyIndex<Key, Model>

  /**
  *
  */
  export function reduce<Key, Model>(state: OneToManyIndex<Key, Model> | undefined, mutations: Iterable<Mutation<Model>>, mapping: Mapping<Model, Key>): OneToManyIndex<Key, Model> {
    if (mutations[Symbol.iterator]().next().done) {
      return this
    }

    const nextRelationships: Map<Key, Table<Model>> = (state || EMPTY).relationships.asMutable()

    for (const mutation of mutations) {
      switch (mutation.type) {
        case MutationType.ADDITION:
          const addition: Model = mutation.next
          const additionKey: Key = mapping(addition)

          if (nextRelationships.has(additionKey)) {
            nextRelationships.set(additionKey, Table.reduce(nextRelationships.get(additionKey), mutation))
          } else {
            nextRelationships.set(additionKey, Table.reduce(Table.EMPTY, mutation))
          }
          break
        case MutationType.DELETION:
          const deletion: Model = mutation.previous
          const deletionKey: Key = mapping(deletion)
          const nextValues: Table<Model> = Table.reduce(nextRelationships.get(deletionKey, Table.EMPTY), mutation)

          if (nextValues.isEmpty()) {
            nextRelationships.delete(deletionKey)
          } else {
            nextRelationships.set(deletionKey, nextValues)
          }
          break
        case MutationType.UPDATE:
          const oldValue: Model = mutation.previous
          const newValue: Model = mutation.next
          const oldKey: Key = mapping(oldValue)
          const newKey: Key = mapping(newValue)

          if (oldKey === newKey) {
            nextRelationships.set(newKey, Table.reduce(nextRelationships.get(newKey), mutation))
          } else {
            const nextOldValues: Table<Model> = Table.reduce(nextRelationships.get(oldKey, Table.empty<Model>()), Mutation.deletion(mutation.identifier, oldValue))

            if (nextOldValues.isEmpty()) {
              nextRelationships.delete(oldKey)
            } else {
              nextRelationships.set(oldKey, nextOldValues)
            }

            if (nextRelationships.has(newKey)) {
              nextRelationships.set(newKey, Table.reduce(nextRelationships.get(newKey), mutation))
            } else {
              nextRelationships.set(newKey, Table.reduce(Table.EMPTY, mutation))
            }
          }
          break
        default:
          throw new Error(
            'Unable to handle mutation of type ' + MutationType.toDebugString(mutation.type) +
            ' as no procedure was defined for handling this type of mutation.'
          )
      }
    }

    return new OneToManyIndex(nextRelationships.asImmutable())
  }

  /**
  *
  */
  export function reducer<Key, Model>(mapping: Mapping<Model, Key>): Reducer<Key, Model> {
    return function oneToManyIndexReducer(state: OneToManyIndex<Key, Model> | undefined, action: Iterable<Mutation<Model>>): OneToManyIndex<Key, Model> {
      return reduce(state, action, mapping)
    }
  }

  /**
  *
  */
  export const EMPTY: OneToManyIndex<any, any> = new OneToManyIndex()

  /**
  *
  */
  export function empty<Key, Model>(): OneToManyIndex<Key, Model> {
    return EMPTY
  }
}
