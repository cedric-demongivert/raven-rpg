import { Map } from 'immutable'

import { Table } from '../table/Table'

import { Mutation } from '../mutation/Mutation'
import { MutationType } from '../mutation/MutationType'

import { Entry } from '../Entry'

import { Indexer } from './Indexer'

/**
*
*/
export class OneToManyIndex<Key, Model> {
  /**
  *
  */
  public readonly indexer: Indexer<Key, Model>

  /**
  *
  */
  public readonly relationships: Map<Key, Table<Model>>

  /**
  *
  */
  public constructor(indexer: Indexer<Key, Model>, relationships: Map<Key, Table<Model>> = Map()) {
    this.indexer = indexer
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
  public update(mutations: Iterable<Mutation<Model>>): OneToManyIndex<Key, Model> {
    if (mutations[Symbol.iterator]().next().done) {
      return this
    }

    const indexer: Indexer<Key, Model> = this.indexer

    let nextRelationships: Map<Key, Table<Model>> = this.relationships.asMutable()

    for (const mutation of mutations) {
      switch (mutation.type) {
        case MutationType.ADDITION:
          const addition: Entry<Model> = mutation.next!
          const additionKey: Key = indexer(addition.model)

          if (nextRelationships.has(additionKey)) {
            nextRelationships.set(additionKey, nextRelationships.get(additionKey).update(addition))
          } else {
            nextRelationships.set(additionKey, Table.EMPTY.update(addition))
          }
          break
        case MutationType.DELETION:
          const deletion: Entry<Model> = mutation.previous!
          const deletionKey: Key = indexer(deletion.model)
          const nextValues: Table<Model> = nextRelationships.get(deletionKey, Table.EMPTY).delete(deletion)

          if (nextValues.isEmpty()) {
            nextRelationships.delete(deletionKey)
          } else {
            nextRelationships.set(deletionKey, nextValues)
          }
          break
        case MutationType.MUTATION:
          const oldValue: Entry<Model> = mutation.previous
          const newValue: Entry<Model> = mutation.next
          const oldKey: Key = indexer(oldValue.model)
          const newKey: Key = indexer(newValue.model)

          if (oldKey === newKey) {
            nextRelationships.set(newKey, nextRelationships.get(newKey).update(newValue))
          } else {
            const nextOldValues: Table<Model> = nextRelationships.get(oldKey, Table.empty<Model>()).delete(oldValue)

            if (nextOldValues.isEmpty()) {
              nextRelationships.delete(oldKey)
            } else {
              nextRelationships.set(oldKey, nextOldValues)
            }

            if (nextRelationships.has(newKey)) {
              nextRelationships.set(newKey, nextRelationships.get(newKey).update(newValue))
            } else {
              nextRelationships.set(newKey, Table.empty<Model>().update(newValue))
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

    return new OneToManyIndex(indexer, nextRelationships.asImmutable())
  }
}

export namespace OneToManyIndex {
  /**
  *
  */
  // @todo Use WeakHashMap here ?
  export function empty<Key, Model>(indexer: Indexer<Key, Model>): OneToManyIndex<Key, Model> {
    return new OneToManyIndex(indexer)
  }
}
