import { Set as ImmutableSet } from 'immutable'

import { Builder } from './Builder'

/**
 *
 */
export class StringSetBuilder implements Builder<ImmutableSet<string>>, Iterable<string> {
  /**
   *
   */
  public readonly classes: Set<string>

  /**
   * 
   */
  public constructor() {
    this.classes = new Set()
  }

  /**
   * 
   */
  public toggle(token: string): this {
    if (this.classes.has(token)) {
      this.classes.delete(token)
    } else {
      this.classes.add(token)
    }

    return this
  }

  /**
   * 
   */
  public delete(token: string): this {
    this.classes.delete(token)
    return this
  }

  /**
   * 
   */
  public add(token: string): this {
    this.classes.add(token)
    return this
  }

  /**
   * 
   */
  public set(classes: Iterable<string> | null): this {
    const myClasses: Set<string> = this.classes
    myClasses.clear()

    if (classes) {
      for (const token of classes) myClasses.add(token)
    }

    return this
  }

  /**
   * 
   */
  public build(): ImmutableSet<string> {
    return ImmutableSet(this.classes)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<StringSetBuilder> | null): this {
    const myClasses: Set<string> = this.classes

    myClasses.clear()

    if (toCopy != null) {
      for (const token of toCopy.classes) {
        myClasses.add(token)
      }
    }

    return this
  }

  /**
   * 
   */
  public clone(): StringSetBuilder {
    return new StringSetBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this.classes.clear()
    return this
  }

  /**
   * 
   */
  public values(): IterableIterator<string> {
    return this.classes.values()
  }

  /**
   * 
   */
  public [Symbol.iterator](): IterableIterator<string> {
    return this.classes.values()
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof StringSetBuilder) {
      const myClasses: Set<string> = this.classes

      if (myClasses.size != other.classes.size) return false

      for (const element of other.classes) {
        if (!myClasses.has(element)) return false
      }

      return true
    }

    return false
  }
}

/**
 * 
 */
export namespace StringSetBuilder {
  /**
   * 
   */
  export function create(): StringSetBuilder {
    return new StringSetBuilder()
  }
}