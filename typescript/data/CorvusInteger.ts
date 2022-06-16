import { Empty } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"
import type { CorvusDataType } from "./CorvusDataType"

/**
 * 
 */
export class CorvusInteger implements CorvusDataType<number | null> {
  /**
   * 
   */
  public * reduce(): UnidocReduction<number> {
    yield* UnidocReducer.assertStart()
    yield UnidocReduction.NEXT

    yield* UnidocReducer.skipWhitespaces()

    const token: string | null = yield* UnidocReducer.reduceToken()

    yield* UnidocReducer.skipWhitespaces()
    yield* UnidocReducer.assertSuccess()

    if (token == null) {
      return null
    }

    const value: number = parseInt(token)

    if (isNaN(value)) {
      yield* UnidocReducer.fail(`Expected ${this.toString()}, but received "${token}".`)
    }

    return value
  }

  /**
   * 
   */
  public isInline(): boolean {
    return true
  }

  /**
   * 
   */
  public toString(padding: string = Empty.STRING): string {
    return padding.length > 0 ? padding + CorvusInteger.IDENTIFIER : CorvusInteger.IDENTIFIER
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusInteger) {
      return true
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusInteger {
  /**
   * 
   */
  export const IDENTIFIER: string = 'integer'

  /**
   * 
   */
  export const INSTANCE: CorvusInteger = new CorvusInteger()

  /**
   * 
   */
  export function create(): CorvusInteger {
    return INSTANCE
  }
}