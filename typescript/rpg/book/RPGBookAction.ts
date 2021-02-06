export type RPGBookAction = string

export namespace RPGBookAction {
  /**
  *
  */
  export const EXTRACT_CONTENT: RPGBookAction = 'book:extract-content'

  /**
  *
  */
  export const EXTRACTING_CONTENT: RPGBookAction = 'book:extracting-content'

  /**
  *
  */
  export const CONTENT_EXTRACTED: RPGBookAction = 'book:content-extracted'

  /**
  *
  */
  export const CONTENT_EXTRACTION_FAILURE: RPGBookAction = 'book:content-extraction-failure'

  /**
  *
  */
  export const READY: RPGBookAction = 'book:ready'

  /**
  *
  */
  export const ALL: RPGBookAction[] = [
    EXTRACT_CONTENT,
    EXTRACTING_CONTENT,
    CONTENT_EXTRACTED,
    CONTENT_EXTRACTION_FAILURE,
    READY
  ]
}
