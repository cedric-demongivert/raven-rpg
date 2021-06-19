import { Empty } from '../utils/Empty'
import { ClassAssignableBuilder } from './ClassAssignableBuilder'

import { CorvusImage } from './CorvusImage'
import { CorvusImageFormat } from './CorvusImageFormat'
import { StaticCorvusElementBuilder } from './StaticCorvusElementBuilder'

/**
*
*/
export class CorvusImageBuilder extends ClassAssignableBuilder(StaticCorvusElementBuilder) {
  /**
   *
   */
  public path: string

  /**
   *
   */
  public format: CorvusImageFormat | undefined

  /**
   *
   */
  public width: string | undefined

  /**
   *
   */
  public height: string | undefined

  /**
  *
  */
  public static create(): CorvusImageBuilder {
    return new CorvusImageBuilder()
  }

  /**
  *
  */
  private constructor() {
    super()
    this.path = Empty.STRING
    this.format = undefined
    this.width = undefined
    this.height = undefined
  }

  /**
   * 
   */
  public build(): CorvusImage {
    return CorvusImage.create(this)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusImageBuilder) {
      return (
        other.path === other.path &&
        other.format === other.format &&
        other.width === other.width &&
        other.height === other.height
      )
    }

    return false
  }
}
