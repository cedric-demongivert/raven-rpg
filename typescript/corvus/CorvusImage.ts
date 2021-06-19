import { Set } from 'immutable'

import { CorvusImageFormat } from './CorvusImageFormat'

import { CorvusImageBuilder } from './CorvusImageBuilder'
import { StaticCorvusElement } from './StaticCorvusElement'
import { CorvusElement } from './CorvusElement'

/**
*
*/
export class CorvusImage extends StaticCorvusElement {
  /**
   *
   */
  public readonly path: string

  /**
   *
   */
  public readonly format: CorvusImageFormat

  /**
   *
   */
  public readonly width: string | undefined

  /**
   *
   */
  public readonly height: string | undefined

  /**
   *
   */
  public readonly classes: Set<string>

  /**
   *
   */
  public static create(properties: Readonly<CorvusImageBuilder>): CorvusImage {
    return new CorvusImage(properties)
  }

  /**
   *
   */
  private constructor(properties: Readonly<CorvusImageBuilder>) {
    super(properties)

    this.width = properties.width
    this.height = properties.height
    this.classes = Set(properties.classes)
    this.path = properties.path
    this.format = properties.format || CorvusImageFormat.fromExtension(this.path)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (super.equals(other) && other instanceof CorvusImage) {
      return (
        other.path === this.path &&
        other.format === this.format &&
        other.width === this.width &&
        other.height === this.height &&
        other.classes.equals(this.classes)
      )
    }

    return false
  }
}

/**
*
*/
export namespace CorvusImage {
  /**
  *
  */
  export function is(element: CorvusElement | null | undefined): element is CorvusImage {
    return element && element instanceof CorvusImage
  }

  /**
  *
  */
  export function assert(element: CorvusElement | null | undefined, message?: string | undefined): asserts element is CorvusImage {
    if (is(element)) return
    throw new Error(message || 'The given element is not a corvus document image.')
  }
}