export type RPGElementTreeAction = string

export namespace RPGElementTreeAction {
  /**
  *
  */
  export const ADD: RPGElementTreeAction = 'document-tree:add'

  /**
  *
  */
  export const CHAIN: RPGElementTreeAction = 'document-tree:chain'

  /**
  *
  */
  export const HIERARCHIZE: RPGElementTreeAction = 'document-tree:hierarchize'

  /**
  *
  */
  export const REMOVE: RPGElementTreeAction = 'document-tree:remove'

  /**
  *
  */
  export const ALL: RPGElementTreeAction[] = [
    ADD,
    CHAIN,
    HIERARCHIZE,
    REMOVE
  ]
}
