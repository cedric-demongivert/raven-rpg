import { RPGImageFormat } from './RPGImageFormat'

import { RPGElement } from './RPGElement'
import { RPGElementType } from './RPGElementType'

/**
*
*/
export class RPGImage implements RPGElement {
  /**
  *
  */
  public readonly type: RPGElementType.IMAGE

  /**
  *
  */
  public readonly identifier: string | undefined

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
  public readonly format: RPGImageFormat

  /**
  *
  */
  public readonly path: string

  /**
   * 
   */
  public readonly isNode: false

  /**
  *
  */
  public static create(properties: RPGImage.Properties): RPGImage {
    return new RPGImage(properties)
  }

  /**
  *
  */
  private constructor(properties: RPGImage.Properties) {
    this.type = RPGElementType.IMAGE
    this.identifier = properties.identifier || undefined
    this.width = properties.width || undefined
    this.height = properties.height || undefined
    this.path = properties.path
    this.format = properties.format || RPGImageFormat.fromExtension(this.path)
    this.isNode = false
  }

  /**
  *
  */
  public setIdentifier(identifier: string | undefined): RPGImage {
    if (this.identifier === identifier) {
      return this
    } else {
      return new RPGImage({ ...this, identifier })
    }
  }

  /**
  *
  */
  public setPath(path: string): RPGImage {
    if (this.path === path) {
      return this
    } else {
      return new RPGImage({ ...this, path })
    }
  }

  /**
  *
  */
  public setFormat(format: RPGImageFormat): RPGImage {
    if (this.format === format) {
      return this
    } else {
      return new RPGImage({ ...this, format })
    }
  }

  /**
  *
  */
  public useExtensionFormat(): RPGImage {
    return this.setFormat(RPGImageFormat.fromExtension(this.path))
  }

  /**
  *
  */

  /**
  *
  */
  public equals(other: any): boolean {
    if (other == null) return false
    if (other === this) return true

    if (other instanceof RPGImage) {
      return (
        other.identifier === this.identifier &&
        other.path === this.path &&
        other.format === this.format &&
        other.width === this.width &&
        other.height === this.height
      )
    }

    return false
  }
}

/**
*
*/
export namespace RPGImage {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    identifier?: string | undefined,

    /**
    *
    */
    format?: RPGImageFormat,

    /**
    *
    */
    path: string,

    /**
    *
    */
    width?: string | undefined,

    /**
    *
    */
    height?: string | undefined
  }

  /**
  *
  */
  export function is(element: RPGElement | null | undefined): element is RPGImage {
    return element && element instanceof RPGImage
  }
}