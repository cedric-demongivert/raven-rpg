import { Hypertext } from "../state/hypertext"
import { CorvusTagBuilder } from "./CorvusTagBuilder"

/**
 * 
 */
export class CorvusTag {
  /**
   * 
   */
  public readonly identifier: string

  /**
   * 
   */
  public readonly name: string

  /**
   * 
   */
  public readonly description: Hypertext

  /**
   * 
   */
  public static create(properties: Readonly<CorvusTagBuilder>): CorvusTag {
    return new CorvusTag(properties)
  }

  /**
   * 
   */
  private constructor(properties: Readonly<CorvusTagBuilder>) {
    this.identifier = properties.identifier
    this.name = properties.name
    this.description = properties.description
  }

  /**
   * 
   */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusTag) {
      return (
        other.identifier === this.identifier &&
        other.name === this.name &&
        other.description.equals(this.description)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusTag {
  /**
   * 
   */
  export function compareByIdentifier(left: CorvusTag, right: CorvusTag): number {
    return left.identifier.localeCompare(right.identifier)
  }
}
