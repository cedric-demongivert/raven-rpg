import { CorvusNodeBuilder } from './CorvusNodeBuilder'
import { CorvusEmphasize } from './CorvusEmphasize'
import { CorvusTextBuilder } from './CorvusTextBuilder'

/**
 * 
 */
export class CorvusEmphasizeBuilder extends CorvusNodeBuilder<CorvusEmphasize> {
  /**
   * 
   */
  public readonly text: CorvusTextBuilder

  /**
   * 
   */
  public constructor() {
    super()
    this.text = new CorvusTextBuilder()
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
  public build(): CorvusEmphasize {
    return new CorvusEmphasize(this)
  }

  /**
   * 
   */
  public copy(toCopy: Readonly<CorvusEmphasizeBuilder>): this {
    super.copy(toCopy)
    this.text.copy(toCopy.text)
    return this
  }

  /**
   * 
   */
  public clone(): CorvusEmphasizeBuilder {
    return new CorvusEmphasizeBuilder().copy(this)
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

    if (other instanceof CorvusEmphasizeBuilder) {
      return this.text.equals(other.text)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusEmphasizeBuilder {
  /**
   * 
   */
  export function create(): CorvusEmphasizeBuilder {
    return new CorvusEmphasizeBuilder()
  }
}