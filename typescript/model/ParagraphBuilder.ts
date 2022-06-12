import { ContentNodeBuilder } from './ContentNodeBuilder'

import { TextNodeBuilder } from './TextNodeBuilder'

import { Paragraph } from './Paragraph'

/**
 *
 */
export class ParagraphBuilder extends ContentNodeBuilder<Paragraph> {
  /**
   *
   */
  public title: string | null

  /**
   *
   */
  public readonly text: TextNodeBuilder

  /**
   * 
   */
  public constructor() {
    super()
    this.title = null
    this.text = new TextNodeBuilder()
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
  public setText(text: TextNodeBuilder | null): this {
    this.text.copy(text)
    return this
  }

  /**
   * 
   */
  public build(): Paragraph {
    return new Paragraph(this)
  }


  /**
   * 
   */
  public copy(toCopy: Readonly<ParagraphBuilder>): this {
    super.copy(toCopy)
    this.text.copy(toCopy.text)
    this.title = toCopy.title

    return this
  }

  /**
   * 
   */
  public clone(): ParagraphBuilder {
    return new ParagraphBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    super.clear()
    this.text.clear()
    this.title = null
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof ParagraphBuilder) {
      return (
        this.text.equals(other.text) &&
        this.title === other.title
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace ParagraphBuilder {
  /**
   * 
   */
  export function create(): ParagraphBuilder {
    return new ParagraphBuilder()
  }
}