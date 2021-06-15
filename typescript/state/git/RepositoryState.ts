/**
 * 
 */
export type RepositoryState = (
  RepositoryState.HOLLOW |
  RepositoryState.READY
)

/**
 * 
 */
export namespace RepositoryState {
  /**
  *
  */
  export type HOLLOW = 0

  /**
  *
  */
  export const HOLLOW: HOLLOW = 0

  /**
  *
  */
  export type READY = 1

  /**
  *
  */
  export const READY: READY = 1

  /**
  *
  */
  export const ALL: RepositoryState[] = [
    HOLLOW,
    READY
  ]

  /**
  *
  */
  export function toString(state: RepositoryState): string | undefined {
    switch (state) {
      case HOLLOW: return 'HOLLOW'
      case READY: return 'READY'
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
