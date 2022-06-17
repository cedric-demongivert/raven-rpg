import { Empty, equals, toString } from "@cedric-demongivert/gl-tool-utils"
import { UnidocReduction } from "@cedric-demongivert/unidoc"
import type { CorvusDataType } from "./CorvusDataType"

/**
 * 
 */
export class CorvusOptional<Type, DefaultType = null> implements CorvusDataType<Type | DefaultType> {
  /**
   * 
   */
  public readonly defaultValue: DefaultType

  /**
   * 
   */
  public readonly type: CorvusDataType<Type | null>

  /**
   * 
   */
  public constructor(type: CorvusDataType<Type | null>, defaultValue: DefaultType) {
    this.type = type
    this.defaultValue = defaultValue
  }

  /**
   * 
   */
  public * reduce(): UnidocReduction<Type | DefaultType> {
    const value: Type | null = yield* this.type.reduce()
    return value == null ? this.defaultValue : value
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
    return `${padding}optional(${this.type.toString()}, ${toString(this.defaultValue)})`
  }

  /**
   * 
   */
  public equals(other: unknown): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusOptional) {
      return (
        other.type.equals(this.type) &&
        equals(other.defaultValue, this.defaultValue)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusOptional {
  /**
   * 
   */
  export function create<Type, DefaultType>(type: CorvusDataType<Type | null>, defaultValue: DefaultType): CorvusOptional<Type, DefaultType> {
    return new CorvusOptional(type, defaultValue)
  }
}