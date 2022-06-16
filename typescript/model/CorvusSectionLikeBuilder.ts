import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { CorvusNodeBuilder } from './CorvusNodeBuilder'
import { CorvusDocumentBuilder } from './CorvusDocumentBuilder'

import { CorvusSectionLike } from './CorvusSectionLike'

/**
 *
 */
export abstract class CorvusSectionLikeBuilder<Node extends CorvusSectionLike = CorvusSectionLike> extends CorvusNodeBuilder<Node> {
  /**
   *
   */
  public title: string | null

  /**
   * 
   */
  public constructor() {
    super()
    this.title = null
  }

  /**
   * 
   */
  public setTitle(title: string | null): this {
    this.title = title
    return this
  }

  /**
   * 
   */
  public abstract build(): Node

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusSectionLikeBuilder<Node>>): this {
    super.copy(toCopy)
    this.title = toCopy.title

    return this
  }

  /**
   * 
   */
  public abstract clone(): CorvusSectionLikeBuilder<Node>

  /**
   * 
   */
  public clear(): this {
    this.title = Empty.STRING
    return super.clear()
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusSectionLikeBuilder) {
      return this.title === other.title
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusSectionLikeBuilder {

}