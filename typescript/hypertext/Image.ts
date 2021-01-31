import { Empty } from '../Empty'

import { ImageFormat } from './ImageFormat'

import { DocumentElement } from './DocumentElement'
import { DocumentElementType } from './DocumentElementType'

/**
*
*/
export class Image implements DocumentElement {
  /**
  *
  */
  public readonly type: DocumentElementType.IMAGE

  /**
  *
  */
  public readonly format: ImageFormat

  /**
  *
  */
  public readonly path: string

  /**
  *
  */
  public constructor(properties: Image.Properties = Empty.OBJECT) {
    this.type = DocumentElementType.IMAGE
    this.path = properties.path || 'placeholder.svg'
    this.format = properties.format || ImageFormat.fromExtension(this.path)
  }

  /**
  *
  */
  public setPath(path: string): Image {
    if (this.path === path) {
      return this
    } else {
      return new Image({ ...this, path })
    }
  }

  /**
  *
  */
  public setFormat(format: ImageFormat): Image {
    if (this.format === format) {
      return this
    } else {
      return new Image({ ...this, format })
    }
  }

  /**
  *
  */
  public useExtensionFormat(): Image {
    return this.setFormat(ImageFormat.fromExtension(this.path))
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

    if (other instanceof Image) {
      return (
        other.path === this.path &&
        other.format === this.format
      )
    }

    return false
  }
}

/**
*
*/
export namespace Image {
  /**
  *
  */
  export type Properties = {
    /**
    *
    */
    format?: ImageFormat,

    /**
    *
    */
    path?: string
  }


  /**
  *
  */
  export const EMPTY: Image = new Image()

  /**
  *
  */
  export function empty(): Image {
    return EMPTY
  }

  /**
  *
  */
  export function create(properties: Properties = Empty.OBJECT): Image {
    return new Image(properties)
  }
}
