import { Empty } from '@cedric-demongivert/gl-tool-utils'
import { Builder } from '../../Builder'
import { StringSetBuilder } from '../../StringSetBuilder'
import { DocumentBuilder } from './DocumentBuilder'

import { Section } from './Section'

/**
 *
 */
export class SectionBuilder implements Builder<Section> {
  /**
   *
   */
  public readonly classes: StringSetBuilder

  /**
   *
   */
  public readonly keywords: StringSetBuilder

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
  public readonly content: DocumentBuilder

  /**
   * 
   */
  public constructor() {
    this.classes = new StringSetBuilder()
    this.keywords = new StringSetBuilder()
    this.identifier = Empty.STRING
    this.title = Empty.STRING
    this.content = DocumentBuilder.create()
  }

  /**
   * 
   */
  public setKeywords(keywords: StringSetBuilder | null): this {
    this.keywords.copy(keywords)
    return this
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
  public setContent(content: DocumentBuilder | null): this {
    this.content.copy(content)
    return this
  }

  /**
   * 
   */
  public build(): Section {
    return new Section(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<SectionBuilder>): this {
    this.classes.copy(toCopy.classes)
    this.keywords.copy(toCopy.keywords)
    this.identifier = toCopy.identifier
    this.content.copy(toCopy.content)
    this.title = toCopy.title

    return this
  }

  /**
   * 
   */
  public clone(): SectionBuilder {
    return new SectionBuilder().copy(this)
  }

  /**
   * 
   */
  public clear(): this {
    this.classes.clear()
    this.keywords.clear()
    this.identifier = Empty.STRING
    this.content.clear()
    this.title = Empty.STRING
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof SectionBuilder) {
      return (
        this.classes.equals(other.classes) &&
        this.keywords.equals(other.keywords) &&
        this.identifier === other.identifier &&
        this.content.equals(other.content) &&
        this.title === other.title
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace SectionBuilder {
  /**
   * 
   */
  export function create(): SectionBuilder {
    return new SectionBuilder()
  }
}