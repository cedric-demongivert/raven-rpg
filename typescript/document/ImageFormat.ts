export type ImageFormat = number

export namespace ImageFormat {
  /**
  *
  */
  export type SVG = 0

  /**
  *
  */
  export const SVG: SVG = 0

  /**
  *
  */
  export const ALL: ImageFormat[] = [
    SVG
  ]

  const SVG_EXTENSION: RegExp = /\.svg$/i

  /**
  *
  */
  export function fromExtension(path: string): ImageFormat {
    if (SVG_EXTENSION.test(path)) {
      return SVG
    } else {
      throw new Error(
        'Unable to recognize the image extension used by the path "' +
        path + '", the file extension may be ill-formed or the extension ' +
        'was not registered into the available image format extension list.'
      )
    }
  }

  /**
  *
  */
  export function fromString(extension: string): ImageFormat {
    if (extension.toLowerCase().trim() === 'svg') {
      return SVG
    } else {
      throw new Error(
        'Unable to recognize the image extension from token "' +
        extension + '", the token may be ill-formed or the extension ' +
        'was not registered into the available image format extension list.'
      )
    }
  }

  /**
  *
  */
  export function toString(type: ImageFormat): string | undefined {
    switch (type) {
      case SVG: return 'SVG'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(type: ImageFormat): string {
    return '#' + type + ' (' + (toString(type) || 'undefined') + ')'
  }
}
