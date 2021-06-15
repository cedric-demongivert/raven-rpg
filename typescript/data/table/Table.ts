import { List } from 'immutable'

import { Entry } from '../Entry'
import { Reference } from '../Reference'
import { Orderings } from '../Orderings'
import { TableAddition } from './TableAddition'
import { Predicate } from '../Predicate'
import { TableFiltration } from './TableFiltration'
import { TableAssignation } from './TableAssignation'
import { TableDeletion } from './TableDeletion'
import { Iterators } from '../Iterators'
import { Comparator } from '@cedric-demongivert/gl-tool-collection'
import { OneToMany, OneToOne } from '../relationship'

/**
*
*/
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
  public static EMPTY: Table<any> = new Table(List())

  /**
  *
  */
  public static empty<Model>(): Table<Model> {
    return Table.EMPTY
  }

  /**
   * 
   */
  public static gatherEntries<Model>(iterator: Iterator<Entry<Model>, any, any>): Table<Model> {
    return new Table(
      Orderings.dedupe.last(
        Entry.compareByIdentifier,
        Orderings.gather(
          Entry.compareByIdentifier,
          iterator
        )
      )
    )
  }

  /**
   * 
   */
  public static gatherModels<Model>(iterator: Iterator<Model, any, any>): Table<Model> {
    const elements: List<Entry<Model>> = List().asMutable()

    let next: IteratorResult<Model, any> = iterator.next()

    while (!next.done) {
      elements.push(Entry.create(elements.size, next.value))
    }

    return new Table(elements.asImmutable())
  }

  /**
  *
  */
  public static wrap<Model>(elements?: List<Entry<Model>>): Table<Model> {
    return new Table(elements)
  }

  /**
  *
  */
  public static ofEntries<Model>(...elements: Entry<Model>[]): Table<Model> {
    return Table.gatherEntries(elements.values())
  }

  /**
  *
  */
  public static ofModels<Model>(...models: Model[]): Table<Model> {
    return Table.gatherModels(models.values())
  }

  /**
  *
  */
  private constructor(elements: List<Entry<Model>>) {
    this.elements = elements
  }

  /**
   * 
   */
  public indexBy<Key>(comparator: Comparator<Key | Model, Model>): OneToOne<Key, Model> {
    return OneToOne.gather(comparator, this.elements.values())
  }

  /**
   * 
   */
  public groupBy<Key>(comparator: Comparator<Key | Model, Model>): OneToMany<Key, Model> {
    return OneToMany.gather(comparator, this.elements.values())
  }

  /**
   * 
   */
  public first(): Entry<Model> | undefined
  /**
   * 
   */
  public first<Default>(defaultValue: Default): Entry<Model> | Default
  public first<Default>(defaultValue?: Default): Entry<Model> | Default {
    return this.elements.first(defaultValue)
  }

  /**
   * 
   */
  public last(): Entry<Model> | undefined
  /**
   * 
   */
  public last<Default>(defaultValue: Default): Entry<Model> | Default
  public last<Default>(defaultValue?: Default): Entry<Model> | Default {
    return this.elements.last(defaultValue)
  }

  /**
   * 
   */
  public values(): IterableIterator<Entry<Model>> {
    return this.elements.values()
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
    if (this.size > 0) {
      const elements: List<Entry<any>> = this.elements
      return elements.last<Entry<any>>().identifier < elements.size
    } else {
      return true
    }
  }

  /**
  *
  */
  public isSparse(): boolean {
    if (this.size > 0) {
      const elements: List<Entry<any>> = this.elements
      return elements.last<Entry<any>>().identifier >= elements.size
    } else {
      return false
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
    return Orderings.indexOf(
      Entry.compareWithIdentifier.asLeftMember,
      this.elements,
      Reference.identifier(parameter)
    )
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
    return Orderings.has(
      Entry.compareWithIdentifier.asLeftMember,
      this.elements,
      Reference.identifier(parameter)
    )
  }

  /**
  *
  */
  public get(identifier: number): Entry<Model> | undefined {
    return Orderings.get(
      Entry.compareWithIdentifier.asLeftMember,
      this.elements,
      Reference.identifier(identifier)
    )
  }

  /**
   * 
   */
  public add(model: Model): TableAddition<Model> {
    const previousElements: List<Entry<Model>> = this.elements
    const nextElements: List<Entry<Model>> = List().asMutable()

    let nextIdentifier: number = 0
    let cursor: number = 0

    while (cursor < previousElements.size && previousElements.get(cursor).identifier === nextIdentifier) {
      nextElements.push(previousElements.get(cursor))
      nextIdentifier += 1
      cursor += 1
    }

    const addition: Entry<Model> = Entry.create(nextIdentifier, model)
    nextElements.push(addition)

    while (cursor < previousElements.size) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    return TableAddition.create({
      from: this,
      to: Table.wrap(nextElements.asImmutable()),
      additions: List.of(addition)
    })
  }

  /**
   * 
   */
  public addMany(iterator: Iterator<Model>): TableAddition<Model> {
    const previousElements: List<Entry<Model>> = this.elements
    const nextElements: List<Entry<Model>> = List().asMutable()
    const additions: List<Entry<Model>> = List().asMutable()

    let next: IteratorResult<Model, undefined> = iterator.next()
    let nextIdentifier: number = 0
    let cursor: number = 0

    while (!next.done) {
      while (cursor < previousElements.size && previousElements.get(cursor).identifier === nextIdentifier) {
        nextElements.push(previousElements.get(cursor))
        nextIdentifier += 1
        cursor += 1
      }

      const addition: Entry<Model> = Entry.create(nextIdentifier, next.value)
      nextElements.push(addition)
      additions.push(addition)
      nextIdentifier += 1
      next = iterator.next()
    }

    while (cursor < previousElements.size) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    return TableAddition.create({
      from: this,
      to: Table.wrap(nextElements.asImmutable()),
      additions: additions.asImmutable()
    })
  }

  /**
   * 
   */
  public delete(model: Reference<Model>): TableDeletion<Model> {
    const previousElements: List<Entry<Model>> = this.elements
    const nextElements: List<Entry<Model>> = List().asMutable()
    const deletions: List<Entry<Model>> = List().asMutable()

    let cursor: number = 0

    const identifier: number = Reference.identifier(model)

    while (previousElements.get(cursor).identifier < identifier) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    if (identifier === previousElements.get(cursor).identifier) {
      deletions.push(previousElements.get(cursor))
      cursor += 1
    }

    while (cursor < previousElements.size) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    return TableDeletion.create({
      from: this,
      to: Table.wrap(nextElements.asImmutable()),
      deletions
    })
  }

  /**
   * 
   */
  public deleteMany(iterator: Iterator<Reference<Model>, undefined, any>): TableDeletion<Model> {
    return this.deleteOrdered(Iterators.sort(Reference.compare, iterator))
  }

  /**
   * 
   */
  public deleteOrdered(iterator: Iterator<Reference<Model>, undefined, any>): TableDeletion<Model> {
    const previousElements: List<Entry<Model>> = this.elements
    const nextElements: List<Entry<Model>> = List().asMutable()
    const deletions: List<Entry<Model>> = List().asMutable()

    let next: IteratorResult<Reference<Model>> = iterator.next()
    let cursor: number = 0

    while (!next.done) {
      const identifier: number = Reference.identifier(next.value)

      while (previousElements.get(cursor).identifier < identifier) {
        nextElements.push(previousElements.get(cursor))
        cursor += 1
      }

      if (identifier === previousElements.get(cursor).identifier) {
        deletions.push(previousElements.get(cursor))
        cursor += 1
      }

      let nextNext: IteratorResult<Reference<Model>> = iterator.next()

      while (!nextNext.done && Reference.compare(nextNext.value, next.value) === 0) {
        nextNext = iterator.next()
      }

      next = nextNext
    }

    while (cursor < previousElements.size) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    return TableDeletion.create({
      from: this,
      to: Table.wrap(nextElements.asImmutable()),
      deletions
    })
  }

  /**
   * 
   */
  public filter<To extends Model = Model>(predicate: Predicate<Model, To>): TableFiltration<Model, To> {
    const previousElements: List<Entry<Model>> = this.elements
    const nextElements: List<Entry<To>> = List().asMutable()
    const deletions: List<Entry<Model>> = List().asMutable()

    for (let index = 0; index < previousElements.size; ++index) {
      const entry: Entry<Model> = previousElements.get(index)

      if (Entry.isModel(entry, predicate)) {
        nextElements.push(entry)
      } else {
        deletions.push(entry)
      }
    }

    return TableFiltration.create({
      from: this,
      to: Table.wrap(nextElements.asImmutable()),
      deletions: deletions.asImmutable()
    })
  }

  /**
   * 
   */
  public set(update: Entry<Model>): TableAssignation<Model> {
    const previousElements: List<Entry<Model>> = this.elements
    const nextElements: List<Entry<Model>> = List().asMutable()
    const additions: List<Entry<Model>> = List().asMutable()
    const mutations: List<Entry<Model>> = List().asMutable()

    let previousEntry: Entry<Model> | undefined = undefined
    let cursor: number = 0

    while (cursor < previousElements.size && previousElements.get(cursor).identifier < update.identifier) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    nextElements.push(update)

    if (cursor < previousElements.size && previousElements.get(cursor).identifier === update.identifier) {
      previousEntry = previousElements.get(cursor)
      cursor += 1
      additions.push(update)
    } else {
      mutations.push(update)
    }

    while (cursor < previousElements.size) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    return TableAssignation.create({
      from: this,
      to: Table.wrap(nextElements.asImmutable()),
      additions,
      mutations
    })
  }

  /**
  *
  */
  public setMany(iterator: Iterator<Entry<Model>, undefined, any>): TableAssignation<Model> {
    return this.setOrdered(Iterators.sort(Entry.compareByIdentifier, iterator))
  }

  /**
   * 
   */
  public setOrdered(iterator: Iterator<Entry<Model>>): TableAssignation<Model> {
    const previousElements: List<Entry<Model>> = this.elements
    const nextElements: List<Entry<Model>> = List().asMutable()
    const additions: List<Entry<Model>> = List().asMutable()
    const mutations: List<Entry<Model>> = List().asMutable()

    let next: IteratorResult<Entry<Model>> = iterator.next()
    let cursor: number = 0

    while (!next.done) {
      const entry: Entry<Model> = next.value

      while (cursor < previousElements.size && previousElements.get(cursor).identifier < entry.identifier) {
        nextElements.push(previousElements.get(cursor))
        cursor += 1
      }

      nextElements.push(entry)

      if (cursor < previousElements.size && previousElements.get(cursor).identifier === entry.identifier) {
        mutations.push(entry)
        cursor += 1
      } else {
        additions.push(entry)
      }
    }

    while (cursor < previousElements.size) {
      nextElements.push(previousElements.get(cursor))
      cursor += 1
    }

    return TableAssignation.create({
      from: this,
      to: Table.wrap(nextElements.asImmutable()),
      additions,
      mutations
    })
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
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Table) {
      return other.elements.equals(this.elements)
    }
  }

  /**
   *
   */
  public *[Symbol.iterator](): Generator<Entry<Model>, undefined, undefined> {
    return yield* this.elements
  }
}

/**
 * 
 */
export namespace Table {
  /**
   * 
   */
  export function is(value: any): value is Table<any> {
    return value instanceof Table
  }
}