import { List } from 'immutable'

import { MemoïzedIterator } from '../../MemoïzedIterator'

import { Entry } from '../Entry'

import { Mutation } from '../mutation/Mutation'
import { MutationType } from '../mutation/MutationType'
import { Addition } from '../mutation/Addition'
import { Deletion } from '../mutation/Deletion'
import { Update } from '../mutation/Update'
import { Mutations } from '../mutation/Mutations'

export type TableIndex<Model> = List<Entry<Model>>

export namespace TableIndex {
  /**
   * 
   */
  export const EMPTY: TableIndex<any> = List()

  /**
   * 
   */
  export function empty<Model>(): TableIndex<Model> {
    return EMPTY
  }

  /**
   * 
   */
  export function isSparse(list: TableIndex<any>): boolean {
    return list.last(Entry.MINUS).identifier >= list.size
  }

  /**
   * 
   */
  export function isDense(list: TableIndex<any>): boolean {
    return list.last(Entry.MINUS).identifier < list.size
  }

  /**
  *
  */
  export function bissect<Model>(list: TableIndex<Model>, identifier: number): number {
    if (list.size > 0) {
      let left: number = 0
      let right: number = 0 + list.size

      while (left !== right) {
        const cursor: number = left + ((right - left) >>> 1)
        const entry: Entry<Model> = list.get(cursor)
        const comparison: number = identifier - entry.identifier

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

  /**
   * 
   */
  export function reduceAddition<Model>(list: TableIndex<Model>, addition: Addition<Model>): TableIndex<Model> {
    const index: number = bissect(list, addition.identifier)

    if (index < 0) {
      return list.insert(-index - 1, new Entry(addition.identifier, addition.next))
    } else {
      throw new Error(
        'Unable to add an entry of identifier #' + addition.identifier + ' to the given list ' +
        'as an entry with the given identifier already exists into the given list.'
      )
    }
  }

  /**
   * 
   */
  export function reduceUpdate<Model>(list: TableIndex<Model>, update: Update<Model>): TableIndex<Model> {
    const index: number = bissect(list, update.identifier)

    if (index < 0) {
      throw new Error(
        'Unable to update the entry of identifier #' + update.identifier + ' from the given list ' +
        'as no entry with the given identifier exists into the given list.'
      )
    } else {
      return list.set(-index - 1, new Entry(update.identifier, update.next))
    }
  }

  /**
   * 
   */
  export function reduceDeletion<Model>(list: TableIndex<Model>, deletion: Deletion<Model>): TableIndex<Model> {
    const index: number = bissect(list, deletion.identifier)

    if (index < 0) {
      throw new Error(
        'Unable to delete the entry of identifier #' + deletion.identifier + ' from the given list ' +
        'as no entry with the given identifier exists into the given list.'
      )
    } else {
      return list.delete(-index - 1)
    }
  }

  /**
   * 
   */
  export function reduceMutation<Model>(list: TableIndex<Model>, mutation: Mutation<Model>): TableIndex<Model> {
    switch (mutation.type) {
      case MutationType.ADDITION:
        return reduceAddition(list, mutation as Addition<Model>)
      case MutationType.UPDATE:
        return reduceUpdate(list, mutation as Update<Model>)
      case MutationType.DELETION:
        return reduceDeletion(list, mutation as Deletion<Model>)
      case MutationType.IDENTITY:
        return list
      default:
        throw new Error('No procedure was defined to handle the reduction of a mutation of type ' + MutationType.toDebugString(mutation.type) + '.')
    }
  }

  /**
   * 
   */
  export function reduceMutations<Model>(list: TableIndex<Model>, mutations: Mutations<Model>): TableIndex<Model> {
    const next: TableIndex<Model> = List().asMutable()
    const iterator: MemoïzedIterator<Entry<Model>> = MemoïzedIterator.wrap(list.values())
    iterator.next()

    for (const mutation of mutations.index) {
      while (!iterator.current().done && iterator.current().value.identifier < mutation.identifier) {
        list.push(iterator.current().value)
      }

      if (Mutation.isAddition(mutation) || Mutation.isUpdate(mutation)) {
        list.push(new Entry(mutation.identifier, mutation.next))
      }
    }

    return list.asImmutable()
  }
}