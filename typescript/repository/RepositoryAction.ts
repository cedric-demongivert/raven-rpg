export type RepositoryAction = string

/**
*
*/
export namespace RepositoryAction {
  /**
  *
  */
  export const ADD: RepositoryAction = 'repository:add'

  /**
  *
  */
  export const CLONE: RepositoryAction = 'repository:clone'

  /**
  *
  */
  export const CLONING: RepositoryAction = 'repository:cloning'

  /**
  *
  */
  export const CLONED: RepositoryAction = 'repository:cloned'

  /**
  *
  */
  export const CLONING_FAILURE: RepositoryAction = 'repository:cloning-failure'

  /**
  *
  */
  export const EXTRACT_COMMITS: RepositoryAction = 'repository:extract-commits'

  /**
  *
  */
  export const EXTRACTING_COMMITS: RepositoryAction = 'repository:extracting-commits'

  /**
  *
  */
  export const COMMITS_EXTRACTED: RepositoryAction = 'repository:commits-extracted'

  /**
  *
  */
  export const COMMITS_EXTRACTION_FAILURE: RepositoryAction = 'repository:commits-extraction-failure'

  /**
  *
  */
  export const EXTRACT_LABELS: RepositoryAction = 'repository:extract-labels'

  /**
  *
  */
  export const EXTRACTING_LABELS: RepositoryAction = 'repository:extracting-labels'

  /**
  *
  */
  export const LABELS_EXTRACTED: RepositoryAction = 'repository:labels-extracted'

  /**
  *
  */
  export const LABELS_EXTRACTION_FAILURE: RepositoryAction = 'repository:labels-extraction-failure'

  /**
  *
  */
  export const READY: RepositoryAction = 'repository:ready'

  /**
  *
  */
  export const REMOVE: RepositoryAction = 'repository:remove'

  /**
  * A list of all available actions.
  */
  export const ALL: RepositoryAction[] = [
    ADD,
    CLONE,
    CLONING,
    CLONED,
    CLONING_FAILURE,
    EXTRACT_COMMITS,
    EXTRACTING_COMMITS,
    COMMITS_EXTRACTED,
    COMMITS_EXTRACTION_FAILURE,
    EXTRACT_LABELS,
    EXTRACTING_LABELS,
    LABELS_EXTRACTED,
    LABELS_EXTRACTION_FAILURE,
    READY,
    REMOVE
  ]
}
