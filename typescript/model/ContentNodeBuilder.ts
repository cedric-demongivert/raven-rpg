import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from './Builder'
import { ContentNode } from './ContentNode'
import { StringSetBuilder } from './StringSetBuilder'

/**
 * 
 */
export abstract class ContentNodeBuilder<Node extends ContentNode = ContentNode> implements Builder<Node> {
  /**
   *
   */
  public readonly classes: StringSetBuilder

  /**
   *
   */
  public identifier: string | null

  /**
   * 
   */
  public constructor() {
    this.classes = new StringSetBuilder()
    this.identifier = null
  }

  /**
   * 
   */
  public setClasses(classes: StringSetBuilder | null): this {
    this.classes.copy(classes)
    return this
  }

  /**
   * 
   */
  public setIdentifier(identifier: string | null): this {
    this.identifier = identifier == null ? Empty.STRING : identifier
    return this
  }

  /**
   * 
   */
  public abstract build(): Node

  /**
   * 
   */
  public copy(toCopy: Readonly<ContentNodeBuilder<Node>>): this {
    this.classes.copy(toCopy.classes)
    this.identifier = toCopy.identifier
    return this
  }

  /**
   * 
   */
  public abstract clone(): ContentNodeBuilder<Node>

  /**
   * 
   */
  public clear(): this {
    this.classes.clear()
    this.identifier = null
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof ContentNodeBuilder) {
      return (
        other.classes.equals(this.classes) &&
        other.identifier === this.identifier
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace ContentNodeBuilder {

}