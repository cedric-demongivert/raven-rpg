import { equals } from '@cedric-demongivert/gl-tool-utils'

import { Builder } from '../../Builder'
import { StaticBuilder } from '../../StaticBuilder'
import { AcronymBuilder } from './AcronymBuilder'
import { Emphasize } from './Emphasize'
import { EmphasizeElement } from './EmphasizeElement'
import { EmptyBuilder } from './EmptyBuilder'
import { LinkBuilder } from './LinkBuilder'

/**
 * 
 */
export class EmphasizeBuilder implements Builder<Emphasize> {
  /**
   * 
   */
  public readonly elements: Array<Builder<EmphasizeElement>>

  /**
   * 
   */
  public constructor() {
    this.elements = []
  }

  /**
   * 
   */
  public push(builder: Builder<EmphasizeElement> | null): this {
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
  public setElements(values: Iterable<Builder<EmphasizeElement>> | null): this {
    this.elements.length = 0

    if (values != null) {
      this.elements.push(...values)
    }

    return this
  }

  /**
   * 
   */
  public build(): Emphasize {
    return new Emphasize(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<EmphasizeBuilder>): this {
    this.elements.length = 0
    this.elements.push(...toCopy.elements)

    return this
  }

  /**
   * 
   */
  public clone(): EmphasizeBuilder {
    return new EmphasizeBuilder().copy(this)
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

    if (other instanceof EmphasizeBuilder) {
      return equals.arrays(this.elements, other.elements)
    }

    return false
  }
}

/**
 * 
 */
export namespace EmphasizeBuilder {
  /**
   * 
   */
  export function create(): EmphasizeBuilder {
    return new EmphasizeBuilder()
  }
}