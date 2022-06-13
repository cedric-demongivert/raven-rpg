import { Empty } from '@cedric-demongivert/gl-tool-utils'

import { CorvusNodeBuilder } from './CorvusNodeBuilder'
import { CorvusDocumentBuilder } from './CorvusDocumentBuilder'

import { CorvusSection } from './CorvusSection'

/**
 *
 */
export class CorvusSectionBuilder extends CorvusNodeBuilder<CorvusSection> {
  /**
   *
   */
  public title: string | null

  /**
   *
   */
  public readonly content: CorvusDocumentBuilder

  /**
   * 
   */
  public constructor() {
    super()
    this.title = null
    this.content = CorvusDocumentBuilder.create()
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
  public setContent(content: CorvusDocumentBuilder | null): this {
    this.content.copy(content)
    return this
  }

  /**
   * 
   */
  public build(): CorvusSection {
    return new CorvusSection(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusSectionBuilder>): this {
    super.copy(toCopy)
    this.content.copy(toCopy.content)
    this.title = toCopy.title

    return this
  }

  /**
   * 
   */
  public clone(): CorvusSectionBuilder {
    return new CorvusSectionBuilder().copy(this)
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

    if (other instanceof CorvusSectionBuilder) {
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
export namespace CorvusSectionBuilder {
  /**
   * 
   */
  export function create(): CorvusSectionBuilder {
    return new CorvusSectionBuilder()
  }
}