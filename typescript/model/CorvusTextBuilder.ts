import { equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from './Builder'
import { CorvusAcronymBuilder } from './CorvusAcronymBuilder'
import { CorvusEmphasizeBuilder } from './CorvusEmphasizeBuilder'
import { CorvusEmptyNodeBuilder } from './CorvusEmptyNodeBuilder'
import { CorvusLinkBuilder } from './CorvusLinkBuilder'

import { CorvusText } from './CorvusText'
import { CorvusTextElement } from './CorvusTextElement'

/**
 * 
 */
export class CorvusTextBuilder implements Builder<CorvusText>, Iterable<Builder<CorvusTextElement> | CorvusTextElement> {
  /**
   * 
   */
  public readonly elements: Array<Builder<CorvusTextElement> | CorvusTextElement>

  /**
   * 
   */
  public constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public push(element: Builder<CorvusTextElement> | CorvusTextElement | null): this {
    if (element !== null) {
      this.elements.push(element)
    }

    return this
  }

  /**
   * 
   */
  public pushString(content: string | null): this {
    if (content !== null) {
      this.elements.push(content)
    }

    return this
  }

  /**
   * 
   */
  public buildAcronym(): CorvusAcronymBuilder {
    const builder: CorvusAcronymBuilder = CorvusAcronymBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public buildEmphasize(): CorvusEmphasizeBuilder {
    const builder: CorvusEmphasizeBuilder = CorvusEmphasizeBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public buildLink(): CorvusLinkBuilder {
    const builder: CorvusLinkBuilder = CorvusLinkBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public pushEmpty(): this {
    return this.push(CorvusEmptyNodeBuilder.INSTANCE)
  }

  /**
   * 
   */
  public setElements(values: Iterable<Builder<CorvusTextElement> | CorvusTextElement> | null): this {
    this.elements.length = 0

    if (values != null) {
      this.elements.push(...values)
    }

    return this
  }

  /**
   * 
   */
  public build(): CorvusText {
    return CorvusText.create(this.elements)
  }

  /**
   * 
   */
  public values(): IterableIterator<Builder<CorvusTextElement> | CorvusTextElement> {
    return this.elements.values()
  }

  /**
   * 
   */
  public [Symbol.iterator](): IterableIterator<Builder<CorvusTextElement> | CorvusTextElement> {
    return this.elements.values()
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusTextBuilder> | null): this {
    this.elements.length = 0

    if (toCopy != null) {
      this.elements.push(...toCopy.elements)
    }

    return this
  }

  /**
   * 
   */
  public clone(): CorvusTextBuilder {
    return new CorvusTextBuilder().copy(this)
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

    if (other instanceof CorvusTextBuilder) {
      return equals.arrays(this.elements, other.elements)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusTextBuilder {
  /**
   * 
   */
  export function create(): CorvusTextBuilder {
    return new CorvusTextBuilder()
  }
}