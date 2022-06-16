import { equals } from "@cedric-demongivert/gl-tool-utils"
import { Builder } from "../Builder"
import { CorvusDataType } from "../data"

import { CorvusEntrySet } from "./CorvusEntrySet"
import { CorvusNodeBuilder } from "./CorvusNodeBuilder"

/**
 * 
 */
export class CorvusEntrySetBuilder<Entry> extends CorvusNodeBuilder<CorvusEntrySet<Entry>> {
  /**
   * 
   */
  public title: string | null

  /**
   * 
   */
  public entryType: CorvusDataType<Entry> | null

  /**
   * 
   */
  public readonly entries: Array<Entry | Builder<Entry>>

  /**
   * 
   */
  public constructor() {
    super()
    this.title = null
    this.entryType = null
    this.entries = []
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
  public setEntryType(entryType: CorvusDataType<Entry> | null): this {
    this.entryType = entryType
    return this
  }

  /**
   * 
   */
  public setEntries(entries: Iterable<Entry | Builder<Entry>> | null): this {
    this.entries.length = 0

    if (entries) {
      this.entries.push(...entries)
    }

    return this
  }

  /**
   * 
   */
  public build(): CorvusEntrySet<Entry> {
    return new CorvusEntrySet(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusEntrySetBuilder<Entry>> | null): this {
    if (toCopy == null) {
      return this.clear()
    }

    this.title = toCopy.title
    this.entryType = toCopy.entryType
    this.setEntries(toCopy.entries)

    return this
  }

  /**
   * 
   */
  public clone(): CorvusEntrySetBuilder<Entry> {
    return new CorvusEntrySetBuilder<Entry>().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusEntrySetBuilder) {
      return (
        other.title === this.title &&
        equals(other.entryType, this.entryType) &&
        equals.arrays(other.entries, this.entries)
      )
    }

    return null
  }
}

/**
 * 
 */
export namespace CorvusEntrySetBuilder {
  /**
   * 
   */
  export function create<Entry>(): CorvusEntrySetBuilder<Entry> {
    return new CorvusEntrySetBuilder()
  }
}