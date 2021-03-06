export type CorvusImageFormat = number

export namespace CorvusImageFormat {
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
  export const ALL: CorvusImageFormat[] = [
    SVG
  ]

  const SVG_EXTENSION: RegExp = /\.svg$/i

  /**
  *
  */
  export function fromExtension(path: string): CorvusImageFormat {
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
  export function fromString(extension: string): CorvusImageFormat {
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
  export function toString(type: CorvusImageFormat): string | undefined {
    switch (type) {
      case SVG: return 'SVG'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(type: CorvusImageFormat): string {
    return '#' + type + ' (' + (toString(type) || 'undefined') + ')'
  }
}
