export type CommitAction = string

export namespace CommitAction {
  /**
  *
  */
  export const EXTRACTED: CommitAction = 'commit:extracted'

  /**
  *
  */
  export const EXTRACT_BOOKS: CommitAction = 'commit:extract-books'

  /**
  *
  */
  export const EXTRACTING_BOOKS: CommitAction = 'commit:extracting-books'

  /**
  *
  */
  export const BOOKS_EXTRACTED: CommitAction = 'commit:books-extracted'

  /**
  *
  */
  export const BOOKS_EXTRACTION_FAILURE: CommitAction = 'commit:books-extraction-failure'

  /**
  *
  */
  export const READY: CommitAction = 'commit:ready'


  /**
  *
  */
  export const ALL: CommitAction[] = [
    EXTRACTED,
    EXTRACT_BOOKS,
    EXTRACTING_BOOKS,
    BOOKS_EXTRACTED,
    BOOKS_EXTRACTION_FAILURE,
    READY
  ]
}
