export type RepositoryTask = (
  RepositoryTask.CLONING |
  RepositoryTask.EXTRACTING_COMMITS |
  RepositoryTask.EXTRACTING_LABELS |
  RepositoryTask.DUMPING_LABELS |
  RepositoryTask.DUMPING_COMMITS |
  RepositoryTask.DUMPING_REPOSITORY
)

export namespace RepositoryTask {
  /**
  *
  */
  export type CLONING = 0

  /**
  *
  */
  export const CLONING: CLONING = 0

  /**
  *
  */
  export type EXTRACTING_COMMITS = 1

  /**
  *
  */
  export const EXTRACTING_COMMITS: EXTRACTING_COMMITS = 1

  /**
  *
  */
  export type EXTRACTING_LABELS = 2

  /**
  *
  */
  export const EXTRACTING_LABELS: EXTRACTING_LABELS = 2

  /**
  *
  */
  export type DUMPING_LABELS = 3

  /**
  *
  */
  export const DUMPING_LABELS: DUMPING_LABELS = 3

  /**
  *
  */
  export type DUMPING_COMMITS = 4

  /**
  *
  */
  export const DUMPING_COMMITS: DUMPING_COMMITS = 4

  /**
  *
  */
  export type DUMPING_REPOSITORY = 5

  /**
  *
  */
  export const DUMPING_REPOSITORY: DUMPING_REPOSITORY = 5

  /**
  *
  */
  export const ALL: RepositoryTask[] = [
    CLONING,
    EXTRACTING_COMMITS,
    EXTRACTING_LABELS,
    DUMPING_LABELS,
    DUMPING_COMMITS,
    DUMPING_REPOSITORY
  ]

  /**
  *
  */
  export function toString(state: RepositoryTask): string | undefined {
    switch (state) {
      case CLONING: return 'CLONING'
      case EXTRACTING_COMMITS: return 'EXTRACTING_COMMITS'
      case EXTRACTING_LABELS: return 'EXTRACTING_LABELS'
      case DUMPING_LABELS: return 'DUMPING_LABELS'
      case DUMPING_COMMITS: return 'DUMPING_COMMITS'
      case DUMPING_REPOSITORY: return 'DUMPING_REPOSITORY'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: RepositoryTask): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
