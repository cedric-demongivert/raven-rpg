import { equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from './Builder'

/**
 * 
 */
export class StaticBuilder<Type> implements Builder<Type> {
  /**
   * 
   */
  public readonly value: Type

  /**
   * 
   */
  public constructor(value: Type) {
    this.value = value
  }

  /**
   * 
   */
  public build(): Type {
    return this.value
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof StaticBuilder) {
      return equals(this.value, other.value)
    }

    return false
  }
}

/**
 * 
 */
export namespace StaticBuilder {
  /**
   * 
   */
  export function create<Type>(value: Type): StaticBuilder<Type> {
    return new StaticBuilder(value)
  }
}