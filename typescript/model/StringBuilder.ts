import { equals } from '@cedric-demongivert/gl-tool-utils'
import { UTF32CodeUnit, UTF32String } from '@cedric-demongivert/unidoc'

import { Builder } from './Builder'

/**
 * 
 */
export class StringBuilder implements Builder<string> {
  /**
   * 
   */
  public readonly content: UTF32String

  /**
   * 
   */
  public constructor(capacity: number = 16) {
    this.content = UTF32String.allocate(capacity)
  }

  /**
   * 
   */
  public pushSpace(): this {
    this.content.push(UTF32CodeUnit.SPACE)
    return this
  }

  /**
   * 
   */
  public concat(content: UTF32String): this {
    this.content.concat(content)
    return this
  }

  /**
   * 
   */
  public copy(other: Readonly<StringBuilder> | null): this {
    this.content.clear()

    if (other != null) {
      this.content.copy(other.content)
    }

    return this
  }

  /**
   * 
   */
  public build(): string {
    return this.content.toString()
  }

  /**
   * 
   */
  public clone(): StringBuilder {
    return new StringBuilder(this.content.capacity).copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this.content.clear()
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof StringBuilder) {
      return this.content.equals(other.content)
    }

    return false
  }
}

/**
 * 
 */
export namespace StringBuilder {
  /**
   * 
   */
  export function create(capacity: number = 16): StringBuilder {
    return new StringBuilder(capacity)
  }
}