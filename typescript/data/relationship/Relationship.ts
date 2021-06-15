import { List } from 'immutable'

import { Comparator } from '../Comparator'
import { Orderings } from '../Orderings'

/**
 * 
 */
export class Relationship<Key, Model> implements Iterable<Model> {
  /**
   * 
   */
  public readonly comparator: Comparator<Key | Model, Model>

  /**
  *
  */
  public readonly elements: List<Model>

  /**
  *
  */
  public get size(): number {
    return this.elements.size
  }

  /**
  *
  */
  public static gather<Key, Model>(comparator: Comparator<Key | Model, Model>, elements: Iterator<Model, undefined, any>): Relationship<Key, Model> {
    return new Relationship(comparator, Orderings.gatherAndDedupe.last<Model>(comparator, elements))
  }

  /**
  *
  */
  public static empty<Key, Model>(comparator: Comparator<Key | Model, Model>): Relationship<Key, Model> {
    return new Relationship(comparator, List())
  }

  /**
  *
  */
  public static wrap<Key, Model>(comparator: Comparator<Key | Model, Model>, elements: List<Model> = List()): Relationship<Key, Model> {
    return new Relationship(comparator, elements)
  }

  /**
  *
  */
  private constructor(comparator: Comparator<Key | Model, Model>, elements: List<Model>) {
    this.comparator = comparator
    this.elements = elements
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
    return Orderings.indexOf(this.comparator, this.elements, key)
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
    return Orderings.has(this.comparator, this.elements, key)
  }

  /**
  *
  */
  public get(key: Key | Model): Model | undefined {
    return Orderings.get(this.comparator, this.elements, key)
  }

  /**
   * 
   */
  public set(element: Model): Relationship<Key, Model> {
    return new Relationship(
      this.comparator,
      Orderings.set<Model>(this.comparator, this.elements, element)
    )
  }

  /**
   * 
   */
  public setAll(iterator: Iterator<Model, undefined, any>): Relationship<Key, Model> {
    return new Relationship(
      this.comparator,
      Orderings.setAll<Model>(this.comparator, this.elements, iterator)
    )
  }

  /**
   * 
   */
  public setOrdered(iterator: Iterator<Model, undefined, any>): Relationship<Key, Model> {
    return new Relationship(
      this.comparator,
      Orderings.setOrdered<Model>(this.comparator, this.elements, iterator)
    )
  }

  /**
   * 
   */
  public delete(element: Key | Model): Relationship<Key, Model> {
    return new Relationship(
      this.comparator,
      Orderings.drop(this.comparator, this.elements, element)
    )
  }

  /**
   * 
   */
  public deleteAll(iterator: Iterator<Key | Model>): Relationship<Key, Model> {
    return new Relationship(
      this.comparator,
      Orderings.dropAll(this.comparator, this.elements, iterator)
    )
  }

  /**
   * 
   */
  public deleteOrdered(iterator: Iterator<Key | Model>): Relationship<Key, Model> {
    return new Relationship(
      this.comparator,
      Orderings.dropOrdered(this.comparator, this.elements, iterator)
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

    if (other instanceof Relationship) {
      return (
        other.elements.equals(this.elements) &&
        other.comparator === this.comparator
      )
    }
  }

  /**
   *
   */
  public *[Symbol.iterator](): Generator<Model, undefined, undefined> {
    return yield* this.elements
  }
}

/**
 * 
 */
export namespace Relationship {

}
