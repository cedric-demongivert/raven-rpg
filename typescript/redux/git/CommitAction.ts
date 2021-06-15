export type CommitAction = (
  CommitAction.LOAD |
  CommitAction.LOADING |
  CommitAction.LOADING_FAILURE |
  CommitAction.LOADING_SUCCESS |
  CommitAction.CONTENT |
  CommitAction.RESOURCES |
  CommitAction.DUMP
)

/**
*
*/
export namespace CommitAction {
  /**
  *
  */
  export type LOAD = 'commit:load'

  /**
  *
  */
  export const LOAD: LOAD = 'commit:load'

  /**
  *
  */
  export type LOADING = 'commit:loading'

  /**
  *
  */
  export const LOADING: LOADING = 'commit:loading'

  /**
  *
  */
  export type CONTENT = 'commit:content'

  /**
  *
  */
  export const CONTENT: CONTENT = 'commit:content'

  /**
  *
  */
  export type RESOURCES = 'commit:resources'

  /**
  *
  */
  export const RESOURCES: RESOURCES = 'commit:resources'

  /**
  *
  */
  export type LOADING_SUCCESS = 'commit:loading-success'

  /**
  *
  */
  export const LOADING_SUCCESS: LOADING_SUCCESS = 'commit:loading-success'


  /**
  *
  */
  export type LOADING_FAILURE = 'commit:loading-failure'

  /**
  *
  */
  export const LOADING_FAILURE: LOADING_FAILURE = 'commit:loading-failure'

  /**
  *
  */
  export type DUMP = 'commit:dump'

  /**
  *
  */
  export const DUMP: DUMP = 'commit:dump'

  /**
  * A list of all available actions.
  */
  export const ALL: CommitAction[] = [
    LOAD,
    LOADING,
    LOADING_SUCCESS,
    LOADING_FAILURE,
    CONTENT,
    RESOURCES,
    DUMP
  ]
}
