import { Hypertext } from "../state/hypertext/Hypertext"
import { equals } from "../utils/equals"

import { CorvusTag } from "./CorvusTag"

/**
*
*/
export class CorvusTagBuilder {
  /**
   * 
   */
  public identifier: string | undefined

  /**
   * 
   */
  public name: string | undefined

  /**
   * 
   */
  public description: Hypertext | undefined

  /**
  *
  */
  public static create(): CorvusTagBuilder {
    return new CorvusTagBuilder()
  }

  /**
  *
  */
  private constructor() {
    this.identifier = undefined
    this.name = undefined
    this.description = undefined
  }

  /**
   * 
   */
  public build(): CorvusTag {
    return CorvusTag.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other instanceof CorvusTagBuilder) {
      return (
        other.identifier === this.identifier &&
        other.name === this.name &&
        equals(other.description, this.description)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusTagBuilder {
  /**
   * 
   */
  export function instantiate(builder: CorvusTagBuilder): CorvusTag {
    return builder.build()
  }
}