import { List } from 'immutable'

import { bissect } from '../bissect'
import { Generators } from '../Generators'

import { Mutation } from './Mutation'
import { Identity } from './Identity'

export class Mutations<Model> implements Iterable<Mutation<Model>> {
  /**
   * 
   */
  public static fromMutations<Model>(iterator: Iterator<Mutation<Model>, undefined, undefined> = Generators.empty()): Mutations<Model> {
    const elements: List<Mutation<Model>> = List().asMutable()

    let next: IteratorResult<Mutation<Model>, undefined> = iterator.next()

    while (!next.done) {
      const mutation: Mutation<Model> = next.value
      const index: number = bissect.list(elements, mutation.identifier, Mutation.compareWithIdentifier.asLeftMember)

      if (index < 0) {
        elements.insert(-index - 1, mutation)
      } else {
        elements.set(index, Mutation.chain(elements.get(index), mutation))
      }

      next = iterator.next()
    }

    return new Mutations(elements.asImmutable().filterNot(Identity.is))
  }

  /**
   * 
   */
  public static fromElements<Model>(elements: List<Mutation<Model>>): Mutations<Model> {
    return new Mutations(elements)
  }

  /**
   * 
   */
  public readonly elements: List<Mutation<Model>>

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
  private constructor(elements: List<Mutation<Model>>) {
    this.elements = elements
  }

  /**
   * 
   */
  public reduce(mutations: Iterable<Mutation<Model>>): Mutations<Model> {
    return new Mutations(Generators.iterables(this, mutations))
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof Mutations) {
      const otherElements: List<Mutation<any>> = other.elements
      const thisElements: List<Mutation<any>> = this.elements

      if (otherElements.size === thisElements.size) {
        for (let index = 0, size = thisElements.size; index < size; ++index) {
          if (!otherElements.get(index).equals(thisElements.get(index))) {
            return false
          }
        }

        return true
      }
    }

    return false
  }

  /**
   * 
   */
  public toString(): string {
    let result: string = this.constructor.name + ' ['

    const elements: List<Mutation<any>> = this.elements

    if (elements.size > 0) {
      result += elements.get(0)
    }

    for (let index = 1, size = elements.size; index < size; ++index) {
      result += ', '
      result += elements.get(index)
    }

    return result += ']'
  }

  /**
   * 
   */
  public *[Symbol.iterator](): Generator<Mutation<Model>, undefined, undefined> {
    return yield* this.elements
  }
}

export namespace Mutations {
  /**
   * 
   */
  export const EMPTY: Mutations<any> = new Mutations()

  /**
   * 
   */
  export function empty<Model>(): Mutations<Model> {
    return EMPTY
  }

  /**
   * 
   */
  export function reduce<Model>(left: Iterable<Mutation<Model>>, right: Iterable<Mutation<Model>>): Mutations<Model> {
    return new Mutations(Generators.iterables(left, right))
  }
}