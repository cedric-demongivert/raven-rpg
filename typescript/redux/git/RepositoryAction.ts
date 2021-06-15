export type RepositoryAction = (
  RepositoryAction.SUBSCRIBE |
  RepositoryAction.LOAD |
  RepositoryAction.LOADING |
  RepositoryAction.LOADING_FAILURE |
  RepositoryAction.LOADING_SUCCESS |
  RepositoryAction.COMMITS |
  RepositoryAction.TAGS |
  RepositoryAction.VERSIONS |
  RepositoryAction.DUMP
)

/**
*
*/
export namespace RepositoryAction {
  /**
  *
  */
  export type SUBSCRIBE = 'repository:subscribe'

  /**
  *
  */
  export const SUBSCRIBE: SUBSCRIBE = 'repository:subscribe'

  /**
  *
  */
  export type LOAD = 'repository:load'

  /**
  *
  */
  export const LOAD: LOAD = 'repository:load'

  /**
  *
  */
  export type LOADING = 'repository:loading'

  /**
  *
  */
  export const LOADING: LOADING = 'repository:loading'

  /**
  *
  */
  export type COMMITS = 'repository:commits'

  /**
  *
  */
  export const COMMITS: COMMITS = 'repository:commits'

  /**
  *
  */
  export type TAGS = 'repository:tags'

  /**
  *
  */
  export const TAGS: TAGS = 'repository:tags'

  /**
  *
  */
  export type VERSIONS = 'repository:versions'

  /**
  *
  */
  export const VERSIONS: VERSIONS = 'repository:versions'

  /**
  *
  */
  export type LOADING_SUCCESS = 'repository:loading-success'

  /**
  *
  */
  export const LOADING_SUCCESS: LOADING_SUCCESS = 'repository:loading-success'


  /**
  *
  */
  export type LOADING_FAILURE = 'repository:loading-failure'

  /**
  *
  */
  export const LOADING_FAILURE: LOADING_FAILURE = 'repository:loading-failure'

  /**
  *
  */
  export type DUMP = 'repository:dump'

  /**
  *
  */
  export const DUMP: DUMP = 'repository:dump'

  /**
  * A list of all available actions.
  */
  export const ALL: RepositoryAction[] = [
    SUBSCRIBE,
    LOAD,
    LOADING,
    LOADING_SUCCESS,
    LOADING_FAILURE,
    COMMITS,
    TAGS,
    VERSIONS,
    DUMP
  ]
}
