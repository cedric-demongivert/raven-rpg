import { List } from 'immutable'

import { Entry } from '../Entry'

import { Mutation } from '../mutation/Mutation'
import { MutationType } from '../mutation/MutationType'

/**
*
*/
const EMPTY_LIST: List<any> = List()

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
  public constructor(entries: List<Entry<Model>>, mutations: List<Mutation<Model>>) {
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
  public filterModels(predicate: (model: Model) => boolean): Table<Model> {
    const entries: List<Entry<Model>> = this.entries

    const nextEntries: List<Entry<Model>> = EMPTY_LIST.asMutable()
    const nextMutations: List<Mutation<Model>> = EMPTY_LIST.asMutable()

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
  public filter(predicate: (model: Entry<Model>) => boolean): Table<Model> {
    const entries: List<Entry<Model>> = this.entries

    const nextEntries: List<Entry<Model>> = EMPTY_LIST.asMutable()
    const nextMutations: List<Mutation<Model>> = EMPTY_LIST.asMutable()

    for (let index = 0; index < entries.size; ++index) {
      const entry: Entry<Model> = entries.get(index)

      if (predicate(entry)) {
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
      const nextEntries: List<Entry<Model>> = EMPTY_LIST.asMutable()
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
  public pristine(): Table<Model> {
    return this.mutations.isEmpty() ? this : new Table(this.entries, EMPTY_LIST)
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
      const nextEntries: List<Entry<Model>> = EMPTY_LIST.asMutable()
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
    const entries: List<Entry<Model>> = this.entries
    const identifier: number = Entry.identifier(parameter)

    if (entries.size > 0) {
      let left: number = 0
      let right: number = 0 + entries.size

      while (left !== right) {
        const cursor: number = left + ((right - left) >>> 1)
        const entry: Entry<Model> = entries.get(cursor)
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
