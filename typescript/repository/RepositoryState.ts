export type RepositoryState = number

export namespace RepositoryState {
  /**
  *
  */
  export const HOLLOW: RepositoryState = 0

  /**
  *
  */
  export const CLONING_REQUESTED: RepositoryState = 1

  /**
  *
  */
  export const CLONING: RepositoryState = 2

  /**
  *
  */
  export const CLONING_FAILURE: RepositoryState = 3

  /**
  *
  */
  export const CLONED: RepositoryState = 4

  /**
  *
  */
  export const COMMITS_EXTRACTION_REQUESTED: RepositoryState = 5

  /**
  *
  */
  export const EXTRACTING_COMMITS: RepositoryState = 6

  /**
  *
  */
  export const COMMITS_EXTRACTION_FAILURE: RepositoryState = 7

  /**
  *
  */
  export const COMMITS_EXTRACTED: RepositoryState = 8

  /**
  *
  */
  export const LABELS_EXTRACTION_REQUESTED: RepositoryState = 9

  /**
  *
  */
  export const EXTRACTING_LABELS: RepositoryState = 10

  /**
  *
  */
  export const LABELS_EXTRACTION_FAILURE: RepositoryState = 11

  /**
  *
  */
  export const LABELS_EXTRACTED: RepositoryState = 12

  /**
  *
  */
  export const READY: RepositoryState = 13

  /**
  *
  */
  export const DUMPING_LABELS: RepositoryState = 14

  /**
  *
  */
  export const LABELS_DUMPING_FAILURE: RepositoryState = 15

  /**
  *
  */
  export const LABELS_DUMPED: RepositoryState = 16

  /**
  *
  */
  export const DUMPING_COMMITS: RepositoryState = 17

  /**
  *
  */
  export const COMMITS_DUMPING_FAILURE: RepositoryState = 18

  /**
  *
  */
  export const COMMITS_DUMPED: RepositoryState = 19

  /**
  *
  */
  export const DUMPING_REPOSITORY: RepositoryState = 20

  /**
  *
  */
  export const REPOSITORY_DUMPING_FAILURE: RepositoryState = 21

  /**
  *
  */
  export const REPOSITORY_DUMPED: RepositoryState = 22

  /**
  *
  */
  export const ALL: RepositoryState[] = [
    HOLLOW,
    CLONING_REQUESTED,
    CLONING,
    CLONING_FAILURE,
    CLONED,
    COMMITS_EXTRACTION_REQUESTED,
    EXTRACTING_COMMITS,
    COMMITS_EXTRACTION_FAILURE,
    COMMITS_EXTRACTED,
    LABELS_EXTRACTION_REQUESTED,
    EXTRACTING_LABELS,
    LABELS_EXTRACTION_FAILURE,
    LABELS_EXTRACTED,
    READY,
    DUMPING_LABELS,
    LABELS_DUMPING_FAILURE,
    LABELS_DUMPED,
    DUMPING_COMMITS,
    COMMITS_DUMPING_FAILURE,
    COMMITS_DUMPED,
    DUMPING_REPOSITORY,
    REPOSITORY_DUMPING_FAILURE,
    REPOSITORY_DUMPED
  ]

  /**
  *
  */
  export function toString(state: RepositoryState): string | undefined {
    switch (state) {
      case HOLLOW: return 'HOLLOW'
      case CLONING_REQUESTED: return 'CLONING_REQUESTED'
      case CLONING: return 'CLONING'
      case CLONING_FAILURE: return 'CLONING_FAILURE'
      case CLONED: return 'CLONED'
      case COMMITS_EXTRACTION_REQUESTED: return 'COMMITS_EXTRACTION_REQUESTED'
      case EXTRACTING_COMMITS: return 'EXTRACTING_COMMITS'
      case COMMITS_EXTRACTION_FAILURE: return 'COMMITS_EXTRACTION_FAILURE'
      case COMMITS_EXTRACTED: return 'COMMITS_EXTRACTED'
      case LABELS_EXTRACTION_REQUESTED: return 'LABELS_EXTRACTION_REQUESTED'
      case EXTRACTING_LABELS: return 'EXTRACTING_LABELS'
      case LABELS_EXTRACTION_FAILURE: return 'LABELS_EXTRACTION_FAILURE'
      case LABELS_EXTRACTED: return 'LABELS_EXTRACTED'
      case READY: return 'READY'
      case DUMPING_LABELS: return 'DUMPING_LABELS'
      case LABELS_DUMPING_FAILURE: return 'LABELS_DUMPING_FAILURE'
      case LABELS_DUMPED: return 'LABELS_DUMPED'
      case DUMPING_COMMITS: return 'DUMPING_COMMITS'
      case COMMITS_DUMPING_FAILURE: return 'COMMITS_DUMPING_FAILURE'
      case COMMITS_DUMPED: return 'COMMITS_DUMPED'
      case DUMPING_REPOSITORY: return 'DUMPING_REPOSITORY'
      case REPOSITORY_DUMPING_FAILURE: return 'REPOSITORY_DUMPING_FAILURE'
      case REPOSITORY_DUMPED: return 'REPOSITORY_DUMPED'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: RepositoryState): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
