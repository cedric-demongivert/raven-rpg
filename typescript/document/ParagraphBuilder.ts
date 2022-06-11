import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { Builder } from '../Builder'
import { StringSetBuilder } from '../StringSetBuilder'

import { TextBuilder } from '../text'

import { Paragraph } from './Paragraph'

/**
 *
 */
export class ParagraphBuilder implements Builder<Paragraph> {
  /**
   *
   */
  public readonly classes: StringSetBuilder

  /**
   *
   */
  public identifier: string

  /**
   *
   */
  public title: string

  /**
   *
   */
  public readonly text: TextBuilder

  /**
   * 
   */
  public constructor() {
    this.classes = new StringSetBuilder()
    this.identifier = Empty.STRING
    this.title = Empty.STRING
    this.text = TextBuilder.create()
  }

  /**
   * 
   */
  public setClasses(classes: StringSetBuilder | null): this {
    this.classes.copy(classes)
    return this
  }

  /**
   * 
   */
  public setIdentifier(identifier: string | null): this {
    this.identifier = identifier == null ? Empty.STRING : identifier
    return this
  }

  /**
   * 
   */
  public setTitle(title: string | null): this {
    this.title = title == null ? Empty.STRING : title
    return this
  }

  /**
   * 
   */
  public setText(text: TextBuilder | null): this {
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
    this.classes.copy(toCopy.classes)
    this.identifier = toCopy.identifier
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
    this.classes.clear()
    this.identifier = Empty.STRING
    this.text.clear()
    this.title = Empty.STRING
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof ParagraphBuilder) {
      return (
        this.classes.equals(other.classes) &&
        this.identifier === other.identifier &&
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