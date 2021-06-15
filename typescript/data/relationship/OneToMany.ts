import { List } from 'immutable'

import { Entry } from '../Entry'
import { Comparator } from '../Comparator'

import { Relationship } from './Relationship'
import { Table } from '../table'
import { Iterators } from '../Iterators'

import { OneToOne } from './OneToOne'
import { Orderings } from '../Orderings'

/**
 * 
 */
export class OneToMany<Key, Model> {
  /**
   * 
   */
  public readonly relationship: Relationship<Key | Model, Table<Model>>

  /**
   * 
   */
  public readonly comparator: Comparator<Key | Model, Model>

  /**
   * 
   */
  public get elements(): List<Table<Model>> {
    return this.relationship.elements
  }

  /**
  *
  */
  public static gather<Key, Model>(comparator: Comparator<Key | Model, Model>, iterator: Iterator<Entry<Model>, undefined, any>): OneToMany<Key, Model> {
    const entryComparator: Comparator<Entry<Model>> = Entry.comparator(comparator)

    const elements: List<Entry<Model>> = Orderings.gatherAndDedupe.last(
      Comparator.both(entryComparator, Entry.compareByIdentifier),
      iterator
    )

    const tables: List<Table<Model>> = List().asMutable()

    let current: number = 0

    for (let index = 1; index < elements.size; ++index) {
      if (entryComparator(elements.get(current), elements.get(index)) < 0) {
        tables.push(Table.wrap(elements.slice(current, index)))
        current = index
      }
    }

    tables.push(Table.wrap(elements.slice(current, elements.size)))

    return new OneToMany(
      comparator,
      Relationship.wrap(OneToMany.toTableComparator(comparator), tables)
    )
  }

  /**
  *
  */
  public static empty<Key, Model>(comparator: Comparator<Key | Model, Model>): OneToMany<Key, Model> {
    return new OneToMany(
      comparator,
      Relationship.empty(OneToMany.toTableComparator(comparator))
    )
  }

  /**
  *
  */
  public static wrap<Key, Model>(comparator: Comparator<Key | Model, Model>, elements: List<Table<Model>> = List()): OneToMany<Key, Model> {
    return new OneToMany(
      comparator,
      Relationship.wrap(OneToMany.toTableComparator(comparator), elements)
    )
  }

  /**
   * 
   */
  private constructor(comparator: Comparator<Key | Model, Model>, elements: Relationship<Key | Model, Table<Model>>) {
    this.comparator = comparator
    this.relationship = elements
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
  public indexOf(key: Key): number
  /**
   * 
   */
  public indexOf(key: Model): number
  public indexOf(key: Key | Model): number {
    return this.relationship.indexOf(key)
  }

  /**
   * 
   */
  public has(key: Key): boolean
  /**
   * 
   */
  public has(key: Model): boolean
  public has(key: Key | Model): boolean {
    return this.relationship.has(key)
  }

  /**
  *
  */
  public get(key: Key | Model): Table<Model> | undefined {
    return this.relationship.get(key)
  }

  /**
   * 
   */
  public set(element: Entry<Model>): OneToMany<Key, Model> {
    const relationship: Relationship<Key | Model, Table<Model>> = this.relationship
    const index: number = relationship.indexOf(element.model)

    if (index > -1) {
      return new OneToMany(
        this.comparator,
        relationship.set(relationship.elements.get(index).set(element).to)
      )
    } else {
      return new OneToMany(
        this.comparator,
        relationship.set(Table.wrap(List.of(element)))
      )
    }
  }

  /**
   * 
   */
  public setAll(iterator: Iterator<Entry<Model>>): OneToMany<Key, Model> {
    return this.setOrdered(
      Iterators.sort(
        OneToOne.toEntryComparator(this.comparator) as Comparator<Entry<Model>>,
        iterator
      )
    )
  }

  /**
   * 
   */
  public setOrdered(iterator: Iterator<Entry<Model>>): OneToMany<Key, Model> {
    const comparator: Comparator<Key | Model | Table<Model>, Table<Model>> = this.relationship.comparator
    const elementComparator: Comparator<Key | Model, Model> = this.comparator
    const previous: List<Table<Model>> = this.elements
    const result: List<Table<Model>> = List().asMutable()
    const stack: Entry<Model>[] = []

    let current: IteratorResult<Entry<Model>, any> = iterator.next()
    let cursor: number = 0

    while (!current.done) {
      while (cursor < previous.size && comparator(current.value, previous.get(cursor)) > 0) {
        result.push(previous.get(cursor))
        cursor += 1
      }

      stack.length = 0
      stack.push(current.value)

      let next: IteratorResult<Entry<Model>, any> = iterator.next()

      while (!next.done && elementComparator(next.value, current.value)) {
        stack.push(next.value)
        next = iterator.next()
      }

      stack.sort(Entry.compareByIdentifier)

      if (cursor < previous.size && comparator(current.value, previous.get(cursor)) === 0) {
        result.push(previous.get(cursor).setOrdered(stack.values()).to)
      } else {
        result.push(Table.wrap(List(stack)))
      }

      current = next
    }

    return new OneToMany(
      elementComparator,
      Relationship.wrap(comparator, result.asImmutable())
    )
  }

  /**
   * 
   */
  public delete(element: Entry<Model>): OneToMany<Key, Model> {
    const relationship: Relationship<Key | Model, Table<Model>> = this.relationship
    const index: number = relationship.indexOf(element.model)

    if (index > -1) {
      return new OneToMany(
        this.comparator,
        relationship.set(relationship.elements.get(index).delete(element).to)
      )
    } else {
      return this
    }
  }

  /**
   * 
   */
  public deleteAll(iterator: Iterator<Entry<Model>>): OneToMany<Key, Model> {
    return this.deleteOrdered(
      Iterators.sort(
        OneToOne.toEntryComparator(this.comparator) as Comparator<Entry<Model>>,
        iterator
      )
    )
  }

  /**
   * 
   */
  public deleteOrdered(iterator: Iterator<Entry<Model>>): OneToMany<Key, Model> {
    const comparator: Comparator<Key | Model | Table<Model>, Table<Model>> = this.relationship.comparator
    const elementComparator: Comparator<Key | Model, Model> = this.comparator
    const previous: List<Table<Model>> = this.elements
    const result: List<Table<Model>> = List().asMutable()
    const stack: Entry<Model>[] = []

    let current: IteratorResult<Entry<Model>, any> = iterator.next()
    let cursor: number = 0

    while (!current.done) {
      while (cursor < previous.size && comparator(current.value, previous.get(cursor)) > 0) {
        result.push(previous.get(cursor))
        cursor += 1
      }

      stack.length = 0
      stack.push(current.value)

      let next: IteratorResult<Entry<Model>, any> = iterator.next()

      while (!next.done && elementComparator(next.value, current.value)) {
        stack.push(next.value)
        next = iterator.next()
      }

      stack.sort(Entry.compareByIdentifier)

      if (cursor < previous.size && comparator(current.value, previous.get(cursor)) === 0) {
        const nextTable: Table<Model> = previous.get(cursor).deleteOrdered(stack.values()).to

        if (nextTable.size > 0) {
          result.push(nextTable)
        }
      }

      current = next
    }

    return new OneToMany(
      elementComparator,
      Relationship.wrap(comparator, result.asImmutable())
    )
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

    if (other instanceof OneToMany) {
      return (
        this.comparator === other.comparator &&
        this.elements.equals(other.elements)
      )
    }
  }

  /**
   *
   */
  public *[Symbol.iterator](): Generator<Table<Model>, undefined, undefined> {
    return yield* this.elements
  }
}

/**
 * 
 */
export namespace OneToMany {
  /**
   * 
   */
  export function toTableComparator<Key, Model>(comparator: Comparator<Key | Model, Model>): Comparator<Key | Model | Table<Model>, Table<Model>> {
    return function tableComparator(left: Key | Model | Table<Model>, right: Table<Model>): number {
      return comparator(Table.is(left) ? left.elements.get(0).model : left, right.elements.get(0).model)
    }
  }
}