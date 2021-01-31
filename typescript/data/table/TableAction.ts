export type TableAction = string

export namespace TableAction {
  /**
  *
  */
  export const ADD: TableAction = 'table:add'

  /**
  *
  */
  export const UPDATE: TableAction = 'table:update'

  /**
  *
  */
  export const REMOVE: TableAction = 'table:remove'

  /**
  *
  */
  export const CLEAR: TableAction = 'table:clear'

  /**
  * A list of all available actions.
  */
  export const ALL: TableAction[] = [
    ADD,
    UPDATE,
    REMOVE,
    CLEAR
  ]
}
