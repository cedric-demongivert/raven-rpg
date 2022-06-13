import { CorvusNodeBuilder } from './CorvusNodeBuilder'

import { CorvusTextBuilder } from './CorvusTextBuilder'

import { CorvusParagraph } from './CorvusParagraph'

/**
 *
 */
export class CorvusParagraphBuilder extends CorvusNodeBuilder<CorvusParagraph> {
  /**
   *
   */
  public title: string | null

  /**
   *
   */
  public readonly text: CorvusTextBuilder

  /**
   * 
   */
  public constructor() {
    super()
    this.title = null
    this.text = new CorvusTextBuilder()
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
  public setText(text: CorvusTextBuilder | null): this {
    this.text.copy(text)
    return this
  }

  /**
   * 
   */
  public build(): CorvusParagraph {
    return new CorvusParagraph(this)
  }


  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusParagraphBuilder>): this {
    super.copy(toCopy)
    this.text.copy(toCopy.text)
    this.title = toCopy.title

    return this
  }

  /**
   * 
   */
  public clone(): CorvusParagraphBuilder {
    return new CorvusParagraphBuilder().copy(this)
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

    if (other instanceof CorvusParagraphBuilder) {
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
export namespace CorvusParagraphBuilder {
  /**
   * 
   */
  export function create(): CorvusParagraphBuilder {
    return new CorvusParagraphBuilder()
  }
}