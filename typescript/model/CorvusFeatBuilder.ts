import { equals } from '@cedric-demongivert/gl-tool-utils'
import { Builder } from '../Builder'
import { CorvusFeatRestriction } from '../data'
import { CorvusDocumentBuilder } from './CorvusDocumentBuilder'

import { CorvusFeat } from './CorvusFeat'
import { CorvusSectionLikeBuilder } from './CorvusSectionLikeBuilder'

/**
 *
 */
export class CorvusFeatBuilder extends CorvusSectionLikeBuilder<CorvusFeat> {
  /**
   *
   */
  public readonly content: CorvusDocumentBuilder

  /**
   *
   */
  public readonly restrictions: Array<CorvusFeatRestriction | Builder<CorvusFeatRestriction>>

  /**
   * 
   */
  public constructor() {
    super()
    this.content = CorvusDocumentBuilder.create()
    this.restrictions = []
  }

  /**
   * 
   */
  public setContent(content: CorvusDocumentBuilder | null): this {
    this.content.copy(content)
    return this
  }

  /**
   * 
   */
  public setRestrictions(restrictions: Iterable<CorvusFeatRestriction | Builder<CorvusFeatRestriction>> | null): this {
    this.restrictions.length = 0

    if (restrictions != null) {
      this.restrictions.push(...restrictions)
    }

    return this
  }

  /**
   * 
   */
  public pushRestriction(restriction: CorvusFeatRestriction | Builder<CorvusFeatRestriction> | null): this {
    if (restriction != null) {
      this.restrictions.push(restriction)
    }

    return this
  }

  /**
   * 
   */
  public build(): CorvusFeat {
    return new CorvusFeat(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusFeatBuilder> | null): this {
    if (toCopy == null) {
      return this.clear()
    }

    super.copy(toCopy)
    this.content.copy(toCopy.content)
    this.restrictions.length = 0
    this.restrictions.push(...toCopy.restrictions)

    return this
  }

  /**
   * 
   */
  public clone(): CorvusFeatBuilder {
    return new CorvusFeatBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this.content.clear()
    this.restrictions.length = 0
    return super.clear()
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusFeatBuilder) {
      return (
        this.content.equals(other.content) &&
        equals.arrays(this.restrictions, other.restrictions)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusFeatBuilder {
  /**
   * 
   */
  export function create(): CorvusFeatBuilder {
    return new CorvusFeatBuilder()
  }
}