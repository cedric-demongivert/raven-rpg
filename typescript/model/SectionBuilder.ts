import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { ContentNodeBuilder } from './ContentNodeBuilder'
import { DocumentBuilder } from './DocumentBuilder'

import { Section } from './Section'

/**
 *
 */
export class SectionBuilder extends ContentNodeBuilder<Section> {
  /**
   *
   */
  public title: string | null

  /**
   *
   */
  public readonly content: DocumentBuilder

  /**
   * 
   */
  public constructor() {
    super()
    this.title = null
    this.content = DocumentBuilder.create()
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
    super.copy(toCopy)
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
    this.content.clear()
    this.title = Empty.STRING
    return super.clear()
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof SectionBuilder) {
      return (
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