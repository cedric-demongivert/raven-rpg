export type DocumentTreeAction = string

export namespace DocumentTreeAction {
  /**
  *
  */
  export const ADD: DocumentTreeAction = 'document-tree:add'

  /**
  *
  */
  export const CHAIN: DocumentTreeAction = 'document-tree:chain'

  /**
  *
  */
  export const HIERARCHIZE: DocumentTreeAction = 'document-tree:hierarchize'

  /**
  *
  */
  export const REMOVE: DocumentTreeAction = 'document-tree:remove'

  /**
  *
  */
  export const ALL: DocumentTreeAction[] = [
    ADD,
    CHAIN,
    HIERARCHIZE,
    REMOVE
  ]
}
