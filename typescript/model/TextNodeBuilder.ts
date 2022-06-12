import { equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from './Builder'
import { AcronymBuilder } from './AcronymBuilder'
import { EmphasizeBuilder } from './EmphasizeBuilder'
import { EmptyNodeBuilder } from './EmptyNodeBuilder'
import { LinkBuilder } from './LinkBuilder'

import { TextNode } from './TextNode'
import { TextNodeElement } from './TextNodeElement'

/**
 * 
 */
export class TextNodeBuilder implements Builder<TextNode>, Iterable<Builder<TextNodeElement> | TextNodeElement> {
  /**
   * 
   */
  public readonly elements: Array<Builder<TextNodeElement> | TextNodeElement>

  /**
   * 
   */
  public constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public push(element: Builder<TextNodeElement> | TextNodeElement | null): this {
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
  public buildAcronym(): AcronymBuilder {
    const builder: AcronymBuilder = AcronymBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public buildEmphasize(): EmphasizeBuilder {
    const builder: EmphasizeBuilder = EmphasizeBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public buildLink(): LinkBuilder {
    const builder: LinkBuilder = LinkBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public pushEmpty(): this {
    return this.push(EmptyNodeBuilder.INSTANCE)
  }

  /**
   * 
   */
  public setElements(values: Iterable<Builder<TextNodeElement> | TextNodeElement> | null): this {
    this.elements.length = 0

    if (values != null) {
      this.elements.push(...values)
    }

    return this
  }

  /**
   * 
   */
  public build(): TextNode {
    return TextNode.create(this.elements)
  }

  /**
   * 
   */
  public values(): IterableIterator<Builder<TextNodeElement> | TextNodeElement> {
    return this.elements.values()
  }

  /**
   * 
   */
  public [Symbol.iterator](): IterableIterator<Builder<TextNodeElement> | TextNodeElement> {
    return this.elements.values()
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<TextNodeBuilder> | null): this {
    this.elements.length = 0

    if (toCopy != null) {
      this.elements.push(...toCopy.elements)
    }

    return this
  }

  /**
   * 
   */
  public clone(): TextNodeBuilder {
    return new TextNodeBuilder().copy(this)
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

    if (other instanceof TextNodeBuilder) {
      return equals.arrays(this.elements, other.elements)
    }

    return false
  }
}

/**
 * 
 */
export namespace TextNodeBuilder {
  /**
   * 
   */
  export function create(): TextNodeBuilder {
    return new TextNodeBuilder()
  }
}