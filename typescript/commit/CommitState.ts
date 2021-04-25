export type CommitState = (
  CommitState.HOLLOW |
  CommitState.READY
)

export namespace CommitState {
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
  export const DEFAULT: CommitState = HOLLOW

  /**
  *
  */
  export const ALL: CommitState[] = [
    HOLLOW,
    READY
  ]

  /**
  *
  */
  export function toString(state: CommitState): string | undefined {
    switch (state) {
      case HOLLOW: return 'HOLLOW'
      case READY: return 'READY'
      default: return undefined
    }
  }

  /**
  *
  */
  export function toDebugString(state: CommitState): string {
    return '# ' + state + ' (' + (toString(state) || 'undefined') + ')'
  }
}
