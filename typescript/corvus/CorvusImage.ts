import { Set } from 'immutable'

import { CorvusImageFormat } from './CorvusImageFormat'

import { CorvusDocumentModel } from './CorvusDocumentModel'
import { CorvusDocumentModelType } from './CorvusDocumentModelType'
import { CorvusImageBuilder } from './CorvusImageBuilder'
import { CorvusDocumentElementBuilder } from './CorvusDocumentElementBuilder'

/**
*
*/
export class CorvusImage implements CorvusDocumentModel {
  /**
   *
   */
  public readonly type: CorvusDocumentModelType.IMAGE

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
  public static create(properties: Readonly<CorvusImage.Properties>): CorvusImage {
    return new CorvusImage(properties)
  }

  /**
   *
   */
  private constructor(properties: Readonly<CorvusImage.Properties>) {
    this.type = CorvusDocumentModelType.IMAGE
    this.width = properties.width || undefined
    this.height = properties.height || undefined
    this.classes = Set(properties.classes)
    this.path = properties.path
    this.format = properties.format || CorvusImageFormat.fromExtension(this.path)
  }

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof CorvusImage) {
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
  export type Properties = {
    /**
    *
    */
    path: string,

    /**
    *
    */
    format?: CorvusImageFormat,

    /**
    *
    */
    width?: string | undefined,

    /**
    *
    */
    height?: string | undefined,

    /**
    *
    */
    classes?: Iterable<string> | undefined
  }

  /**
  *
  */
  export function is(element: CorvusDocumentModel | null | undefined): element is CorvusImage {
    return element && element instanceof CorvusImage
  }

  /**
  *
  */
  export function assert(element: CorvusDocumentModel | null | undefined, message?: string | undefined): asserts element is CorvusImage {
    if (element == undefined || !(element instanceof CorvusImage)) {
      throw new Error(message || 'The given element is not a corvus document image.')
    }
  }
}