import { Map } from 'immutable'

import { Mutation } from '../mutation/Mutation'
import { MutationType } from '../mutation/MutationType'

import { Entry } from '../Entry'

import { Indexer } from './Indexer'

/**
*
*/
export class OneToOneIndex<Key, Model> {
  /**
  *
  */
  public readonly indexer: Indexer<Key, Model>

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
  public constructor(indexer: Indexer<Key, Model>, relationships: Map<Key, Entry<Model>> = Map()) {
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
  public get(key: Key): Entry<Model> | undefined {
    return this.relationships.get(key)
  }

  /**
  *
  */
  public has(key: Key): boolean {
    return this.relationships.has(key)
  }

  /**
  *
  */
  public update(mutations: Iterable<Mutation<Model>>): OneToOneIndex<Key, Model> {
    if (mutations[Symbol.iterator]().next().done) {
      return this
    }

    const indexer: Indexer<Key, Model> = this.indexer
    const nextRelationships: Map<Key, Entry<Model>> = this.relationships.asMutable()

    for (const mutation of mutations) {
      switch (mutation.type) {
        case MutationType.ADDITION:
          const addition: Entry<Model> = mutation.next!
          const key = indexer(addition.model)

          if (nextRelationships.has(key)) {
            throw new Error(
              'Unable to handle indexation of value ' + addition + ' ' +
              'associated with key ' + key + ' as a value with the given key ' +
              'was already indexed.'
            )
          } else {
            nextRelationships.set(key, addition)
          }
          break
        case MutationType.DELETION:
          nextRelationships.delete(indexer(mutation.previous!.model))
          break
        case MutationType.MUTATION:
          const oldValue: Entry<Model> = mutation.previous!
          const newValue: Entry<Model> = mutation.next!
          const oldKey: Key = indexer(oldValue.model)
          const newKey: Key = indexer(newValue.model)

          if (oldKey === newKey) {
            nextRelationships.set(oldKey, newValue)
          } else {
            nextRelationships.delete(oldKey)

            if (nextRelationships.has(newKey)) {
              throw new Error(
                'Unable to handle indexation of value ' + addition + ' ' +
                'associated with key ' + newKey + ' as a value with the ' +
                'given key was already indexed.'
              )
            } else {
              nextRelationships.set(newKey, newValue)
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

    return new OneToOneIndex(indexer, nextRelationships.asImmutable())
  }
}

export namespace OneToOneIndex {
  /**
  *
  */
  export function empty<Key, Model>(indexer: Indexer<Key, Model>): OneToOneIndex<Key, Model> {
    return new OneToOneIndex(indexer)
  }
}
