export type CommitAction = (
  CommitAction.EXTRACTED |
  CommitAction.EXTRACT_BOOKS |
  CommitAction.UPDATE
)

export namespace CommitAction {
  /**
  *
  */
  export type EXTRACTED = 'commit:extracted'

  /**
  *
  */
  export const EXTRACTED: EXTRACTED = 'commit:extracted'

  /**
  *
  */
  export type EXTRACT_BOOKS = 'commit:extract-books'

  /**
  *
  */
  export const EXTRACT_BOOKS: EXTRACT_BOOKS = 'commit:extract-books'

  /**
  *
  */
  export type UPDATE = 'commit:update'

  /**
  *
  */
  export const UPDATE: UPDATE = 'commit:update'


  /**
  *
  */
  export const ALL: CommitAction[] = [
    EXTRACTED,
    EXTRACT_BOOKS,
    UPDATE
  ]
}
