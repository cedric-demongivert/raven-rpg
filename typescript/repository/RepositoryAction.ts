export type RepositoryAction = (
  RepositoryAction.SUBSCRIBE |
  RepositoryAction.CLONE |
  RepositoryAction.EXTRACT_COMMITS |
  RepositoryAction.EXTRACT_LABELS |
  RepositoryAction.UPDATE
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
  export type CLONE = 'repository:clone'

  /**
  *
  */
  export const CLONE: CLONE = 'repository:clone'

  /**
  *
  */
  export type EXTRACT_COMMITS = 'repository:extract-commits'

  /**
  *
  */
  export const EXTRACT_COMMITS: EXTRACT_COMMITS = 'repository:extract-commits'

  /**
  *
  */
  export type EXTRACT_LABELS = 'repository:extract-labels'

  /**
  *
  */
  export const EXTRACT_LABELS: EXTRACT_LABELS = 'repository:extract-labels'

  /**
  *
  */
  export type UPDATE = 'repository:update'

  /**
  *
  */
  export const UPDATE: UPDATE = 'repository:update'

  /**
  * A list of all available actions.
  */
  export const ALL: RepositoryAction[] = [
    SUBSCRIBE,
    CLONE,
    EXTRACT_COMMITS,
    EXTRACT_LABELS,
    UPDATE
  ]
}
