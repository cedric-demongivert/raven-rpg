import { List } from 'immutable'

import { Mutation } from '../mutation/Mutation'
import { MutationType } from '../mutation/MutationType'

import { Filter } from '../Filter'
import { Entry } from '../Entry'

/**
*
*/
export class Table<Model> {
  /**
  *
  */
  public readonly entries: List<Entry<Model>>

  /**
  *
  */
  public readonly mutations: List<Mutation<Model>>

  /**
  *
  */
  public get size(): number {
    return this.entries.size
  }

  /**
  *
  */
  public constructor(entries: List<Entry<Model>>, mutations: List<Mutation<Model>> = List()) {
    this.entries = entries
    this.mutations = mutations
  }

  /**
  *
  */
  public isEmpty(): boolean {
    return this.entries.isEmpty()
  }

  /**
  *
  */
  public isPristine(): boolean {
    return this.mutations.isEmpty()
  }

  /**
  *
  */
  public getFirstInserted(): Entry<Model> | undefined {
    for (const mutation of this.mutations) {
      if (mutation.type === MutationType.ADDITION) {
        return mutation.next
      }
    }

    return undefined
  }

  /**
  *
  */
  public mutate(mutation: Mutation<Model>): Table<Model> {
    switch (mutation.type) {
      case MutationType.ADDITION:
        return this.update(mutation.next)
      case MutationType.MUTATION:
        return this.update(mutation.next)
      case MutationType.DELETION:
        return this.delete(mutation.previous)
      default:
        throw new Error(
          'Unable to handle mutation of type ' +
          MutationType.toDebugString(mutation.type) + ' as no procedure ' +
          'was defined for that.'
        )
    }
  }

  /**
  *
  */
  public filter(predicate: Filter<Model, any>): Table<Model> {
    const entries: List<Entry<Model>> = this.entries

    const nextEntries: List<Entry<Model>> = List().asMutable()
    const nextMutations: List<Mutation<Model>> = List().asMutable()

    for (let index = 0; index < entries.size; ++index) {
      const entry: Entry<Model> = entries.get(index)

      if (predicate(entry.model)) {
        nextMutations.push(Mutation.deletion(entry))
      } else {
        nextEntries.push(entry)
      }
    }

    return new Table(nextEntries.asImmutable(), nextMutations.asImmutable())
  }

  /**
  *
  */
  public add(model: Model): Table<Model> {
    const entries: List<Entry<Model>> = this.entries

    if (entries.isEmpty()) {
      const entry: Entry<Model> = new Entry(0, model)
      return new Table(List.of(entry), List.of(Mutation.addition(entry)))
    } else if (entries.last<Entry<Model>>().identifier === (entries.size - 1)) {
      const entry: Entry<Model> = new Entry(entries.size, model)
      return new Table(entries.push(entry), List.of(Mutation.addition(entry)))
    } else {
      const nextEntries: List<Entry<Model>> = List().asMutable()
      let inserted: Entry<Model> | undefined = undefined

      for (let index = 0; inserted == null; ++index) {
        const entry: Entry<Model> = entries.get(index)

        if (entry.identifier === index) {
          nextEntries.push(entry)
        } else {
          inserted = new Entry(index, model)
          nextEntries.push(inserted)
          nextEntries.push(entry)
        }
      }

      for (let index = inserted.identifier + 1; index < entries.size; ++index) {
        nextEntries.push(entries.get(index))
      }

      return new Table(
        nextEntries.asImmutable(),
        List.of(Mutation.addition(inserted))
      )
    }
  }

  /**
  *
  */
  public addMany(models: Iterable<Model>): Table<Model> {
    throw new Error('not implemented yet')
  }

  /**
  *
  */
  public delete(identifier: number): Table<Model>
  /**
  *
  */
  public delete(entry: Entry<Model>): Table<Model>
  /**
  *
  */
  public delete(parameter: Entry<Model> | number): Table<Model>
  public delete(parameter: Entry<Model> | number): Table<Model> {
    const identifier: number = Entry.identifier(parameter)
    const index: number = this.indexOf(identifier)

    if (index < 0) {
      return this
    } else {
      return new Table(
        this.entries.delete(index),
        List.of(Mutation.deletion(this.entries.get(index)))
      )
    }
  }

  /**
  *
  */
  public deleteMany(elements: Iterable<Entry<Model> | number>): Table<Model> {
    throw new Error('not implemented yet')
  }

  /**
  *
  */
  public pristine(): Table<Model> {
    return this.mutations.isEmpty() ? this : new Table(this.entries, List())
  }

  /**
  *
  */
  public update(entry: Entry<Model>): Table<Model>
  /**
  *
  */
  public update(identifier: number, model: Model): Table<Model>
  public update(...parameters: any[]): Table<Model> {
    const toUpdate: Entry<Model> = parameters.length > 1 ? new Entry(parameters[0], parameters[1]) : parameters[0]
    const entries: List<Entry<Model>> = this.entries

    if (entries.isEmpty()) {
      return new Table(List.of(toUpdate), List.of(Mutation.addition(toUpdate)))
    } else if (entries.last<Entry<Model>>().identifier < toUpdate.identifier) {
      return new Table(
        entries.push(toUpdate),
        List.of(Mutation.addition(toUpdate))
      )
    } else {
      const nextEntries: List<Entry<Model>> = List().asMutable()
      let oldValue: Entry<Model> = undefined
      let index: number = 0

      for (; index < entries.size; ++index) {
        const entry: Entry<Model> = entries.get(index)

        if (entry.identifier > toUpdate.identifier) {
          nextEntries.push(toUpdate)
          nextEntries.push(entry)
          index += 1
          break
        } else if (entry.identifier === toUpdate.identifier) {
          nextEntries.push(toUpdate)
          oldValue = entry
          index += 1
          break
        } else {
          nextEntries.push(entry)
        }
      }

      for (; index < entries.size; ++index) {
        nextEntries.push(entries.get(index))
      }

      return new Table(
        nextEntries.asImmutable(),
        List.of(oldValue ? Mutation.mutation(oldValue, toUpdate) : Mutation.addition(toUpdate))
      )
    }
  }

  /**
  *
  */
  public updateMany(updates: Iterable<Entry<Model>>): Table<Model> {
    const entries: List<Entry<Model>> = this.entries.asMutable()
    const mutations: List<Mutation<Model>> = List().asMutable()

    for (const update of updates) {
      const index: number = Entry.bissect(entries, update.identifier)

      if (index < 0) {
        mutations.push(Mutation.addition(update))
        entries.insert(-index - 1, update)
      } else {
        mutations.push(Mutation.mutation(entries.get(index), update))
        entries.set(index, update)
      }
    }

    return new Table(
      entries.asImmutable(),
      mutations.asImmutable()
    )
  }

  /**
  *
  */
  public indexOf(identifier: number): number
  /**
  *
  */
  public indexOf(entry: Entry<Model>): number
  /**
  *
  */
  public indexOf(parameter: Entry<Model> | number): number
  public indexOf(parameter: Entry<Model> | number): number {
    return Entry.bissect(this.entries, Entry.identifier(parameter))
  }

  /**
  *
  */
  public has(identifier: number): boolean
  /**
  *
  */
  public has(entry: Entry<Model>): boolean
  /**
  *
  */
  public has(parameter: Entry<Model> | number): boolean
  public has(parameter: Entry<Model> | number): boolean {
    if (typeof parameter === 'number') {
      return this.indexOf(parameter) >= 0
    } else {
      return this.get(parameter.identifier) === parameter
    }
  }

  /**
  *
  */
  public get(identifier: number): Entry<Model> | undefined {
    const index: number = this.indexOf(identifier)
    return index < 0 ? undefined : this.entries.get(index)
  }

  /**
  *
  */
  public toJS(): Array<Model> {
    return this.entries.toJS()
  }

  /**
  *
  */
  public clear(): Table<Model> {
    if (this.entries.isEmpty()) {
      return this.pristine()
    } else {
      return new Table(List(), this.entries.map(Mutation.deletion))
    }
  }
}

export namespace Table {
  /**
  *
  */
  export const EMPTY: Table<any> = new Table(List(), List())

  /**
  *
  */
  export function empty<Model>(): Table<Model> {
    return EMPTY
  }
}
