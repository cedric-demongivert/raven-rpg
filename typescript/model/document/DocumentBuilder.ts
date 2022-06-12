import { equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from '../../Builder'

import { Document } from './Document'
import { DocumentElement } from './DocumentElement'
import { ParagraphBuilder } from './ParagraphBuilder'
import { SectionBuilder } from './SectionBuilder'

/**
 * 
 */
export class DocumentBuilder implements Builder<Document> {
  /**
   * 
   */
  public readonly elements: Array<Builder<DocumentElement>>

  /**
   * 
   */
  public constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public push(builder: Builder<DocumentElement> | null): this {
    if (builder !== null) {
      this.elements.push(builder)
    }

    return this
  }

  /**
   * 
   */
  public pushParagraph(): ParagraphBuilder {
    const builder: ParagraphBuilder = ParagraphBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public pushSection(): SectionBuilder {
    const builder: SectionBuilder = SectionBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public setElements(values: Iterable<Builder<DocumentElement>> | null): this {
    this.elements.length = 0

    if (values != null) {
      this.elements.push(...values)
    }

    return this
  }

  /**
   * 
   */
  public build(): Document {
    return Document.create(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<DocumentBuilder> | null): this {
    this.elements.length = 0

    if (toCopy != null) {
      this.elements.push(...toCopy.elements)
    }

    return this
  }

  /**
   * 
   */
  public clone(): DocumentBuilder {
    return new DocumentBuilder().copy(this)
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

    if (other instanceof DocumentBuilder) {
      return equals.arrays(this.elements, other.elements)
    }

    return false
  }
}

/**
 * 
 */
export namespace DocumentBuilder {
  /**
   * 
   */
  export function create(): DocumentBuilder {
    return new DocumentBuilder()
  }
}