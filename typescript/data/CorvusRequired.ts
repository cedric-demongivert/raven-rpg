import { Empty } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReducer, UnidocReduction } from "@cedric-demongivert/unidoc"
import type { CorvusDataType } from "./CorvusDataType"

/**
 * 
 */
export class CorvusRequired<Type> implements CorvusDataType<Type> {
  /**
   * 
   */
  public readonly type: CorvusDataType<Type | null>

  /**
   * 
   */
  public constructor(type: CorvusDataType<Type | null>) {
    this.type = type
  }

  /**
   * 
   */
  public * reduce(): UnidocReduction<Type> {
    const value: Type | null = yield* this.type.reduce()

    if (value == null) {
      yield* UnidocReducer.fail(`Expected ${this.toString()} but received nothing.`)
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
    return `${padding}required(${this.type.toString()})`
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusRequired) {
      return other.type.equals(this.type)
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusRequired {
  /**
   * 
   */
  export function create<Type>(type: CorvusDataType<Type | null>): CorvusRequired<Type> {
    return new CorvusRequired(type)
  }
}