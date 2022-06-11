import { equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from '../Builder'
import { StaticBuilder } from '../StaticBuilder'
import { AcronymBuilder } from './AcronymBuilder'
import { EmphasizeBuilder } from './EmphasizeBuilder'
import { EmptyBuilder } from './EmptyBuilder'
import { LinkBuilder } from './LinkBuilder'

import { Text } from './Text'
import { TextElement } from './TextElement'

/**
 * 
 */
export class TextBuilder implements Builder<Text> {
  /**
   * 
   */
  public readonly elements: Array<Builder<TextElement>>

  /**
   * 
   */
  public constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public push(builder: Builder<TextElement> | null): this {
    if (builder !== null) {
      this.elements.push(builder)
    }

    return this
  }

  /**
   * 
   */
  public pushString(content: string | null): this {
    if (content !== null) {
      this.elements.push(StaticBuilder.create(content))
    }

    return this
  }

  /**
   * 
   */
  public pushAcronym(): AcronymBuilder {
    const builder: AcronymBuilder = AcronymBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public pushEmphasize(): EmphasizeBuilder {
    const builder: EmphasizeBuilder = EmphasizeBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public pushLink(): LinkBuilder {
    const builder: LinkBuilder = LinkBuilder.create()
    this.elements.push(builder)
    return builder
  }

  /**
   * 
   */
  public pushEmpty(): this {
    return this.push(EmptyBuilder.INSTANCE)
  }

  /**
   * 
   */
  public setElements(values: Iterable<Builder<TextElement>> | null): this {
    this.elements.length = 0

    if (values != null) {
      this.elements.push(...values)
    }

    return this
  }

  /**
   * 
   */
  public build(): Text {
    return Text.create(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<TextBuilder> | null): this {
    this.elements.length = 0

    if (toCopy != null) {
      this.elements.push(...toCopy.elements)
    }

    return this
  }

  /**
   * 
   */
  public clone(): TextBuilder {
    return new TextBuilder().copy(this)
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

    if (other instanceof TextBuilder) {
      return equals.arrays(this.elements, other.elements)
    }

    return false
  }
}

/**
 * 
 */
export namespace TextBuilder {
  /**
   * 
   */
  export function create(): TextBuilder {
    return new TextBuilder()
  }
}