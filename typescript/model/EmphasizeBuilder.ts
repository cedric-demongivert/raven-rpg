import { ContentNodeBuilder } from './ContentNodeBuilder'
import { Emphasize } from './Emphasize'
import { TextNodeBuilder } from './TextNodeBuilder'

/**
 * 
 */
export class EmphasizeBuilder extends ContentNodeBuilder<Emphasize> {
  /**
   * 
   */
  public readonly text: TextNodeBuilder

  /**
   * 
   */
  public constructor() {
    super()
    this.text = new TextNodeBuilder()
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
  public build(): Emphasize {
    return new Emphasize(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<EmphasizeBuilder>): this {
    super.copy(toCopy)
    this.text.copy(toCopy.text)
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
    super.clear()
    this.text.clear()
    return this
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (!super.equals(other)) return false

    if (other instanceof EmphasizeBuilder) {
      return this.text.equals(other.text)
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