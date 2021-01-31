export type BookAction = string

export namespace BookAction {
  /**
  *
  */
  export const EXTRACTED: BookAction = 'book:extracted'

  /**
  *
  */
  export const EXTRACT_CONTENT: BookAction = 'book:extract-content'

  /**
  *
  */
  export const EXTRACTING_CONTENT: BookAction = 'book:extracting-content'

  /**
  *
  */
  export const CONTENT_EXTRACTED: BookAction = 'book:content-extracted'

  /**
  *
  */
  export const CONTENT_EXTRACTION_FAILURE: BookAction = 'book:content-extraction-failure'

  /**
  *
  */
  export const READY: BookAction = 'book:ready'

  /**
  *
  */
  export const ALL: BookAction[] = [
    EXTRACTED,
    EXTRACT_CONTENT,
    EXTRACTING_CONTENT,
    CONTENT_EXTRACTED,
    CONTENT_EXTRACTION_FAILURE,
    READY
  ]
}
