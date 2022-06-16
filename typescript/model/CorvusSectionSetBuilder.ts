import { Empty, equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from '../Builder'
import { CorvusDocument } from './CorvusDocument'
import { CorvusSectionLike } from './CorvusSectionLike'
import { CorvusSectionLikeBuilder } from './CorvusSectionLikeBuilder'

/**
 * 
 */
function sortByTitle(left: CorvusSectionLikeBuilder | CorvusSectionLike, right: CorvusSectionLikeBuilder | CorvusSectionLike): number {
  return (left.title || Empty.STRING).localeCompare(right.title || Empty.STRING)
}

/**
 * 
 */
export class CorvusSectionSetBuilder implements Builder<CorvusDocument>, Iterable<CorvusSectionLike | CorvusSectionLikeBuilder> {
  /**
   * 
   */
  public readonly elements: Array<CorvusSectionLikeBuilder | CorvusSectionLike>

  /**
   * 
   */
  public constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public push(builder: CorvusSectionLikeBuilder | CorvusSectionLike | null): this {
    if (builder !== null) {
      this.elements.push(builder)
    }

    return this
  }

  /**
   * 
   */
  public setElements(values: Iterable<CorvusSectionLikeBuilder | CorvusSectionLike> | null): this {
    this.elements.length = 0

    if (values != null) {
      this.elements.push(...values)
    }

    return this
  }

  /**
   * 
   */
  public build(): CorvusDocument {
    this.elements.sort(sortByTitle)
    return CorvusDocument.create(this.elements)
  }

  /**
   * 
   */
  public sort(): this {
    this.elements.sort(sortByTitle)
    return this
  }

  /**
   * 
   */
  public values(): IterableIterator<CorvusSectionLike | CorvusSectionLikeBuilder> {
    this.elements.sort(sortByTitle)
    return this.elements.values()
  }

  /**
   * 
   */
  public [Symbol.iterator](): IterableIterator<CorvusSectionLike | CorvusSectionLikeBuilder> {
    this.elements.sort(sortByTitle)
    return this.elements.values()
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusSectionSetBuilder> | null): this {
    this.elements.length = 0

    if (toCopy != null) {
      this.elements.push(...toCopy.elements)
    }

    return this
  }

  /**
   * 
   */
  public clone(): CorvusSectionSetBuilder {
    return new CorvusSectionSetBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this.elements.length = 0
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusSectionSetBuilder) {
      return equals.arrays(this.elements, other.elements)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusSectionSetBuilder {
  /**
   * 
   */
  export function create(): CorvusSectionSetBuilder {
    return new CorvusSectionSetBuilder()
  }
}