import { Set } from 'immutable'

import { Comparable, Empty } from '@cedric-demongivert/gl-tool-utils'

import { CorvusNodeType } from './CorvusNodeType'
import { CorvusNodeVisitor } from './CorvusNodeVisitor'

/**
 * 
 */
export abstract class CorvusNode implements Comparable {
  /**
   * 
   */
  public readonly type: CorvusNodeType

  /**
   * 
   */
  public readonly identifier: string

  /**
   * 
   */
  public readonly classes: Set<string>

  /**
   * 
   */
  public constructor(type: CorvusNodeType, properties: Partial<CorvusNode.Properties>) {
    this.type = type
    this.identifier = properties.identifier == null ? Empty.STRING : properties.identifier
    this.classes = properties.classes == null ? Set() : Set(properties.classes)
  }

  /**
   * 
   */
  public hasIdentifier(): boolean {
    return this.identifier.length > 0
  }

  /**
   * 
   */
  public hasClasses(): boolean {
    return this.classes.size > 0
  }

  /**
   * 
   */
  abstract accept(visitor: CorvusNodeVisitor): void

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusNode) {
      return (
        other.type === this.type &&
        other.identifier === this.identifier &&
        other.classes.equals(this.classes)
      )
    }
  }
}

/**
 * 
 */
export namespace CorvusNode {
  /**
   * 
   */
  export type Properties = {
    /**
     * 
     */
    readonly identifier?: string | null | undefined,

    /**
     * 
     */
    readonly classes?: Iterable<string> | null | undefined
  }
}