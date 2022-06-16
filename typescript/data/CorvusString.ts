import { Empty } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"
import type { CorvusDataType } from "./CorvusDataType"

/**
 * 
 */
export class CorvusString implements CorvusDataType<string | null> {
  /**
   * 
   */
  public * reduce(): UnidocReduction<string> {
    yield* UnidocReducer.assertStart()
    yield UnidocReduction.NEXT

    yield* UnidocReducer.skipWhitespaces()

    const token: string | null = yield* UnidocReducer.reduceText()

    yield* UnidocReducer.skipWhitespaces()
    yield* UnidocReducer.assertSuccess()

    return token
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
    return padding.length > 0 ? padding + CorvusString.IDENTIFIER : CorvusString.IDENTIFIER
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusString) {
      return true
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusString {
  /**
   * 
   */
  export const IDENTIFIER: string = 'string'

  /**
   * 
   */
  export const INSTANCE: CorvusString = new CorvusString()

  /**
   * 
   */
  export function create(): CorvusString {
    return INSTANCE
  }
}