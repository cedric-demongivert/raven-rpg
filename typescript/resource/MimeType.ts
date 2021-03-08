/**
*
*/
export type MimeType = string

export namespace MimeType {
  /**
  *
  */
  export const TEXT: MimeType = 'text/plain'

  /**
  *
  */
  export const BYTES: MimeType = 'application/octet-stream'

  /**
  *
  */
  export const SVG: MimeType = 'image/svg+xml'

  /**
  *
  */
  export const JPEG: MimeType = 'image/jpeg'

  /**
  *
  */
  export const PNG: MimeType = 'image/png'

  /**
  *
  */
  export const ALL: MimeType[] = [
    TEXT,
    BYTES,
    SVG,
    JPEG,
    PNG
  ]

  /**
  *
  */
  export const DEFAULT: MimeType = BYTES
}
