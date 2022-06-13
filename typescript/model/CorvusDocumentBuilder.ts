import { equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from './Builder'
import { CorvusDocument } from './CorvusDocument'
import { CorvusDocumentNode } from './CorvusDocumentNode'
import { CorvusParagraphBuilder } from './CorvusParagraphBuilder'
import { CorvusSectionBuilder } from './CorvusSectionBuilder'

/**
 * 
 */
export class CorvusDocumentBuilder implements Builder<CorvusDocument> {
  /**
   * 
   */
  public readonly elements: Array<Builder<CorvusDocumentNode> | CorvusDocumentNode>

  /**
   * 
   */
  public constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public push(builder: Builder<CorvusDocumentNode> | CorvusDocumentNode | null): this {
    if (builder !== null) {
      this.elements.push(builder)
    }

    return this
  }

  /**
   * 
   */
  public buildParagraph(): CorvusParagraphBuilder {
    const builder: CorvusParagraphBuilder = CorvusParagraphBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public buildSection(): CorvusSectionBuilder {
    const builder: CorvusSectionBuilder = CorvusSectionBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public setElements(values: Iterable<Builder<CorvusDocumentNode> | CorvusDocumentNode> | null): this {
    this.elements.length = 0

    if (values != null) {
      this.elements.push(...values)
    }

    return this
  }

  /**
   * 
   */
  public build(): CorvusDocument {
    return CorvusDocument.create(this.elements)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusDocumentBuilder> | null): this {
    this.elements.length = 0

    if (toCopy != null) {
      this.elements.push(...toCopy.elements)
    }

    return this
  }

  /**
   * 
   */
  public clone(): CorvusDocumentBuilder {
    return new CorvusDocumentBuilder().copy(this)
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

    if (other instanceof CorvusDocumentBuilder) {
      return equals.arrays(this.elements, other.elements)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusDocumentBuilder {
  /**
   * 
   */
  export function create(): CorvusDocumentBuilder {
    return new CorvusDocumentBuilder()
  }
}