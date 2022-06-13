import { equals } from "@cedric-demongivert/gl-tool-utils"

/**
 * 
 */
export class CorvusTreeIndex {
  /**
   * 
   */
  private readonly _index: Array<number>

  /**
   * 
   */
  public get size(): number {
    return this._index.length
  }

  /**
   * 
   */
  public constructor() {
    this._index = []
  }

  /**
   * 
   */
  public get(index: number): number {
    return this._index[index]
  }

  /**
   * 
   */
  public push(index: number): this {
    this._index.push(index)
    return this
  }

  /**
   * 
   */
  public increment(): this {
    const index: Array<number> = this._index

    if (index.length > 0) {
      index[index.length - 1] += 1
    }

    return this
  }

  /**
   * 
   */
  public decrement(): this {
    const index: Array<number> = this._index

    if (index.length > 0) {
      index[index.length - 1] -= 1
    }

    return this
  }

  /**
   * 
   */
  public pop(): number {
    return this._index.pop()
  }

  /**
   * 
   */
  public values(): IterableIterator<number> {
    return this._index.values()
  }

  /**
   * 
   */
  public copy(toCopy: CorvusTreeIndex | null): this {
    this._index.length = 0

    if (toCopy != null) {
      this._index.push(...toCopy._index)
    }

    return this
  }

  /**
   * 
   */
  public clone(): CorvusTreeIndex {
    return new CorvusTreeIndex().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this._index.length = 0
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusTreeIndex) {
      return equals.arrays(this._index, other._index)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusTreeIndex {
  /**
   * 
   */
  export function create(): CorvusTreeIndex {
    return new CorvusTreeIndex()
  }
}