import { Empty } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"
import type { CorvusDataType } from "./CorvusDataType"

/**
 * 
 */
export class CorvusToken implements CorvusDataType<string | null> {
  /**
   * 
   */
  public * reduce(): UnidocReduction<string> {
    yield* UnidocReducer.assertStart()
    yield UnidocReduction.NEXT

    yield* UnidocReducer.skipWhitespaces()

    const token: string | null = yield* UnidocReducer.reduceToken()

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
    return padding.length > 0 ? padding + CorvusToken.IDENTIFIER : CorvusToken.IDENTIFIER
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusToken) {
      return true
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusToken {
  /**
   * 
   */
  export const IDENTIFIER: string = 'token'

  /**
   * 
   */
  export const INSTANCE: CorvusToken = new CorvusToken()

  /**
   * 
   */
  export function create(): CorvusToken {
    return INSTANCE
  }
}