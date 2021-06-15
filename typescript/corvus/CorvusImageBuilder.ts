import { Sets } from '../data/Sets'
import { Empty } from '../utils/Empty'

import { CorvusImage } from './CorvusImage'
import { CorvusImageFormat } from './CorvusImageFormat'
import { CorvusDocumentModelBuilder } from './CorvusDocumentModelBuilder'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'

/**
*
*/
export class CorvusImageBuilder implements CorvusDocumentModelBuilder<CorvusImage> {
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
  public classes: Set<string>

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
    this.path = Empty.STRING
    this.format = undefined
    this.width = undefined
    this.height = undefined
    this.classes = new Set()
  }

  /**
   * 
   */
  public addClasses(classes: Iterable<string>): void {
    for (const token of classes) {
      this.classes.add(token)
    }
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
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusImageBuilder) {
      return (
        other.path === other.path &&
        other.format === other.format &&
        other.width === other.width &&
        other.height === other.height &&
        Sets.deeplyEquals(other.classes, this.classes)
      )
    }

    return false
  }
}

/**
 * 
 */
export namespace CorvusImageBuilder {
  /**
   * 
   */
  export type ElementBuilder = CorvusDocumentElementBuilder<CorvusImage, CorvusImageBuilder>

  /**
   * 
   */
  export function createElementBuilder(): ElementBuilder {
    return CorvusDocumentElementBuilder.create(CorvusImageBuilder.create())
  }
}
