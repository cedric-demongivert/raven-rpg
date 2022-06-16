import { CorvusDocumentBuilder } from './CorvusDocumentBuilder'

import { CorvusSection } from './CorvusSection'
import { CorvusSectionLikeBuilder } from './CorvusSectionLikeBuilder'

/**
 *
 */
export class CorvusSectionBuilder extends CorvusSectionLikeBuilder<CorvusSection> {
  /**
   *
   */
  public readonly content: CorvusDocumentBuilder

  /**
   * 
   */
  public constructor() {
    super()
    this.content = CorvusDocumentBuilder.create()
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
    return super.clear()
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof CorvusSectionBuilder) {
      return this.content.equals(other.content)
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