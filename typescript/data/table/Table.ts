import { immutable, sealed } from '../../decorators'

import { List } from 'immutable'

import { Mutation } from '../mutation/Mutation'
import { Mutations } from '../mutation/Mutations'

import { Generators } from '../Generators'
import { bissect } from '../bissect'

import { Filter } from '../Filter'
import { Entry } from '../Entry'
import { Reference } from '../Reference'

/**
*
*/
@immutable
@sealed
export class Table<Model> implements Iterable<Entry<Model>> {
  /**
  *
  */
  public readonly elements: List<Entry<Model>>

  /**
  *
  */
  public get size(): number {
    return this.elements.size
  }

  /**
  *
  */
  public isEmpty(): boolean {
    return this.elements.isEmpty()
  }

  /**
  *
  */
  public isDense(): boolean {
    const elements: List<Entry<any>> = this.elements
    return elements.last(Entry.MINUS).identifier < elements.size
  }

  /**
  *
  */
  public isSparse(): boolean {
    const elements: List<Entry<any>> = this.elements
    return elements.last(Entry.MINUS).identifier >= elements.size
  }

  /**
  *
  */
  public constructor(elements: Iterator<Entry<Model>> = Generators.empty()) {
    const list: List<Entry<Model>> = List().asMutable()

    let next: IteratorResult<Entry<Model>> = elements.next()

    while (!next.done) {
      list.set(-bissect.list(list, next.value, Entry.compareByIdentifier) - 1, next.value)
    }

    this.elements = list.asImmutable()
  }

  /**
  *
  */
  public * filter(predicate: Filter<Model, any>): Generator<Mutation<Model>, undefined, undefined> {
    const elements: List<Entry<Model>> = this.elements

    for (let index = 0; index < elements.size; ++index) {
      const entry: Entry<Model> = elements.get(index)

      if (!predicate(entry.model)) {
        yield Mutation.deletionOfEntry(entry)
      }
    }

    return
  }

  /**
  *
  */
  public add(model: Model): Mutation<Model> {
    const elements: List<Entry<Model>> = this.elements

    if (elements.last(Entry.MINUS).identifier < elements.size) {
      return Mutation.addition(elements.size, model)
    } else {
      let index: number = 0

      while (elements.get(index).identifier === index) {
        ++index
      }

      return Mutation.addition(index, model)
    }
  }

  /**
  *
  */
  public * addAll(models: Iterator<Model, undefined, undefined>): Generator<Mutation<Model>, undefined, undefined> {
    const elements: List<Entry<Model>> = this.elements
    let next: IteratorResult<Model, undefined> = models.next()
    let index: number = 0

    if (elements.last(Entry.MINUS).identifier < elements.size) {
      while (!next.done) {
        yield Mutation.addition(elements.size + index, next.value)
        index += 1
      }
    } else {
      while (!next.done) {
        while (index < elements.size && elements.get(index).identifier === index) {
          index += 1;
        }

        yield Mutation.addition(index, next.value)
        index += 1;
      }
    }

    return
  }

  /**
  *
  */
  public delete(entry: Entry<Model> | number): Mutation<Model> {
    const elements: List<Entry<Model>> = this.elements
    const index: number = bissect.list(elements, Reference.identifier(entry), Entry.compareWithIdentifier.asLeftMember)

    if (index < 0) {
      return Mutation.identity(index)
    } else {
      return Mutation.deletionOfEntry(elements.get(index))
    }
  }

  /**
  *
  */
  public * deleteMany(entries: Iterator<Entry<Model> | number>): Generator<Mutation<Model>, undefined, undefined> {
    const elements: List<Entry<Model>> = this.elements

    for (const element of elements) {
      const entryIndex: number = bissect.list(elements, Reference.identifier(element), Entry.compareWithIdentifier.asLeftMember)

      if (entryIndex >= 0) {
        yield Mutation.deletionOfEntry(elements.get(entryIndex))
      }
    }

    return
  }

  /**
  *
  */
  public update(entry: Entry<Model>): Mutation<Model>
  /**
  *
  */
  public update(identifier: number, model: Model): Mutation<Model>
  public update(...parameters: any[]): Mutation<Model> {
    const identifier: number = parameters.length > 1 ? parameters[0] : parameters[0].identifier
    const model: Model = parameters.length > 1 ? parameters[1] : parameters[0].model
    const elements: List<Entry<Model>> = this.elements
    const index: number = bissect.list(elements, identifier, Entry.compareWithIdentifier.asLeftMember)

    if (index < 0) {
      return Mutation.addition(identifier, model)
    } else {
      return Mutation.update(identifier, elements.get(index).model, model)
    }
  }

  /**
  *
  */
  public * updateMany(updates: Iterable<Entry<Model>>): Generator<Mutation<Model>, undefined, undefined> {
    const elements: List<Entry<Model>> = this.elements

    for (const update of updates) {
      const entryIndex: number = bissect.list(elements, update.identifier, Entry.compareWithIdentifier.asLeftMember)

      if (entryIndex < 0 && mutationIndex < 0) {
        mutations.insert(-mutationIndex - 1, Mutation.additionOfEntry(update))
      } else if (mutationIndex < 0) {
        mutations.insert(-mutationIndex - 1, Mutation.update(update.identifier, elements.get(entryIndex).model, update.model))
      } else if (entryIndex < 0) {
        mutations.set(mutationIndex, Mutation.additionOfEntry(update))
      } else {
        mutations.set(-mutationIndex - 1, Mutation.update(update.identifier, elements.get(entryIndex).model, update.model))
      }
    }

    return new Mutations(mutations.asImmutable())
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
    return bissect.list(this.elements, Reference.identifier(parameter), Entry.compareWithIdentifier.asLeftMember)
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
    return bissect.list(this.elements, Reference.identifier(parameter), Entry.compareWithIdentifier.asLeftMember) >= 0
  }

  /**
  *
  */
  public get(identifier: number): Entry<Model> | undefined {
    const index: number = bissect.list(this.elements, identifier, Entry.compareWithIdentifier.asLeftMember)
    return index < 0 ? undefined : this.elements.get(index)
  }

  /**
  *
  */
  public toJS(): Array<Model> {
    return this.elements.toJS()
  }

  /**
  *
  */
  public * clear(): Generator<Mutation<Model>, undefined, undefined> {
    for (const element of this.elements) {
      yield Mutation.deletionOfEntry(element)
    }

    return
  }

  /**
   * 
   */
  public *[Symbol.iterator](): Generator<Entry<Model>, undefined, undefined> {
    return yield* this.elements
  }
}

export namespace Table {
  /**
  *
  */
  export function reduce<Model>(table: Table<Model>, mutations: Mutation<Model> | Mutations<Model>): Table<Model> {
    if (Mutation.is(mutations)) {
      return new Table(TableIndex.reduceMutation(table.elements, mutations))
    } else {
      return new Table(TableIndex.reduceMutations(table.elements, mutations))
    }
  }

  /**
  *
  */
  export const EMPTY: Table<any> = new Table()

  /**
  *
  */
  export function empty<Model>(): Table<Model> {
    return EMPTY
  }
}
