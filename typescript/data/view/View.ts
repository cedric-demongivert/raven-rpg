import { List } from 'immutable'

import { Table } from '../table/Table'

import { Mutation } from '../mutation/Mutation'

import { Filter } from '../Filter'
import { Entry } from '../Entry'

/**
*
*/
export type View<Model> = Table<Model>

export namespace View {
  /**
  *
  */
  export function filter<Model, Filtered extends Model>(table: Table<Model>, filter: Filter<Model, Filtered>): View<Filtered> {
    if (table.entries.isEmpty()) {
      return EMPTY
    }

    const entries: List<Entry<Filtered>> = List().asMutable()
    const mutations: List<Mutation<Filtered>> = List().asMutable()

    for (const entry of table.entries) {
      if (Entry.filter(filter, entry)) {
        entries.push(entry)
      }
    }

    return new Table(entries.asImmutable())
  }

  /**
  *
  */
  export type FilteringReducer<Model, Filtered extends Model = Model> = (state: View<Filtered> | undefined, actions: Iterable<Mutation<Model>>) => View<Filtered>

  /**
  *
  */
  export function reduceFiltration<Model, Filtered extends Model>(state: View<Filtered> | undefined, mutations: Iterable<Mutation<Model>>, filter: Filter<Model, Filtered>): View<Filtered> {
    const iterator: Iterator<Mutation<Model>> = mutations[Symbol.iterator]()
    let current: IteratorResult<Mutation<Model>> = iterator.next()

    while (!current.done && current.value && !Mutation.filter(filter, current.value)) {
      current = iterator.next()
    }

    if (current.done) {
      if (current.value && Mutation.filter(filter, current.value)) {
        return (state || View.EMPTY).mutate(current.value)
      } else {
        return (state || View.EMPTY).pristine()
      }
    }

    const nextMutations: List<Mutation<Filtered>> = List().asMutable()
    const nextEntries: List<Entry<Filtered>> = state.entries.asMutable()

    do {
      const mutation: Mutation<Model> | undefined = current.value

      if (mutation && Mutation.filter(filter, mutation)) {
        mutation.applyToList(nextEntries)
        nextMutations.push(mutation)
      }

      current = iterator.next()
    } while (!current.done);

    const mutation: Mutation<Model> | undefined = current.value

    if (mutation && Mutation.filter(filter, mutation)) {
      mutation.applyToList(nextEntries)
      nextMutations.push(mutation)
    }

    return new Table(nextEntries.asImmutable())
  }

  /**
  *
  */
  export function filteringReducer<Model, Filtered extends Model>(mapping: Filter<Model, Filtered>): FilteringReducer<Model, Filtered> {
    return function filtrationReducer(state: View<Filtered> | undefined, action: Iterable<Mutation<Model>>): View<Filtered> {
      return reduceFiltration(state, action, mapping)
    }
  }

  /**
  *
  */
  export const EMPTY: View<any> = Table.EMPTY

  /**
  *
  */
  export function empty<Model>(): View<Model> {
    return EMPTY
  }
}
